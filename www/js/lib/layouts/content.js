define(function(require) {
    var
        $ = require("zepto"),
        Content = function(parent) {
            var $el = $(parent.el).children(".content");

            this.parent = parent;
            this.$el = $el;
            this.el = $el.get(0);
        };

    Content.prototype.setContent = function(text) {
        this.text = text;
        $(this.el).html(text);
    };

    return Content;
});