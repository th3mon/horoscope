"use strict";

define([
    "underscore",
    "backbone",
    "require",
    "../models/Horoscope"
], function(_, Backbone, require, Horoscope) {
    var Horoscopes = Backbone.Collection.extend({
        model: Horoscope
    });

    return Horoscopes;
});