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

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    border: false,
                    id: 'ProductGrid',
                    store: 'ProductStore',
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 30
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
                        }
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 55,
                    items: [
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
                            scale: 'medium',
                            text: 'Add product'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onProductGridRender: function(component, eOpts) {
        component.getStore().load();
    }

});