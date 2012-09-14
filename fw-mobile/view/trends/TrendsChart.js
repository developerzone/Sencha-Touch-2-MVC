Ext.define('FWMOB.view.trends.TrendsChart', {
          extend: 'Ext.Panel',
          height:350,
          width:1800,
          xtype:'chart',
         config: {
            layout: 'hbox',
            items: [{
                         xtype: 'bar',
                         width:445,
                         height:300
                  },
                 {
                         xtype: 'pie',
                        width:545,
                        height:248
                  }]
         }
});
