define(function(require) {
    var
        $ = require("zepto"),
        Desc = function(parent) {
            var $el = $(parent.el).children(".desc");

            this.parent = parent;
            this.$el = $el;
            this.el = $el.get(0);
            console.log(this.text);
        };

    Desc.prototype.setDesc = function(text) {
        console.log(this.el);
    };

    return Desc;
});