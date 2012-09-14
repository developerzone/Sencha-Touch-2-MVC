 Ext.define('FWMOB.controller.SettingController', {
          extend: 'Ext.app.Controller',
          config: {
               viewCache: [],
               refs: {
                     nav: '#mainNestedList',
                   toolbar: '#header',
                   mainview: '#mainNavigationBar',
                   lnchText:'#lnchText',
                    sourceOverlay: {
                        selector: 'sourceoverlay',
                        xtype: 'sourceoverlay',
                        autoCreate: true
                    }
               },
             control: {
                 'nav': {
                     itemtap: 'onNavTap'
                 }
             }
         },

       onNavTap: function(nestedList, list, index, target, record) {
          // this.getLnchText().hide();
           var record = list.getStore().getAt(index);
           var nav  = this.getNav();
              nav.setMasked({
                 xtype: 'loadmask',
                message: 'it is loading..Please wait for a while..',
                   indicator: true
        });
           var mainView=this.getMainview();
           nav.setDetailContainer(mainView);
            setTimeout(function () {
                    nav.unmask();
                }, 1000);

           if(record.get('text')=="Profile"){
                nav.setDetailCard(Ext.create('FWMOB.view.settings.SettingProfile'));
           }else if(record.get('text')=="Business"){
                nav.setDetailCard(Ext.create('FWMOB.view.settings.SettingBusiness'));
           }else{
               nav.setDetailCard(Ext.create('FWMOB.view.settings.SettingAlert'));
           }
       },
       onSourceTap: function() {
        var overlay = this.getSourceOverlay();
           console.log(overlay);
        overlay.show();
        overlay.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

    }
 });
