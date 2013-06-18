
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
                        {title: "aries", content: "", date: new Date()},
                        {title: "taurus", content: "", date: new Date()},
                        {title: "gemini", content: "", date: new Date()},
                        {title: "cancer", content: "", date: new Date()},
                        {title: "leo", content: "", date: new Date()},
                        {title: "virgo", content: "", date: new Date()},
                        {title: "libra", content: "", date: new Date()},
                        {title: "scorpio", content: "", date: new Date()},
                        {title: "sagittarius", content: "", date: new Date()},
                        {title: "capricorn", content: "", date: new Date()},
                        {title: "aqarius", content: "", date: new Date()},
                        {title: "pisces", content: "", date: new Date()}
                    ],
                    url = "http://pipes.yahoo.com/pipes/pipe.run?_id=6772986aed90886ca3e30b9f672c3e15&_render=json";

                $.getJSON(url, function(data) {
                    var
                        content = "",
                        pubTime = null;

                    if (data && data.value) {
                        horoscopeData.forEach(function(el, index) {
                            el.content = data.value.items[index].content;
                            list.add(el);
                        });
                    }
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