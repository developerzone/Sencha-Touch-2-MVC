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
Ext.define('FWMOB.view.settings.SettingBusiness', {
    extend: 'Ext.Container',

       config: {
           layout: {
               type : 'vbox',
               pack : 'center',
               align: 'stretch'
           },
           cls   : 'card1',
           defaults: {
               xtype: 'container',
               flex : 1,
               layout: {
                   type : 'hbox',
                   align: 'middle'
               },
               defaults: {
                   xtype : 'button',
                   flex  : 1,
                   margin: 10
               }
           },
           items: [
               
               {
                   items: Ext.os.deviceType.toLowerCase() == "phone" ? [
                       {ui: 'confirm', text: 'Confirm'},
                       {ui: 'confirm-round', text: 'Round'},
                       {ui: 'confirm-small', text: 'Small'}
                   ] : [
                       {ui: 'confirm', text: 'Confirm'},
                       {ui: 'confirm-round', text: 'Round'},
                       {ui: 'confirm-small', text: 'Small'},
                       {ui: 'back', text: 'Back'}
                   ]
               }
           ]
       }
   });
        