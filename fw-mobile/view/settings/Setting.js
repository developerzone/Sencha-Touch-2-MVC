/*
Ext.define('FWMOB.view.settings.Setting', {
          extend: 'Ext.Panel',
          xtype:'setting',
         config: {
            layout: 'hbox',
            items: [{
                         xtype: 'settinglist',
                        width:300
                  },{
                         xtype: 'panel',
                        width:300
                  }
            ]
         }
});
*/
Ext.define('FWMOB.view.settings.Setting', {
    extend: 'Ext.Container',
    xtype: 'mainview',

    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar'
    ],

    config: {
        fullscreen: true,

        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: [  /*{
                id: 'lnchText',
                html : 'Welcome To Settings Tab'
            },*/
            {
                id: 'mainNestedList',
                xtype : 'settinglist',
                useTitleAsBackText: false,
                docked: 'left',
                width : 250
            },/*{
                id: 'header',
                xtype : 'titlebar',
                docked: 'top',
                title : 'Settings'
            },*/

            {
                id: 'mainNavigationBar',
                xtype : 'panel',
                layout: {
                        type: 'card',
                        animation: {
                        type: 'slide',
                        direction: 'left',
                        duration: 250
                        }
                },
                title : 'Settings'
            }
        ]
    }
});
