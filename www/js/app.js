
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

    require("store2");

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
                var
                    list = d.querySelector(".list"),
                    updateData = function(){
                        var
                            url = "http://pipes.yahoo.com/pipes/pipe.run?_id=6772986aed90886ca3e30b9f672c3e15&_render=json",
                            pubTime =  store("horoscopePubTime"),
                            horoscopeData = (function (){
                                var retVal = store("horoscopeData");

                                if (!retVal) {
                                    retVal = [
                                        {title: "aries", content: ""},
                                        {title: "taurus", content: ""},
                                        {title: "gemini", content: ""},
                                        {title: "cancer", content: ""},
                                        {title: "leo", content: ""},
                                        {title: "virgo", content: ""},
                                        {title: "libra", content: ""},
                                        {title: "scorpio", content: ""},
                                        {title: "sagittarius", content: ""},
                                        {title: "capricorn", content: ""},
                                        {title: "aqarius", content: ""},
                                        {title: "pisces", content: ""}
                                    ];
                                }

                                return retVal;
                            }()),
                            mustUpdateData = function(pubTime) {
                                var
                                    now = Date.now(),
                                    day = 1000 * 60 * 60 * 24,
                                    retVal = false;

                                if (null === pubTime) {
                                    retVal = true;
                                } else if (pubTime) {
                                    retVal = ((now - pubTime) > day ? true : false);
                                }

                                return retVal;
                            };

                        if (mustUpdateData(pubTime)) {
                            $.getJSON(url, function(data) {
                                var
                                    content = "",
                                    pubTime = null;

                                if ((data && data.value)) {
                                        pubTime = (new Date(data.value.pubDate)).getTime();
                                        horoscopeData.forEach(function(el, index) {
                                            el.content = data.value.items[index].content;
                                            list.add(el);
                                        });

                                        store("horoscopeData", horoscopeData);
                                        store("horoscopePubTime", pubTime);
                                }
                            });
                        } else {
                            horoscopeData.forEach(function(el, index) {
                                list.add(el);
                            });
                        }
                    };

                updateData();

                list.nextView = 'x-view.details';
            },
            
            details = $('.details').get(0);

        buildHoroscopeList();

        details.render = function(item) {
            $('.title', this).text(item.get('title'));
        };
    });
});