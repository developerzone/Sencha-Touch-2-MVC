Ext.define('FWMOB.view.trends.TrendsGridPanel', {
          extend: 'Ext.Panel',
          xtype:'gridpanel',
         config: {
            layout: 'fit',
            items: [{
                         xtype: 'grid',
                         width:445,
                         height:800
                  }]
         }
});
