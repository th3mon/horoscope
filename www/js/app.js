
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
                        {title: "aries", desc: "content goes here", date: new Date()},
                        {title: "taurus", desc: "content goes here", date: new Date()},
                        {title: "gemini", desc: "content goes here", date: new Date()},
                        {title: "cancer", desc: "content goes here", date: new Date()},
                        {title: "leo", desc: "content goes here", date: new Date()},
                        {title: "virgo", desc: "content goes here", date: new Date()},
                        {title: "libra", desc: "content goes here", date: new Date()},
                        {title: "scorpio", desc: "content goes here", date: new Date()},
                        {title: "sagittarius", desc: "content goes here", date: new Date()},
                        {title: "capricorn", desc: "content goes here", date: new Date()},
                        {title: "aqarius", desc: "content goes here", date: new Date()},
                        {title: "pisces", desc: "content goes here", date: new Date()}
                    ];

                horoscopeData.forEach(function(el) {
                    list.add(el);
                });

                list.nextView = 'x-view.details';
            };

        buildHoroscopeList();

        // List view
        // var list = $('.list').get(0);
        // list.add({ title: 'Cook yummy food',
        //            desc: 'COOK ALL THE THINGS',
        //            date: new Date() });
        // list.add({ title: 'Make things',
        //            desc: 'Make this look like that',
        //            date: new Date(12, 9, 5) });
        // list.add({ title: 'Move stuff',
        //            desc: 'Move this over there',
        //            date: new Date(12, 10, 1) });
        // list.add({ title: 'Cook yummy food',
        //            desc: 'COOK ALL THE THINGS',
        //            date: new Date() });
        // list.add({ title: 'Make things',
        //            desc: 'Make this look like that',
        //            date: new Date(12, 9, 5) });

        // list.nextView = 'x-view.details';

        // Detail view
        var details = $('.details').get(0);
        details.render = function(item) {
            $('.title', this).text(item.get('title'));
        };
    });
});