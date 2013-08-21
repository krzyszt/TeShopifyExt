/*
 * File: app/view/ProductForm.js
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

Ext.define('TeShopifyExt.view.ProductForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.productform',

    border: false,
    id: 'ProductForm',
    autoScroll: true,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    bodyBorder: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                    layout: {
                        align: 'stretch',
                        padding: '0 20 20 0',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 300,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    width: 40
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            html: '<h3>Product Details</h3>'
                                        },
                                        {
                                            xtype: 'container',
                                            html: '<span>Write a name and description, and provide a type and vendor to categorize this product.</span>'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: 40
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: '20 0 0 0',
                                    fieldLabel: 'Product Name',
                                    labelAlign: 'top',
                                    labelSeparator: ' ',
                                    name: 'title',
                                    emptyText: 'eg. Unicorn crest short sleeve tree'
                                },
                                {
                                    xtype: 'textareafield',
                                    flex: 1,
                                    margin: '10 0 0 0 ',
                                    fieldLabel: 'Description',
                                    labelAlign: 'top',
                                    labelSeparator: ' ',
                                    name: 'body_html'
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: '0 20 0 0',
                                            fieldLabel: 'Product Type',
                                            labelAlign: 'top',
                                            labelSeparator: ' ',
                                            name: 'product_type'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Vendor',
                                            labelAlign: 'top',
                                            labelSeparator: ' ',
                                            name: 'vendor'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '0 20 20 0',
                    style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 300,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    width: 40
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            html: '<h3>Inventory & variants</h3>'
                                        },
                                        {
                                            xtype: 'container',
                                            html: '<span>Manage inventory, and configure the options for selling this product.</span>'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: 40
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: '0 20 0 0',
                                            fieldLabel: 'Price',
                                            labelAlign: 'top',
                                            labelSeparator: ' '
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Compare at price',
                                            labelAlign: 'top',
                                            labelSeparator: ' '
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: '0 20 0 0',
                                            fieldLabel: 'SKU',
                                            labelAlign: 'top',
                                            labelSeparator: ' '
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Barcode',
                                            labelAlign: 'top',
                                            labelSeparator: ' '
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'Charge taxes',
                                            checked: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    items: [
                                        {
                                            xtype: 'checkboxfield',
                                            boxLabel: 'This product has multiple options',
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
                                    xtype: 'container',
                                    height: 70,
                                    hidden: true,
                                    id: 'OptionsContainer',
                                    margin: '10 0 0 0',
                                    style: 'border: 1px solid #ededed; backgroundColor: #fff;',
                                    layout: {
                                        align: 'stretch',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            flex: 1,
                                            margin: '10 0 0 0',
                                            layout: {
                                                align: 'stretch',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    margin: '0 20 0 0',
                                                    fieldLabel: 'Option 1',
                                                    labelAlign: 'top',
                                                    labelSeparator: ' '
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    margin: '0 20 0 0',
                                                    fieldLabel: 'Option 2',
                                                    labelAlign: 'top',
                                                    labelSeparator: ' '
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    fieldLabel: 'Option 3',
                                                    labelAlign: 'top',
                                                    labelSeparator: ' '
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: '0 20 20 0',
                    style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: 300,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    width: 40
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            html: '<h3>Images</h3>'
                                        },
                                        {
                                            xtype: 'container',
                                            html: '<span>Upload images of this product.</span>'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: 40
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'container',
                                    margin: '10 0 0 0',
                                    items: [
                                        {
                                            xtype: 'filefield',
                                            margin: '20 20 0 0',
                                            buttonText: 'Choose Files ',
                                            listeners: {
                                                change: {
                                                    fn: me.onFilefieldChange,
                                                    scope: me
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Label',
                    name: 'id'
                }
            ],
            listeners: {
                beforerender: {
                    fn: me.onProductFormBeforeRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        if ( newValue === true) { Ext.getCmp('OptionsContainer').show();} else { Ext.getCmp('OptionsContainer').hide();} 
    },

    onFilefieldChange: function(filefield, value, eOpts) {

    },

    onProductFormBeforeRender: function(component, eOpts) {
        var record = Ext.create('TeShopifyExt.model.ProductModel');
        component.getForm().loadRecord(record);
    }

});