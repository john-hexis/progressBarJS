"use strict";
var btnCb = (function() {
    var instance;

    function init() {
        function genBtn(id) {
            
        }

        function genCb(id) {
            
        }

        return {
            genBtn: genBtn
            , genCb: genCb
        }
    }

    return {
        ins: (function() {
            instance = init();
        })()
    };
})();