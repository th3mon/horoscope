
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    var
        d = document,
        g = window;
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the layouts
    require('layouts/layouts');

    // Write your app here.

    function formatDate(d) {
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
     }

    // Passing a function into $ delays the execution until the
    // document is ready
    $(function() {
        var
            buildHoroscopeList = function() {
                var list = d.querySelector(".list"),
                    horoscopeData = [
                        {title: "aries", content: "content goes here", date: new Date()},
                        {title: "taurus", content: "content goes here", date: new Date()},
                        {title: "gemini", content: "content goes here", date: new Date()},
                        {title: "cancer", content: "content goes here", date: new Date()},
                        {title: "leo", content: "content goes here", date: new Date()},
                        {title: "virgo", content: "content goes here", date: new Date()},
                        {title: "libra", content: "content goes here", date: new Date()},
                        {title: "scorpio", content: "content goes here", date: new Date()},
                        {title: "sagittarius", content: "content goes here", date: new Date()},
                        {title: "capricorn", content: "content goes here", date: new Date()},
                        {title: "aqarius", content: "content goes here", date: new Date()},
                        {title: "pisces", content: "content goes here", date: new Date()}
                    ];

                horoscopeData.forEach(function(el) {
                    list.add(el);
                });

                list.nextView = 'x-view.details';
            },
            
            details = $('.details').get(0);

        buildHoroscopeList();

        details.render = function(item) {
            $('.title', this).text(item.get('title'));
        };
    });
});