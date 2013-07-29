Ext.define('TeShopifyExt.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'TeShopifyExt.view.NavBarLeft'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    border: false,
                    id: 'centralPanel',
                    layout: {
                        type: 'fit'
                    },
                    bodyBorder: false
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    id: 'westPanel',
                    width: 220,
                    layout: {
                        type: 'fit'
                    },
                    collapsed: false,
                    collapsible: false,
                    items: [
                        {
                            xtype: 'navbarleft',
                            bodyBorder: false
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});
