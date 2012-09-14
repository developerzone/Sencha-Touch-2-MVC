 Ext.define('FWMOB.store.AccountStore', {
          extend: 'Ext.data.Store',
          xtype: 'accountstore',
          config: {
                model: 'FWMOB.model.AccountModel',
                autoLoad: true,
                proxy : {
                type : 'ajax',
                url:'../../js/fw-mobile/data/data.json',
                reader : {
                    type : 'json',
                    rootProperty:'contacts'
                }
            }
          }
   });