Ext.Loader.setConfig({
    enabled : true,
    paths   : {
        'Ext.ux.touch.grid' : '../../js/touch-charts/Ext.ux.touch.grid'
    }
});

Ext.require([
    'Ext.ux.touch.grid.View',
    'Ext.ux.touch.grid.feature.Feature',
    'Ext.ux.touch.grid.feature.Sorter'
]);
Ext.application({
    name:'FWMOB',
    appFolder:'../../js/fw-mobile',
   controllers:['AccountController','SettingController'],
    views:['trends.TrendsPie','trends.TrendsBar','trends.TrendsGrid','trends.TrendsChart','trends.Trends','trends.TrendsChartTab','trends.TrendsGridPanel',
            'accounts.AccountList','help.Help','settings.SettingList','settings.Setting','settings.SettingProfile','settings.SettingBusiness','settings.SettingAlert','Loading'],
            /* 'accounts.AccountList','help.Help'],*/
    models:['TrendsPie','TrendsBar','TrendsGrid','AccountModel','SettingModel'],
    stores:['TrendsPie','TrendsBar','TrendsGrid','AccountStore','SettingStore'],

    launch:function () {

                
        var mainPanel=Ext.create('Ext.Panel', {
             fullscreen:true,
             height:1000,
              width:1800,
             items: [
                     {
                         xtype:'charttab',
                          height:850,
                          width:1800
                     }
                    ]
         });

 /*     Ext.Viewport.add({
            xtype: 'image',
            src: "../../js/fw-mobile/resources/piechart_transparent_overlay.png",
            height:650,
            width:500,
            top: 68,
           left: 615
        });*/
    }
});