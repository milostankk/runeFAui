import {AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';


HighChartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit, OnDestroy {

    symbolGrid: any = [];
    symblGrid2: any = [];
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
                    /*                    if (chart.options.chart.name === 'DOMDOE') {
                                            this.dataService.getDomDoe(sessionStorage.getItem('super'),
                                                new Date(data[data[0].x]), new Date(data[data.length - 1].x));
                                        }*/
                }
                ind++;
            });

            this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
                new Date(data[data.length - 1].x).toISOString()).subscribe(sym => this.symbolGrid = sym);

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
        /*        this.dataService.downloadSymbolGrid(sessionStorage.getItem('super'), sessionStorage.getItem('to'))
                    .subscribe(blob => {
                        const data = new Blob([blob], {type: 'text/plain'});
                        const fileUrl = URL.createObjectURL(data);
                        const link = document.createElement('a');
                        link.href = window.URL.createObjectURL(data);
                        window.open(link.href)
                    })*/
        // this.dataService.downloadSymbolGrid(sessionStorage.getItem('super'), sessionStorage.getItem('to'))
        //     .subscribe(blob => {
        //         const link = document.createElement('a');
        //         link.href = window.URL.createObjectURL(blob);
        //         link.click();
        //     })
    }

    constructor(private dataService: DataService) {
        this.title = sessionStorage.getItem('super');
        /*this.dataService.getRsStrongRsWeak(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res2 => {
        this.rss = res2;
        const self = this;
        this.optionsRSSRSW = {
            chart: {
                reflow: false,
                name: 'awesome',
                backgroundColor: '#F2F4F8',
                renderTo: 'RSSRSW',
                zoomType: 'x'
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                }]
            },
            title: {text: 'RS Strong/Weak'},
            series: [{
                showInLegend: true,
                name: 'RsStrong',
                data: this.rss.map(function (point) {
                    return [Date.parse(point.Date), point.Quantities[0]['Value']]
                }),
            }, {
                name: 'RsWeak',
                data: this.rss.map(function (point) {
                    return [Date.parse(point.Date), point.Quantities[1]['Value']]
                })
            }],
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
        self.dateTitle = new Date(this.rss[this.rss.length - 1].Date).toDateString();
    });

    this.dataService.getRss(sessionStorage.getItem('super'),
        sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res => {
        this.rss = res;
        const self = this;
        this.optionsRSS = {
            chart: {
                reflow: false,
                name: 'awesome',
                backgroundColor: '#F2F4F8',
                renderTo: 'RSS',
                zoomType: 'x'
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                }]
            },
            title: {text: 'RSS'},
            series: [{
                showInLegend: true,
                 name: 'RSS',
                data: this.rss.map(function (point) {
                    return [Date.parse(point.Date), point.Quantities[0]['Value']]
                }),
            }],
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
        }
    });

    this.dataService.getDomDoe(sessionStorage.getItem('super'),
        sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res1 => {
        this.rss = res1;
        const self = this;
        this.optionsDOMDOE = {
            chart: {
                reflow: false,
                name: 'DOMDOE',
                backgroundColor: '#F2F4F8',
                renderTo: 'DOMDOE',
                zoomType: 'x'
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                }]
            },
            title: {text: 'DOM/DOE'},
            series: [{
                showInLegend: true,
                 name: 'DOM',
                data: this.rss.map(function (point) {
                    return [Date.parse(point.Date), point.Quantities[0]['Value']]
                }),
            }, {
                name: 'DOE',
                data: this.rss.map(function (point) {
                    return [Date.parse(point.Date), point.Quantities[1]['Value']]
                })
            }],
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
    });*/
        this.mapCharts(this.endpoints);
        this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
            sessionStorage.getItem('to')).subscribe(sym => this.symbolGrid = sym);
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


    ngOnInit() {
    }

    ngOnDestroy() {
        for (let ind = Highcharts.charts.length - 1; ind >= 0; ind--) {
            Highcharts.charts.splice(ind, 1);
        }
    }

}
