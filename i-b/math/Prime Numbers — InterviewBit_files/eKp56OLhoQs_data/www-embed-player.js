(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
for(var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da="undefined"!=typeof Reflect&&Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=ca(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c},ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ha=["Reflect",
"construct"],ia=0;ia<ha.length-1;ia++){var ja=ha[ia];ja in ea||(ea[ja]={});ea=ea[ja]}var ka=ha[ha.length-1],la=ea[ka],ma;ma=la||da;ma!=la&&null!=ma&&ba(ea,ka,{configurable:!0,writable:!0,value:ma});var n=this;function p(a){return void 0!==a}
function q(a){return"string"==typeof a}
function r(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function u(){}
function na(a){a.na=void 0;a.getInstance=function(){return a.na?a.na:a.na=new a}}
function oa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function pa(a){return"array"==oa(a)}
function qa(a){var b=oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==oa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=wa:w=xa;return w.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var ya=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var za=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Aa(a,b){return a<b?-1:a>b?1:0}
function Ba(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ca=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ea(a,b){a:{var c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Fa(a,b){var c=Ca(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ga(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ha(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ia(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Ia.prototype.equals=function(a){return a instanceof Ia&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Ia.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Ia.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Ia.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Ja(a,b){this.width=a;this.height=b}
l=Ja.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ka(a,b){for(var c=qa(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],p(a));c++);return a}
function La(a){var b=Ma,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Na(a){for(var b in a)return!1;return!0}
function Oa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Qa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Qa.length;f++)c=Qa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Sa(a){Sa[" "](a);return a}
Sa[" "]=u;function Ta(a,b){var c=Ua;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Va(){var a=Wa;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Sa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;var Xa=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var Ya=!1,Za="";function $a(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Ya=!0,a.description)){Za=$a(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Ya=!0;Za="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Ya=!(!a||!a.enabledPlugin))){Za=$a(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Ya=!0;Za=$a(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Ya=!0;Za="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Ya=!0,Za=$a(b.GetVariable("$version"))}catch(c){}})();
var ab=Ya,bb=Za;var E;a:{var cb=n.navigator;if(cb){var db=cb.userAgent;if(db){E=db;break a}}E=""}function F(a){return-1!=E.indexOf(a)}
;function eb(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
;function fb(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;var gb=F("Opera"),hb=F("Trident")||F("MSIE"),ib=F("Edge"),jb=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),kb=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),lb=F("Macintosh"),mb=F("Windows"),nb=F("Android"),ob=fb(),pb=F("iPad"),qb=F("iPod");function rb(){var a=n.document;return a?a.documentMode:void 0}
var sb;a:{var tb="",ub=function(){var a=E;if(jb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ib)return/Edge\/([\d\.]+)/.exec(a);if(hb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(kb)return/WebKit\/(\S+)/.exec(a);if(gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ub&&(tb=ub?ub[1]:"");if(hb){var vb=rb();if(null!=vb&&vb>parseFloat(tb)){sb=String(vb);break a}}sb=tb}var wb=sb,Ua={};
function xb(a){return Ta(a,function(){for(var b=0,c=za(String(wb)).split("."),d=za(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Aa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Aa(0==g[2].length,0==h[2].length)||Aa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var yb;var zb=n.document;yb=zb&&hb?rb()||("CSS1Compat"==zb.compatMode?parseInt(wb,10):5):void 0;(function(){if(mb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(E))?a[1]:"0"}return lb?(a=/10[_.][0-9_.]+/,(a=a.exec(E))?a[0].replace(/_/g,"."):"10"):nb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(E))?a[1]:""):ob||pb||qb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(E))?a[1].replace(/_/g,"."):""):""})();var Ab=F("Firefox"),Bb=fb()||F("iPod"),Cb=F("iPad"),Db=F("Android")&&!(eb()||F("Firefox")||F("Opera")||F("Silk")),Eb=eb(),Fb=F("Safari")&&!(eb()||F("Coast")||F("Opera")||F("Edge")||F("Silk")||F("Android"))&&!(fb()||F("iPad")||F("iPod"));function Gb(a){return(a=a.exec(E))?a[1]:""}
(function(){if(Ab)return Gb(/Firefox\/([0-9.]+)/);if(hb||ib||gb)return wb;if(Eb)return fb()||F("iPad")||F("iPod")?Gb(/CriOS\/([0-9.]+)/):Gb(/Chrome\/([0-9.]+)/);if(Fb&&!(fb()||F("iPad")||F("iPod")))return Gb(/Version\/([0-9.]+)/);if(Bb||Cb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(E);if(a)return a[1]+"."+a[2]}else if(Db)return(a=Gb(/Android\s+([0-9.]+)/))?a:Gb(/Version\/([0-9.]+)/);return""})();!jb&&!hb||hb&&9<=Number(yb)||jb&&xb("1.9.1");hb&&xb("9");function Hb(){this.b="";this.f=Ib}
Hb.prototype.ma=!0;Hb.prototype.la=function(){return this.b};
var Ib={};function Jb(){this.b="";this.f=Kb}
Jb.prototype.ma=!0;Jb.prototype.la=function(){return this.b};
function Lb(a){return a instanceof Jb&&a.constructor===Jb&&a.f===Kb?a.b:"type_error:SafeUrl"}
var Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Nb(a){if(a instanceof Jb)return a;a=a.ma?a.la():String(a);Mb.test(a)||(a="about:invalid#zClosurez");return Ob(a)}
var Kb={};function Ob(a){var b=new Jb;b.b=a;return b}
Ob("about:blank");function Pb(){this.b=""}
Pb.prototype.ma=!0;Pb.prototype.la=function(){return this.b};
function Qb(a){var b=new Pb;b.b=a;return b}
Qb("<!DOCTYPE html>");Qb("");Qb("<br>");function Rb(a,b){var c=b instanceof Jb?b:Nb(b);a.href=Lb(c)}
;function Sb(a){var b=document;return q(a)?b.getElementById(a):a}
function Tb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Ub(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Vb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wb(a){Xb();var b=new Hb;b.b=a;return b}
var Xb=u;function Yb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(Zb)}
function $b(a){return a?decodeURI(a):a}
function ac(a,b,c){if(pa(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
function cc(a,b){var c=bc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var dc=!!window.google_async_iframe_id,Wa=dc&&window.parent||window;function ec(a,b){var c=fc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;function gc(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.f||n).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(g){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||f;c=this.f.performance;this.g=!!(c&&c.mark&&c.clearMarks&&f)}
gc.prototype.i=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
gc.prototype.start=function(a,b){if(!this.b)return null;var c=new ec(a,b);this.g&&this.f.performance.mark("goog_"+c.uniqueId+"_start");return c};
gc.prototype.end=function(a){this.b&&"number"==typeof a.value&&(a.duration=fc()-a.value,this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_end"),this.b&&this.events.push(a))};
function fc(){var a=n.performance;return a&&a.now?a.now():y()}
;if(dc&&!Va()){var hc="."+ya.domain;try{for(;2<hc.split(".").length&&!Va();)ya.domain=hc=hc.substr(hc.indexOf(".")+1),Wa=window.parent}catch(a){}Va()||(Wa=window)}var ic=Wa,I=new gc(1,ic);function jc(){ic.google_measure_js_timing||(I.events!=I.f.google_js_reporting_queue&&(I.events.length=0,I.g&&C(I.events,I.i,I)),I.b=!1)}
if("complete"==ic.document.readyState)jc();else if(I.b){var kc=function(){jc()};
ic.addEventListener?ic.addEventListener("load",kc,Xa?void 0:!1):ic.attachEvent&&ic.attachEvent("onload",kc)};var lc=(new Date).getTime();function mc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var nc=window,oc=document,pc=nc.location;function qc(){}
var rc=/\[native code\]/;function J(a,b,c){return a[b]=a[b]||c}
function sc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function K(){var a;if((a=Object.create)&&rc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var tc=J(nc,"gapi",{});var L;L=J(nc,"___jsl",K());J(L,"I",0);J(L,"hel",10);function uc(){var a=pc.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function vc(a){var b=J(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function wc(a){return J(J(L,"H",K()),a,K())}
;function xc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,D,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),D=1518500249):(m=d^f^h,D=1859775393):60>c?(m=d&f|h&(d|f),D=2400959708):(m=d^f^h,D=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+D+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[m++]=a[d++],v++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,v;a();return{reset:a,update:c,digest:d,Ga:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function yc(a,b,c){var d=[],e=[];if(1==(pa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),zc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=zc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function zc(a){var b=xc();b.update(a);return b.Ga().toLowerCase()}
;function Ac(a){this.b=a||{cookie:""}}
l=Ac.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=za(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=za(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bc=new Ac("undefined"==typeof document?null:document);Bc.f=3950;function Dc(){var a=[],b=mc(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Ac(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Ac(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,yc(mc(d),b,a||null)].join(" "):null}return null}
;var Ec=J(L,"perf",K());J(Ec,"g",K());var Fc=J(Ec,"i",K());J(Ec,"r",[]);K();K();function Gc(a,b,c){b&&0<b.length&&(b=Hc(b),c&&0<c.length&&(b+="___"+Hc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(Fc,"_p",K()),J(b,c,K())[a]=(new Date).getTime(),b=Ec.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Hc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ic=K(),Jc=[];function M(a){throw Error("Bad hint"+(a?": "+a:""));}
Jc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=J(L,b,[]).concat(c):J(L,b,c)}if(b=a.u)a=J(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Kc=/^(\/[a-zA-Z0-9_\-]+)+$/,Lc=[/\/amp\//,/\/amp$/,/^\/amp$/],Mc=/^[a-zA-Z0-9\-_\.,!]+$/,Nc=/^gapi\.loaded_[0-9]+$/,Oc=/^[a-zA-Z0-9,._-]+$/;function Pc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ic[f],h=null;g?h=g(e,b,c,d):M("no hint processor for: "+f);h||M("failed to generate load url");b=h;c=b.match(Qc);(d=b.match(Rc))&&1===d.length&&Sc.test(b)&&c&&1===c.length||M("failed sanity: "+a);return h}
function Tc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Uc(a);Nc.test(c)||M("invalid_callback");b=Vc(b);d=d&&d.length?Vc(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ra?"/am="+e(a.ra):"",a.za?"/rs="+e(a.za):"",a.Ca?"/t="+e(a.Ca):"","/cb=",e(c)].join("")}
function Uc(a){"/"!==a.charAt(0)&&M("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))M("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Kc.test(b)||M("invalid_prefix");c=0;for(d=Lc.length;c<d;++c)Lc[c].test(b)&&M("invalid_prefix");c=Wc(a,
"k",!0);d=Wc(a,"am");e=Wc(a,"rs");a=Wc(a,"t");return{Za:b,version:c,ra:d,za:e,Ca:a}}
function Vc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Oc.test(e)&&b.push(e)}return b.join(",")}
function Wc(a,b,c){a=a[b];!a&&c&&M("missing: "+b);if(a){if(Mc.test(a))return a;M("invalid: "+b)}return null}
var Sc=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Rc=/\/cb=/g,Qc=/\/\//g;function Xc(){var a=uc();if(!a)throw Error("Bad hint");return a}
Ic.m=function(a,b,c,d){(a=a[0])||M("missing_hint");return"https://apis.google.com"+Tc(a,b,c,d)};
var Yc=decodeURI("%73cript"),Zc=/^[-+_0-9\/A-Za-z]+={0,2}$/;function $c(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function ad(){var a=L.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Zc)?a:L.nonce=null;var b=J(L,"us",[]);if(!b||!b.length)return L.nonce=null;for(var c=oc.getElementsByTagName(Yc),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Zc))return L.nonce=a}}return null}
function bd(a){if("loading"!=oc.readyState)cd(a);else{var b=ad(),c="";null!==b&&(c=' nonce="'+b+'"');oc.write("<"+Yc+' src="'+encodeURI(a)+'"'+c+"></"+Yc+">")}}
function cd(a){var b=oc.createElement(Yc);b.setAttribute("src",a);a=ad();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=oc.getElementsByTagName(Yc)[0])?a.parentNode.insertBefore(b,a):(oc.head||oc.body||oc.documentElement).appendChild(b)}
function dd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Jc.length;d++){var e=Jc[d][0],f=Jc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function ed(a,b,c){fd(function(){var c=b===uc()?J(tc,"_",K()):K();c=J(wc(b),"_",c);a(c)},c)}
function gd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);dd(a,c);var d=a?a.split(":"):[],e=c.h||Xc(),f=J(L,"ah",K());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,v=m;m&&m.hint==k||(v={hint:k,features:[]},g.push(v));v.features.push(h)}var D=g.length;if(1<D){var N=c.callback;N&&(c.callback=function(){0==--D&&N()})}for(;d=g.shift();)hd(d.features,c,d.hint)}else hd(d||[],c,e)}
function hd(a,b,c){function d(a,b){if(D)return 0;nc.clearTimeout(v);N.push.apply(N,G);var d=((tc||{}).config||{}).update;d?d(f):f&&J(L,"cu",[]).push(f);if(b){Gc("me0",a,ta);try{ed(b,c,m)}finally{Gc("me1",a,ta)}}return 1}
a=sc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var v=null,D=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=J(wc(c),"r",[]).sort(),N=J(wc(c),"L",[]).sort(),ta=[].concat(k);0<g&&(v=nc.setTimeout(function(){D=!0;h()},g));
var G=$c(a,N);if(G.length){var G=$c(a,k),fa=J(L,"CP",[]),ga=fa.length;fa[ga]=function(a){function b(){var a=fa[ga+1];a&&a()}
function c(b){fa[ga]=null;d(G,a)&&vc(function(){e&&e();b()})}
if(!a)return 0;Gc("ml1",G,ta);0<ga&&fa[ga-1]?fa[ga]=function(){c(b)}:c(b)};
if(G.length){var Cc="loaded_"+L.I++;tc[Cc]=function(a){fa[ga](a);tc[Cc]=null};
a=Pc(c,G,"gapi."+Cc,k);k.push.apply(k,G);Gc("ml0",G,ta);b.sync||nc.___gapisync?bd(a):cd(a)}else fa[ga](qc)}else d(G)&&e&&e()}
function fd(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,gd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
tc.load=function(a,b){return fd(function(){return gd(a,b)})};function id(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
id.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function jd(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function kd(a){n.setTimeout(function(){throw a;},0)}
var ld;
function md(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ta;c.ta=null;a()}};
return function(a){d.next={ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function nd(){this.f=this.b=null}
var pd=new id(function(){return new od},function(a){a.reset()},100);
nd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function od(){this.next=this.scope=this.b=null}
od.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
od.prototype.reset=function(){this.next=this.scope=this.b=null};function qd(a,b){rd||sd();td||(rd(),td=!0);var c=ud,d=pd.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var rd;function sd(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);rd=function(){a.then(vd)}}else rd=function(){var a=vd;
!ra(n.setImmediate)||n.Window&&n.Window.prototype&&!F("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(ld||(ld=md()),ld(a)):n.setImmediate(a)}}
var td=!1,ud=new nd;function vd(){for(var a;a=ud.remove();){try{a.b.call(a.scope)}catch(b){kd(b)}jd(pd,a)}td=!1}
;function O(){this.f=this.f;this.H=this.H}
O.prototype.f=!1;O.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function wd(a,b){a.f?p(void 0)?b.call(void 0):b():(a.H||(a.H=[]),a.H.push(p(void 0)?w(b,void 0):b))}
O.prototype.o=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function xd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function yd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];qa(d)?yd.apply(null,d):xd(d)}}
;var zd="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Ad(){}
Ad.prototype.next=function(){throw zd;};
Ad.prototype.da=function(){return this};
function Bd(a){if(a instanceof Ad)return a;if("function"==typeof a.da)return a.da(!1);if(qa(a)){var b=0,c=new Ad;c.next=function(){for(;;){if(b>=a.length)throw zd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Cd(a,b){if(qa(a))try{C(a,b,void 0)}catch(c){if(c!==zd)throw c;}else{a=Bd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==zd)throw c;}}}
function Dd(a){if(qa(a))return Ga(a);a=Bd(a);var b=[];Cd(a,function(a){b.push(a)});
return b}
;function Ed(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Fd(a){a=String(a);if(Ed(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Gd(a){var b=[];Hd(new Id,a,b);return b.join("")}
function Id(){}
function Hd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(pa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Hd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Jd(d,c),c.push(":"),Hd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Jd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Kd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ld=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Jd(a,b){b.push('"',a.replace(Ld,function(a){var b=Kd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Kd[a]=b);return b}),'"')}
;function Md(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function P(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=u)try{var c=this;a.call(b,function(a){Nd(c,2,a)},function(a){Nd(c,3,a)})}catch(d){Nd(this,3,d)}}
function Od(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Od.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Pd=new id(function(){return new Od},function(a){a.reset()},100);
function Qd(a,b,c){var d=Pd.get();d.g=a;d.f=b;d.context=c;return d}
function Rd(a){if(a instanceof P)return a;var b=new P(u);Nd(b,2,a);return b}
function Sd(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return Td(this,ra(a)?a:null,ra(b)?b:null,c)};
Md(P);function Ud(a,b){return Td(a,null,b,void 0)}
P.prototype.cancel=function(a){0==this.b&&qd(function(){var b=new Vd(a);Wd(this,b)},this)};
function Wd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Wd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Xd(c),Yd(c,e,3,b)))}a.g=null}else Nd(a,3,b)}
function Zd(a,b){a.f||2!=a.b&&3!=a.b||$d(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Td(a,b,c,d){var e=Qd(null,null,null);e.b=new P(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Vd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Zd(a,e);return e.b}
P.prototype.C=function(a){this.b=0;Nd(this,2,a)};
P.prototype.D=function(a){this.b=0;Nd(this,3,a)};
function Nd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.C,f=a.D;if(d instanceof P){Zd(d,Qd(e||u,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(sa(d))try{var k=d.then;if(ra(k)){ae(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.w=c,a.b=b,a.g=null,$d(a),3!=b||c instanceof Vd||be(a,c))}}
function ae(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function $d(a){a.l||(a.l=!0,qd(a.B,a))}
function Xd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
P.prototype.B=function(){for(var a;a=Xd(this);)Yd(this,a,this.b,this.w);this.l=!1};
function Yd(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,ce(b,c,d);else try{b.i?b.g.call(b.context):ce(b,c,d)}catch(e){de.call(null,e)}jd(Pd,b)}
function ce(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function be(a,b){a.j=!0;qd(function(){a.j&&de.call(null,b)})}
var de=kd;function Vd(a){B.call(this,a)}
z(Vd,B);Vd.prototype.name="cancel";function Q(a){O.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
z(Q,O);l=Q.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function ee(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ea(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=u):(c&&Fa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.W=function(a){var b=this.g[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.w)for(d=0;d<b.length;d++){var f=b[d];fe(this.b[f+1],this.b[f+2],c)}else{this.j++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;f=this.i.pop();)this.K(f)}}return 0!=d}return!1};
function fe(a,b,c){qd(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){Q.A.o.call(this);this.clear();this.i.length=0};function ge(a){this.b=a}
ge.prototype.set=function(a,b){p(b)?this.b.set(a,Gd(b)):this.b.remove(a)};
ge.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return Fd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ge.prototype.remove=function(a){this.b.remove(a)};function he(a){this.b=a}
z(he,ge);function ie(a){this.data=a}
function je(a){return!p(a)||a instanceof ie?a:new ie(a)}
he.prototype.set=function(a,b){he.A.set.call(this,a,je(b))};
he.prototype.f=function(a){a=he.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
he.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ke(a){this.b=a}
z(ke,he);ke.prototype.set=function(a,b,c){if(b=je(b)){if(c){if(c<y()){ke.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}ke.A.set.call(this,a,b)};
ke.prototype.f=function(a,b){var c=ke.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)ke.prototype.remove.call(this,a);else return c}};function le(a){this.b=a}
z(le,ke);function me(){}
;function ne(){}
z(ne,me);ne.prototype.clear=function(){var a=Dd(this.da(!0)),b=this;C(a,function(a){b.remove(a)})};function oe(a){this.b=a}
z(oe,ne);l=oe.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.da=function(a){var b=0,c=this.b,d=new Ad;d.next=function(){if(b>=c.length)throw zd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function pe(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(pe,oe);function qe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(qe,oe);var re="Microsoft Internet Explorer"==navigator.appName,se=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
function te(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var ue=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};r("yt.config_",ue,void 0);function R(a){te(ue,arguments)}
function S(a,b){return a in ue?ue[a]:b}
;function T(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=S("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),R("ERRORS",c))}
function ve(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){T(b)}}:a}
;function U(a){return S("EXPERIMENT_FLAGS",{})[a]}
;var we={};function xe(a){return we[a]||(we[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function ye(a,b){return a?a.dataset?a.dataset[xe(b)]:a.getAttribute("data-"+b):null}
function ze(a){a&&(a.dataset?a.dataset[xe("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function V(a,b){ra(a)&&(a=ve(a));return window.setTimeout(a,b)}
;var Ae=t("ytPubsubPubsubInstance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.K;Q.prototype.publish=Q.prototype.W;Q.prototype.clear=Q.prototype.clear;r("ytPubsubPubsubInstance",Ae,void 0);var Be=t("ytPubsubPubsubSubscribedKeys")||{};r("ytPubsubPubsubSubscribedKeys",Be,void 0);var Ce=t("ytPubsubPubsubTopicToKeys")||{};r("ytPubsubPubsubTopicToKeys",Ce,void 0);var De=t("ytPubsubPubsubIsSynchronous")||{};r("ytPubsubPubsubIsSynchronous",De,void 0);
function Ee(a,b){var c=Fe();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Be[d]&&b.apply(window,c)};
try{De[a]?f():V(f,0)}catch(g){T(g)}},void 0);
Be[d]=!0;Ce[a]||(Ce[a]=[]);Ce[a].push(d);return d}return 0}
function Fe(){return t("ytPubsubPubsubInstance")}
function Ge(a){Ce[a]&&(a=Ce[a],C(a,function(a){Be[a]&&delete Be[a]}),a.length=0)}
function He(a){var b=Fe();if(b)if(b.clear(a),a)Ge(a);else for(var c in Ce)Ge(c)}
function Ie(a,b){var c=Fe();c&&c.publish.apply(c,arguments)}
function Je(a){var b=Fe();b&&("number"==typeof a?a=[a]:q(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Be[a]}))}
;var Ke=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Le=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Me(a,b){var c=Ne(a),d=document.getElementById(c),e=d&&ye(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Ee(c,b),g=""+(b[ua]||(b[ua]=++va));Oe[g]=e}f||(d=Pe(a,c,function(){ye(d,"loaded")||(ze(d),Ie(c),V(x(He,c),0))}))}}
function Pe(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Qe(a){a=Ne(a);var b=document.getElementById(a);b&&(He(a),b.parentNode.removeChild(b))}
function Re(a,b){if(a&&b){var c=""+(b[ua]||(b[ua]=++va));(c=Oe[c])&&Je(c)}}
function Ne(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ba(a)}
var Oe={};function Se(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ke,""),c=c.replace(Le,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Me(a,b)}
;var Te=null;function Ue(){var a=S("BG_I",null),b=S("BG_IU",null),c=S("BG_P",void 0);b?Se(b,function(){window.botguard?Ve(c):(Qe(b),T(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Ve(c))}
function Ve(a){Te=new window.botguard.bg(a);U("botguard_periodic_refresh")?se():U("botguard_always_refresh")}
function We(){return null!=Te}
function Xe(){return Te?Te.invoke():null}
;y();var Ye=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ze(){if(!Ye)return null;var a=Ye();return"open"in a?a:null}
function $e(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function af(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?pa(b[f])?Ha(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function bf(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=af(d[1]||""),e;for(e in b)d[e]=b[e];return cc(a,d)+c}
;var cf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},df=!1;
function ef(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=H(a)[1]||null,e=$b(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?$b(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;for(var f in cf){if((e=d=S(cf[f]))&&!(e=c)){var g=a,e=f,h=S("CORS_HEADER_WHITELIST")||{};e=(g=$b(H(g)[3]||null))?(h=h[g])?0<=Ca(h,e):!1:!0}e&&(b[f]=d)}return b}
function ff(a,b){var c=S("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!$b(H(a)[3]||null)||b.withCredentials||$b(H(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.F&&b.F[c])}
function gf(a,b){var c=b.format||"JSON";b.La&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=S("XSRF_FIELD_NAME",void 0),e=S("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=bf(a,f||{}));var f=b.postBody||"",g=b.F;ff(a,b)&&(g||(g={}),g[d]=e);g&&q(f)&&(d=af(f),Ra(d,g),f=b.xa&&"JSON"==b.xa?JSON.stringify(d):bc(d));d=f||g&&!Na(g);!df&&d&&"POST"!=b.method&&(df=!0,T(Error("AJAX request with postData should use POST")));var h=
!1,k,m=hf(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=$e(a),e=null;if(d||400<=a.status&&500>a.status)e=jf(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=V(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function jf(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?kf(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=lf(a)})}c&&mf(d);
return d}
function mf(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b]);a[c]=d}else mf(a[b])}}
function kf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function lf(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function nf(a,b){b.method="POST";b.F||(b.F={});gf(a,b)}
function hf(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ve(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ze();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=ef(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var of={},pf=0;function qf(a,b){a&&(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?hf(a,b):rf(a,b))}
function rf(a,b){var c=new Image,d=""+pf++;of[d]=c;c.onload=c.onerror=function(){b&&of[d]&&b();delete of[d]};
c.src=a}
;function sf(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=tf)){e=a.stacktrace;d=a.columnNumber;var f=t("window.location.href");if(q(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(D){h="Not available",
g=!0}try{var k=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(D){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(uf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=a.fileName;h={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b,"client.name":c.name},F:{url:S("PAGE_NAME",window.location.href),file:k},method:"POST"};c.version&&(h["client.version"]=c.version);e&&(h.F.stack=e);for(var m in c)h.F["client."+m]=c[m];if(m=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var v in m)h.F[v]=m[v];gf("/error_204",h);uf[a.message]=!0;tf++}}}
var tf=0,uf={};var vf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};r("yt.msgs_",vf,void 0);function wf(a){te(vf,arguments)}
;function xf(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=t("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function yf(a){if(!isNaN(a)){var b=t("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var zf=[],Af=!1;function Bf(){function a(){Af=!0;"google_ad_status"in window?R("DCLKSTAT",1):R("DCLKSTAT",2)}
Se("//static.doubleclick.net/instream/ad_status.js",a);zf.push(xf(function(){Af||"google_ad_status"in window||(Re("//static.doubleclick.net/instream/ad_status.js",a),R("DCLKSTAT",3))},1))}
function Cf(){return parseInt(S("DCLKSTAT",0),10)}
;var Df=0,Ef=t("ytDomDomGetNextId")||function(){return++Df};
r("ytDomDomGetNextId",Ef,void 0);var Ff={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Gf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ff||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Gf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Gf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Gf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ma=t("ytEventsEventsListeners")||{};r("ytEventsEventsListeners",Ma,void 0);var Hf=t("ytEventsEventsCounter")||{count:0};r("ytEventsEventsCounter",Hf,void 0);function If(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Jf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=If(a,b,c,d);if(e)return e;var e=++Hf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Gf(d);if(!Vb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Gf(b);
b.currentTarget=a;return c.call(a,b)};
g=ve(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ma[e]=[a,b,c,g,d];return e}
function Kf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ma){var b=Ma[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ma[a]}}))}
;function Lf(){if(null==t("_lact",window)){var a=parseInt(S("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;r("_lact",a,window);r("_fact",a,window);-1==a&&Mf();Jf(document,"keydown",Mf);Jf(document,"keyup",Mf);Jf(document,"mousedown",Mf);Jf(document,"mouseup",Mf);Ee("page-mouse",Mf);Ee("page-scroll",Mf);Ee("page-resize",Mf)}}
function Mf(){null==t("_lact",window)&&(Lf(),t("_lact",window));var a=y();r("_lact",a,window);-1==t("_fact",window)&&r("_fact",a,window);Ie("USER_ACTIVE")}
function Nf(){var a=t("_lact",window);return null==a?-1:Math.max(y()-a,0)}
var Of=Mf;function Pf(a,b,c,d,e){this.g=a;this.j=b;this.i=c;this.f=d;this.b=e}
var Qf=1;function Rf(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.j,null!=a.i&&(b.veCounter=a.i),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=Rf(a.b));return b}
;var Sf={log_event:"events",log_event2:"events",log_interaction:"interactions"},Tf=Object.create(null);Tf.log_event="GENERIC_EVENT_LOGGING";Tf.log_event2="GENERIC_EVENT_LOGGING";Tf.log_interaction="INTERACTION_LOGGING";var Uf={},Vf={},Wf=0,W=t("ytLoggingTransportLogPayloadsQueue_")||{};r("ytLoggingTransportLogPayloadsQueue_",W,void 0);var Xf=t("ytLoggingTransportTokensToCttTargetIds_")||{};r("ytLoggingTransportTokensToCttTargetIds_",Xf,void 0);var Yf=t("ytLoggingTransportDispatchedStats_")||{};
r("ytLoggingTransportDispatchedStats_",Yf,void 0);var Zf=t("ytLoggingTransportCapturedTime_")||{};r("ytytLoggingTransportCapturedTime_",Zf,void 0);function $f(a,b){Vf[a.endpoint]=b;if(a.ea){var c=a.ea;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Xf[a.ea.token]=d;c=ag(a.endpoint,a.ea.token)}else c=ag(a.endpoint);c.push(a.wa);d=Number(U("web_logging_max_batch")||0)||20;c.length>=d?bg():cg()}
function bg(){window.clearTimeout(Wf);if(!Na(W)){for(var a in W){var b=Uf[a];if(!b){var c=Vf[a];if(!c)continue;b=new c;Uf[a]=b}var c=void 0,d=a,e=b,f=Sf[d],g=Yf[d]||{};Yf[d]=g;b=Math.round(se());for(c in W[d]){var h=e.f();h[f]=ag(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;var k=Xf[c];if(k)a:{var m=h,v=c;if(k.videoId)var D="VIDEO";else if(k.playlistId)D="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||
{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:v,scope:D}]}delete Xf[c];e.g(d,h,{})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}Na(W)||cg()}}
function cg(){window.clearTimeout(Wf);Wf=V(bg,S("LOGGING_BATCH_TIMEOUT",1E4))}
function ag(a,b){b||(b="");W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function dg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||se());f[a]=b;f.context={lastActivityMs:String(d?-1:Nf())};a=U("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";$f({endpoint:a,wa:f,ea:e},c)}
;function eg(a,b,c,d){fg(a,{attachChild:{csn:b,parentVisualElement:Rf(c),visualElements:[Rf(d)]}},void 0)}
function gg(a,b,c){U("interaction_logging_on_gel_web")?c.forEach(function(c){dg("visualElementShown",{csn:b,ve:Rf(c),eventType:1},a)}):(c=Da(c,function(a){return Rf(a)}),fg(a,{visibilityUpdate:{csn:b,
visualElements:c}}))}
function fg(a,b,c,d){b.eventTimeMs=Math.round(se());b.lactMs=Nf();d?b.clientData=d:c&&(b.clientData=hg(c));$f({endpoint:"log_interaction",wa:b},a)}
function hg(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Da(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function ig(){if(!jg&&!kg||!window.JSON)return null;try{var a=jg.get("yt-player-two-stage-token")}catch(b){}if(!q(a))try{a=kg.get("yt-player-two-stage-token")}catch(b){}if(!q(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var kg,lg=new pe;kg=lg.isAvailable()?new le(lg):null;var jg,mg=new qe;jg=mg.isAvailable()?new le(mg):null;function ng(){var a=S("ROOT_VE_TYPE",void 0);return a?new Pf(void 0,a,void 0):null}
function og(){var a=S("client-screen-nonce",void 0);a||(a=S("EVENT_ID",void 0));return a}
;function pg(a,b,c){Bc.set(""+a,b,c,"/","youtube.com")}
;function qg(a){if(a){a=a.itct||a.ved;var b=t("yt.logging.screen.storeParentElement");a&&b&&b(new Pf(a))}}
;function rg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=$b(H(window.location.href)[3]||null);f&&e.push(f);f=$b(H(d)[3]||null);if(0<=Ca(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Rb(e,d),d=e.href),d){var f=H(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
og();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ba(d).toString(36),e=b?bc(b):"",pg(d,e,h||5),qg(b))}else h="ST-"+Ba(d).toString(36),d=b?bc(b):"",pg(h,d,5),qg(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var v=void 0===v?window:v;c=v.location;a=cc(a,k)+m;a=a instanceof Jb?a:Nb(a);c.href=Lb(a)}return!0}
;var sg=t("yt.abuse.botguardInitialized")||We;r("yt.abuse.botguardInitialized",sg,void 0);var tg=t("yt.abuse.invokeBotguard")||Xe;r("yt.abuse.invokeBotguard",tg,void 0);var ug=t("yt.abuse.dclkstatus.checkDclkStatus")||Cf;r("yt.abuse.dclkstatus.checkDclkStatus",ug,void 0);var vg=t("yt.player.exports.navigate")||rg;r("yt.player.exports.navigate",vg,void 0);var wg=t("yt.util.activity.init")||Lf;r("yt.util.activity.init",wg,void 0);var xg=t("yt.util.activity.getTimeSinceActive")||Nf;
r("yt.util.activity.getTimeSinceActive",xg,void 0);var yg=t("yt.util.activity.setTimestamp")||Of;r("yt.util.activity.setTimestamp",yg,void 0);function zg(a){a={client:{hl:a.Oa,gl:a.Na,clientName:a.Ma,clientVersion:a.innertubeContextClientVersion}};S("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});return a}
function Ag(){return{apiaryHost:S("APIARY_HOST",void 0),Ea:S("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!S("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:S("GAPI_HINT_PARAMS",void 0),innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),Ma:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Oa:S("INNERTUBE_CONTEXT_HL",void 0),Na:S("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:S("XHR_APIARY_HOST",
void 0)||"",Pa:S("INNERTUBE_HOST_OVERRIDE",void 0)||""}}
function Bg(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Cg(a){this.b=a||Ag();Dg||(Dg=Eg(this.b))}
function Eg(a){return(new P(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b};b=c;b=void 0===b?{}:b;ra(b)&&(b={callback:b});b._c&&b._c.jsl&&b._c.jsl.h||Ra(b,{_c:{jsl:{h:S("GAPI_HINT_PARAMS",void 0)}}});c=b;if(c.gapiHintOverride||S("GAPI_HINT_OVERRIDE")){var d=document.location.href;if(-1!=d.indexOf("?")){var d=(d||"").split("#")[0],e=d.split("?",2);var f=af(1<e.length?e[1]:e[0])}else f={};var g=f.gapi_jsh;g&&Ra(c,{_c:{jsl:{h:g}}})}gd("client",c)}catch(h){T(h)}})).then(function(){})}
Cg.prototype.i=function(){var a=t("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Ea;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=S("SESSION_INDEX");a("googleapis.config/sessionIndex",b);t("gapi.client.setApiKey")(this.b.innertubeApiKey)};
Cg.prototype.f=function(){return{context:zg(this.b)}};
Cg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=V(function(){e||(e=!0,c.O&&c.O())},c.timeout));
Fg(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function Fg(a,b,c,d){var e={path:Bg(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":S("VISITOR_DATA")},method:"POST",body:Gd(c)},f=w(a.i,a);Dg.then(function(){f();t("gapi.client.request")(e).execute(d||u)})}
var Dg=null;function Gg(a){this.b=a||Ag()}
Gg.prototype.f=function(){return{context:zg(this.b)}};
Gg.prototype.g=function(a,b,c){!S("VISITOR_DATA")&&.01>Math.random()&&T(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":S("VISITOR_DATA","")},F:b,xa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=Dc();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=S("SESSION_INDEX",0));var f="",g=this.b.Pa;g&&(f=g);e&&!f&&(d.headers["x-origin"]=window.location.origin);nf(""+f+Bg(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};function Hg(){return U("enable_youtubei_innertube")?Gg:Cg}
;function Ig(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Pa(Jg);this.assets=a.assets||{};this.attrs=a.attrs||Pa(Kg);this.params=a.params||Pa(Lg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Jg={enablejsapi:1},Kg={},Lg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Mg(a){a instanceof Ig||(a=new Ig(a));return a}
function Ng(a){var b=new Ig,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==oa(d)?Pa(d):d}return b}
;function Og(a){O.call(this);this.b=[];this.g=a||this}
aa(Og,O);function Pg(a,b,c,d){d=ve(w(d,a.g));d={target:b,name:c,sa:d};b.addEventListener(c,d.sa,void 0);a.b.push(d)}
function Qg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.sa)}}
Og.prototype.o=function(){Qg(this);O.prototype.o.call(this)};function Rg(){this.g=this.f=this.b=0;this.i="";var a=t("window.navigator.plugins"),b=t("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(re)try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(v){g=null}else{var h=document.body;var k=document.createElement("object");k.setAttribute("type","application/x-shockwave-flash");g=h.appendChild(k)}if(g&&"GetVariable"in g)try{var m=g.GetVariable("$version")}catch(v){m=""}h&&k&&h.removeChild(k);(g=m||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
na(Rg);function Sg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Tg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ug(a){a=a||"";if(window.spf){var b=a.match(Tg);spf.style.load(a,b?b[1]:"",void 0)}else Vg(a)}
function Vg(a){var b=Wg(a),c=document.getElementById(b),d=c&&ye(c,"loaded");d||c&&!d||(c=Xg(a,b,function(){ye(c,"loaded")||(ze(c),Ie(b),V(x(He,b),0))}))}
function Xg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Wb(a);d.rel="stylesheet";d.href=a instanceof Hb&&a.constructor===Hb&&a.f===Ib?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Wg(a){var b=document.createElement("A");a=Ob(a);Rb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ba(b)}
;var X={},Yg=(X["api.invalidparam"]=2,X.auth=150,X["drm.auth"]=150,X["heartbeat.net"]=150,X["heartbeat.servererror"]=150,X["heartbeat.stop"]=150,X["html5.unsupportedads"]=5,X["fmt.noneavailable"]=5,X["fmt.decode"]=5,X["fmt.unplayable"]=5,X["html5.missingapi"]=5,X["html5.unsupportedlive"]=5,X["drm.unavailable"]=5,X);var Zg;var $g=E,$g=$g.toLowerCase();if(-1!=$g.indexOf("android")){var ah=$g.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ah)Zg=Number(ah[1]);else{var bh={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},ch=[],dh=0,eh;for(eh in bh)ch[dh++]=eh;var fh=$g.match("("+ch.join("|")+")");Zg=fh?bh[fh[0]]:0}}else Zg=void 0;var gh=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],hh=['audio/mp4; codecs="mp4a.40.2"'];var ih=t("ytLoggingLatencyUsageStats_")||{};r("ytLoggingLatencyUsageStats_",ih,void 0);var jh=0;function kh(a){ih[a]=ih[a]||{count:0};var b=ih[a];b.count++;b.time=se();jh||(jh=xf(lh,0));return 10<b.count?(11==b.count&&sf(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function lh(){var a=se(),b;for(b in ih)6E4<a-ih[b].time&&delete ih[b];jh=0}
;function mh(a,b){this.version=a;this.args=b}
;function nh(a){this.topic=a}
nh.prototype.toString=function(){return this.topic};var oh=t("ytPubsub2Pubsub2Instance")||new Q;Q.prototype.subscribe=Q.prototype.subscribe;Q.prototype.unsubscribeByKey=Q.prototype.K;Q.prototype.publish=Q.prototype.W;Q.prototype.clear=Q.prototype.clear;r("ytPubsub2Pubsub2Instance",oh,void 0);var ph=t("ytPubsub2Pubsub2SubscribedKeys")||{};r("ytPubsub2Pubsub2SubscribedKeys",ph,void 0);var qh=t("ytPubsub2Pubsub2TopicToKeys")||{};r("ytPubsub2Pubsub2TopicToKeys",qh,void 0);var rh=t("ytPubsub2Pubsub2IsAsync")||{};r("ytPubsub2Pubsub2IsAsync",rh,void 0);
r("ytPubsub2Pubsub2SkipSubKey",null,void 0);function sh(a,b){var c=t("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function th(){var a=S("TIMING_TICK_EXPIRATION");a||(a={},R("TIMING_TICK_EXPIRATION",a));return a}
function uh(){var a=th(),b;for(b in a)yf(a[b]);R("TIMING_TICK_EXPIRATION",{})}
;function vh(a,b){mh.call(this,1,arguments)}
z(vh,mh);function wh(a,b){mh.call(this,1,arguments)}
z(wh,mh);var xh=new nh("aft-recorded"),yh=new nh("timing-sent");var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var zh=y().toString();var Ah={vc:!0},Bh={ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",plid:"videoId",fmt:"playerInfo.itag",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",yt_vis:"isVisible"},Ch="ap c cver ei srt yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_docid ba cmt ncnp nr p pa paused pc prerender psc rc start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Dh=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Eh=!1;
function Fh(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}var b=Gh(),c=se();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=th();if(c=b[a])yf(c),b[a]=0;Hh()["tick_"+a]=void 0;se();U("csi_on_gel")?(b=Ih(),"_start"==a?kh("baseline_"+b)||dg("latencyActionBaselined",{clientActionNonce:b},Gg,void 0):kh("tick_"+a+"_"+b)||dg("latencyActionTicked",{tickName:a,clientActionNonce:b},Gg,void 0),a=!0):a=!1;if(a=!a)a=!t("yt.timing.pingSent_");if(a&&(b=S("TIMING_ACTION",
void 0),a=Gh(),t("ytglobal.timingready_")&&b&&a._start&&(b=Jh()))){U("tighter_critical_section")&&!Eh&&(sh(xh,new vh(Math.round(b-a._start),void 0)),Eh=!0);b=!0;c=S("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Kh()}}
function Lh(){var a=Mh().info.yt_lt="hot_bg";Hh().info_yt_lt=a;if(U("csi_on_gel"))if("yt_lt"in Bh){var b={},c=Bh.yt_lt.split(".");0<=Ca(Dh,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Ih();c=Object.keys(b).join("");kh("info_"+c+"_"+a)||(b.clientActionNonce=a,dg("latencyActionInfo",b,Gg))}else 0<=Ca(Ch,"yt_lt")||T(Error("Unknown label yt_lt logged with GEL CSI."))}
function Jh(){var a=Gh();if(a.aft)return a.aft;for(var b=S("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Kh(){uh();if(!U("csi_on_gel")){var a=Gh(),b=Mh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&pa(a[d])){var e=d.slice(1);if(e in Ah){var f=Da(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=t("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Nh(f,e),Oh(),Ph(),Qh(!1,void 0),S("TIMING_ACTION")&&R("PREVIOUS_ACTION",S("TIMING_ACTION")),R("TIMING_ACTION","")}else{var g=S("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:S("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+t("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Jh();Rh()&&"youtube"==g&&(Lh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=se();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=t("ytdebug.logTiming"))&&a(f,b);Nh(f,e,void 0);sh(yh,new wh(b.aft+(h||0),void 0))}}}
var Ph=w(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||u,Y);
function Nh(a,b,c){if(U("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||qf(a,void 0)}catch(f){qf(a,void 0)}else qf(a);Qh(!0,c)}
function Ih(){var a=Mh().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(zh)for(b=1,c=0;c<zh.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^zh.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Mh().nonce=a}return a}
function Gh(){return Mh().tick}
function Hh(){var a=Mh();"gel"in a||(a.gel={});return a.gel}
function Mh(){return t("ytcsi.data_")||Oh()}
function Oh(){var a={tick:{},info:{}};r("ytcsi.data_",a,void 0);return a}
function Qh(a,b){r("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Rh(){var a=Gh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Mh().info.yt_pvis}
;function Sh(a,b){O.call(this);this.B=this.l=a;this.U=b;this.D=!1;this.g={};this.aa=this.T=null;this.V=new Q;wd(this,x(xd,this.V));this.j={};this.L=this.ba=this.i=this.ia=this.b=null;this.X=!1;this.M=this.C=this.w=this.R=null;this.ca={};this.Da=["onReady"];this.Y=new Og(this);wd(this,x(xd,this.Y));this.ga=null;this.pa=NaN;this.Z={};Th(this);this.G("onDetailedError",w(this.Ta,this));this.G("onTabOrderChange",w(this.Fa,this));this.G("onTabAnnounce",w(this.qa,this));this.G("WATCH_LATER_VIDEO_ADDED",w(this.Ua,
this));this.G("WATCH_LATER_VIDEO_REMOVED",w(this.Va,this));Ab||(this.G("onMouseWheelCapture",w(this.Ra,this)),this.G("onMouseWheelRelease",w(this.Sa,this)));this.G("onAdAnnounce",w(this.qa,this));this.N=new Og(this);wd(this,x(xd,this.N));this.ha=!1;this.fa=null}
z(Sh,O);var Uh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=Sh.prototype;l.oa=function(a,b){this.f||(Vh(this,a),Wh(this,b),this.D&&Xh(this))};
function Vh(a,b){a.ia=b;a.b=Ng(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.U,a.b.attrs.id=a.U);a.B.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.U;a.ba||(a.ba=Yh(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.B.style.width=Yb(Number(c)||c));if(c=a.b.attrs.height)a.B.style.height=Yb(Number(c)||c)}
l.Ia=function(){return this.ia};
function Xh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Zh(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el,b=b.fflags;if(("detailpage"==c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}p(a.b.disable.flash)||(c=a.b.disable,b=Sg(Rg.getInstance(),a.b.minVersion),c.flash=!b);return!a.b.disable.flash}
function $h(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;d&&0<=d.indexOf("web_player_disable_flash_fallback=true")||b&&(5!=(Yg[b.errorCode]||5)||-1==Uh.indexOf(b.errorCode))||!Zh(a)||((d=ai(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=Mg(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Vh(a,c),Wh(a,"flash"))}
function Wh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Zh(a))){if(!p(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Zg)var d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),r("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?gh:hh,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=bi(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Zh(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function bi(a){var b=!0,c=ai(a);c&&a.b&&(a=a.b,b=ye(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
l.mb=function(){if(!this.X){var a=bi(this);if(a&&"html5"==ci(this))this.L="html5",this.D||this.P();else if(di(this),this.L="html5",a&&this.w)this.l.appendChild(this.w),this.P();else{this.b.loaded=!0;var b=!1;this.R=w(function(){b=!0;var a=this.l,d=Ng(this.b);t("yt.player.Application.create")(a,d);this.P()},this);
this.X=!0;a?this.R():(Se(this.b.assets.js,this.R),Ug(this.b.assets.css),ei(this)&&!b&&r("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=Ng(this.b);if(!this.C){var b=ai(this);b&&(this.C=document.createElement("SPAN"),this.C.tabIndex=0,Pg(this.Y,this.C,"focus",this.ua),this.M=document.createElement("SPAN"),this.M.tabIndex=0,Pg(this.Y,this.M,"focus",this.ua),b.parentNode&&b.parentNode.insertBefore(this.C,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==ci(this))this.L="flash",this.D||this.P();else{di(this);this.L=
"flash";this.b.loaded=!0;var b=Rg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Sg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=q(b)?Sb(b):b,d=Pa(a.attrs);d.tabindex=0;var e=Pa(a.params);e.flashvars=bc(a.args);if(re){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object");
for(g in d)a.setAttribute(g,d[g]);for(var f in e){var g=document.createElement("param");g.setAttribute("name",f);g.setAttribute("value",e[f]);a.appendChild(g)}}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.P()}};
l.ua=function(){ai(this).focus()};
function ai(a){var b=Sb(a.i);!b&&a.B&&a.B.querySelector&&(b=a.B.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=ai(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.X=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))$h(this);else{Th(this);this.D=!0;a=ai(this);a.addEventListener&&(this.T=fi(this,a,"addEventListener"));a.removeEventListener&&(this.aa=fi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=fi(this,a,d))}for(var e in this.j)this.T(e,
this.j[e]);Xh(this);this.ba&&this.ba(this.g);this.V.W("onReady",this.g)}else this.pa=V(w(this.P,this),50)}};
function fi(a,b,c){var d=b[c];return function(){try{return a.ga=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ga=e,T(e,"WARNING"))}}}
function Th(a){a.D=!1;if(a.aa)for(var b in a.j)a.aa(b,a.j[b]);for(var c in a.Z)window.clearTimeout(parseInt(c,10));a.Z={};a.T=null;a.aa=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=w(a.G,a);a.g.removeEventListener=w(a.bb,a);a.g.destroy=w(a.dispose,a);a.g.getLastError=w(a.Ja,a);a.g.getPlayerType=w(a.Ka,a);a.g.getCurrentVideoConfig=w(a.Ia,a);a.g.loadNewVideoConfig=w(a.oa,a);a.g.isReady=w(a.nb,a)}
l.nb=function(){return this.D};
l.G=function(a,b){if(!this.f){var c=Yh(this,b);if(c){if(!(0<=Ca(this.Da,a)||this.j[a])){var d=gi(this,a);this.T&&this.T(a,d)}this.V.subscribe(a,c);"onReady"==a&&this.D&&V(x(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=Yh(this,b);c&&ee(this.V,a,c)}};
function Yh(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var a=t(b);a&&a.apply(n,arguments)};
a.ca[b]=c}return c?c:null}
function gi(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;n[c]=function(c){var d=V(function(){if(!a.f){a.V.W(b,c);var e=a.Z,g=String(d);g in e&&delete e[g]}},0);
Oa(a.Z,String(d))};
return c}
l.Fa=function(a){a=a?Ub:Tb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.C||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.qa=function(a){Ie("a11y-announce",a)};
l.Ta=function(a){$h(this,a)};
l.Ua=function(a){Ie("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Ie("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ha){if(Eb){var a=document,b=a.scrollingElement?a.scrollingElement:kb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.fa=hb&&xb("10")&&a.pageYOffset!=b.scrollTop?new Ia(b.scrollLeft,b.scrollTop):new Ia(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Pg(this.N,window,"scroll",this.Ya);Pg(this.N,this.l,"touchmove",this.Xa)}else Pg(this.N,this.l,"mousewheel",this.va),Pg(this.N,this.l,"wheel",this.va);this.ha=
!0}};
l.Sa=function(){Qg(this.N);this.ha=!1};
l.va=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.fa.b,this.fa.f)};
l.Xa=function(a){a.preventDefault()};
l.Ka=function(){return this.L||ci(this)};
l.Ja=function(){return this.ga};
function ci(a){return(a=ai(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function di(a){Fh("dcp");a.cancel();Th(a);a.L=null;a.b&&(a.b.loaded=!1);var b=ai(a);"html5"==ci(a)?bi(a)||!ei(a)?a.w=b:(b&&b.destroy&&b.destroy(),a.w=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Qg(a.Y);a.C=null;a.M=null}
l.cancel=function(){this.R&&Re(this.b.assets.js,this.R);window.clearTimeout(this.pa);this.X=!1};
l.o=function(){di(this);if(this.w&&this.b&&this.w.destroy)try{this.w.destroy()}catch(b){T(b)}this.ca=null;for(var a in this.j)n[this.j[a]]=null;this.ia=this.b=this.g=null;delete this.l;delete this.B;Sh.A.o.call(this)};
function ei(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var hi={},ii="player_uid_"+(1E9*Math.random()>>>0);function ji(a){var b="player",b=q(b)?Sb(b):b;a=Mg(a);var c=ii+"_"+(b[ua]||(b[ua]=++va)),d=hi[c];if(d)return d.oa(a),d.g;d=new Sh(b,c);hi[c]=d;Ie("player-added",d.g);wd(d,x(ki,d));V(function(){d.oa(a)},0);
return d.g}
function ki(a){hi[a.U]=null}
;function li(a,b,c){if(sa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function mi(a,b,c){q(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return li(a)}
function ni(a,b,c,d){if(sa(a)&&!pa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};q(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function oi(a){var b=a.video_id||a.videoId;if(q(b)){var c=ig()||{},d=ig()||{};p(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=kg;if(f&&window.JSON){q(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function pi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function qi(a){O.call(this);this.g=a;this.g.subscribe("command",this.ya,this);this.i={};this.j=!1}
z(qi,O);l=qi.prototype;l.start=function(){this.j||this.f||(this.j=!0,ri(this.g,"RECEIVING"))};
l.ya=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(q(c.event)&&(c=c.event,!(c in this.i))){var d=w(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":q(c.event)&&si(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=ti(a,b||{}),c=this.b[a].apply(this.b,c),(c=ui(a,c))&&this.j&&!this.f&&ri(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&ri(this.g,a,this.ja(a,b))};
l.ja=function(a,b){if(null!=b)return{value:b}};
function si(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||ee(a.b,"command",this.ya,this);this.g=null;for(var b in this.i)si(this,b);qi.A.o.call(this)};function vi(a,b){qi.call(this,b);this.b=a;this.start()}
z(vi,qi);vi.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
vi.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function ti(a,b){switch(a){case "loadVideoById":return b=li(b),oi(b),[b];case "cueVideoById":return b=li(b),oi(b),[b];case "loadVideoByPlayerVars":return oi(b),[b];case "cueVideoByPlayerVars":return oi(b),[b];case "loadPlaylist":return b=ni(b),oi(b),[b];case "cuePlaylist":return b=ni(b),oi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function ui(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
vi.prototype.ja=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return vi.A.ja.call(this,a,b)};
vi.prototype.o=function(){vi.A.o.call(this);delete this.b};function wi(a,b,c,d){O.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.w=w(this.C,this);window.addEventListener("message",this.w)}
aa(wi,O);
wi.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&q(a.data)){try{var b=Fd(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:T(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=Ca(this.l,b.func))||this.j(b.func,
b.args))}}};
wi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Gd(a);c.postMessage(d,this.B)}catch(e){T(e,"WARNING")}}};
wi.prototype.o=function(){window.removeEventListener("message",this.w);O.prototype.o.call(this)};function xi(a,b,c){wi.call(this,a,b,c||S("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(xi,wi);function yi(){var a=!!S("WIDGET_ID_ENFORCE"),a=this.f=new xi(a),b=w(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=S("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=yi.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,zi(this,c)),this.j[c]=!0)}else this.Ba(a,b)};
l.Ba=function(){};
function zi(a,b){return w(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ha=function(){this.l=!0;this.sendMessage("initialDelivery",this.ka());this.sendMessage("onReady");C(this.i,this.Aa,this);this.i=[]};
l.ka=function(){return null};
function Ai(a,b){a.sendMessage("infoDelivery",b)}
l.Aa=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Aa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function Bi(a){yi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Wa,this));this.addEventListener("onVideoProgress",w(this.ib,this));this.addEventListener("onVolumeChange",w(this.jb,this));this.addEventListener("onApiChange",w(this.cb,this));this.addEventListener("onPlaybackQualityChange",w(this.fb,this));this.addEventListener("onPlaybackRateChange",w(this.gb,this));this.addEventListener("onStateChange",w(this.hb,this))}
z(Bi,yi);l=Bi.prototype;l.Ba=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&pi(a)){var c=b;if(sa(c[0])&&!pa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=li.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=mi.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=ni.apply(window,c)}c=d}oi(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);pi(a)&&Ai(this,this.ka())}};
l.Wa=function(){var a=w(this.Ha,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ka=function(){if(!this.b)return null;var a=this.b.getApiInterface();Fa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ai(this,a)};
l.fb=function(a){Ai(this,{playbackQuality:a})};
l.gb=function(a){Ai(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){Ai(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ai(this,a)};
l.dispose=function(){Bi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Ci(){O.call(this);this.b=new Q;wd(this,x(xd,this.b))}
z(Ci,O);Ci.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Ci.prototype.K=function(a){return this.f?!1:this.b.K(a)};
Ci.prototype.l=function(a,b){this.f||this.b.W.apply(this.b,arguments)};function Di(a,b,c){Ci.call(this);this.g=a;this.i=b;this.j=c}
z(Di,Ci);function ri(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Gd(a),d.i))}}
Di.prototype.o=function(){this.i=this.g=null;Di.A.o.call(this)};function Ei(a,b,c){O.call(this);this.b=a;this.i=c;this.j=Jf(window,"message",w(this.l,this));this.g=new Di(this,a,b);wd(this,x(xd,this.g))}
z(Ei,O);Ei.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,q(a))){try{a=Fd(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
Ei.prototype.o=function(){Kf(this.j);this.b=null;Ei.A.o.call(this)};function Fi(){var a=Pa(Gi);return new P(function(b,c){a.J=function(a){$e(a)?b(a):c(new Hi("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new Hi("Unknown request error","net.unknown"))};
a.O=function(){c(new Hi("Request timed out","net.timeout"))};
gf("//googleads.g.doubleclick.net/pagead/id",a)})}
function Hi(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(Hi,B);function Ii(a){B.call(this,a.message||a.description||a.name);this.b=a instanceof Vd}
aa(Ii,B);Ii.prototype.name="BiscottiError";function Ji(){B.call(this,"Biscotti ID is missing from server")}
aa(Ji,B);Ji.prototype.name="BiscottiMissingError";function Ki(a,b){this.f=a;this.b=b}
Ki.prototype.then=function(a,b,c){try{if(p(this.f))return a?Rd(a.call(c,this.f)):Rd(this.f);if(p(this.b)){if(!b)return Sd(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Sd(this.b):Rd(d)}throw Error("Invalid Result state");}catch(e){return Sd(e)}};
Md(Ki);var Gi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Li=null;function Mi(){if("1"===Ka(S("PLAYER_CONFIG",{}),"args","privembed"))return Sd(Error("Biscotti ID is not available in private embed mode"));Li||(Li=Ud(Fi().then(Ni),function(a){return Oi(2,a)}));
return Li}
function Ni(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ji;a=JSON.parse(a.substr(4));if((Ka(window,"settings","experiments","flags","html5_serverside_ignore_biscotti_id_on_retry")||S("EXP_HTML5_SERVERSIDE_IGNORE_BISCOTTI_ID_ON_RETRY",!1)||U("html5_serverside_ignore_biscotti_id_on_retry"))&&1<(a.type||1))throw new Ji;a=a.id;Pi(a);Li=new Ki(a);Qi(18E5,2);return a}
function Oi(a,b){var c=new Ii(b);Pi("");Li=new Ki(void 0,c);0<a&&Qi(12E4,a-1);throw c;}
function Qi(a,b){V(function(){Ud(Fi().then(Ni,function(a){return Oi(b,a)}),u)},a)}
function Pi(a){r("yt.ads.biscotti.lastId_",a,void 0)}
;function Ri(){}
function Si(a){if("1"!==Ka(S("PLAYER_CONFIG",{}),"args","privembed")){a&&!t("yt.ads.biscotti.getId_")&&r("yt.ads.biscotti.getId_",Mi,void 0);try{try{var b=t("yt.ads.biscotti.getId_");var c=b?b():Mi()}catch(d){c=Sd(d)}c.then(Ti,Ri);V(Si,18E5)}catch(d){T(d)}}}
var Ui=0;
function Ti(a){a:{try{var b=window.top.location.href}catch(G){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:lc,flash:bb||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();try{var c=A.history.length}catch(G){c=0}b.u_his=c;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=A.screen.colorDepth);A.navigator&&
A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=ab?"flash":"image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){a=window;try{var d=a.screenX;var e=a.screenY}catch(G){}try{var f=a.outerWidth;var g=a.outerHeight}catch(G){}try{var h=a.innerWidth;var k=a.innerHeight}catch(G){}k=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,k];h=window.top||A;try{if(h.document&&!h.document.body)var m=new Ja(-1,-1);else{var v=(h||window).document,D="CSS1Compat"==v.compatMode?v.documentElement:v.body;m=(new Ja(D.clientWidth,D.clientHeight)).round()}var N=m}catch(G){N=new Ja(-12245933,-12245933)}m=0;window.SVGElement&&document.createElementNS&&(m|=1);N={bc:m,bih:N.height,biw:N.width,brdim:k.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[ya.webkitVisibilityState||ya.mozVisibilityState||ya.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};
for(var ta in N)b[ta]=N[ta]}b.bsq=Ui++;nf("//www.youtube.com/ad_data_204",{La:!1,F:b})}
;function Vi(){this.b=S("ALT_PREF_COOKIE_NAME","PREF");var a=Bc.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}
na(Vi);var Z=t("yt.prefs.UserPrefs.prefs_")||{};r("yt.prefs.UserPrefs.prefs_",Z,void 0);function Wi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Xi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Yi(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Vi.prototype.get=function(a,b){Xi(a);Wi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Vi.prototype.set=function(a,b){Xi(a);Wi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Vi.prototype.remove=function(a){Xi(a);Wi(a);delete Z[a]};
Vi.prototype.clear=function(){Z={}};var Zi=null,$i=null,aj=null,bj={};function cj(a){dg(a.payload_name,a.payload,U("enable_youtubei_innertube")?Gg:Cg,void 0,void 0)}
function dj(a){var b=a.id;a=a.ve_type;var c=Qf++;a=new Pf(void 0,a,c,void 0,void 0);bj[b]=a;b=og();c=ng();b&&c&&eg(Hg(),b,c,a)}
function ej(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(R("client-screen-nonce",b),R("ROOT_VE_TYPE",a),a=ng()))for(var c in bj){var d=bj[c];if(d){var e=b,f=a;eg(Hg(),e,f,d)}}}
function fj(a){bj[a.id]=new Pf(a.tracking_params)}
function gj(a){var b=og();a=bj[a.id];if(b&&a){var c=Hg();fg(c,{click:{csn:b,visualElement:Rf(a)}},void 0,void 0)}}
function hj(a){a=a.ids;var b=og();if(b){for(var c=[],d=0;d<a.length;d++){var e=bj[a[d]];e&&c.push(e)}c.length&&gg(Hg(),b,c)}}
function ij(){var a=Zi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;r("yt.setConfig",R,void 0);r("yt.config.set",R,void 0);r("yt.setMsg",wf,void 0);r("yt.msgs.set",wf,void 0);r("yt.logging.errors.log",sf,void 0);
r("writeEmbed",function(){var a=S("PLAYER_CONFIG",void 0);Si(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=S("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);S("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&oi(a.args);Zi=a=ji(a);a.addEventListener("onScreenChanged",ej);a.addEventListener("onLogClientVeCreated",dj);a.addEventListener("onLogServerVeCreated",fj);a.addEventListener("onLogToGel",cj);
a.addEventListener("onLogVeClicked",gj);a.addEventListener("onLogVesShown",hj);a.addEventListener("onReady",ij);b=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?aj=new Bi(a):S("ENABLE_POST_API")&&q(b)&&q(c)&&($i=new Ei(window.parent,b,c),aj=new vi(a,$i.g));S("BG_P")&&(S("BG_I")||S("BG_IU"))&&Ue();Bf()},void 0);
r("yt.www.watch.ads.restrictioncookie.spr",function(a){qf(a+"mac_204?action_fcts=1");return!0},void 0);
var jj=ve(function(){Fh("ol");var a=Vi.getInstance(),b=1<window.devicePixelRatio;if(!!((Yi("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Yi(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));pg(a,b.join("&"),63072E3)}}),kj=ve(function(){var a=Zi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();S("PL_ATT")&&(Te=null);for(var a=0,b=zf.length;a<b;a++)yf(zf[a]);zf.length=0;Qe("//static.doubleclick.net/instream/ad_status.js");Af=!1;R("DCLKSTAT",0);yd(aj,$i);if(a=Zi)a.removeEventListener("onScreenChanged",ej),a.removeEventListener("onLogClientVeCreated",dj),a.removeEventListener("onLogServerVeCreated",fj),a.removeEventListener("onLogToGel",cj),a.removeEventListener("onLogVeClicked",gj),a.removeEventListener("onLogVesShown",hj),a.removeEventListener("onReady",
ij),a.destroy();bj={}});
window.addEventListener?(window.addEventListener("load",jj),window.addEventListener("unload",kj)):window.attachEvent&&(window.attachEvent("onload",jj),window.attachEvent("onunload",kj));}).call(this);
