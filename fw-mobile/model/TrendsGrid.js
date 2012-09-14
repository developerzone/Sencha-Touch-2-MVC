 Ext.define('FWMOB.model.TrendsGrid', {
            extend:'Ext.data.Model',
            config:{
                fields:[
                    {name:"txnId", type:"string"},
                    {name:"accountId", type:"string"},
                    {name:"date", type:"date", dateFormat:'m-d-Y'},
                    {name:"accountName", type:"string"},
                    {name:"accountType", type:"int"},
                    {name:"checkNumber", type:"string"},
                    {name:"description", type:"string"},
                    {name:"category", type:"string"},
                    {name:"amount", type:"float"},
                    {name:"note", type:"string"},
                    {name:"originalDescription", type:"string"},
                    {name:"categoryType", type:"string"},
                    {name:"parentId", type:"string"},
                    {name:"parent", type:"auto"},
                    {name:"isPrimarySplit", type:"boolean"},
                    {name:"isParent", type:"boolean"}
                ]
            }
        });