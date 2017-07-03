"use strict";
var btnCb = (function() {
    var instance;

    function init() {
        var cbID = 'opts';
        var btnName = 'btnSetter';

        var selectPool = function(id) {
            return appHelper.ins.selector('#' + id + '');
        }

        var getCbVal = function(id) {
            var select = appHelper.ins.selector('#' + id + '');
            return select.options[select.selectedIndex].value;
        }

        var setOnClickEvent = function(callback) {
            var allBtns = appHelper.ins.allSelector('button[name="' + btnName + '"]');
            if (appHelper.ins.isThisIE) {
                for (var i = 0; i < allBtns.length; i++) {
                    var element = allBtns[i];
                    element.onclick = function() {
                        var value = Number(this.getAttribute('value'));
                        if (callback !== undefined) {
                            callback(value);
                        }
                    }
                }
            }
            else {
                allBtns.forEach(function(e) {
                    e.onclick = function() {
                        var value = Number(this.getAttribute('value'));
                        if (callback !== undefined) {
                            callback(value);
                        }
                    }
                }, this);
            }
        }

        function genBtn(id, contents, onClickCallback) {
            service.ins.gethtml(elURL.button
            , function(response) {
                var result = '';
                contents.forEach(function(e) {
                    result += response.replace(/\$0/g, e);
                }, this);
                selectPool(id).innerHTML = result;
                if (onClickCallback !== undefined) {
                    setOnClickEvent(onClickCallback);    
                }
            }
            , function(error) {
                console.log(error);
            });
        }

        function genCb(id, contents) {
            service.ins.gethtml(elURL.cb
            , function(response) {
                var options = '';
                var result = '';
                service.ins.gethtml(elURL.cbOpt
                , function(resp) {
                    contents.forEach(function(e) {
                        options += resp.replace(/\$0/g, e);
                    }, this);
                    result += response.replace(/\$0/g, options);
                    selectPool(id).innerHTML = result;
                });
            }
            , function(error) {
                console.log(error);
            });
        }

        function selectedCbVal() {
            return getCbVal(cbID);
        }

        return {
            genBtn: genBtn,
            genCb: genCb,
            selectedCbVal: selectedCbVal
        }
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