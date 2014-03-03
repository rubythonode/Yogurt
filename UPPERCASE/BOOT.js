global.BOOT=function(e){"use strict";var n,t,i,o,r=require("fs"),a=require("path"),s=e.OTHER_LANGS,c=__dirname+"/..",d="\nglobal = window;\n",l="\nglobal = window;\n",u="",E="",f="";t=function(){var t,i,o,f,O,C,R,v,N,p,S,g,F,m,I;t=function(e){var n=e.path,t=e.name;return r.statSync(c+"/"+n).isDirectory()===!0&&"."!==t[0]&&"node_modules"!==t&&"not_load"!==t&&"deprecated"!==t&&"_"!==t[0]},i=function(){r.readdirSync(c).forEach(function(e){t({path:e,name:e})===!0&&(global[e]=BOX(e),d+="global."+e+" = BOX('"+e+"');\n",l+="global."+e+" = BOX('"+e+"');\n")})},o=function(e){var n,t=c+"/"+e,i=a.extname(e);".js"===i&&require(t);for(n in s)s.hasOwnProperty(n)===!0&&i==="."+n&&require(t)},f=function(e){var n,t=c+"/"+e,i=a.extname(e),o=r.readFileSync(t).toString();".js"===i?(d+=o+"\n",l+=o+"\n"):".css"===i&&(u+=o,E+=o);for(n in s)s.hasOwnProperty(n)===!0&&i==="."+n&&(d+=s[n](o)+"\n",l+=s[n](o)+"\n")},O=function(e){var n,t=c+"/"+e,i=a.extname(e),o=r.readFileSync(t).toString();".js"===i?l+=o+"\n":".css"===i&&(E+=o+"\n");for(n in s)s.hasOwnProperty(n)===!0&&i==="."+n&&(l+=s[n](o)+"\n")},C=function(e){o(e),f(e)},R=function(e,n){var i=function(e){var o,a;if(r.existsSync(e)===!0)for(o=[],r.readdirSync(e).forEach(function(i){var a=e+"/"+i;t({path:a,name:i})===!0?o.push(a):r.statSync(c+"/"+a).isDirectory()!==!0&&n(a)}),a=0;a<o.length;a+=1)i(o[a])};FOR_BOX(function(n){i(n.boxName+"/"+e)})},v=function(e){R(e,o)},N=function(e){R(e,f)},p=function(e){R(e,O)},S=function(e){R(e,C)},g=function(){void 0!==e&&(void 0!==e.CONFIG&&(EXTEND_DATA({origin:global.CONFIG,extend:e.CONFIG}),d+="EXTEND_DATA({ origin : global.CONFIG, extend : "+JSON.stringify(e.CONFIG,null,2)+" });\n",l+="EXTEND_DATA({ origin : global.CONFIG, extend : "+JSON.stringify(e.CONFIG,null,2)+" });\n"),void 0!==e.SERVER_CONFIG&&(EXTEND_DATA({origin:global.SERVER_CONFIG,extend:e.SERVER_CONFIG}),SERVER_CONFIG.rootPath=c),void 0!==e.BROWSER_CONFIG&&(d+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+JSON.stringify(e.BROWSER_CONFIG,null,2)+" });\n",l+="EXTEND_DATA({ origin : global.BROWSER_CONFIG, extend : "+JSON.stringify(e.BROWSER_CONFIG,null,2)+" });\n")),CONFIG.version=String((new Date).getTime()),d+="CONFIG.version = "+CONFIG.version+";\n",l+="CONFIG.version = "+CONFIG.version+";\n"},F=function(){var e=UPPERCASE.MODULE("mongolian");UPPERCASE.db=(new e).db(SERVER_CONFIG.dbName),SERVER_CONFIG.isNotRequireDBAuth!==!0&&UPPERCASE.db.auth(SERVER_CONFIG.dbUsername,SERVER_CONFIG.dbPassword)},m=function(){var e=UPPERCASE.MODULE("uglify-js"),n=UPPERCASE.MODULE("sqwish");d=e.minify(d,{fromString:!0,mangle:!0}).code,l=e.minify(l,{fromString:!0,mangle:!0}).code,u=n.minify(u),E=n.minify(E)},I=function(){n=r.readFileSync(c+"/UPPERCASE/LOGO"),d="/* Welcome to JavaScript World! :)\n"+n+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+d,u="/* Welcome to CSS World! :)\n"+n+"\n  Contact: "+CONFIG.contactAddress+"\n\n*/"+u},C("UPPERCASE/METHOD.js"),C("UPPERCASE/CLASS.js"),C("UPPERCASE/OBJECT.js"),C("UPPERCASE/BOX.js"),i(),C("UPPERCASE/FOR_BOX.js"),S("COMMON"),v("SERVER"),N("BROWSER"),p("BROWSER_SECURED"),f("UPPERCASE/BROWSER_FIX.js"),g(),SERVER_CONFIG.isNotUseDB!==!0&&F(),f("UPPERCASE/BROWSER_INIT.js"),CONFIG.isDevMode!==!0&&m(),I()},i=function(){f+="<!DOCTYPE html>",f+="<!--\n\n  Welcome! :)\n"+n+"\n  Contact: "+CONFIG.contactAddress+"\n\n-->",f+="<html>",f+="<head>",f+='<meta charset="utf-8">',f+='<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">',f+='<meta name="google" value="notranslate">',void 0!==CONFIG.googleSiteVerificationKey&&(f+='<meta name="google-site-verification" content="'+CONFIG.googleSiteVerificationKey+'" />'),f+="<title>"+CONFIG.defaultTitle+"</title>",f+='<link rel="stylesheet" type="text/css" href="__CSS?'+CONFIG.version+'" />',f+="</head>",f+="<body>",f+="<noscript>",f+='<p style="padding:15px;">',f+="자바스크립트 기능이 꺼져있습니다. 브라우저의 자바스크립트 기능을 켜 주시기 바랍니다. 감사합니다~! ^-^",f+="<br>",f+="JavaScript is disabled. Please enable JavaScript in your browser. Thank you~! :)",f+="</p>",f+="</noscript>",f+='<script type="text/javascript" src="__SCRIPT?'+CONFIG.version+'"></script>',f+="</body>",f+="</html>"},o=function(){var e,n,t,i,o=require("http"),s=require("https"),O=UPPERCASE.MODULE("socket.io"),C=UPPERCASE.MODULE("formidable").IncomingForm,R=UPPERCASE.MODULE("imagemagick");i=function(e,n){var t,i,o,s,O,v,N,p,S,g,F,m,I,y,G,_,h,P,A,x,D,T,b,U,w,B=e.url,M={};O=function(e){var n=a.extname(e);return".png"===n?"image/png":".jpg"===n||".jpeg"===n?"image/jpeg":".gif"===n?"image/gif":".js"===n?"text/javascript":".css"===n?"text/css":".txt"===n?"text/plain":".html"===n?"text/html":".swf"===n?"application/x-shockwave-flash":"application/octet-stream"},v=function(e){return"text/javascript"===e?"utf-8":"text/css"===e?"utf-8":"text/plain"===e?"binary":"text/html"===e?"utf-8":"image/png"===e?"binary":"image/jpeg"===e?"binary":"image/gif"===e?"binary":"application/x-shockwave-flash"===e?"binary":"binary"},N=function(){var e=B.indexOf("?");-1!==e&&(i=B.substring(e+1),B=B.substring(0,e))},p=function(){t=B.substring(1)},S=function(){var e=t.indexOf("/");-1===e?o=CONFIG.defaultBoxName:(o=t.substring(0,e),t=t.substring(e+1))},g=function(){var e=t.indexOf("/");-1===e?s="":(s=t.substring(0,e),t=t.substring(e+1))},F=function(){var n;return void 0===e.headers.authorization?!1:(n=new Buffer(e.headers.authorization.split(" ")[1],"base64").toString().split(":"),console.log("Decoded authorization: "+n),n[0]===SERVER_CONFIG.securedUsername&&n[1]===SERVER_CONFIG.securedPassword)},m=function(n){return void 0===n?void 0!==e.headers["if-none-match"]:e.headers["if-none-match"]===n},I=function(e){n.writeHead(302,{Location:e}),n.end()},y=function(){console.log("Someone is trying to AUTH!: "+e.connection.remoteAddress),n.statusCode=401,n.setHeader("WWW-Authenticate",'Basic realm="AUTH"'),n.end()},G=function(){n.statusCode=304,n.end()},_=function(e){var t=e.key,i=e.content,o=e.contentType,r=e.encoding;n.setHeader("Content-Type",o),void 0!==t&&n.setHeader("ETag",t),n.statusCode=200,n.end(i,r)},h=function(){I("/"+CONFIG.defaultBoxName+"/R/favicon.ico")},P=function(){return void 0===e.headers.authorization?void y():F()===!0?void I(SERVER_CONFIG.authedPageUrl):void I("/UPPERCASE/R/AUTH_ERROR.html")},A=function(){_({content:f,contentType:"text/html",encoding:"utf-8"})},x=function(){m(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?G():i!==CONFIG.version&&CONFIG.isDevMode!==!0?I(B+"?"+CONFIG.version):_(F()===!0?{key:CONFIG.version,content:l,contentType:"text/javascript",encoding:"utf-8"}:{key:CONFIG.version,content:d,contentType:"text/javascript",encoding:"utf-8"})},D=function(){m(CONFIG.version)===!0&&CONFIG.isDevMode!==!0?G():i!==CONFIG.version&&CONFIG.isDevMode!==!0?I(B+"?"+CONFIG.version):_(F()===!0?{key:CONFIG.version,content:E,contentType:"text/css",encoding:"utf-8"}:{key:CONFIG.version,content:u,contentType:"text/css",encoding:"utf-8"})},T=function(){var t=new C,i=[],a={};t.uploadDir="__RF/"+o+"/__TEMP/",r.existsSync(c+"/"+t.uploadDir)===!1&&console.log("Not exists folder: "+c+"/"+t.uploadDir),void 0!==global[o]&&r.existsSync(c+"/"+t.uploadDir)===!0?(t.on("field",function(e,n){a[e]=n}).on("file",function(e,n){i.push({tempPath:n.path,size:n.size,name:n.name,type:n.type,lastModifiedDate:n.lastModifiedDate})}).on("end",function(){var e=global[o].DB("__UPLOAD_FILE"),t=0;EACH(i,function(r){var s=r.tempPath;return r.size>1024*CONFIG.maxUploadFileMB*1024?(n.writeHead(200,{"Content-Type":"text/html"}),n.end("<script>errorCode='SIZE'</script>","utf-8"),!1):(EACH(a,function(e,n){""!==e.trim()&&(r[n]=e)}),REMOVE_AT({data:r,key:"tempPath"}),void R.readMetadata(s,function(a,d){var l=function(){e.createData(r,function(e,r){var a=UPPERCASE.MODULE("mv"),d=c+"/__RF/"+o+"/"+r.id;void 0===e&&a(s,d,function(){t+=1,t===i.length&&(EACH(i,function(e,n){i[n]=PACK_DATA(e)}),n.writeHead(200,{"Content-Type":"text/html"}),n.end("<script>fileDataSet="+JSON.stringify(i)+"</script>","utf-8")),console.log("File '"+d+"' ("+r.name+", "+r.size+" byte) uploaded.")})})};void 0!==d.exif?(r.exif=d.exif,R.convert([s,"-auto-orient",s],function(){l()})):l()}))})}).on("error",function(){n.writeHead(200,{"Content-Type":"text/html"}),n.end("<script>errorCode='ERROR'</script>","utf-8")}),t.parse(e)):(n.writeHead(200,{"Content-Type":"text/html"}),n.end("<script>errorCode='ERROR'</script>","utf-8"))},b=function(){var e,n,a;m(CONFIG.version)===!0?G():i!==CONFIG.version?I(B+"?"+CONFIG.version):(e=c+"/"+o+"/R/"+t,void 0!==M[e]?_(M[e]):(n=O(t),a=v(n),r.exists(e,function(t){t===!0?r.readFile(e,a,function(t,i){null!==t?w():_(M[e]={key:CONFIG.version,content:i,contentType:n,encoding:a})}):w()})))},U=function(){var e;m()===!0?G():(e=c+"/__RF/"+o+"/"+t,r.exists(e,function(n){n===!0?r.readFile(e,"binary",function(n,t){null!==n?w():r.stat(e,function(e,n){null!==e?w():_({key:n.size+"-"+Date.parse(n.mtime),content:t,contentType:"application/octet-stream",encoding:"binary"})})}):w()}))},w=function(){I(SERVER_CONFIG.errorPageUrl)},N(),p(),"favicon.ico"===t?h():"__AUTH"===t?P():""===t?A():"__SCRIPT"===t?x():"__CSS"===t?D():(S(),g(),"R"===s?b(o):"RF"===s?U(o):"__UPLOAD"===t&&"POST"===e.method.toUpperCase()?T():w())},e=o.createServer(i).listen(CONFIG.port),void 0!==SERVER_CONFIG.securedPort&&(n=s.createServer({key:r.readFileSync(c+"/"+SERVER_CONFIG.securedKeyFileName),cert:r.readFileSync(c+"/"+SERVER_CONFIG.securedCrtFileName)},i).listen(SERVER_CONFIG.securedPort)),t=O.listen(e),CONFIG.isDevMode===!0?t.set("log level",2):t.set("log level",1),t.set("transports",["websocket","flashsocket","xhr-polling","jsonp-polling"]),CONNS.type.socketPack=t.sockets,OBJECT.init(),FOR_BOX(function(e){void 0!==e.MAIN&&e.MAIN()}),console.log("[UPPERCASE SERVER STARTED] http://localhost:"+CONFIG.port+(void 0!==SERVER_CONFIG.securedPort?" and secured server started. https://localhost:"+SERVER_CONFIG.securedPort:""))},t(),i(),o()};