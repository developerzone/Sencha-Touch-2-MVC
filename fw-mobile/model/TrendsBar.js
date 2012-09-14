 Ext.define('FWMOB.model.TrendsBar', {
           extend: 'Ext.data.Model',
            config: {
                fields : [{
                name : 'name',
                type : 'string',
                mapping : '@period'
                }, {
                name : 'income',
                type : 'int',
                mapping : '@income'
                }, {
                name : 'spend',
                type : 'int',
                mapping : '@spent'
                },{
                name : 'budgetAmount',
                type : 'int',
                defaultValue:'-1',
                mapping : '@budgetAmount'
                }]
            }
        });