 Ext.define('FWMOB.store.TrendsPie', {
           extend: 'Ext.data.Store',
                xtype: 'piestore',
      config: {
                model: 'FWMOB.model.TrendsPie',
                autoLoad:true,
                proxy : {
                        type : 'ajax',
                        url:'http://localhost:8080/quickenweb/jsf/dynamic/trends/getTrendsCategoriesRequestSpending',
                        reader : {
                            type : 'xml',
                            record : 'category'
                        }
                }
      }
});