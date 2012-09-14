 Ext.define('FWMOB.store.TrendsGrid', {
          extend: 'Ext.data.Store',
           xtype:'gridstore',
           config:{
                    model:'FWMOB.model.TrendsGrid',
                    sorters:[
                        {property:'date', direction:'DESC'}
                    ],
                    autoLoad:true,
                    proxy:{
                        type:'ajax',
                        url:'http://localhost:8080/quickenweb/jsf/dynamic/ajax/getAllTransactions',
                        reader:{
                            type:'json',
                            rootProperty:'rows'
                        }
                    }
           }
 });