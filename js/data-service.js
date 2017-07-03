var service = (function() {
    var instance;

    function init() {
        var ajaxCall = function(method, url, success, error) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if(success !== undefined) {
                        success(JSON.parse(this.responseText));
                    }
                }
                else {
                    if(error !== undefined) {
                        error(JSON.parse(this.responseText));
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
                    error(response);
                }
            });
        }

        return {
            get: get
        };
    }

    return {
      ins: (function() {
          if(instance === null || instance === undefined) {
            instance = new init();
          }
          return instance;
      })()  
    };
})();
