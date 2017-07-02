var pbar = (function () {
    var instance;

    function init() {
        var pBarsIDs = 'div.progress-bar';

        var selector = function (id) {
            return document.querySelectorAll('' + pBarsIDs + '#' + id + '');
        }

        function setValue(id) {
            pBars.forEach(function(element) {
                element.id
            }, this);
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