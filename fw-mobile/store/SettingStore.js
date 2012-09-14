/* Ext.define('FWMOB.store.SettingStore', {
    extend: 'Ext.data.TreeStore',
    config: {
        model: 'FWMOB.model.SettingModel',
       *//* autoLoad :true,
        data:data*//*
        defaultRootProperty: 'items',
        root: data
    }
});*/
  Ext.define('FWMOB.store.SettingStore', {
          extend: 'Ext.data.TreeStore',
          xtype: 'settingstore',
          config: {
                model: 'FWMOB.model.SettingModel',
                autoLoad: true,
                proxy : {
                    type : 'ajax',
                    url:'../../js/fw-mobile/data/settingdata.json',
                    reader : {
                        type : 'json',
                        rootProperty:'items'
                    }
                }/*,
               listeners : {
                    itemtap: function (obj, idx, target){
                         alert(obj);
                    }

                }*/
          }

   });
