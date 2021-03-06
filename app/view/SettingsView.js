/*
 * File: app/view/SettingsView.js
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

Ext.define('TeShopifyExt.view.SettingsView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.settingsview',

    border: false,
    id: 'SettingsView',
    margin: '0 0 0 10',
    autoDestroy: false,
    activeTab: 0,
    plain: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    layout: {
                        type: 'fit'
                    },
                    title: 'Settings',
                    tabConfig: {
                        xtype: 'tab',
                        border: false
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'ShopifyGrid',
                            store: 'WebserviceStore',
                            columns: [
                                {
                                    xtype: 'actioncolumn',
                                    width: 40,
                                    align: 'center',
                                    items: [
                                        {
                                            handler: function(view, rowIndex, colIndex, item, e) {
                                                var record = view.getStore().getAt(rowIndex);
                                                var win = Ext.widget('shopifyshopwindow');
                                                win.down('form').loadRecord(record);
                                                win.show();
                                                win.setTitle(record.get('name'));
                                            },
                                            iconCls: 'edit',
                                            tooltip: 'View Shopify Shop'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 200,
                                    dataIndex: 'name',
                                    text: 'Shop Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 300,
                                    dataIndex: 'uri',
                                    text: 'Url'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'description',
                                    text: 'Description',
                                    flex: 1
                                },
                                {
                                    xtype: 'gridcolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return (record.get('issync')) == 1 ?  '<span style="color: green;"><b>Synchronized</b></span>' : 'Unsynchronized';
                                    },
                                    width: 130,
                                    dataIndex: 'issync',
                                    text: 'Status'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'syncdate',
                                    text: 'Sync Date',
                                    format: 'Y-m-d'
                                }
                            ],
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    ui: 'footer',
                                    items: [
                                        {
                                            xtype: 'tbfill'
                                        },
                                        {
                                            xtype: 'button',
                                            margins: '0 20 0 0 ',
                                            text: 'Add Shopify Shop',
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
                            listeners: {
                                render: {
                                    fn: me.onShopifyGridRender,
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

    onButtonClick: function(button, e, eOpts) {
        var win = Ext.widget('shopifyshopwindow');
        win.show();
    },

    onShopifyGridRender: function(component, eOpts) {
        component.getStore().load();
    }

});