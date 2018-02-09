import {AfterContentChecked, Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';
import {GroupService} from '../../group.service';


HighChartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit, OnDestroy, AfterContentChecked {

    @ViewChild ('tbl') table;
    tableDataFound = false;
    symbolGrid: any = [];
    sectorGrid: any = [];
    selectedIndex: string;
    selectedSector: string;
    plotSectorStrength: any;
    plotSectorStrengthOptions: string[] = [];
    superType: string;
    title;
    dateTitle;
    highcharts;
    endpoints = [
        {endPoint: '/GetMaDigest', title: 'Diffusion 10', optional: {param: 'maLength', value: '10'}},
        {endPoint: '/GetMaDigest', title: 'Diffusion 20', optional: {param: 'maLength', value: '20'}},
        {endPoint: '/GetMaDigest', title: 'Diffusion 50', optional: {param: 'maLength', value: '50'}},
        {endPoint: '/GetMaDigest', title: 'Diffusion 200', optional: {param: 'maLength', value: '200'}},
        {endPoint: '/GetRss', title: 'RSS'},
        {endPoint: '/GetRsStrongRsWeak', title: 'RS Strong/Weak'},
        {endPoint: '/GetDomDoe', title: 'DOM/DOE'},
        {endPoint: '/GetSuper', title: 'Super Group'}];
    options: any[] = [];


    afterSetExtremes(e) {
        if (e.dontPropagate) {
            return;
        }
        const data = e.target.series[0].points;
        this.dateTitle = new Date(data[data.length - 1].x).toDateString();
        if ((e.min && e.max)) {
            let ind = 0;
            this.highcharts.charts.forEach(chart => {
                if (e.userMin || e.userMax) {
                    chart.showResetZoom();
                }
                if (ind !== e.target.chart.index) {
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, undefined, {dontPropagate: true});
                }
                ind++;
            });

            this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
                new Date(data[data.length - 1].x).toISOString()).subscribe(sym => this.symbolGrid = sym);

            if (this.superType !== 'Sector') {
                this.dataService.getSectorGrid(sessionStorage.getItem('super'),
                    new Date(data[data.length - 1].x).toISOString()).subscribe(sym => this.sectorGrid = sym);
            }
        }
    }

    redirectToUrl(e) {
        window.open(`https://finance.yahoo.com/quote/${e.selected[0].Ticker}`, '_blank');
    }


    downloadSymbolGrid() {
        let fileUrl = this.dataService.rootUrl + '/DownloadSymbolGrid?super=' + encodeURIComponent(sessionStorage.getItem('super'));
        const toDate = sessionStorage.getItem('to');
        if (toDate) { // TODO
            fileUrl += '&date=' + toDate.toString();
        }
        window.location.href = fileUrl;
    }

    constructor(private dataService: DataService, private groupService: GroupService) {
        this.title = sessionStorage.getItem('super');
        this.mapCharts(this.endpoints);
        this.superType = sessionStorage.getItem('superType') ? sessionStorage.getItem('superType') : 'Index';

        dataService.getSymbolGrid(sessionStorage.getItem('super'),
            sessionStorage.getItem('to')).subscribe(sym => this.symbolGrid = sym);

        if (this.superType !== 'Sector') {
            this.selectedIndex = sessionStorage.getItem('super');
            groupService.getSectors().subscribe(data => this.plotSectorStrengthOptions = data);
            dataService.getSectorGrid(sessionStorage.getItem('super'),
                sessionStorage.getItem('to')).subscribe(sym => this.sectorGrid = sym);
        } else {
            groupService.getIndices().subscribe(data => this.plotSectorStrengthOptions = data);
            this.selectedSector = sessionStorage.getItem('super');
        }

        Highcharts.dateFormat('Month: %m Day: %d Year: %Y', 20, false);
        Highcharts.getOptions().exporting.buttons.contextButton.menuItems.pop();
        this.highcharts = Highcharts;
    }

    mapCharts(ep) {
        for (const endPoint of ep) {
            this.dataService.getChart(endPoint.endPoint, sessionStorage.getItem('super'),
                sessionStorage.getItem('from'), sessionStorage.getItem('to'), endPoint.optional)
                .subscribe(data => {
                    const res: any = data;
                    const self = this;
                    const series: any[] = [];
                    for (const quant of res[0].Quantities) {
                        series.push({
                            showInLegend: true,
                            name: quant.Type,
                            data: res.map(function (point) {
                                return [Date.parse(point.Date), point.Quantities[res[0].Quantities.indexOf(quant)]['Value']]
                            }),
                        })
                    }
                    const option = {
                        chart: {
                            reflow: false,
                            name: endPoint.title,
                            backgroundColor: '#F2F4F8',
                            renderTo: endPoint.title,
                            zoomType: 'x'
                        },
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 800
                                },
                            }]
                        },
                        title: {text: endPoint.title},
                        series: series,
                        xAxis: {
                            events: {
                                afterSetExtremes: this.afterSetExtremes.bind(self)
                            },
                            type: 'datetime',
                            ordinal: false,
                            labels: {
                                format: '{value:%Y-%b-%e}'
                            },
                            dateTimeLabelFormats: {
                                minute: '%H:%M',
                                hour: '%H:%M',
                                day: '%e. %b',
                                month: '%b \'%y',
                                year: '%Y'
                            }
                        }
                    };
                    this.options[ep.indexOf(endPoint)] = ({option: option, endpoint: endPoint});
                    self.dateTitle = new Date(res[res.length - 1].Date).toDateString();
                }, err => {
                    alert(err);
                });
        }
    }

    getPlotSectorStrength() {
        if (this.plotSectorStrength && this.plotSectorStrength.series && this.plotSectorStrength.series.length) {
            Highcharts.charts.splice(Highcharts.charts.length - 1, 1);
        }
        this.dataService.getPlotSectorStrength(this.selectedIndex, this.selectedSector,
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(data => {
            const res: any = data;
            const self = this;
            const series: any[] = [];
            if (!res[0]) {
                alert('No tickers of that sector found.');
                return;
            }
            for (const quant of res[0].Quantities) {
                series.push({
                    showInLegend: true,
                    name: quant.Type,
                    data: res.map(function (point) {
                        return [Date.parse(point.Date), point.Quantities[res[0].Quantities.indexOf(quant)]['Value']]
                    }),
                })
            }
            const option = {
                chart: {
                    reflow: false,
                    name: 'Plot Sector Strength',
                    backgroundColor: '#F2F4F8',
                    renderTo: 'Plot Sector Strength',
                    zoomType: 'x'
                },
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 800
                        },
                    }]
                },
                title: {text: `${this.selectedSector} against ${this.selectedIndex}`},
                series: series,
                xAxis: {
                    events: {
                        afterSetExtremes: this.afterSetExtremes.bind(self)
                    },
                    type: 'datetime',
                    ordinal: false,
                    labels: {
                        format: '{value:%Y-%b-%e}'
                    },
                    dateTimeLabelFormats: {
                        minute: '%H:%M',
                        hour: '%H:%M',
                        day: '%e. %b',
                        month: '%b \'%y',
                        year: '%Y'
                    }
                }
            };
            this.plotSectorStrength = option;
            self.dateTitle = new Date(res[res.length - 1].Date).toDateString();
        }, err => {
            alert(err);
        });
    }

    colorTableRows(rows) {
        const hueNum = Math.floor(rows.length / 2);
        let minVal = Number.POSITIVE_INFINITY;
        let maxVal = Number.NEGATIVE_INFINITY;
        let tmp;
        let total = 0;
        for (let i = rows.length - 1; i >= 0; i--) {
            total += rows[i].RelativeStrength;
            tmp = rows[i].RelativeStrength;
            if (tmp < minVal) { minVal = Math.round(tmp * 100) / 100}
            if (tmp > maxVal) {maxVal = Math.round(tmp * 100) / 100}
        }
        const hueStep = Math.round((160 / hueNum) * 100) / 100;
        const avg = Math.round((total / rows.length) * 100) / 100;
        console.log(avg);
        console.log(hueStep);
        console.log(maxVal);
        console.log(minVal);
        console.log(rows);
        console.log(hueNum);
        console.log(total);
    }

    ngAfterContentChecked() {
        if (!this.tableDataFound) {
            if (this.table !== undefined) {
                this.tableDataFound = true;
                this.colorTableRows(this.table.rows);
            }
        }
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        for (let ind = Highcharts.charts.length - 1; ind >= 0; ind--) {
            Highcharts.charts.splice(ind, 1);
        }
    }

}
