import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';
import {SymbolDp} from '../../symbolDp';
import {tr} from 'ngx-bootstrap';
import {AgGridNg2} from 'ag-grid-ng2/main';
// import '~@swimlane/ngx-datatable/release/index.css';
// import '~@swimlane/ngx-datatable/release/themes/material.css';
// import '~@swimlane/ngx-datatable/release/assets/icons.css';


HighChartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

@Component({
    selector: 'app-data-display',
    templateUrl: './data-display.component.html',
    styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

    optionsRSS: Object;
    optionsDOMDOE: Object;
    optionsRSSRSW: Object;
    rss;
    symbolGrid: any = [];
    title;
    dateTitle;
    highcharts;

    afterSetExtremes(e) {
        const date = e.target.series[0].points;
        this.dateTitle = new Date(date[date.length - 1].x).toDateString();
        console.log(this.dateTitle);
        if ((e.min && e.max)) {
             this.highcharts.charts.forEach(chart => {
                 chart.xAxis[0].setExtremes(e.min, e.max);
                 chart.showResetZoom();
             });
            if (e.userMax || e.userMIn) {
                    this.dataService.getSymbolGrid(sessionStorage.getItem('super'),
                        new Date(date[date.length - 1].x).toISOString()).subscribe(sym => this.symbolGrid = sym);
            }
        }
    }

     // returnLatestDate(e) {
     //     const date = e.target.series[0].points;
     //     this.dateTitle = new Date(date[date.length - 1].x).toDateString();
     //     return;
     // }

    redirectToUrl(e) {
        window.location.href = `https://finance.yahoo.com/quote/${e.selected[0].Ticker}`
    }


    constructor(private dataService: DataService) {
        this.title = sessionStorage.getItem('super');
        this.dataService.getRsStrongRsWeak(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res2 => {
            this.rss = res2;
            const self = this;
            this.optionsRSSRSW = {
                chart: {
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
            }
        });

        this.dataService.getRss(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res => {
            this.rss = res;
            const self = this;
            this.optionsRSS = {
                chart: {
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
                    name: 'awesome',
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
