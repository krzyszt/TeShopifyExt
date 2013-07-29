Ext.define('TeShopifyExt.view.NavBarLeft', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.navbarleft',

    border: false,
    margin: '50 0 0 20',
    hideCollapseTool: true,
    store: 'MainTreeStore',
    folderSort: false,
    lines: false,
    rootVisible: false,
    useArrows: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                border: false,
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
    }
});
