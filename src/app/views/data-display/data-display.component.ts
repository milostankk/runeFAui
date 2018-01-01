import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';
import {SymbolDp} from '../../symbolDp';
import {tr} from 'ngx-bootstrap';


HighChartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

    options: Object;
    options1: Object;
    options2: Object;
    rss;
    symbolGrid;
    title;
    dateTitle;
    testChart;
    highcharts;
    //
    // column = '';
    // direction: number;

    // loadChart(e) {
    //     this.testChart = e;
    // }


    get(e) {
            this.highcharts.charts.forEach(chart => {
                chart.xAxis[0].setExtremes(e.min, e.max);
                chart.showResetZoom();
                this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
                    new Date(e.max).toISOString()).subscribe(sym => this.symbolGrid = sym);
            });
    }

    // sort(property, bool) {
    //     bool = !bool;
    //     this.column = property;
    //     this.direction = bool ? 1 : -1;
    // }

    redirectToUrl(ticker) {
        window.location.href = `https://finance.yahoo.com/quote/${ticker}`
    }

    constructor(private dataService: DataService) {
        this.title = sessionStorage.getItem('super');
        this.dataService.getRsStrongRsWeak(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res2 => {
            this.rss = res2;
            const self = this;
            this.options2 = {
                chart: {
                    name: 'awesome',
                    backgroundColor: '#F2F4F8',
                    renderTo: 'chart2',
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
                        self.dateTitle = new Date(point.Date).toDateString();
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
                        afterSetExtremes: this.get.bind(self)
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

        this.dataService.getRss(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res => {
            this.rss = res;
            const self = this;
            this.options = {
                chart: {
                    name: 'awesome',
                    backgroundColor: '#F2F4F8',
                    renderTo: 'chart',
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
                        afterSetExtremes: this.get.bind(self)
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
            this.options1 = {
                chart: {
                    name: 'awesome',
                    backgroundColor: '#F2F4F8',
                    renderTo: 'chart1',
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
                        afterSetExtremes: this.get.bind(self)
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

        this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
            sessionStorage.getItem('to')).subscribe(sym => this.symbolGrid = sym);
        Highcharts.dateFormat('Month: %m Day: %d Year: %Y', 20, false);
        const exportFormats = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
        exportFormats.pop();
        this.highcharts = Highcharts;
    }



    ngOnInit() {
    }

}
