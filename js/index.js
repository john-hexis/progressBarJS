//// <reference path="/js/data-service.js" />
//// <reference path="/js/progress-bar.js" />
"use strict";
var index = (function () {
    var instance;

    function init() {
        var pool = 'pool';

        function initEvent() {
            
        }

        function initDefaultState() {
            service.ins.get(serviceURL.pbars, null
            , function(response) {
                pbar.ins.gen(pool, response.bars);
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
                instance = new init();
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