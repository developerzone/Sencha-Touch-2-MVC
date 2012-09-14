 Ext.define('FWMOB.view.trends.TrendsPie', {
           extend: 'Ext.chart.Chart',
            theme: 'Demo',
            id:'piechart',
            /* layout: 'fit',*/
            iconCls: 'pie',
			height:245,
			width:248,
            xtype: 'pie',
    config: {
          store: {
                xtype: 'piestore'
            },
                shadow: false,
            animate: true,
            insetPadding: 20,
            legend: {
                position: 'right'
            },
            interactions: [
                {
                    type: 'rotate'
                }
            ],
            series: [
                {
                    type: 'pie',
                    field: 'amount',
                    showInLegend: true,
                    highlight: false,
                     listeners: {
                        'labelOverflow': function (label, item) {
                            item.useCallout = true;
                        }
                    },
                    // Example to return as soon as styling arrives for callouts
                    callouts: {
                        renderer: function (callout, storeItem) {
                            callout.label.setAttributes({
                                text: storeItem.get('category')
                            }, true);
                        },
                        filter: function () {
                            return false;
                        },
                        box: {
                            //no config here.
                        },
                        lines: {
                            'stroke-width': 2,
                            offsetFromViz: 20
                        },
                        label: {
                            font: 'italic 14px Arial'
                        },
                        styles: {
                            font: '14px Arial'
                        }
                    },
                    label: {
                        field: 'category'
                    }
                }
            ]
    }
        });
