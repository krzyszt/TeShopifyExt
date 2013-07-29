//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    stores: [
        'MainTreeStore'
    ],
    views: [
        'MyViewport'
    ],
    autoCreateViewport: true,
    name: 'TeShopifyExt'
});
