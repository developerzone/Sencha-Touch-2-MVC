Ext.define('FWMOB.view.trends.Trends', {
          extend: 'Ext.Panel',
          xtype:'trends',
         config: {

            items: [{
                         xtype: 'chart',
                         height:300
                  },
                 {
                         xtype: 'gridpanel',
                         height:350,
                          width:1800
                  }]
         }
});
