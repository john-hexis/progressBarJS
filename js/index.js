//// <reference path="/js/data-service.js" />
//// <reference path="/js/progress-bar.js" />
"use strict";
var index = (function () {
    var instance;

    function init() {
        var pool1 = 'pool1';
        var pool2 = 'pool2';
        var pool3 = 'pool3';

        function initEvent() {
            
        }

        function initDefaultState() {
            service.ins.get(serviceURL.pbars, null
            , function(response) {
                pbar.ins.gen(pool1, response.bars, response.limit);
                var opts = [];
                for (var i = 0; i < response.bars.length; i++) {
                    opts.push('' + app.pbarID + i + '');
                }
                btnCb.ins.genCb(pool2, opts);
                btnCb.ins.genBtn(pool3, response.buttons
                , function(value) {
                    var selectedPBarID = btnCb.ins.selectedCbVal();
                    pbar.ins.setValueOnFly(selectedPBarID, value);
                });
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