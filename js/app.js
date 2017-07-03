"use strict";
var app = (function() {
    return {
        originVPath: (function() { return '' + window.location.origin + '/pbar'; })()
        , hostAPI: (function() { return 'http://pb-api.herokuapp.com/'; })()
    };
})();