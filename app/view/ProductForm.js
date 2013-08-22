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
                                    allowBlank: false,
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
                                            labelSeparator: ' ',
                                            name: 'price'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Compare at price',
                                            labelAlign: 'top',
                                            labelSeparator: ' ',
                                            name: 'compare_at_price'
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
                                            labelSeparator: ' ',
                                            name: 'sku'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            fieldLabel: 'Barcode',
                                            labelAlign: 'top',
                                            labelSeparator: ' ',
                                            name: 'barcode'
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
                                    hidden: true,
                                    id: 'OptionsContainer',
                                    margin: '10 0 0 0',
                                    style: 'border: 1px solid #ededed; backgroundColor: #fff;',
                                    layout: {
                                        align: 'stretch',
                                        padding: '5 10 10 10',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            margin: '10 0 0 0',
                                            style: 'borderBottom: 1px solid #ededed;',
                                            layout: {
                                                padding: '5 0 0 5',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'displayfield',
                                                    margin: '0 20 0 0',
                                                    width: 200,
                                                    labelAlign: 'top',
                                                    labelSeparator: ' ',
                                                    name: 'option1',
                                                    listeners: {
                                                        render: {
                                                            fn: me.onDisplayfieldRender,
                                                            scope: me
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: 'displayfield',
                                                    flex: 1,
                                                    margin: '0 60',
                                                    listeners: {
                                                        render: {
                                                            fn: me.onDisplayfieldRender1,
                                                            scope: me
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'Option1Container',
                                            style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                                            layout: {
                                                padding: 10,
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    margin: 0,
                                                    width: 200,
                                                    labelAlign: 'top',
                                                    labelSeparator: ' ',
                                                    name: 'option1',
                                                    displayField: 'name',
                                                    queryMode: 'local',
                                                    store: 'ProductOptionStore',
                                                    valueField: 'id',
                                                    listeners: {
                                                        render: {
                                                            fn: me.onComboboxRender,
                                                            scope: me
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 5',
                                                    padding: 0,
                                                    width: 45,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 45,
                                                            text: 'Add',
                                                            listeners: {
                                                                click: {
                                                                    fn: me.onButtonClick1,
                                                                    scope: me
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    margin: '0 0 0 20',
                                                    emptyText: 'Enter any number of options',
                                                    listeners: {
                                                        keydown: {
                                                            fn: me.onTextfieldKeydown,
                                                            scope: me
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 0 0 10',
                                                    padding: 0,
                                                    width: 30,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 30,
                                                            iconCls: 'bin'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            hidden: true,
                                            id: 'Option2Container',
                                            style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                                            layout: {
                                                padding: 10,
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    width: 200,
                                                    labelAlign: 'top',
                                                    labelSeparator: ' ',
                                                    name: 'option2',
                                                    displayField: 'name',
                                                    queryMode: 'local',
                                                    store: 'ProductOptionStore',
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 5',
                                                    padding: 0,
                                                    width: 45,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 45,
                                                            text: 'Add',
                                                            listeners: {
                                                                click: {
                                                                    fn: me.onButtonClick11,
                                                                    scope: me
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    margin: '0 0 0 20',
                                                    emptyText: 'Enter any number of options'
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 0 0 10',
                                                    padding: 0,
                                                    width: 30,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 30,
                                                            iconCls: 'bin'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            hidden: true,
                                            id: 'Option3Container',
                                            style: 'borderBottom: 1px solid #ededed; backgroundColor: #fafafa;',
                                            layout: {
                                                padding: 10,
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'combobox',
                                                    width: 200,
                                                    labelAlign: 'top',
                                                    labelSeparator: ' ',
                                                    name: 'option3',
                                                    displayField: 'name',
                                                    queryMode: 'local',
                                                    store: 'ProductOptionStore',
                                                    valueField: 'id'
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 5',
                                                    padding: 0,
                                                    width: 45,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 45,
                                                            text: 'Add',
                                                            listeners: {
                                                                click: {
                                                                    fn: me.onButtonClick111,
                                                                    scope: me
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    flex: 1,
                                                    margin: '0 0 0 20',
                                                    emptyText: 'Enter any number of options'
                                                },
                                                {
                                                    xtype: 'toolbar',
                                                    margin: '0 0 0 10',
                                                    padding: 0,
                                                    width: 30,
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            width: 30,
                                                            iconCls: 'bin'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'AddOptionContainer',
                                            margin: '10 0 10 0',
                                            layout: {
                                                type: 'fit'
                                            },
                                            items: [
                                                {
                                                    xtype: 'toolbar',
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            scale: 'medium',
                                                            text: 'Add Another Option',
                                                            listeners: {
                                                                click: {
                                                                    fn: me.onButtonClick,
                                                                    scope: me
                                                                }
                                                            }
                                                        },
                                                        {
                                                            xtype: 'tbtext',
                                                            text: 'e.g. Color, Size, Material'
                                                        }
                                                    ]
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

    onDisplayfieldRender: function(component, eOpts) {
        component.setValue('<b>Option Name</b/>');
    },

    onDisplayfieldRender1: function(component, eOpts) {
        component.setValue('<b>Option Values</b/>');
    },

    onComboboxRender: function(component, eOpts) {
        component.getStore().load();
    },

    onButtonClick1: function(button, e, eOpts) {
        Ext.widget('productoptionwindow').show();
    },

    onTextfieldKeydown: function(textfield, e, eOpts) {

    },

    onButtonClick11: function(button, e, eOpts) {
        Ext.widget('productoptionwindow').show();
    },

    onButtonClick111: function(button, e, eOpts) {
        Ext.widget('productoptionwindow').show();
    },

    onButtonClick: function(button, e, eOpts) {
        var cont1 = Ext.getCmp('Option1Container');
        var cont2 = Ext.getCmp('Option2Container');
        var cont3 = Ext.getCmp('Option3Container');
        if (cont2.isHidden() && cont3.isHidden()) {
            cont2.show();
        } else if ((cont2.isHidden() === false) && cont3.isHidden()){
            cont3.show();
            Ext.getCmp('AddOptionContainer').hide();
        }
    },

    onFilefieldChange: function(filefield, value, eOpts) {

    },

    onProductFormBeforeRender: function(component, eOpts) {
        var record = Ext.create('TeShopifyExt.model.ProductModel');
        component.getForm().loadRecord(record);
    }

});