(function(){var b="";try{throw Error("Try to get JavaScript Path");}catch(d){if(d.stack)b=d.stack.match(/(at.+|\@)(http.+?)\:\d+\:\d+/)[2];else{var a=document.getElementsByTagName("script"),c;for(c in a)a[c].src&&a[c].src.match("common.js$")&&(b=a[c].src)}}b=b.replace(/common\.js$/,"");a=function(a){document.write('<script src="'+b+a+'">\x3c/script>')};a("jquery-1.8.3.min.js");})();
var SetCookie=function(){return zbp.cookie.set.apply(null,arguments)},GetCookie=function(){return zbp.cookie.get.apply(null,arguments)},LoadRememberInfo=function(){zbp.userinfo.output.apply(null);return!1},SaveRememberInfo=function(){zbp.userinfo.saveFromHtml.apply(null);return!1},RevertComment=function(){zbp.comment.reply.apply(null,arguments);return!1},GetComments=function(){zbp.comment.get.apply(null,arguments);return!1},VerifyMessage=function(){zbp.comment.post.apply(null);return!1};
