define(function(require) {
    var
        $ = require("zepto"),
        Content = function(parent) {
            var $el = $(parent.el).children(".content");

            this.parent = parent;
            this.$el = $el;
            this.el = $el.get(0);
            console.log("this.text: ", this.text);
        };

    Content.prototype.setContent = function(text) {
        this.text = text;
        $(this.el).html(text);
        console.log(this.el);
    };

    return Content;
});