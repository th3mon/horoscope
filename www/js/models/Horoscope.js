"use strict";

define([
    "underscore",
    "backbone",
    "require"
], function(_, Backbone, require) {
    var Horoscope = Backbone.Model.extend({
        initialize: function(image, content){
            if (image) {
                this.image = image;
            }

            if (content) {
                this.content = content;
            }
        }
    });

    return Horoscope;
});