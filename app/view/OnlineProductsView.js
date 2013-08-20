/*
 * File: app/view/OnlineProductsView.js
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

Ext.define('TeShopifyExt.view.OnlineProductsView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.onlineproductsview',

    requires: [
        'TeShopifyExt.view.ProductForm'
    ],

    border: false,
    id: 'OnlineProductsView',
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    bodyBorder: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 52,
                    style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                    items: [
                        {
                            xtype: 'button',
                            margin: '0 0 0 20',
                            iconCls: 'tags',
                            scale: 'medium',
                            text: 'Products',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            id: 'ShopifyButton',
                            margin: '0 0 0 10',
                            iconCls: 'cart',
                            scale: 'large',
                            text: 'Shopify',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick2,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            hidden: true,
                            id: 'OnlineProductButton',
                            margin: '0 0 0 5',
                            scale: 'large',
                            text: 'Product'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'ProductSyncButton',
                            scale: 'medium',
                            text: 'Sync',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick1,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    border: 1,
                    id: 'OnlineProductsViewCard',
                    style: 'borderTop: 1px solid #ededed; backgroundColor: #fafafa;',
                    layout: {
                        type: 'card'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'OnlineProductsGrid',
                            store: 'OnlineProductStore',
                            selModel: Ext.create('Ext.selection.CheckboxModel', {

                            }),
                            columns: [
                                {
                                    xtype: 'actioncolumn',
                                    width: 40,
                                    align: 'center',
                                    items: [
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                var card = Ext.getCmp('OnlineProductsViewCard');
                                                card.getLayout().setActiveItem(1);
                                                var form = Ext.ComponentQuery.query('productform')[0];
                                                form.loadRecord(record);
                                                Ext.getCmp('OnlineProductButton').setText(record.get('title'));
                                                Ext.getCmp('OnlineProductButton').show();
                                                Ext.getCmp('ProductSyncButton').hide();
                                                Ext.getCmp('ShopifyButton').setDisabled(false);
                                            },
                                            icon: '/resources/css/img/edit.png',
                                            tooltip: 'Edit Product'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'Product',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'product_type',
                                    text: 'Type',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'vendor',
                                    text: 'Vendor',
                                    flex: 1
                                }
                            ],
                            listeners: {
                                itemdblclick: {
                                    fn: me.onProductGridItemDblClick,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            autoScroll: true,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            bodyBorder: false,
                            items: [
                                {
                                    xtype: 'productform',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick: function(button, e, eOpts) {
        var main = Ext.getCmp('centralPanel');
        main.removeAll();
        var panel = Ext.widget('productsview');
        main.add(panel);
    },

    onButtonClick2: function(button, e, eOpts) {
        var card = Ext.getCmp('OnlineProductsViewCard');
        card.getLayout().setActiveItem(0);
        Ext.getCmp('OnlineProductButton').hide();
        Ext.getCmp('ProductSyncButton').show();
        Ext.getCmp('ShopifyButton').setDisabled(true);
    },

    onButtonClick1: function(button, e, eOpts) {

    },

    onProductGridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var card = Ext.getCmp('OnlineProductsViewCard');
        card.getLayout().setActiveItem(1);
        var form = Ext.ComponentQuery.query('productform')[0];
        form.loadRecord(record);
        Ext.getCmp('OnlineProductButton').setText(record.get('title'));
        Ext.getCmp('OnlineProductButton').show();
        Ext.getCmp('ProductSyncButton').hide();
        Ext.getCmp('ShopifyButton').setDisabled(false);
    }

});