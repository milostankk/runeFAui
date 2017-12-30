import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import * as Highcharts from 'highcharts';
import * as HighChartsExporting from 'highcharts-exporting';
import * as HighchartsOfflineExporting from 'highcharts-export-csv';
import {SymbolDp} from '../../symbolDp';


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
    array: any[];
    processed_json: any[];

    constructor(private dataService: DataService) {
        this.dataService.getRsStrongRsWeak(sessionStorage.getItem('super'),
            sessionStorage.getItem('from'), sessionStorage.getItem('to')).subscribe(res2 => {
            this.rss = res2;
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
                        return [Date.parse(point.Date), point.Quantities[0]['Value']]
                    }),
                }, {
                    name: 'RsWeak',
                    data: this.rss.map(function (point) {
                        return [Date.parse(point.Date), point.Quantities[1]['Value']]
                    })
                }],
                xAxis: {
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
                    showInLegend: false,
                     name: 'RSS',
                    data: this.rss.map(function (point) {
                        return [Date.parse(point.Date), point.Quantities[0]['Value']]
                    }),
                }],
                xAxis: {
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

        this.dataService.getSymbolGrid(sessionStorage.getItem('super')).subscribe(sym => this.symbolGrid = sym);
        Highcharts.dateFormat('Month: %m Day: %d Year: %Y', 20, false);
        const exportFormats = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
        exportFormats.pop();
    }



    ngOnInit() {

    }

}
