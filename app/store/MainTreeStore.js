Ext.define('TeShopifyExt.store.MainTreeStore', {
    extend: 'Ext.data.TreeStore',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'MainTreeStore',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Shopify',
                        expanded: true,
                        children: [
                            {
                                text: 'Shops',
                                leaf: true
                            }
                        ]
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});
