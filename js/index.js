//// <reference path="/js/data-service.js" />

var index = (function () {
    var instance;

    function init() {
        
        function initEvent() {
            
        }

        function initDefaultState() {
            
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
    index.ins.initEvent();
    index.ins.initDefaultState();
});