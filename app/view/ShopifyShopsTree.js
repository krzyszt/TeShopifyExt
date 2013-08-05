/*
 * File: app/view/ShopifyShopsTree.js
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

Ext.define('TeShopifyExt.view.ShopifyShopsTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.shopifyshopstree',

    border: false,
    id: 'ShopifyShopsTree',
    margin: '0 0 0 20',
    bodyBorder: false,
    hideCollapseTool: true,
    hideHeaders: true,
    store: 'ShopifyShopsTreeStore',
    displayField: 'name',
    folderSort: false,
    lines: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            root: {
                name: 'Shopify Shops',
                expanded: true
            },
            viewConfig: {
                border: false
            },
            listeners: {
                itemcontextmenu: {
                    fn: me.onTreepanelItemContextMenu,
                    scope: me
                }
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
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
            ]
        });

        me.callParent(arguments);
    },

    onTreepanelItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        if ( record.get('leaf') === true){
            var name = record.get('name');
            Ext.widget('addshopmenu').showAt(e.getX(), e.getY());
            var mi = Ext.ComponentQuery.query('addshopmenu menuitem[text="Edit Shopify Shop"]')[0];
            mi.setText('Edit ' + name);
            e.preventDefault();
        } 
    },

    onButtonClick: function(button, e, eOpts) {
        var win = Ext.widget('shopifyshopwindow');
        win.show();
    }

});