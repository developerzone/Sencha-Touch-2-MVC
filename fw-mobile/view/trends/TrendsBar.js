var colors = ['url(#gradientId1)', 'url(#gradientId2)'];
Ext.define('FWMOB.view.trends.TrendsBar', {
          extend: 'Ext.chart.Chart',
         /*layout: 'fit',*/
           iconCls: 'bar',
           theme: 'Demo',
           maximum: 500,
           id:'bar123',
           xtype:'bar',
           //grid : true,
           gradients : [{
               id : 'gradientId1',
               angle : 270,
               stops : {
                   0 : {
                       color : '#BED6A2'
                   },
                   20 : {
                       color : '#B3CA99'
                   },
                   100 : {
                       color : '#BED6A2'
                   }
               }
           }, {
               id : 'gradientId2',
               angle : 270,
               stops : {
                   0 : {
                       color : '#2B74C3'
                   },
                   40 : {
                       color : '#6FA3DB'
                   },
                   100 : {
                       color : '#A5C8ED'
                   }
               }
           }],
           config: {
             store: {
                   xtype: 'barstore'
               },

           animate: true,
           shadow: false,

           axes: [
               {
                   type: 'Numeric',
                   position: 'bottom',
                   fields: ['income','spend'],
                   label: {
                       renderer : function (v) {
                                   return String("<b>"+v).replace("/", '\n');
                               },
                               fill : '#696969',
                               font : '12px Verdana'
                   },
                   title: 'Number of Hits',
                   minimum: 0
               },
               {
                   type: 'Category',
                   position: 'bottom',
                   fields: ['name'],
                  title: '',
                   label : {
                       /*renderer : function (v) {
                           console.log(String(v).replace("/", '\n'));
                           return String(v).replace("/", '\n');
                       },*/
                       fill : '#696969',
                       font : '12px Verdana'
                   }
               }
           ],
           series: [
               {
                   type: 'column',
                   groupGutter : -20,
                   xPadding : 10,
                   xField: 'name',
                   yField: ['income','spend'],
                   axis: 'left',
                   highlight: true,
                   renderer: function(sprite, record, attr, index, store) {
                         var color;
                        if(Ext.getCmp("bar123")._series.first()._yField.length!=2){
                               if(Ext.getCmp("bar123")._series.first()._yField=='spend'){
                               console.log("in");
                                    color = 'url(#gradientId1)';
                               }else{
                                      color = 'url(#gradientId2)';
                               }
                        }else{
                              if(index%2==0){
                                 color = 'url(#gradientId1)';
                              }else{
                                 color = 'url(#gradientId2)';
                              }
                       }

                       return Ext.apply(attr, {
                           fill: color
                       });
                   }
               }
           ]
}
});


