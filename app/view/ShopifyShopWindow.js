/*
 * File: app/view/ShopifyShopWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TeShopifyExt.view.ShopifyShopWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.shopifyshopwindow',

    border: 0,
    height: 500,
    id: 'UserWindow1',
    width: 600,
    layout: {
        type: 'fit'
    },
    title: 'Shopify Shop',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    id: 'ShopifyForm',
                    padding: 20,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    url: '/purchase/order/create',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    fieldLabel: 'Shopify Shop Name',
                                    labelAlign: 'top',
                                    name: 'name',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    fieldLabel: 'Shopify Shop Url',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te',
                                    name: 'uri',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 20 0 0',
                                    fieldLabel: 'Api Key',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te',
                                    name: 'apikey',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 20 0 0',
                                    fieldLabel: 'Shared Secret',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te',
                                    name: 'sharedsecret'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '0 20 0 0',
                                    fieldLabel: 'Password',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te',
                                    name: 'password'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'textareafield',
                                    flex: 2,
                                    margin: '0 20 0 0 ',
                                    fieldLabel: 'Description',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te',
                                    name: 'description',
                                    fieldStyle: 'x-form-field-te'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    flex: 1,
                                    margins: '0 20 0 0 ',
                                    labelAlign: 'top',
                                    labelClsExtra: 'x-form-item-label-te'
                                }
                            ]
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            margins: '0 20 0 0 ',
                            labelAlign: 'top',
                            labelClsExtra: 'x-form-item-label-te',
                            name: 'id',
                            value: 0
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            margins: '0 20 0 0 ',
                            labelAlign: 'top',
                            labelClsExtra: 'x-form-item-label-te',
                            name: 'application'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            text: 'Save',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick1,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            margin: '0 20',
                            text: 'Close',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick1: function(button, e, eOpts) {
        var panel = Ext.getCmp('ShopifyForm');
        var form = panel.getForm();
        if (form.isValid()) {
            panel.setLoading('Saving ... ');
            var id = panel.down('hiddenfield[name="id"]').getValue();
            var url = '';                    
            if ( id > 0) {
                url = '/shopify/webservice/update';
            } else {
                url = '/shopify/webservice/create';
            } 
            form.submit({
                url: url,
                success: function(form,action){
                    panel.setLoading(false);
                    Ext.StoreMgr.lookup('WebserviceStore').reload();
                },
                failure: function(form, action){
                    panel.setLoading(false);
                    var msg  = action.result.msg; 
                    Ext.Msg.show({
                        msg: msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });

                }
            });
        } else {
            panel.setLoading(false);
            Ext.Msg.show({
                msg: 'Invalid data.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }    
    },

    onButtonClick: function(button, e, eOpts) {
        button.up('window').close();
        Ext.StoreMgr.lookup('ShopifyShopsTreeStore').reload();
    }

});