/*
Ext.define('FWMOB.view.settings.Setting', {
          extend: 'Ext.Panel',
          xtype:'setting',
         config: {
            layout: 'hbox',
            items: [{
                         xtype: 'settinglist',
                        width:300
                  },{
                         xtype: 'panel',
                        width:300
                  }
            ]
         }
});
*/
Ext.define('FWMOB.view.settings.SettingProfile', {
 
        extend: 'Ext.Panel',

        requires: [
            'Ext.form.Panel',
            'Ext.form.FieldSet',
            'Ext.field.Number',
            'Ext.field.Spinner',
            'Ext.field.Password',
            'Ext.field.Email',
            'Ext.field.Url',
            'Ext.field.DatePicker',
            'Ext.field.Select',
            'Ext.field.Hidden',
            'Ext.field.Radio',
            'Ext.field.Slider',
            'Ext.field.Toggle',
            'Ext.field.Search'
        ],

        config: {
            activeItem: 0,
            tabBar: {
                // docked: 'bottom',
                ui: 'neutral',
                layout: {
                    pack: 'center'
                }
            },
            items: [
                {
                    title: 'Basic',
                    xtype: 'formpanel',
                    id: 'basicform',
                    iconCls: 'refresh',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Personal Info',
                            instructions: 'Please enter the information above.',
                            defaults: {
                                labelWidth: '35%'
                            },
                            items: [
                                {
                                    xtype         : 'textfield',
                                    name          : 'name',
                                    label         : 'Name',
                                    placeHolder   : 'Tom Roy',
                                    autoCapitalize: true,
                                    required      : true,
                                    clearIcon     : true
                                },
                                {
                                    xtype: 'passwordfield',
                                    name : 'password',
                                    label: 'Password'
                                },
                                {
                                    xtype      : 'emailfield',
                                    name       : 'email',
                                    label      : 'Email',
                                    placeHolder: 'me@sencha.com',
                                    clearIcon  : true
                                },
                                {
                                    xtype      : 'urlfield',
                                    name       : 'url',
                                    label      : 'Url',
                                    placeHolder: 'http://sencha.com',
                                    clearIcon  : true
                                },
                                {
                                    xtype      : 'spinnerfield',
                                    name       : 'spinner',
                                    label      : 'Spinner',
                                    minValue   : 0,
                                    maxValue   : 10,
                                    increment  : 1,
                                    cycle      : true
                                },
                                {
                                    xtype: 'checkboxfield',
                                    name : 'cool',
                                    label: 'Cool'
                                },
                                {
                                    xtype: 'datepickerfield',
                                    destroyPickerOnHide: true,
                                    name : 'date',
                                    label: 'Start Date',
                                    value: new Date(),
                                    picker: {
                                        yearFrom: 1990
                                    }
                                },
                                {
                                    xtype: 'selectfield',
                                    name : 'rank',
                                    label: 'Rank',
                                    options: [
                                        {
                                            text : 'Master',
                                            value: 'master'
                                        },
                                        {
                                            text : 'Journeyman',
                                            value: 'journeyman'
                                        },
                                        {
                                            text : 'Apprentice',
                                            value: 'apprentice'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    name : 'bio',
                                    label: 'Bio'
                                }
                            ]
                        }
                    ]
                }
            ]
        }


    });
