Ext.define('FWMOB.view.trends.TrendsChartTab', {
          extend: 'Ext.tab.Panel',
          xtype:'charttab',
         config: {
            items: [{
                        title:'Trends',
                         xtype: 'trends'
                  },{
                        title:'Accounts',
                        xtype:'accountlist',
                        height:800
                  },{
                        title:'Settings',
                        xtype:'mainview',
                         height:800
                  },{
                        title:'Help',
                        xtype:'help',
                        height:800
                  }]
         }
});
