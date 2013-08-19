/*
 * File: app/view/MyViewport.js
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

Ext.define('TeShopifyExt.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'TeShopifyExt.view.NavBarLeft',
        'TeShopifyExt.view.ShopifyShopsTree'
    ],

    border: true,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    border: false,
                    height: 36,
                    id: 'northPanel',
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            border: false,
                            ui: 'header',
                            items: [
                                {
                                    xtype: 'button',
                                    margin: '0 20',
                                    text: 'TeShopify'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    border: false,
                    id: 'centralPanel',
                    layout: {
                        type: 'fit'
                    },
                    bodyBorder: false
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    id: 'westPanel',
                    style: 'border: 1px solid #ededed;',
                    width: 220,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyBorder: false,
                    collapsed: false,
                    collapsible: false,
                    items: [
                        {
                            xtype: 'navbarleft',
                            border: false,
                            margin: '20 0 0 0',
                            bodyBorder: false
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: '100 0 0 0',
                            layout: {
                                align: 'stretch',
                                pack: 'end',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    margin: '10 0 5 20',
                                    boxLabel: 'My Shopify Shops',
                                    listeners: {
                                        change: {
                                            fn: me.onCheckboxfieldChange,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'shopifyshopstree'
                        },
                        {
                            xtype: 'container',
                            height: 20
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        if (newValue === true) {
            Ext.getCmp('ShopifyShopsTree').show();
        } else {
            Ext.getCmp('ShopifyShopsTree').hide();
        }
    }

});