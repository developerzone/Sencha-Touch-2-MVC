/*var detailContainer = Ext.create('Ext.Container', {
    layout: 'card'
});*/
Ext.define('FWMOB.view.settings.SettingList', {
       extend: 'Ext.NestedList',
        xtype:'settinglist',
        id:'settingId',
        alias:'widget.settingId',
        config: {
             store: {
                xtype: 'settingstore'
             },
             listener:{
                painted:function   ( cmp,  eOpts ) {
                    console.log("loaded");
                }
            }
        }

});
