/*
 * File: app/store/ProductOptionStore.js
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

Ext.define('TeShopifyExt.store.ProductOptionStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ProductOptionStore',
            data: [
                {
                    id: 0,
                    name: 'Title',
                    position: 1
                },
                {
                    id: 1,
                    name: 'Color',
                    position: 2
                },
                {
                    id: 2,
                    name: 'Size',
                    position: 3
                }
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'position',
                    type: 'int'
                }
            ]
        }, cfg)]);
    }
});