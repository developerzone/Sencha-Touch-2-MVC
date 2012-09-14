Ext.define('FWMOB.view.accounts.AccountList', {
           extend: 'Ext.List',
           alias:'widget.accountlist',
           fullscreen: true,
           id: 'accountlist',
           config:{
                disableSelection:true,
               store:'AccountStore',
               itemTpl:'{first_name} {last_name}',
                items:[/*{
                    xtype:'toolbar',
                    docked:'bottom',
                    title:'Account List'
                },*/{
                    xtype:'toolbar',                                       //  bottom toolbar
                    docked:'top',
                    items:[{
                        xtype: 'searchfield',                          //  here is the searchfield  
                        itemId:'contact_search',
                        id:'contact_search',                         //   we will be using this id in the controller
                        placeHolder: 'Search Contacts'
                    }]
                }]
            }
});
