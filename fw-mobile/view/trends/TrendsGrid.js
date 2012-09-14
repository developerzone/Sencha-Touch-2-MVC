 Ext.define('FWMOB.view.trends.TrendsGrid', {
           extend: 'Ext.ux.touch.grid.View',
     xtype:'grid',
     config: {
         layout:'fit',
          store: {
                xtype: 'gridstore'
            },
            plugins    : [
                {
                    xclass : 'Ext.plugin.ListPaging'
                },
                {
                    xclass : 'Ext.plugin.PullRefresh'
                }
            ],
            features   : [
                {
                    ftype    : 'Ext.ux.touch.grid.feature.Sorter',
                    launchFn : 'initialize'
                }
            ],
            columns   : [
                {
                    header    : 'Account Name',
                    dataIndex : 'accountName',
                    style     : 'padding-left: 1em;',
                    width     : '20%',
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Category',
                    dataIndex : 'category',
                    style     : 'text-align: center;',
                    width     : '15%',
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Amount',
                    dataIndex : 'amount',
                    cls       : 'centered-cell redgreen-cell',
                    width     : '15%'
                }
            ]
     }
        });