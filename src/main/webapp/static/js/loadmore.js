;
(function($, window, document, undefined) {
    "use strict";
    var PluginName = "loadJson";
    /* Plugin Initialize
    ------------------------------------------------------------*/
    function Plugin(elem, options) {
        this.self = this;
        this.elem = elem;
        this.$elem = $(elem);
        this.metadata = this.$elem.data("options");
        this.options = $.extend({}, $.fn[PluginName].default, this.metadata, options);
        this.data = [];
        this.firstLoad = [];
    };
    /* Plugin Prototype
    ------------------------------------------------------------*/
    $.extend(Plugin.prototype, {
        inIt: function() {
            var self = this;
            $.ajax({
                method: 'GET',
                url: self.options.url,
                dataType: 'json',
                success: function(d, msg) {
                    self.data.push(d);
                    if (self.data[0].data.length <= self.data[0].paging.limit) {
                        self.Out();
                    } else {
                        self.More();
                    }
                    self.firstLoad.push(self.data[0].data.splice(0, self.data[0].paging.limit));
                    self.options.getData(self.elem, self.firstLoad[0]);
                },
                error: function(msg) {
                    alert(msg.statusText);
                }
            });
        },
        More: function() {
            var self = this;
            var i = 0;
            $(self.options.loadBtn).click(function() {
                i += 1;
                if (self.data[0].data.length) {
                    self.firstLoad.push(self.data[0].data.splice(0, self.data[0].paging.loadItem));
                    self.options.getData(self.elem, self.firstLoad[i]);
                }
                if (self.data[0].data.length == 0) {
                    self.Out();
                }
            })
        },
        Out: function() {
            var self = this;
            $(self.options.loadBtn).hide();
        }
    });
    /* Function Initialize
    ------------------------------------------------------------*/
    $.fn[PluginName] = function(options) {
        return this.each(function() {
            new Plugin(this, options).inIt();
        })
    };
    /* Plugin Default Options
    ------------------------------------------------------------*/
    $.fn[PluginName].default = {
        url: '',
        //limit: 12,
        //loadItem: 12,
        loadBtn: '#loadMore',
        getData: function(elem, data) {
            alert("Please create getData function, data available: " + data.length);
            return false;
        }
    };
}(jQuery, window, document));