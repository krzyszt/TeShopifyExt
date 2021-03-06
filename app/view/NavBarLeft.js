/*
 * File: app/view/NavBarLeft.js
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

Ext.define('TeShopifyExt.view.NavBarLeft', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.navbarleft',

    ui: 'header',
    bodyBorder: true,
    hideCollapseTool: true,
    store: 'NavTreeStore',
    folderSort: false,
    lines: false,
    rootVisible: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                rootVisible: false,
                listeners: {
                    itemclick: {
                        fn: me.onViewItemClick,
                        scope: me
                    }
                }
            }
        });

        me.callParent(arguments);
    },

    onViewItemClick: function(dataview, record, item, index, e, eOpts) {
        var main = Ext.getCmp('centralPanel');
        main.removeAll();
        var text = record.get('text');
        var newtext = text.toString();
        var l = newtext.replace(" ", "");
        var dest = l.toLowerCase() + 'view';
        var panel = Ext.widget(dest);
        main.add(panel);
    }

});