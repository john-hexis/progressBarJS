"use strict";
var app = (function() {
    return {
        originVPath: (function() { return '' + window.location.origin + '/pbar'; })()
        , hostAPI: (function() { return 'http://pb-api.herokuapp.com/'; })()
        , pbarID: (function() { return 'pbar'; })()
    };
})();

var appHelper = (function() {
    var instance;

    function init() {
        // Opera 8.0+
        var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

        // Firefox 1.0+
        var isFirefox = typeof InstallTrigger !== 'undefined';

        // Safari 3.0+ "[object HTMLElementConstructor]" 
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;

        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;

        // Chrome 1+
        var isChrome = !!window.chrome && !!window.chrome.webstore;

        // Blink engine detection
        var isBlink = (isChrome || isOpera) && !!window.CSS;

        function selector(param) {
            return document.querySelectorAll('' + param + '')[0];
        }

        function allSelector(param) {
            return document.querySelectorAll('' + param + '');
        }

        function isThisOpera() {
            return isOpera;
        }

        function isThisFireFox() {
            return isFirefox;
        }

        function isThisSafari() {
            return isSafari;
        }

        function isThisIE() {
            return isIE;
        }

        function isThisChrome() {
            return isChrome;
        }

        return {
            selector: selector
            , allSelector: allSelector
            , isThisOpera: isThisOpera
            , isThisFireFox: isThisFireFox
            , isThisSafari: isThisSafari
            , isThisIE: isThisIE
            , isThisChrome: isThisChrome
        };
    }

    return {
        ins: (function() {
            if (instance === undefined || instance === null) {
                instance = init();
            }
            return instance;
        })()
    };
})();