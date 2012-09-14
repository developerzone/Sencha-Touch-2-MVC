 Ext.define('FWMOB.model.TrendsPie', {
           extend: 'Ext.data.Model',
           config: {
               fields : [{
                    name : 'color',
                    type : 'string'
                },
                {
                    name : 'hueNumber',
                    type : 'string',
                    mapping : '@hueNumber'
                },{
                    name : 'category',
                    type : 'string',
                    mapping : '@label'
                }, {
                    name : 'amount',
                    type : 'int',
                    mapping : '@amount'
                }, {
                    name : 'percent',
                    type : 'string'
                }]
           }
        });