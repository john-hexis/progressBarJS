//// <reference path="data-service.js" />
"use strict";
var pbar = (function () {
    var instance;

    function init() {
        var ID = 'pbar';
        var pBarsID = 'div.progress-bar';
        var barValID = 'div.bar-value';
        var barTextID = 'p.bar-text';

        var selector = function (param) {
            return document.querySelectorAll('' + pBarsID + '' + param + '')[0];
        };
        var selectPBars = function(id) {
            return selector('#' + id + '');
        };
        var selectBarVal = function(id) {
            return selector('#' + id + ' ' + barValID + '');
        };
        var selectBarTxt = function(id) {
            return selector('#' + id + ' ' + barVabarTextIDlID + '');
        };

        var setBarValue = function (id, value, limit) {
            try {
                var currValue = selector(id).getAttribute('value') + value;
                var bar = selectBarVal(id);
                var text = selectBarTxt(id);

                if(currValue > 100) {
                    bar.style.width = '100%';
                    bar.style.backgroundColor = '#ff8686 !important';
                }
                else if (currValue < 0) {
                    bar.style.width = '0%';
                    bar.style.backgroundColor = 'inherit';
                }
                else {
                    bar.style.width = '' + value + '%';
                    bar.style.backgroundColor = 'inherit';
                }

                var textVal = currValue > limit? limit : currValue;
                text.innerHTML = '' + textVal + '%';
                selector(id).setAttribute('value', textVal);
            } catch (error) {
                console.log(error);
            }
        };

        function setValue(id, value, limit) {
            setBarValue(id, value, limit);
        }

        function gen(id, contents) {
            service.ins.gethtml(elURL.pbars
            , function(response) {
                var result = '';
                var counter = 0;
                contents.forEach(function(e) {
                    result += response.replace(/\$0/g, '' + ID + '' + counter + '').replace(/\$1/g, 0).replace(/\$2/g, 0);
                    counter++;
                }, this);
                document.getElementById(id).innerHTML = result;
            }
            , function(error) {
                console.log(error);
            });
        }

        return {
            setValue: setValue
            , gen: gen
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