let orgurl = 'https://show.737max.tk:2096/'
let zburl = 'https://996icu.ga:8080/https/737max.tk/'
let yyurl = '/yy/'
let baoyuurl = '/api/baoyu'

function getorgurl() {
    return ''
}

function getData(file) {
    return new Promise((resolve, reject) => {
        var ajax = new XMLHttpRequest();
        ajax.open('post', zburl + file);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    if (!ajax.responseText) {
                        return resolve({zhubo: []})
                    }
                    try {
                        return resolve(JSON.parse(ajax.responseText))
                    } catch (e) {
                        return reject(e)
                    }
                }
                return reject(new Error("status error"))
            }
        }
    })

}

function UrlSearch() {
    var name, value;
    var str = location.href;
    var num = str.indexOf("?")
    str = str.substr(num + 1);

    var arr = str.split("&");
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            this[name] = value;
        }
    }
}

function getYYData(file) {
    return new Promise((resolve, reject) => {
        var ajax = new XMLHttpRequest();
        ajax.open('get', yyurl + file);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    return resolve(JSON.parse(ajax.responseText))
                }
                return reject(new Error("status error"))
            }
        }
    })
}


function getBaoyuData() {
    return new Promise((resolve, reject) => {
        var ajax = new XMLHttpRequest();
        ajax.open('get', baoyuurl);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    return resolve(JSON.parse(ajax.responseText))
                }
                return reject(new Error("status error"))
            }
        }
    })
}

function replaceTitle(title) {
    return title.replace(/%3F|%20|%28|%29|%5E|%7E|%B7/g, '')
}

function TestMobild() {
    function params(u, p) {
        var m = new RegExp("(?:&|/?)" + p + "=([^&$]+)").exec(u);
        return m ? m[1] : '';
    }

    if (/iphone|ipad|ios|android|ipod/i.test(navigator.userAgent.toLowerCase()) == true && params(location.search, "from") != "mobile") {
        return true
    }
    return false
}