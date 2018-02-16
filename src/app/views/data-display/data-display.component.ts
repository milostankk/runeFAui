import {
    AfterContentChecked, Component, OnDestroy, OnInit,
    ViewChild, ViewEncapsulation
} from '@angular/core';
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
    styleUrls: ['./data-display.component.scss'],
    encapsulation: ViewEncapsulation.None
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
    latestDateInSeries;
    highcharts;
    green = [];
    red = [];
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
        this.latestDateInSeries = new Date(data[data.length - 1].x);
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
        if (this.latestDateInSeries) {
            fileUrl += '&date=' + this.latestDateInSeries.toISOString();
        }
        window.location.href = fileUrl;
    }

    downloadSectorGrid() {
        let fileUrl = this.dataService.rootUrl + '/DownloadSectorGrid?super=' + encodeURIComponent(sessionStorage.getItem('super'));
        if (this.latestDateInSeries) {
            fileUrl += '&date=' + this.latestDateInSeries.toISOString();
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
                    self.latestDateInSeries = new Date(res[res.length - 1].Date);
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

    // colorTableRows(rows) {
    //     const numOfShades = Math.floor(rows.length / 2);
    //     const colorScale = 95;
    //     let colorStart = 160;
    //     let colorStart2 = 160;
    //     const hueStep = Math.round((colorScale / numOfShades) * 100) / 100;
    //     const median = this.calculateMedian(rows);
    //     // const green = [];
    //     // const red = [];
    //     const self = this;
    //     rows.forEach(function (x) {
    //         if (x.RelativeStrength >= median) {
    //             self.green.push({ticker: x.Ticker, rs: x.RelativeStrength, rgb: {r: 0, g: Math.round(colorStart += hueStep), b: 0 }})
    //         } if (x.RelativeStrength <= median) {
    //             self.red.push({ticker: x.Ticker, rs: x.RelativeStrength, rgb: {r: Math.round(colorStart2 += hueStep), g: 0, b: 0 }})
    //         }
    //     });
    //     console.log('red: ' + this.red);
    //     console.log('green: ' + this.green);
    //     console.log('rows: ' + rows);
    //     console.log('median is: ' + median);
    //     console.log('num of shades is: ' + numOfShades);
    //     console.log('hue increment/decrement is :' + hueStep);
    // }



    rowClass(row) {
        if (!row.length) {
            return
        }
        const numOfShades = Math.floor(row.length / 2);
        const colorScale = 95;
        let colorStart = 160;
        let colorStart2 = 160;
        const hueStep = Math.round((colorScale / numOfShades) * 100) / 100;
        const median = this.calculateMedian(row);
        const self = this;
        const coloredRows = [];
        // row.forEach(function (x) {
        //     if (x.RelativeStrength >= median) {
        //         coloredRows.push({ticker: x.Ticker, rs: x.RelativeStrength, rgb: {r: 0, g: Math.round(colorStart += hueStep), b: 0 }})
        //     } if (x.RelativeStrength <= median) {
        //         coloredRows.push({ticker: x.Ticker, rs: x.RelativeStrength, rgb: {r: Math.round(colorStart2 += hueStep), g: 0, b: 0 }})
        //     }
        // });
        for (let i = 0; i < row.length; i++) {
            if (row[i].RelativeStrength >= median) {
                row[i]['rgb'] = {r: 0, g: Math.round(colorStart += hueStep), b: 0 }
            } else if (row[i].RelativeStrength <= median) {
                row[i]['rgb'] = {r: Math.round(colorStart2 += hueStep), g: 0, b: 0 }
            }
        }
        console.log(row)
        // for (let i = 0; i < coloredRows.length; i++) {
        //    // console.log(coloredRows[i].rgb);
        //     for (let j = 0; j < row.length; j++){
        //         if (coloredRows[i].Ticker === row[j].Ticker) {
        //             console.log(coloredRows[i])
        //            // return {'myClass': coloredRows[i].rgb }
        //         }
        //     }
        // }
    }

     calculateMedian(rows) {
        rows.sort( function(a, b) {return a.RelativeStrength - b.RelativeStrength} );
        const half = Math.floor(rows.length / 2);
        if (rows.length % 2) {
            return rows[half].RelativeStrength;
        } else {
            return (rows[half - 1].RelativeStrength + rows[half].RelativeStrength) / 2.0;
        }
    }

    ngAfterContentChecked() {
        if (!this.tableDataFound) {
            if (this.table !== undefined) {
                this.tableDataFound = true;
               // this.colorTableRows(this.table.rows);
                this.rowClass(this.table.rows)
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
