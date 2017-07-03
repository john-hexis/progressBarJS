//// <reference path="data-service.js" />
"use strict";
var pbar = (function () {
    var instance;

    function init() {
        var ID = app.pbarID;
        var pBarsID = 'div.progress-bar';
        var barValID = 'div.bar-value';
        var barTextID = 'p.bar-text';

        var selectPBars = function(id) {
            return appHelper.ins.selector('#' + id + '');
        };
        var selectBarVal = function(id) {
            return appHelper.ins.selector('#' + id + ' ' + barValID + '');
        };
        var selectBarTxt = function(id) {
            return appHelper.ins.selector('#' + id + ' ' + barTextID + '');
        };

        var setBarValue = function (id, value, limit) {
            try {
                var currValue = Number(selectPBars(id).getAttribute('value')) + value;
                var bar = selectBarVal(id);
                var text = selectBarTxt(id);

                if(currValue > 100) {
                    bar.style.width = '100%';
                    bar.style.backgroundColor = '#ff8686';
                }
                else if (currValue < 0) {
                    bar.style.width = '0%';
                    bar.style.backgroundColor = '#8af0ff';
                }
                else {
                    bar.style.width = '' + currValue + '%';
                    bar.style.backgroundColor = '#8af0ff';
                }

                var textVal = currValue > limit? limit : currValue < 0? 0: currValue;
                text.innerHTML = '' + textVal + '%';
                selectPBars(id).setAttribute('value', textVal);
                selectPBars(id).setAttribute('limit', limit);
            } catch (error) {
                console.log(error);
            }
        };

        function setValue(id, value, limit) {
            setBarValue(id, value, limit);
        }

        function setValueOnFly(id, value) {
            var limit = Number(selectPBars(id).getAttribute('limit'));
            setBarValue(id, value, limit);
        }

        function gen(id, contents, limit) {
            service.ins.gethtml(elURL.pbars
            , function(response) {
                var result = '';
                var counter = 0;
                contents.forEach(function(e) {
                    result += response.replace(/\$0/g, '' + ID + '' + counter + '').replace(/\$1/g, 0).replace(/\$2/g, 0).replace(/\$3/g, limit);
                    counter++;
                }, this);
                document.getElementById(id).innerHTML = result;
                counter = 0;
                contents.forEach(function(e) {
                    setBarValue('' + ID + '' + counter + '', e, limit);
                    counter++;
                }, this);
            }
            , function(error) {
                console.log(error);
            });
        }

        return {
            setValue: setValue
            , setValueOnFly: setValueOnFly
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