/*
 * File: app/view/ProductsView.js
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

Ext.define('TeShopifyExt.view.ProductsView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productsview',

    border: false,
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
                    dock: 'top',
                    border: 1,
                    height: 52,
                    items: [
                        {
                            xtype: 'button',
                            margin: '0 0 0 20',
                            iconCls: 'tags',
                            scale: 'large',
                            text: 'Products'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            margin: 0,
                            scale: 'medium',
                            text: 'Export'
                        },
                        {
                            xtype: 'button',
                            scale: 'medium',
                            text: 'Import'
                        },
                        {
                            xtype: 'button',
                            scale: 'medium',
                            text: 'Manage Inventory'
                        },
                        {
                            xtype: 'button',
                            margin: '0 20 0 0 ',
                            scale: 'medium',
                            text: 'Add product',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    style: 'borderTop: 1px solid #ededed;',
                    activeTab: 0,
                    plain: true,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'All Products',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    border: false,
                                    id: 'ProductGrid',
                                    store: 'ProductStore',
                                    columns: [
                                        {
                                            xtype: 'actioncolumn',
                                            width: 40,
                                            align: 'center',
                                            items: [
                                                {
                                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                                        var main = Ext.getCmp('centralPanel');
                                                        main.removeAll();
                                                        var panel = Ext.widget('productwindow');
                                                        main.add(panel);
                                                        panel.down('form').loadRecord(record);
                                                        Ext.getCmp('ProductButton').setText(record.get('title'));
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
                                        render: {
                                            fn: me.onProductGridRender,
                                            scope: me
                                        },
                                        itemdblclick: {
                                            fn: me.onProductGridItemDblClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Custom Search'
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
        var panel = Ext.widget('productwindow');
        main.add(panel);
    },

    onProductGridRender: function(component, eOpts) {
        component.getStore().load();
    },

    onProductGridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var main = Ext.getCmp('centralPanel');
        main.removeAll();
        var panel = Ext.widget('productwindow');
        main.add(panel);
        panel.down('form').loadRecord(record);
        Ext.getCmp('ProductButton').setText(record.get('title'));
    }

});