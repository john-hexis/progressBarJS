//// <reference path="/js/data-service.js" />
//// <reference path="/js/progress-bar.js" />
"use strict";
var index = (function () {
    var instance;

    function init() {
        var pool1 = 'pool1';

        function initEvent() {
            
        }

        function initDefaultState() {
            service.ins.get(serviceURL.pbars, null
            , function(response) {
                pbar.ins.gen(pool1, response.bars, response.limit);
            }
            , function(error) {
                console.log(error);
            });
        }

        return {
            initEvent: initEvent,
            initDefaultState: initDefaultState
        };
    }

    return {
        ins: (function () {
            if (instance === null || instance === undefined) {
                instance = init();
            }
            return instance;
        })()
    };
})();

//Running Code
document.addEventListener("DOMContentLoaded", function(event) { 
    index.ins.initDefaultState();
    index.ins.initEvent();
});