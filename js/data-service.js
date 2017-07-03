"use strict";
var service = (function() {
    var instance;

    function init() {
        var ajaxCall = function(method, url, success, error) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.status == 200) {
                    if(success !== undefined && this.readyState == 4) {
                        success(JSON.parse(this.response));
                    }
                }
                else if (this.status == 0) {
                    if(this.responseText !== undefined || this.responseText != '') {
                        console.log(this.responseText);
                    }
                }
                else {
                    if(error !== undefined) {
                        error(JSON.parse(this.response));
                    }
                }
            };
            xhttp.open(method, url, true);
            xhttp.send();
        };

        var ajaxCallText = function(method, url, success, error) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.status == 200) {
                    if(success !== undefined && this.readyState == 4) {
                        success(this.responseText);
                    }
                }
                else if (this.status == 0) {
                    if(this.responseText !== undefined || this.responseText != '') {
                        console.log(this.responseText);
                    }
                }
                else {
                    if(error !== undefined) {
                        error(JSON.parse(this.response));
                    }
                }
            };
            xhttp.open(method, url, true);
            xhttp.send();
        };

        function get(url, params, success, error) {
            var finalUrl = '', paramText = '', key;
            if (params !== undefined || params !== null) {
                for (key in params) {
                    if (params.hasOwnProperty(key)) {
                        //console.log(key + " = " + params[key]);
                        if (params == '') {
                            paramText += '' + key + '=' + params[key] + '';
                        }
                        else {
                            paramText += '&' + key + '=' + params[key] + '';
                        }
                    }
                }   
            }

            if (paramText == '') {
                finalUrl = '' + url + '';
            }
            else {
                finalUrl = '' + url + '?' + paramText + '';
            }

            ajaxCall("GET", finalUrl
            , function(response) {
                if(success !== undefined) {
                    success(response);
                }
            }
            ,function(err) {
                console.log(err);
                if(error !== undefined) {
                    error(err);
                }
            });
        }

        function gethtml(url, success, error) {
            ajaxCallText("GET", url
            , function(response) {
                if(success !== undefined) {
                    success(response);
                }
            }
            ,function(err) {
                console.log(err);
                if(error !== undefined) {
                    error(err);
                }
            });
        }

        return {
            get: get
            , gethtml: gethtml
        };
    }

    return {
      ins: (function() {
          if(instance === null || instance === undefined) {
            instance = init();
          }
          return instance;
      })()  
    };
})();

var serviceURL = (function() {
    return {
        pbars: (function() { return '' + app.hostAPI + 'bars'; })()
    };
})();

var elURL = (function() {
    var host = '' + originVPath +  '/element/';

    return {
        button: (function () { return '' + host + 'html-buttons.html'; })()
        ,pbars: (function () { return '' + host + 'html-pbars.html'; })()
    };
})();
