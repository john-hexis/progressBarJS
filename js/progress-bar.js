var pbar = (function () {
    var instance;

    function init() {
        var pBarsID = 'div.progress-bar';
        var barValID = 'div.bar-value';
        var barTextID = 'p.bar-text';

        var selector = function (param) {
            return document.querySelectorAll('' + pBarsID + '' + param + '');
        }
        var selectPBars = function(id) {
            selector('#' + id + '');
        }
        var selectBarVal = function(id) {
            selector('#' + id + ' ' + barValID + '');
        }
        var selectBarTxt = function(id) {
            selector('#' + id + ' ' + barVabarTextIDlID + '');
        }        

        function setValue(id) {
            var bar = selectBarVal(id);
            var text = selectBarTxt(id);

            //bar.
        }

        return {
            activate: activate
        };
    }

    return {
        ins: (function () {
            if (condition) {
                instance = new init();
            }
            return instance;
        })()
    };
})();