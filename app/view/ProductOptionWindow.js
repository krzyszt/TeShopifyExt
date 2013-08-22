/*
 * File: app/view/ProductOptionWindow.js
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

Ext.define('TeShopifyExt.view.ProductOptionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.productoptionwindow',

    height: 250,
    width: 400,
    layout: {
        type: 'fit'
    },
    title: 'Add A New Option',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    border: false,
                    id: 'ProductOptionForm',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Internal Name',
                            labelSeparator: ''
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Public Name',
                            labelSeparator: ''
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: 'Values',
                            labelSeparator: ''
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
                            text: 'Add'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});