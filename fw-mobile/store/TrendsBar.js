 Ext.define('FWMOB.store.TrendsBar', {
          extend: 'Ext.data.Store',
          xtype: 'barstore',
          config: {
                model: 'FWMOB.model.TrendsBar',
                autoLoad: true,
                proxy : {
                type : 'ajax',
                url:'http://localhost:8080/quickenweb/jsf/dynamic/trends/getCategoryTotalsByMonth',
                reader : {
                    type : 'xml',
                    record:'transactionHistoryItem'
                }
            },
           listeners : {
                    load : function (store) {
                        var count = store.getCount() - 6;
                        if (store.getCount() > 6) {
                            for (i = 1; i < count + 1; i++) {
                                store.removeAt(count - i);
                            }
                        }
                    }

                }
          }
   });