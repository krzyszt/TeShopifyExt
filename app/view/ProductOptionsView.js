/*
 * File: app/view/ProductOptionsView.js
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

Ext.define('TeShopifyExt.view.ProductOptionsView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.productoptionsview',

    border: false,
    id: 'ProductOptionsView',
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
                                    fn: me.onButtonClick21,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            margin: '0 0 0 5',
                            scale: 'large',
                            text: 'Options'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            margin: '0 20 0 0 ',
                            scale: 'medium',
                            text: 'Create Option',
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
                            title: 'Existing Options',
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    store: 'ProductOptionStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'name',
                                            text: 'Name'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'code',
                                            text: 'Code'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'type',
                                            text: 'Type'
                                        }
                                    ],
                                    listeners: {
                                        render: {
                                            fn: me.onGridpanelRender,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            title: 'Existing Relationships'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonClick21: function(button, e, eOpts) {
        var main = Ext.getCmp('centralPanel');
        main.removeAll();
        var panel = Ext.widget('productsview');
        main.add(panel);
    },

    onButtonClick: function(button, e, eOpts) {
        Ext.widget('productoptionwindow').show();
    },

    onGridpanelRender: function(component, eOpts) {
        component.getStore().load();
    }

});