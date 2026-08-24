//~~tv:19063.am2200.20200521
//~~tc: Adding link override support for tealium.track

//ESLint configurations
/*global utag Visitor AdCloudEvent*/
/*eslint-disable*/

var tealium_s=s_gi("vodaczdevuniversal")
tealium_s.account="vodaczdevuniversal";

/************************** CONFIG SECTION **************************/
tealium_s.trackDownloadLinks=true;
tealium_s.trackExternalLinks=true;
tealium_s.trackInlineStats=true;
tealium_s.linkInternalFilters="javascript:,vodafone.cz,vodafonesms.cz,internetdomobilu.cz,techforum.cz,pbapps.net,oskarmobil.cz,ondak.cz,s1onsc31,mediafactory.cz,vodafone.com,vodafone-eshop.beta.dev.cz,mcapps.cz,studentfone.cz,oskarta.cz,#";
tealium_s.linkLeaveQueryString=false;
tealium_s.linkTrackVars="None";
tealium_s.linkTrackEvents="None";
tealium_s.usePlugins=false;
tealium_s.currencyCode="USD"; // override default with E-Commerce Extension
tealium_s.visitorNamespace = "vodafonecz";
tealium_s.trackingServer="wa.vodafone.cz";
tealium_s.trackingServerSecure="swa.vodafone.cz";
tealium_s.charSet = "UTF-8";

tealium_s.expectSupplementalData=true;
tealium_s.debugTracking=(utag.cfg) ? utag.cfg.utagdb : false;

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 2.20.0
 Copyright 1996-2016 Adobe, Inc. All Rights Reserved
 More info available at http://www.adobe.com/marketing-cloud.html
 */
 function AppMeasurement(r){var a=this;a.version="2.20.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var q=h.AppMeasurement.hc;q||(q=null);var p=h,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!==""+s&&p.location&&""+m.location!==""+p.location&&m.location.host===s.host;)p=m,m=p.parent}catch(u){}a.C=function(a){try{console.log(a)}catch(b){}};a.Qa=function(a){return""+parseInt(a)==""+a};a.replace=function(a,
 b,d){return!a||0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Mb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);
 if(c&&!a.Ja&&!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ja=0<d?c.substring(d):c}return a.Ja};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Mb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=
 e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":"")+(a.writeSecureCookies?" secure;":""),a.cookieRead(c)==b):0};a.Jb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.wb(a,function(){}))};a.xa=function(){var a=
 navigator.userAgent;return"Microsoft Internet Explorer"===navigator.appName||0<=a.indexOf("MSIE ")||0<=a.indexOf("Trident/")&&0<=a.indexOf("Windows NT 6")?!0:!1};a.wb=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&"function"===typeof a[d]&&(a[d]=b)};a.K=[];a.ea=function(c,b,d){if(a.Ka)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==
 g){if(!a.fa)for(a.fa=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.fa=0,a.delayReady())});f=1;e=0}else d||a.u("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.fa||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.u("_d")?b=1:a.za();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ka=1;a[d.m].apply(a,
 d.a);a.Ka=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ea("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.ka.join(",")+",");else{d=a.g;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,
 1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].cc,f=a[e].bc));k&&(k=","+k+","+a.F.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,b,d,f,e){var g="",k,l,h,n,m=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){h=!1;if(m)for(l=0;l<m.length;l++)if(k.substring(0,m[l].length)==
 m[l]){h=!0;break}if(!h&&(""==g&&(g+="&"+c+"."),l=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)l=k.substring(0,h),h=(e?e:"")+l+".",m||(m=[]),m.push(h),g+=a.o(l,b,d,f,h);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),n=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Qa(n)&&("prop"==h?k="c"+n:"eVar"==h?k="v"+n:"list"==
 h?k="l"+n:"hier"==h&&(k="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Pb=function(){var c="",b,d,f,e,g,k,l,h,n="",m="",p=e="",r=a.T();if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ka.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].cc,m=a[e].bc));n&&(n=","+n+","+a.F.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));
 a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.o("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.V("ECID")&&
 (g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";
 break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e=
 "cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e=
 "hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(k=g.split(","),g="",f=0;f<k.length;f++)l=k[f],h=l.indexOf("="),0<=h&&(l=l.substring(0,h)),h=l.indexOf(":"),0<=h&&(l=l.substring(0,h)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e=
 "mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Qa(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ja&&(c+="&lrt="+a.ja,a.ja=null);return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.kc||"undefined"!=""+a.Yb&&"HTML"!=(""+a.Yb).toUpperCase())return"";
 b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ma=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,
 0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ma(c),e)?{id:e.substring(0,100),type:g}:0};a.ic=function(c){for(var b=a.B(c),d=a.L(c);c&&
 !d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Xb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.la=1;d||(a.la=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||
 0<=l.indexOf(".trackLink("))d=0}}else a.la=1;!e&&d&&(e=a.Ma(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),k=l.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(p=g[k])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Pa(l)&&
 (a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)p=g[k],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&
 b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Qb=function(){var c=a.la,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Tb()){var b={},d=0,e=a.qb(),g=e?e.split("&"):0,k,l,h,e=0;if(g)for(k=0;k<g.length;k++)l=g[k].split("="),
 f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.o("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(h=0;h<f.length;h++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),k=0;k<b[l].length;k++)g=b[l][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":
 "")+l+"&u=0"),b[l].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(l in b)!Object.prototype[l]&&0<k&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),k--);a.yb(e)}}}return c};a.qb=function(){if(a.useLinkTrackSessionStorage){if(a.Da())return h.sessionStorage.getItem(a.P)}else return a.cookieRead(a.P)};a.Da=function(){return h.sessionStorage?!0:!1};a.yb=function(c){a.useLinkTrackSessionStorage?a.Da()&&h.sessionStorage.setItem(a.P,
 c):a.cookieWrite(a.P,c)};a.Rb=function(){if(!a.ac){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",l="1.2",h=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
 g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.jc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=h;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=m;a.ac=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+
 c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.jb=function(){return d.tb};d.zb=function(b){if(d.tb=b)a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.jb,set:d.zb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ea(c+"_onLoad",[a,d],1)||b(a,d))};a.u=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Tb=function(){return a.ActivityMap&&
 a.ActivityMap._c?!0:!1};a.Ub=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.S=function(c,b){var d,f,e,g,k,h,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Fa:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(k&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||
 (k[h]=a[g][h]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=k}return m};a.gc=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Fa:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==
 e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"useBeacon"!==e&&"linkObject"!==e&&"clickObject"!==e&&"linkType"!==e&&"linkName"!==e&&"linkURL"!==e&&"bodyClickTarget"!==e&&"bodyClickFunction"!==e||(c["!"+e]=1)};a.Lb=function(a){var b,d,f,e,g,k=0,h,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,
 d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")?k=",p,ei,":0<=e.indexOf("baidu.")&&(k=",wd,word,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?h=m+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.cb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange",
 "visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ba=!1;a.H=!1;a.Bb=function(){a.H=!0;a.p()};a.I=!1;a.Cb=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.I=!1;a.p()};a.bb=function(c){a.maxDelay||
 (a.maxDelay=250);return a.u("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Z=!1;a.G=!1;a.za=function(){a.G=!0;a.p()};a.isReadyToTrack=function(){var c=!0;if(!a.nb()||!a.lb())return!1;a.pb()||(c=!1);a.sb()||(c=!1);return c};a.nb=function(){a.ba||a.H||(a.cb(a.Bb)?a.H=!0:a.ba=!0);return a.ba&&!a.H?!1:!0};a.lb=function(){var c=a.va();if(c)if(a.ra||a.aa)if(a.ra){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.ub,!0),a.aa=!0,!1;return!0};a.V=
 function(c){var b=a.va();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.va=function(){return h.adobe&&h.adobe.optIn?h.adobe.optIn:null};a.Y=!0;a.pb=function(){var c=a.T();if(!c||!c.getVisitorValues)return!0;a.Y&&(a.Y=!1,a.I||(a.I=!0,c.getVisitorValues(a.Cb)));return!a.I};a.T=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.sb=function(){a.Z||a.G||(a.bb(a.za)?a.G=!0:a.Z=!0);return a.Z&&!a.G?!1:!0};a.aa=!1;a.ub=function(){a.aa=!1;a.ra=!0};a.j=q;a.q=0;a.callbackWhenReadyToTrack=
 function(c,b,d){var f;f={};f.Gb=c;f.Fb=b;f.Db=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.q&&(a.q=setInterval(a.p,100))};a.p=function(){var c;if(a.isReadyToTrack()&&(a.Ab(),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Fb.apply(c.Gb,c.Db)};a.Ab=function(){a.q&&(clearInterval(a.q),a.q=0)};a.ta=function(c){var b,d={};a.gc(d);if(c!=q)for(b in c)d[b]=c[b];a.callbackWhenReadyToTrack(a,a.Ea,[d]);a.Ca()};a.Nb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=
 Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.Ea=function(c){var b=new Date,d="s"+Math.floor(b.getTime()/108E5)%10+Math.floor(1E13*Math.random()),f=b.getYear(),f="t="+a.escape(b.getDate()+"/"+b.getMonth()+"/"+(1900>f?f+1900:f)+" "+b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+" "+b.getDay()+" "+b.getTimezoneOffset()),e=a.T(),g;c&&(g=a.S(c,1));
 a.Ub()&&!a.visitorOptedOut&&(a.wa()||(a.fid=a.Nb()),a.Xb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(b.getTime()/1E3)),c=h.location,a.pageURL||(a.pageURL=c.href?c.href:c),a.referrer||a.Za||(c=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=c||void 0===c?void 0===c?"":c:p.document.referrer),a.Za=1,a.referrer=a.Lb(a.referrer),a.u("_g")),a.Qb()&&!a.abort&&(e&&a.V("TARGET")&&!a.supplementalDataID&&e.getSupplementalDataID&&
 (a.supplementalDataID=e.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.V("AAM")||(a.contextData["cm.ssf"]=1),a.Rb(),a.vb(),f+=a.Pb(),a.rb(d,f),a.u("_t"),a.referrer="")));a.Ca();g&&a.S(g,1)};a.t=a.track=function(c,b){b&&a.S(b);a.Y=!0;a.isReadyToTrack()?null!=a.j&&0<a.j.length?(a.ta(c),a.p()):a.Ea(c):a.ta(c)};a.vb=function(){a.writeSecureCookies&&!a.ssl&&a.$a()};a.$a=function(){a.contextData.excCodes=a.contextData.excCodes?a.contextData.excCodes:[];a.contextData.excCodes.push(1)};
 a.Ca=function(){a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=a.useBeacon=a.referrer=0;a.contextData&&a.contextData.excCodes&&(a.contextData.excCodes=0)};a.Ba=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPreTrackCallback")};
 a.gb=function(c){a.ua(a.Ba,c)};a.Aa=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Aa.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPostTrackCallback")};a.fb=function(c){a.ua(a.Aa,c)};a.ua=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.C(g.message)}}};a.tl=
 a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.bodyClickTarget=c,a.bodyClickFunction=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||
 "purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.rb=function(c,b){var d=a.hb()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.ya()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.gb(d);a.eb(d);a.U()};a.hb=function(){var c=a.ib();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.ya()?"10":"1")+"/JS-"+a.version+(a.$b?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")};a.ya=function(){return a.AudienceManagement&&
 a.AudienceManagement.isReady()||0!=a.usePostbacks};a.ib=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.kb()+"."+c+".2o7.net");return b};a.kb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Ya=/{(%?)(.*?)(%?)}/;a.fc=RegExp(a.Ya.source,"g");a.Kb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=
 c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.fc),e=0;e<f.length;++e){var g=f[e],k=g.match(a.Ya),h="";"%"==k[1]&&"timezone_offset"==k[2]?h=(new Date).getTimezoneOffset():"%"==k[1]&&"timestampz"==k[2]&&(h=a.Ob());d.c=d.c.replace(g,a.escape(h))}}};a.Ob=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
 (0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.pa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Kb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=
 c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.pa[d.id]=new Image,a.pa[d.id].alt="",a.pa[d.id].src=d.c)}};a.eb=function(c){a.i||a.Sb();a.i.push(c);a.ia=a.A();a.Xa()};a.Sb=function(){a.i=a.Vb();a.i||(a.i=[])};a.Vb=function(){var c,b;if(a.oa()){try{(b=h.localStorage.getItem(a.ma()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.oa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Na=function(){var c=
 0;a.i&&(c=a.i.length);a.l&&c++;return c};a.U=function(){if(a.l&&(a.v&&a.v.complete&&a.v.D&&a.v.R(),a.l))return;a.Oa=q;if(a.na)a.ia>a.N&&a.Va(a.i),a.qa(500);else{var c=a.Eb();if(0<c)a.qa(c);else if(c=a.La())a.l=1,a.Wb(c),a.Zb(c)}};a.qa=function(c){a.Oa||(c||(c=0),a.Oa=setTimeout(a.U,c))};a.Eb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Ta;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.La=function(){if(0<a.i.length)return a.i.shift()};a.Wb=function(c){if(a.debugTracking){var b=
 "AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.C(b)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(v){t=null}t&&"y"==t.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.W=function(a){return h.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Zb=function(c){var b,d,f;a.mb(c)&&(d=1,b={send:function(c){a.useBeacon=!1;navigator.sendBeacon(c)?b.R():b.ga()}});
 !b&&a.wa()&&2047<c.length&&(a.ab()&&(d=2,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.Ga=!0:b=0));!b&&a.ec&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||
 "undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=q}));b.Ua=Date.now();b.Ia=function(){try{b.D&&(clearTimeout(b.D),b.D=0)}catch(a){}};b.onload=b.R=function(){b.Ua&&(a.ja=Date.now()-b.Ua);a.fb(c);b.Ia();a.Ib();a.ca();a.l=0;a.U();if(b.Ga){b.Ga=!1;try{a.doPostbacks(a.W(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.ga=function(){b.Ia();(a.trackOffline||a.na)&&a.l&&a.i.unshift(a.Hb);a.l=0;a.ia>a.N&&a.Va(a.i);a.ca();a.qa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==
 b.status?b.R():b.ga())};a.Ta=a.A();if(1===d)b.send(c);else if(2===d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,3===d){if(a.Ra)try{f.removeChild(a.Ra)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ra=a.v}b.D=setTimeout(function(){b.D&&(b.complete?b.R():(a.trackOffline&&b.abort&&b.abort(),b.ga()))},5E3);a.Hb=c;a.v=h["s_i_"+a.replace(a.account,",","_")]=
 b;if(a.useForcedLinkTracking&&a.J||a.bodyClickFunction)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.da=setTimeout(a.ca,a.forcedLinkTrackingTimeout)};a.mb=function(c){var b=!1;navigator.sendBeacon&&(a.ob(c)?b=!0:a.useBeacon&&(b=!0));a.xb(c)&&(b=!1);return b};a.ob=function(a){return a&&0<a.indexOf("pe=lnk_e")?!0:!1};a.xb=function(a){return 64E3<=a.length};a.ab=function(){return"undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?!0:!1};a.Ib=function(){if(a.oa()&&
 !(a.Sa>a.N))try{h.localStorage.removeItem(a.ma()),a.Sa=a.A()}catch(c){}};a.Va=function(c){if(a.oa()){a.Xa();try{h.localStorage.setItem(a.ma(),h.JSON.stringify(c)),a.N=a.A()}catch(b){}}};a.Xa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.La()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};
 a.Pa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.$b=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.S(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=
 0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+
 c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){return document.documentMode?document.documentMode:a.xa()?7:null}};a.F="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
 a.g=a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ka="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ka.slice(0);a.Fa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
 for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.O.push("prop"+m)),a.g.push("eVar"+m),a.O.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.F=a.F.concat(m);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.writeSecureCookies=
 !1;a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";a.P="s_sq";a.Ta=0;a.ia=0;a.N=0;a.Sa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;a.ca=function(){a.da&&(h.clearTimeout(a.da),a.da=q);a.bodyClickTarget&&a.J&&a.bodyClickTarget.dispatchEvent(a.J);a.bodyClickFunction&&("function"==typeof a.bodyClickFunction?a.bodyClickFunction():a.bodyClickTarget&&a.bodyClickTarget.href&&(a.d.location=a.bodyClickTarget.href));a.bodyClickTarget=
 a.J=a.bodyClickFunction=0};a.Wa=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ha)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.Ha=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
 0;else{var k=a.M=a.clickObject;a.ha&&(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Na();a.track();if(f<a.Na()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Pa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
 c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.bodyClickTarget=c.target,a.J=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||
 0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ha=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Wa,30)};a.ec=a.xa();a.Jb();a.lc||(r?a.setAccount(r):a.C("Error, missing Report Suite ID in AppMeasurement initialization"),a.Wa(),a.loadModule("ActivityMap"))}
 function s_gi(r){var a,h=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(h)for(q=0;!t&&q<h.length;){a=h[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
 function s_pgicq(){var r=window,a=r.s_giq,h,q,p;if(a)for(h=0;h<a.length;h++)q=a[h],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();

// Integrate Module

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

// End Integrate Module

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(h){function q(){var a=f.pageYOffset+(f.innerHeight||0);a&&a>+g&&(g=a)}function r(){if(e.scrollReachSelector){var a=h.d.querySelector&&h.d.querySelector(e.scrollReachSelector);a?(g=a.scrollTop||0,a.addEventListener("scroll",function(){var d;(d=a&&a.scrollTop+a.clientHeight||0)>g&&(g=d)})):0<w--&&setTimeout(r,1E3)}}function l(a,d){var c,b,n;if(a&&d&&(c=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<c.length&&(b=c[n++]);)if(-1<a.indexOf(b))return null;p=1;return a}
function s(a,d,c,b,e){var f,k;if(a.dataset&&(k=a.dataset[d]))f=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+c))f=k;else if(k=a.getAttribute(c))f=k;if(!f&&h.useForcedLinkTracking&&e){var g;a=a.onclick?""+a.onclick:"";varValue="";if(b&&a&&(d=a.indexOf(b),0<=d)){for(d+=b.length;d<a.length;)if(c=a.charAt(d++),0<="'\"".indexOf(c)){g=c;break}for(k=!1;d<a.length&&g;){c=a.charAt(d);if(!k&&c===g)break;"\\"===c?k=!0:(varValue+=c,k=!1);d++}}(g=varValue)&&(h.w[b]=g)}return f||e&&h.w[b]}function t(a,d,
c){var b;return(b=e[d](a,c))&&(p?(p=0,b):l(m(b),e[d+"Exclusions"]))}function u(a,d,c){var b;if(a&&!(1===(b=a.nodeType)&&(b=a.nodeName)&&(b=b.toUpperCase())&&x[b])&&(1===a.nodeType&&(b=a.nodeValue)&&(d[d.length]=b),c.a||c.t||c.s||!a.getAttribute||((b=a.getAttribute("alt"))?c.a=b:(b=a.getAttribute("title"))?c.t=b:"IMG"==(""+a.nodeName).toUpperCase()&&(b=a.getAttribute("src")||a.src)&&(c.s=b)),(b=a.childNodes)&&b.length))for(a=0;a<b.length;a++)u(b[a],d,c)}function m(a){if(null==a||void 0==a)return a;
try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=h;var f=window;f.s_c_in||(f.s_c_il=[],f.s_c_in=0);e._il=f.s_c_il;e._in=f.s_c_in;e._il[e._in]=e;f.s_c_in++;
e._c="s_m";var g=0,v,w=60;e.c={};var p=0,x={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,c,b=h.contextData,e=h.linkObject;(a=h.pageName||h.pageURL)&&(d=t(e,"link",h.linkName))&&(c=t(e,"region"))&&(b["a.activitymap.page"]=a.substring(0,255),b["a.activitymap.link"]=128<d.length?d.substring(0,128):d,b["a.activitymap.region"]=127<c.length?c.substring(0,127):c,0<g&&(b["a.activitymap.xy"]=10*Math.floor(g/10)),b["a.activitymap.pageIDType"]=h.pageName?1:0)};e._d=function(){e.trackScrollReach&&
!v&&(e.scrollReachSelector?r():(q(),f.addEventListener&&f.addEventListener("scroll",q,!1)),v=!0)};e.link=function(a,d){var c;if(d)c=l(m(d),e.linkExclusions);else if((c=a)&&!(c=s(a,"sObjectId","s-object-id","s_objectID",1))){var b,f;(f=l(m(a.innerText||a.textContent),e.linkExclusions))||(u(a,b=[],c={a:void 0,t:void 0,s:void 0}),(f=l(m(b.join(""))))||(f=l(m(c.a?c.a:c.t?c.t:c.s?c.s:void 0)))||!(b=(b=a.tagName)&&b.toUpperCase?b.toUpperCase():"")||("INPUT"==b||"SUBMIT"==b&&a.value?f=l(m(a.value)):"IMAGE"==
b&&a.src&&(f=l(m(a.src)))));c=f}return c};e.region=function(a){for(var d,c=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=s(a,c,c,c))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*eslint-enable*/


//tealium universal tag - utag.sender.19063.am161 v4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try{
  (function(id,loader){

    /**
     * Tealium VisitorAPIWrapper v1.0
     */
    window.utag.tagsettings = window.utag.tagsettings || {};
    window.utag.tagsettings.adobe = window.utag.tagsettings.adobe || {};
    var vAPI = window.utag.tagsettings.adobe.visitorAPI = window.utag.tagsettings.adobe.visitorAPI || (function() { return {getInstance : function(orgID, callback) {
        if (orgID) {
          utag.DB("["+u.id+"] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
        }
        return callback();
      }}; }());

    var u = {"id" : id};
    u.queue = [];
    utag.o[loader].sender[id] = u;
    u.ev={'view':1,'link':1,'video':1};
    u.o=tealium_s;
    u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i;}
    u.combineLinkVar = false;
    u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};

    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf
    u.typeCheck = function(linkTrack, type){
      if(u.typeOf(linkTrack) === "string"){
        u[type] = linkTrack.split(",");
      }else if(u.typeOf(linkTrack) === "array"){
        u[type] = linkTrack;
      }else{
        u[type] = [];
      }
    }

    u.hasadobeView = function (){
      if (utag.ut.adobeViewScriptRequested) {
        return true;
      }
      var i, s = document.getElementsByTagName("script");
      for (i = 0; i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("https://www.everestjs.net/static/le/last-event-tag-latest.min.js") >= 0) {
          return true;
        }
      }
      return false;
    };

  u.map={"sc_dynamicAccountListUniversal":"s_account","sc_dynamicAccountMatch":"dynamicAccountMatch","sc_dynamicAccountSelection":"dynamicAccountSelection","sc_trackInlineStats":"trackInlineStats","sc_trackExternalLinks":"trackExternalLinks","page_name":"pageName","page_hierarchy":"hier1","page_channel":"channel","page_type_404":"pageType","search_terms":"prop1","search_results":"prop2","search_category":"prop3","page_type":"prop5","visitor_login_status":"eVar25","visitor_type":"eVar26","visitor_subscription_type":"eVar38","visitor_business_type":"prop10","visitor_new_or_repeat":"eVar24","page_time_code":"eVar30","visitor_days_since_last_visit":"eVar28","page_errors":"eVar96","page_device_name":"contextData.a.DeviceName","visitor_marketing_cloud_id":"prop20","page_site_section_lvl_2":"prop21","page_site_section_lvl_3":"prop22","page_site_section_lvl_4":"prop23","tealium_utag_version":"contextData.a.AppID","channel_channel_path":"prop26","visitor_visit_number":"eVar243","page_folds_seen_available":"prop48","visitor_business_name":"eVar12","page_language":"prop7","page_previous_name":"eVar8","visitor_title_dob":"prop33","product_compared":"eVar187","channel_channel":"prop35","search_terms_stacked":"eVar4","search_term_and_clickthrough_page":"eVar146","page_scroll_percent":"prop18","visitor_id_adobe":"eVar53","transaction_coupon_code":"eVar34","visitor_id_asset_active":"eVar15,prop46","personalisation_properties":"prop49","page_virtual":"prop73","page_server":"prop72","page_platform":"eVar19","service_worldmanuals_module":"prop52","page_article_name":"eVar49","support_cause_name":"eVar31","support_topic_name":"eVar244","page_previous_scroll":"prop71","purchase_id":"purchaseID","visitor_state":"state","visitor_zip":"zip","campaign_id":"campaign","search_terms_evar":"eVar1","visitor_id_account":"eVar18","form_name":"eVar126","page_download_name":"eVar93","sales_product_stock_online":"eVar25","sales_product_stock_store":"eVar26","campaign_internal_id":"eVar160","transaction_store_id":"eVar71","sales_shop_product_filter_evar":"eVar33","sales_order_type":"eVar194","transaction_shipping_type":"eVar32","sales_product_combo":"eVar34","transaction_payment_type":"eVar35","campaign_keywords":"eVar38","visitor_registration_type":"eVar41","sales_distance_to_prefered_store":"eVar42","visitor_email_id":"eVar116","chat_agent_name":"eVar176","chat_conversation_id":"eVar179","visitor_intent":"eVar177","tool_type":"eVar92","sales_contract_duration":"eVar51","chat_closure_reason":"eVar54","sales_bundle_sku":"eVar55","campaign_channel_history":"eVar195","video_name":"eVar29","survey_rating_segment":"eVar198","survey_id":"eVar197","page_form_fields":"prop43","campaign_cvm_id":"eVar163","tobi_session_id":"eVar179","chat_topic":"eVar175","personalisation_campaign":"eVar170","personalisation_experience":"eVar171","visitor_employee_id":"eVar190","consents_modified":"eVar52","page_banner_impression":"list1","form_error_fields":"list2","survey_responses":"list3","contextData":"contextData","sc_linkTrackEvents":"linkTrackEvents","sc_linkTrackVars":"linkTrackVars","s_abort":"abort","consents_actual":"eVar20","form_step_name":"prop42","event_name:form_start":"event21","event_name:form_step":"event38","event_name:visitor_login_complete":"event26","event_name:page_load_event":"event208","event_name:journey_start":"event27","event_name:journey_end":"event28","event_name:visitor_permission_enable":"event56","event_name:visitor_permission_disable":"event57","event_name:visitor_register":"event25,event25","event_name:form_end":"event22","event_name:form_error":"event23","event_name:tool_end":"event61","event_name:page_filter_zero_results":"event16","event_name:transaction_complete":"event210","event_name:transaction_cancelled":"event211","event_name:chat_closed_agent":"event212","event_name:chat_closed_customer":"event213","event_name:purchase":"purchase","event_name:prodView":"prodView","event_name:scOpen":"scOpen","event_name:scAdd":"scAdd","event_name:scRemove":"scRemove","event_name:scView":"scView","event_name:scCheckout":"scCheckout","event_name:product_price_recurrence_amount":"event107","event_name:product_price_recurrence_number":"event109","event_name:search_refine":"event2","event_name:video_views":"event7","event_name:ui_interaction":"event100","event_name:visitor_login_exupc":"event183","event_name:search_results_clickthrough":"event4","event_name:page_article_view":"event185","event_name:visitor_browser_thirdpartycookies_enabled":"event204","event_name:visitor_browser_thirdpartycookies_disabled":"event205","event_name:search_apply":"event1","event_name:visitor_login_email":"event184","event_name:visit_ok":"event181","event_name:visit_nok":"event182","event_name:chat_start":"event43","event_name:chat_end":"event42","event_name:support_rating_positive":"event34","event_name:support_rating_negative":"event35","event_name:visitor_identity_switch":"event186","_sm_167_102":"prop8,prop9,prop11,prop22,prop23,prop21,prop12,prop27,prop15,prop31,prop32,prop50,eVar16,prop40,eVar240,prop16,eVar60,eVar102,eVar101,eVar27,eVar127,prop41,prop36,prop4,eVar145,eVar45,eVar107,eVar65,prop37,eVar43,eVar120","transaction_type":"eVar73","transaction_status":"eVar59","form_error":"eVar128","sales_acquisition_or_retention":"eVar131","journey_name":"eVar121","journey_type":"eVar122","visitor_id_asset_primary":"eVar36","tool_name":"eVar91","_sm_167_111":"VALUE_event99","page_load_time":"VALUE_event207","transaction_total":"VALUE_event111","transaction_total_op":"VALUE_event214","transaction_contract_value":"VALUE_event215","chat_waiting_queue":"VALUE_event216","page_ab_testing_id":"eVar57","visitor_id_intent":"eVar182","visitor_transaction_id":"eVar199","visitor_id_click_advertising":"eVar220","advertising_platform_id":"eVar221","visitor_login_type":"eVar22","sales_products":"products","sales_products_universal":"products","_sm_167_125":"eVar6","_sm_167_126":"eVar7","event_category":"eVar56","page_url":"pageURL"};
  u.extend=[function(a,b){
try{b['_sm_167_102']="";}catch(e){utag.DB(e);}
try{b['_sm_167_111']=document.cookie.length;}catch(e){utag.DB(e);}
try{b['_sm_167_125']=navigator.languages.toString();}catch(e){utag.DB(e);}
try{b['_sm_167_126']="CZ";}catch(e){utag.DB(e);}
},
function(a,b){ try{ if(1){
if (typeof b.sales_shipping_payment !== "undefined") {
    b.transaction_shipping_type = b.sales_shipping_payment.split(":")[0];
    b.transaction_payment_type = b.sales_shipping_payment.split(":")[1];
}    
tealium_s.eVar12 = s.eVar12 = "";
b.journey_name = b.service_application_name;
tealium_s.eVar18 = s.eVar18 = "";
b.journey_type = b.service_application_type;
tealium_s.eVar19 = s.eVar19 = "";
tealium_s.prop42 = s.prop42 = "";
tealium_s.prop28 = s.prop28 = "";
if (typeof b.page_ab_testing_id !== "undefined") {
    b.event_category = "ab test";
    b.event_label = b.page_ab_testing_id;
}
if (typeof b.page_ipap_click !== "undefined") {
    b.event_category = "ipap click";
    b.event_label = b.page_ipap_click;
}
if ((typeof b.visitor_intent !== "undefined")&&(/^[S\d][C\d]/.test(b.visitor_intent))) {
    b.visitor_id_intent = b.visitor_intent;
    b.visitor_intent = "";
}
if (typeof b.tobi_session_id !== "undefined") {
    b.chat_conversation_id = b.tobi_session_id; 
}
if (typeof b.chat_id !== "undefined") {
    b.chat_conversation_id = b.chat_id; 
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['site_udl'].toString().toLowerCase()=='native'.toLowerCase()){
utag.ut.merge(utag_data, {
    page_name : b.page_name,
    page_server : b.page_server
}, 1);

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if ("undefined" !== typeof utag.data.isDoPluginsProcessed) {
    return;
}
if (('undefined' !== typeof utag.data.site_udl) && (utag.data.site_udl==="native")) {
var s = window.s;
s.pageName = b.page_name;
var analyticsDataLocal = [];
if (typeof b.page_name !== 'undefined') {
    analyticsDataLocal["pageName"] = b.page_name;
} else {   
    analyticsDataLocal["pageName"] = "";
}    
window.analyticsData.push(
    {
        type: 't',
        data: analyticsDataLocal
    }
);
if (('undefined' !== typeof window.analyticsData) && (window.analyticsData.length > 0)) {
    for (var j in window.analyticsData) {
        if (!window.analyticsData.hasOwnProperty(j)) {
            continue;
        }
        var dataprocessed = window.utag.extn.preprocessor.init(
            window.analyticsData[j].data,
            window.utag.extn.preprocessor.instance,
            window.analyticsData[j].linkdata
        );
        if (dataprocessed.events) {
            // short term hack to preserve page events (no translation)
            dataprocessed.sc_events = {};
            var eventdata = dataprocessed.events.split(",");
            for (var i in eventdata) {
                if (!eventdata.hasOwnProperty(i)) {
                    continue;
                }
                dataprocessed.sc_events[eventdata[i]] = 1;
            }
        }

    }
    window.analyticsData = [];
}
}
utag.data.isDoPluginsProcessed = "true";
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if ((typeof utag.data.consents_actual !== "undefined")&&(typeof b.consents_actual === "undefined")) {
    for (prop in utag_data) {
        if (utag_data.hasOwnProperty(prop) && !b[prop]) {
            b[prop] = utag_data[prop];
        }
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/*
 * @author: kevin thomas faurholt - tealium, inc
 * 
 * 1. SITECATALYST : config
 * 
 * extension: 1.sitecatalyst-initialize-tracking-instance
 * 
 * apply the processor plugins to the tracking instance so that the doplugins method works
 * on subsequent requests, potentially inline requests, to s.t() and s.tl()
 * 
 * scope: sitecatalyst only
 */
// Tealium integration start /////////////////////////////////////////
var s_account = b.sc_dynamicAccountList ? b.sc_dynamicAccountList : window.s_account;
window.s_account = window.s_accountm ? window.s_accountm : window.s_account;
b.sc_dynamicAccountList = window.s_account;
var s = window.tealium_s = window.tealium_s || {};
// redirect s_gi back to dummy version
window.s_gi = function() {
    return window.s;
};
  

/*
* Load AudienceManagement Module *
if (utag.cond[67] && utag.cond[72]) {
    tealium_s.loadModule('AudienceManagement');
}
*/
window.tealium_s.usePlugins = (window.utag.extn.preprocessor.targetinstance.usePlugins === true);
window.tealium_s.load_s_doPlugins = window.utag.extn.preprocessor.targetinstance.load_s_doPlugins;
/*
// AUDIENCE MANAGEMENT INTEGRATION START ///////////////////////////////////////
// this doPlugins is added only to initialize modules required for the tracking instance
window.tealium_s.usePlugins = true;
window.visitor = window.visitor || Visitor.getInstance("3E463FE452A647F00A490D45@AdobeOrg");
window.tealium_s.doPlugins = function(tealium_s) {
    if (tealium_s.AudienceManagement && tealium_s.AudienceManagement.setup) {
        try {
            var AAMDomain = "vodafone.cz";
            if (document.location.host.indexOf("cilichili") !== -1) {
                AAMDomain = "cilichili.cz";
            }
            if (document.location.host.indexOf("oskarta") !== -1) {
                AAMDomain = "oskarta.cz";
            }
            tealium_s.AudienceManagement.setup({
                "partner": "vodafonecz",
                "containerNSID": 0,
                "uuidCookie": {
                    "name": "aam_uuid",
                    "days": 120,
                    "domain": AAMDomain,
                    "secure": true,
                    "samesite": "none"
                },
                "visitorService": {
                    "namespace":  visitor.marketingCloudOrgID
                }
            });
        } catch (e) {
            utag.DB('Error in AAM config');
        }
    }
};
// AUDIENCE MANAGEMENT INTEGRATION END /////////////////////////////////////////
*/
window.utag.extn = window.utag.extn || {};
window.utag.extn.preprocessor = window.utag.extn.preprocessor || {};
var property;
for (property in window.utag.extn.preprocessor.targetinstance) {
    if (window.utag.extn.preprocessor.targetinstance.hasOwnProperty(property)) {
        if (property === "contextData" || window.tealium_s[property] === undefined) {
            window.tealium_s[property] = window.utag.extn.preprocessor.targetinstance[property];
        }
    }
}
// Tealium integration end ///////////////////////////////////////////
// PROCESSING RULES REQUIREMENTS ///////////////////////////////////////////////
if (b.sc_playbook) {
    s.contextData["playbook"] = b.sc_playbook;
} else {
    s.contextData["error_message"] = "missing playbook";
}
////////////////////////////////////////////////////////////////////////////////
try {
    s.server = window.location.host;
    if (s.server.indexOf("cilichili.cz") != -1) {
        s.trackingServer="wa.cilichili.cz";
        s.trackingServerSecure="swa.cilichili.cz";      
    }
    if (s.server.indexOf("oskarta.cz") != -1) {
        //s.trackingServer="wa.oskarta.cz"; temporary fix for oskarta.cz due to ssl certificate invalid date
        //s.trackingServerSecure="swa.oskarta.cz"; temporary fix for oskarta.cz due to ssl certificate invalid date
        s.trackingServer="wa.vodafone.cz";
        s.trackingServerSecure="swa.vodafone.cz";
      }
    s.charSet = "UTF-8";
    s.currencyCode = "CZK";
    s.server = window.location.host;
    s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls"
    s.linkInternalFilters = "javascript:,oskarmobil.cz,ondak.cz,s1onsc31,mediafactory.cz,dev.cz,mcapps.cz,ptejtese1.custhelp.com,samoobsluha-preprod.vodafone.cz,preshop.vodafone.cz,www-uat3.vodafone.cz,superkoderi.cz,.vodafone.cz";
    s.trackExternalLinks = true;
    s.useForcedLinkTracking = true;
    s.trackInlineStats = true;
    s.linkLeaveQueryString = false;
    s.linkTrackVars = "None";
    s.linkTrackEvents = "None";
    if ((window.location.host.indexOf("onenetms.vodafone.cz") != -1) || (window.location.host.indexOf("samoobsluha.f20") != -1)) {
        s.trackExternalLinks = false;
        s.useForcedLinkTracking = false;
        s.trackInlineStats = false;
    }
    window.s_env = "vodaczdevaligned";
    if (s_account.indexOf("dev") == -1) {
        s_env = "vodaczprodaligned";
    }
    if (s_account.indexOf("vodaczdev") == -1) /*||((s.dynamicAccountSelection==true)&&(s_env.indexOf("vodaczdev")==-1))*/ {
        s.linkInternalFilters = "javascript:,.vodafone.cz,vodafonesms.cz,internetdomobilu.cz,techforum.cz,pbapps.net,mcapps.cz,oskarta.cz,cilichili.cz,ipap,inet,partnerinfo,vodafone.jobs.cz,upczone.cz,dostupnyinternet.cz";
    }
    // time parting setup
    // Change below if EU law on DST start/end dates changes
    s.currentYear = new Date().getFullYear();
    var d = new Date(s.currentYear, 2, 31);
    s.dstStart = "03/" + (31 - d.getDay()) + "/" + s.currentYear;
    d = new Date(s.currentYear, 9, 31);
    s.dstEnd = "10/" + (31 - d.getDay()) + "/" + s.currentYear;
    /* WorldManuals */
    /* WorldManuals config */
    s.wm_topFrameVars = "pageName,channel,prop20,prop21,prop22,prop23,hier1";
    //s.wm_topFrameVars="pageName,channel,prop20,prop11,prop22,prop23,hier1";
    s.wm_vars = "pageName,prop1,prop2,prop3,eVar1,eVar2,eVar3,prop19,eVar62,prop51,eVar63,prop52,eVar64,prop53,eVar65,prop54,eVar66,eVar18,eVar19,events"
    //s.wm_vars="pageName,prop10,prop60,eVar56,prop51,eVar63,prop52,eVar64,prop53,eVar65,prop54,eVar66,eVar67,eVar68,events"
    s.WM_VARS = s.wm_vars.split(",");
    s.wmCookie = "";
    s.wmCookieName = "sc_wmvars";
    s.wmDefaultChannel = "worldmanuals";
    /* /WorldManuals config */
    /* prevent from sub-sequent executions */
} catch (err) {
    s.contextData['error_message'] = "s_code:error config section";
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['page_language'].toString().toLowerCase().indexOf('cs'.toLowerCase())>-1){b['page_language']='CZ'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if((typeof b['js_page.thirdPartCookiesSupport']!='undefined'&&typeof b['page_events']!='undefined'&&b['page_events'].toString().indexOf('event204')<0&&b['page_events'].toString().indexOf('event205')<0)||(typeof b['js_page.thirdPartCookiesSupport']!='undefined'&&typeof b['page_events']=='undefined')){try{b['page_events']=((typeof b.page_events === "undefined" || b.page_events == "" )? "": b.page_events + "," ) + "event20" + (b["js_page.thirdPartCookiesSupport"] ? "4" : "5")}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if((typeof b['js_page.thirdPartCookiesSupport']!='undefined'&&typeof b['page_events']!='undefined'&&b['page_events'].toString().indexOf('event224')<0&&b['page_events'].toString().indexOf('event225')<0)||(typeof b['js_page.thirdPartCookiesSupport']!='undefined'&&typeof b['page_events']=='undefined')){try{b['page_events']=((typeof b.page_events === "undefined" || b.page_events == "" )? "": b.page_events + "," ) + "event22" + (navigator.cookieEnabled ? "4" : "5")}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
if (typeof tealium_s.p_fo === "function" && tealium_s.p_fo("page_loaded"+u.id)) {
if ((typeof performance["timing"]["loadEventStart"] !== "undefined")&&(typeof performance["timing"]["navigationStart"] !== "undefined")) {
  var existingEvents = (typeof b.page_events !== 'undefined')&&(b.page_events !== '');
  if (!existingEvents) {
    b.page_events = utag.data["page_events"];
  } else {
     if ((typeof utag.data["page_events"] !== 'undefined')&&(utag.data["page_events"] !== '')) {
        var b_events = b.page_events.split(",");
        var u_events = utag.data.page_events.split(",");
        for (var i = 0; i < u_events.length; i++) {
            var pridavame = true;
            for (var j = 0; j < b_events.length; j++) {
                if (b_events[j] === u_events[i]) {
                    pridavame = false;
                    break;
                }
            } 
            if (pridavame){
                b.page_events += ","+u_events[i];
            }
        }
        /*if (typeof tealium_s.apl === "function") {
            b.page_events = tealium_s.apl(b.page_events,utag.data["page_events"]);
        } else {
            b.page_events += ","+utag.data["page_events"];
        }*/
    }
  }
  existingEvents = (typeof b.page_events !== 'undefined')&&(b.page_events !== '');
  if ((performance["timing"]["loadEventStart"] != 0)&&(performance["timing"]["navigationStart"] != 0)){
    var loadingTime = performance["timing"]["loadEventStart"]-performance["timing"]["navigationStart"];
    if (loadingTime > 0) {
        if (existingEvents && (b.page_events.indexOf(loadingTime) == -1)) {
              b.page_events += ",event208,event207="+loadingTime;
        } else {
            if (!existingEvents) { 
                b.page_events = "event208,event207="+loadingTime;
            }    
        }
        b.page_load_time = loadingTime;
    } else {
        b.page_errors = ((typeof b.page_errors !== "undefined") ? b.page_errors + "," : "")+"LES:"+performance["timing"]["loadEventStart"]+"NS:"+performance["timing"]["navigationStart"]+"LT:"+loadingTime;
    }    
  } else {
    if (existingEvents) {
        b.page_events += ",event209";
    } else {
        b.page_events = "event209";
    }   
  }  
  utag.data["page_events"] = s.events = b.page_events;
}
}
if (typeof utag.data.visitor_employee_id !== "undefined") {
    b.visitor_employee_id = utag.data.visitor_employee_id;
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['page_events']!='undefined'&&b['page_events']!=''||typeof b['event_name']!='undefined'&&b['event_name']!=''){
const events_table_aligned = [
    ["purchase","purchase"],
    ["prodView","prodView"],
    ["scOpen","scOpen"],
    ["scAdd","scAdd"],
    ["scView","scView"],
    ["scRemove","scRemove"],
    ["scCheckout","scCheckout"],
    ["search_apply","event1"],
    ["form_start","event4"],    
    ["visitor_register","event5"],
    ["visitor_login_complete","event6"],
    ["journey_start","event7"],
    ["journey_end","event8"],
    ["form_end","event10"],
    ["form_end","event11"],
    ["tool_end","event13"],
    ["page_filter_zero_results","event15"],
    ["product_price_recurrence_amount","event16"],
    ["product_price_recurrence_amount","event17"],
    ["search_results_clickthrough","event21"],
    ["transaction_cancelled","event28"],
    ["transaction_complete","event29"],
    ["chat_closed_agent","event37"],
    ["chat_closed_customer","event38"],
    ["transaction_contract_value","event51"],
    ["video_views","event62"],
    ["ui_interaction","event65"],
    ["page_article_view","event68"],
    ["support_rating_positive","event69"],
    ["support_rating_negative","event70"],
    ["search_refine","event72"],
    ["search_refine","event73"],
    ["form_step","event104"],
    ["visitor_identity_switch","event106"],
    //["product_price_recurrence_amount","event108"],
    //["product_price_recurrence_number","event109"],
    ["product_price_credit_onetime","event117"],
    ["product_price_credit_monthly","event118"],
    ["chat_waiting_queue","event137"],
    ["chat_start","event146"],
    ["chat_end","event147"],
    ["visit_ok","event181"],
    ["visit_nok","event182"],
    ["visitor_login_exupc","event183"],
    ["visitor_browser_thirdpartycookies_enabled","event204"],
    ["visitor_browser_thirdpartycookies_disabled","event205"],
    ["visitor_login_email","event206"],
    ["page_load_time","event207"],
    ["page_load_event","event208"],
    ["visitor_permission_enable","event240"],
    ["visitor_permission_disable","event241"]
];
if (typeof(b['event_name'])!=="undefined"){
    var aligned_events = "";
    for (var i=0; i<b['event_name'].length; i++) {
        for (var j=0; j<events_table_aligned.length; j++) {
            if (events_table_aligned[j][0] === b['event_name'][i]) {
                var re = new RegExp(events_table_aligned[j][1], 'gi');
                if (!re.test(b.page_events)) {  //missing event found
                    if ((!/event1[67]/.test(events_table_aligned[j][1]))||((/event1[67]/.test(events_table_aligned[j][1]))&&(re.test(b.sales_products)))) { //for event16 and event17 prevent double inclusion = include onlz if the event occurs in product string
                        aligned_events += ","+events_table_aligned[j][1];                      
                    }
                }    
            }
        }
    }
    if (typeof b.page_events !== "undefined" && b.page_events !== "") {
        b.page_events += aligned_events;
    } else {
        b.page_events = aligned_events.slice(1);
    }
  utag.data["page_events"] = b.page_events;
}
if (typeof(b['page_events'])!=="undefined"){
    var page_events_split = b['page_events'].split(",")
    for (var i=0; i<page_events_split.length; i++) {
        for (var j=0; j<events_table_aligned.length; j++) {
            if (page_events_split[i].split("=")[0] === events_table_aligned[j][1]) {
                var toBeAdd = true;
                if ((typeof b['event_name']==="undefined") || (b['event_name']==="")) {
                    b['event_name'] = [];
                }
                for (var k=0; k<b['event_name'].length; k++) {
                    if (b['event_name'][k] === events_table_aligned[j][0]) {
                        toBeAdd = false;
                        break;
                    }
                }    
                if (toBeAdd) {
                    b['event_name'].push(events_table_aligned[j][0]);
                }    
            }
        }
    }
}    
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
function targetProperties() {
    var targetProperties_string = '';
    var libraryType = '';
    var libraryVersion = '';
    if (typeof (mboxVersion) != 'undefined') {
        libraryType = 'mbox';
        libraryVersion = mboxVersion;
    } else if (typeof (adobe) != 'undefined' && typeof (adobe.target) != 'undefined' && typeof (adobe.target.VERSION) != 'undefined') {
        libraryType = 'a4t';
        libraryVersion = adobe.target.VERSION;
    } else {
        libraryType = 'TargetNotAvailable';
    }
    targetProperties_string = [libraryType, libraryVersion].join('_').replace(/_$/, '');
    //console.log('targetProperties_string: ' + targetProperties_string);
    return targetProperties_string;
}
function adobeTargetTrackingCode() {
    var eVar_campaigns_string = '';
    var eVar_experiences_string = '';
    var prop_targetProperties_string = '';
    var propertiesObj = {};
    try {
        if (typeof (window.ttMETA) != 'undefined') {
            //console.log('ttMETA exists: ' + JSON.stringify(ttMETA));
            //console.log(ttMETA);
            var delimiter = '||';
            if (ttMETA.length > 0) {
                ttMETA.map(function(campaignObj) {
                    eVar_campaigns_string += campaignObj.CampaignName + delimiter;
                    eVar_experiences_string += campaignObj.RecipeName + delimiter;
                });
            }
            eVar_campaigns_string = eVar_campaigns_string.replace(/\|\|$/, '');
            eVar_experiences_string = eVar_experiences_string.replace(/\|\|$/, '');
            //console.log('eVar_campaigns_string: ' + eVar_campaigns_string);
            //console.log('eVar_experiences_string: ' + eVar_experiences_string);
            propertiesObj['eVar_campaigns_string'] = eVar_campaigns_string;
            propertiesObj['eVar_experiences_string'] = eVar_experiences_string;
        } else {
            //console.log('ttMETA does not exist');
        }
    } catch (error) {} finally {
        prop_targetProperties_string = targetProperties();
        propertiesObj['prop_targetProperties_string'] = prop_targetProperties_string;
        return propertiesObj;
    }
}
var targetPropertiesObj = adobeTargetTrackingCode();
b.personalisation_campaign = targetPropertiesObj.eVar_campaigns_string;
b.personalisation_experience = targetPropertiesObj.eVar_experiences_string;
b.personalisation_properties = targetPropertiesObj.prop_targetProperties_string;

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/visitor_login_complete[\D,]/.test(b['event_name'])){b['visitor_id_asset_primary']=b['visitor_id_asset_active']} } catch(e){ utag.DB(e); }  }];

  u.send=function(a,b,c,d,e,f,g,h,ev){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      utag.DB("send:167");

      u.data = {

        "adobe_org_id" : "3E463FE452A647F00A490D45",

        // set cookie domain explicitly (no need for cookieDomainPeriods and domain guessing)
        // http://rossscrivener.co.uk/blog/javascript-get-domain-exclude-subdomain
        "cookieDomain" : (function () {
          return utag.loader.RC ('utag_main').vapi_domain || (function () {
            var i = 0, d = document.domain, p = d.split ('.'), s = '_vapi' + new Date ().getTime ();
            while (i < (p.length -1) && document.cookie.indexOf (s + '=' + s) === -1) {
              d = p.slice (-1 -(++i)).join ('.');
              document.cookie = s + '=' + s + ';domain=' + d + ';';
            }
            document.cookie = s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';';
            utag.loader.SC ('utag_main', { 'vapi_domain' : d });
            return d;
          } ());
        } ()),

        "a" : {},
        "serial" : {},
        "linkName" : "",
        "linkType" : "",
        "runviewthrough" : "no",
        "viewthroughloaded" : u.hasadobeView(),
        "viewthroughinterval" : 100,
        "viewthroughmaxtries" : 3
      };

      //Load the Ad Cloud library
      if(u.data.runviewthrough === "yes" && !u.data.viewthroughloaded){
        (function(el, script){
          el=document.createElement("script"); el.async=!0; el.src="https://www.everestjs.net/static/le/last-event-tag-latest.min.js"; script=document.getElementsByTagName("script")[0]; script.parentNode.insertBefore(el,script);
        })();
        utag.ut.adobeViewScriptRequested = true;
        u.data.viewthroughloaded = true;
      }

      //Map adobe_org_id - This can't be done inside the following callback because it is used to call the function itself.
      for (d in utag.loader.GV(u.map)) {
        if (b[d] !== undefined && b[d] !== "") {
          e = u.map[d].split(",");
          for (f = 0; f < e.length; f++) {
            if(e[f] === "adobe_org_id" || e[f] === "linkTrackVars" || e[f] === "linkTrackEvents" || e[f] === "linkType" || e[f] === "linkName"){
              u.data[e[f]] = b[d];
              // tealium.track support for triggering link-specific logic
              if (e[f] === "linkName" && b[d] !== "" && b[d] !== null && b[d] !== undefined) {
                if (utag.ut.typeOf(window.tealium) !== "undefined" && utag.ut.typeOf(window.tealium.track) === "function") {
                  utag.DB("Found mapping of linkName. Calling Adobe link tracking function tl().");
                  a = "link";
                }
              }
            } else if(e[f] === "combineLinkVar"){
              u.combineLinkVar = b[d];
            }
          }
        }
      }

      // tealium.track support for triggering link-specific logic
      if (utag.ut.typeOf(window.tealium) !== "undefined" && utag.ut.typeOf(window.tealium.track) === "function") {
        if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.link_attribute && b[window.utag_cfg_ovrd.link_attribute]) {
          utag.DB("Config utag_cfg_ovrd.link_attribute property set. Calling Adobe link tracking function tl().");
          a = "link";
        }
      }

      //Send every call to a queue so we can process the events after the visitor API call
      u.queue.push({"a":a,"b":b,"u.data":u.data});
      vAPI.getInstance(u.data.adobe_org_id, function(instance) {
        //Get data object back from the queue so we can process everything in order
        var data = u.queue.shift();
        a = data["a"];
        b = data["b"];
        u.data = data["u.data"];

        u.a=a;
        b.sc_events=b.sc_events||{};

        u.addEvent = function (v, n) {
          var t = [];
          if (v instanceof Array) {
            t = v.slice(0);
          } else if (typeof n !== "undefined") {
            t.push(v + "=" + n);
          } else {
            t.push(v);
          }
          for (var i = 0; i < t.length; i++) {
            b.sc_events[t[i]] = 1;
            u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
          }
          return b.sc_events;
        };

        u.addProduct = function (v) {
          u.data.sc_addProd = "";
          if (v instanceof Array) {
            u.data.sc_addProd = v.join(",");
          } else {
            u.data.sc_addProd = v;
          }
        };

        //Polls on an interval to make sure the file has loaded and run first
        if(u.data.runviewthrough === "yes"){
          var editedReportSuite = "vodaczdevuniversal".toLowerCase();
          editedReportSuite = editedReportSuite.replace(/\s/g, "");
          var attempt_counter = 0;
          var adcloud_interval = setInterval(function(){
            attempt_counter++;
            if (window["AdCloudEvent"]) {
              clearInterval(adcloud_interval);
              AdCloudEvent(u.data.adobe_org_id, editedReportSuite);
              processAnalytics();
            } else if(attempt_counter > u.data.viewthroughmaxtries) {
              clearInterval(adcloud_interval);
              processAnalytics();
            }
          }, u.data.viewthroughinterval);
        } else {
          processAnalytics();
        }

        //Normal Analytics code has been wrapper in a function to accomodate the interval needed for viewthrough
        function processAnalytics() {
          if (u.a === "link") {
            u.ltflag = true;
            if (typeof u.data.linkTrackVars === "undefined" && typeof b.linkTrackVars === "undefined") { u.ltv = []; }
            if (u.combineLinkVar && typeof u.data.linkTrackVars !== "undefined") {
              u.typeCheck(u.data.linkTrackVars, "ltv");
            } else if (u.combineLinkVar && typeof b.linkTrackVars !== "undefined") {
              u.typeCheck(b.linkTrackVars, "ltv");
            }

            if (typeof u.data.linkTrackEvents === "undefined" && typeof b.linkTrackEvents === "undefined") { u.lte = []; }
            if (u.combineLinkVar && typeof u.data.linkTrackEvents !== "undefined") {
              u.typeCheck(u.data.linkTrackEvents, "lte");
            } else if (u.combineLinkVar && typeof b.linkTrackEvents !== "undefined") {
              u.typeCheck(b.linkTrackEvents, "lte");
            }
          }
          // Dynamically override using extensions
          u.data.tagdevicetype = "mobile";
          u.data.detectserial = "yes";

          for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

          // Demandbase
          try {
            if (window.sessionStorage) {
              var standardDimensions = sessionStorage.getItem("s_dmdbase") || "";
              var customDimensions1 = sessionStorage.getItem("s_dmdbase_custom1") || "";
              var customDimensions2 = sessionStorage.getItem("s_dmdbase_custom2") || "";
              var customDimensions3 = sessionStorage.getItem("s_dmdbase_custom3") || "";
              var customDimensions4 = sessionStorage.getItem("s_dmdbase_custom4") || "";

              u.o.contextData.s_dmdbase = standardDimensions;
              u.o.contextData.s_dmdbase_custom1 = customDimensions1;
              u.o.contextData.s_dmdbase_custom2 = customDimensions2;
              u.o.contextData.s_dmdbase_custom3 = customDimensions3;
              u.o.contextData.s_dmdbase_custom4 = customDimensions4;
            }
          }
          catch (e) {
            utag.DB("AppMeasurement Demandbase Error: " + e.message);
          }

          // Mobile lifecycle var
          if (u.data.tagdevicetype === "mobile") {
            if (b.timestamp || b.timestamp_unix) {
              u.o.timestamp = b.timestamp || b.timestamp_unix;
            }
            u.data.a = {
              "AppID" : b.app_id || "",
              "CarrierName" : b.carrier || "",
              "DeviceName" : b.device || "",
              "HourOfDay" : b.lifecycle_hourofday_local || "",
              "DayOfWeek" : b.lifecycle_dayofweek_local || "",
              "OSVersion" : b.os_version || b.platform_version || "",
              "Resolution" : b.device_resolution || ""
            };
            if (b.lifecycle_type) {
              u.data.a.disable_wake_track = false;
              u.data.a.disable_sleep_track = false;
              u.data.a.DaysSinceFirstUse = b.lifecycle_dayssincelaunch || "";
              u.data.a.DaysSinceLastUpgrade = b.lifecycle_dayssinceupdate || "";
              u.data.a.DaysSinceLastUse = b.lifecycle_dayssincelastwake || "";
              u.data.a.Launches = b.lifecycle_launchcount || "";
              u.data.a.InstallDate =  b.lifecycle_firstlaunchdate_MMDDYYYY || "";
              u.data.a.UpgradeEvent = b.lifecycle_isfirstlaunchupdate || "";
              u.data.a.PrevSessionLength = b.lifecycle_priorsecondsawake || "";
            }
            if (b.lifecycle_isfirstlaunch) {
              u.data.a.InstallEvent = "InstallEvent";
            }
            if (b.lifecycle_diddetectcrash) {
              u.data.a.CrashEvent = "CrashEvent";
            }
            if (b.lifecycle_type === "launch") {
              u.data.a.LaunchEvent = "LaunchEvent";
            }
            if (b.lifecycle_isfirslaunchupdate) {
              u.data.a.UpgradeEvent = "UpgradeEvent";
            }
          }

          for (e in utag.loader.GV(u.map)) {
            if (u.data.tagdevicetype === "mobile") {
              if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                f = u.map[e].split(",");
                for (g = 0; g < f.length; g++) {
                  if (f[g].indexOf("contextData.a.") === 0){
                    u.data.a[f[g].substring(14)] = b[e];
                  }
                }
              }
            } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
              f = u.map[e].split(",");
              for (g = 0; g < f.length; g++) {
                if (f[g].indexOf("SERIAL_") === 0){
                  u.data.serial[f[g].substring(7)]=b[e];
                }
              }
            } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
              f = u.map[e].split(",");
              for (g = 0; g < f.length; g++) {
                if(f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")){
                  u.data[f[g].substring(9)]=b[e];
                }
              }
            }
          }

          //Check for disabled lifecycles

          if(u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
            if (b.lifecycle_type === "wake") {
              return false;
            }
          }
          if(u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
            if (b.lifecycle_type === "sleep") {
              return false;
            }
          }

          u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
          u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
          u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
          u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
          if(typeof u.data.id!="undefined"&&u.data.id!=""){
            c=[];
            d={};
            ev={};
            for(e in utag.loader.GV(u.map)){
              if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){
                f=u.map[e].split(",");
                for( g=0;g<f.length;g++){
                  var pv = f[g].substring(9);
                  if(f[g].indexOf("PRODUCTS_evar")==0 || f[g].indexOf("PRODUCTS_eVar")==0){
                    if (b[e] instanceof Array) {
                      b.sc_prodevars = b.sc_prodevars || [];
                      for (var i = 0; i < b[e].length; i++) {
                        var prodvars = {};
                        if(typeof b.sc_prodevars[i]!="undefined" && b.sc_prodevars[i]!=""){
                          b.sc_prodevars[i][pv]=b[e][i];
                        }else{
                          prodvars[pv]=b[e][i];
                          b.sc_prodevars.push(prodvars);
                        }
                      }
                    }else{
                      d[pv] = (b[e]+"").split(",");
                    }
                  }else if(f[g].indexOf("PRODUCTS_event")==0){
                    if(b[e] instanceof Array){
                      b.sc_prodevents=b.sc_prodevents || [];
                      for (var i = 0; i < b[e].length; i++) {
                        var prodevents = {};
                        if(typeof b.sc_prodevents[i]!="undefined" && b.sc_prodevents[i]!=""){
                          b.sc_prodevents[i][pv]=b[e][i];
                        }else{
                          prodevents[pv]=b[e][i];
                          b.sc_prodevents.push(prodevents);
                        }
                      }
                      u.addEvent(pv);
                    }else if (b[e] !== ""){
                      ev[pv]=b[e];
                      u.addEvent(pv);
                    }
                  }
                }
              }
            }
            e="";
            for (f in utag.loader.GV(d)) {
              for (g=0;g<d[f].length;g++) {
                if (e!="") {
                  e+="|"+f+"="+d[f][g];
                } else {
                  e=f+"="+d[f][g];
                }
              }
            }
            h="";
            for (f in utag.loader.GV(ev)) {
              if (h) {
                h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);
              } else {
                h=f+"="+((isNaN(ev[f]))?"1":ev[f]);
              }
            }
            b.sc_prodevents=b.sc_prodevents||[];
            b.sc_prodevars=b.sc_prodevars || [];
            for (d=0;d<u.data.id.length;d++) {
              var h2=h;
              var h3=e;
              if (typeof b.sc_prodevents!="undefined") {
                for (f in b.sc_prodevents[d]) {
                  if (typeof b.sc_prodevents[d][f]!="undefined") {
                    var l =b.sc_prodevents[d][f];
                    if (typeof l!="undefined" && l!="" && isNaN(l)==false) {
                      if (h2){
                        h2 += "|" + f + "=" + l;
                      } else {
                        h2 = f + "=" + l;
                      }
                    }
                  }
                }
              }
              if(typeof b.sc_prodevars!="undefined"){
                for (f in b.sc_prodevars[d]) {
                  if(typeof b.sc_prodevars[d][f]!="undefined"){
                    var l =b.sc_prodevars[d][f];
                    if(typeof l!="undefined" && l!=""){
                      if (h3){
                        h3 += "|" + f + '=' + l;
                      }else{
                        h3 = f + '=' + l;
                      }
                    }
                  }
                }
              }
              c.push((u.data.category[d]?u.data.category[d]:"")+";"+u.data.id[d]+";"+(u.data.quantity[d]?u.data.quantity[d]:"")+";"+(u.data.price[d]?((u.data.quantity[d]?parseInt(u.data.quantity[d]):1)*parseFloat(u.data.price[d])).toFixed(2):"")+";"+h2+";"+h3);
            }
            if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
              c.push(u.data.sc_addProd);
            }
            u.o.products=c.join(",");
          } else {
            u.o.products = "";
          }

          // Mapping would be b.event_name ==> "prod:event3,click:event4"
          // Data layer variable b.event_name will contain "prod,click" and trigger both event3,event4
          // To serialize, this would be "prod:12345,click"
          var evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
          for(c in utag.loader.GV(b)){
            if(b[c] !== ""){
              f=(""+b[c]).split(",");
              for(g=0;g<f.length;g++){
                h=f[g].split(":");
                d=[];
                if(u.data.detectserial === "no") {
                  if(typeof u.map[c+":"+h.join(":")]!="undefined"){ //fix to check against whole string
                    d=u.map[c+":"+h.join(":")].split(",");
                  }else if(typeof u.map[c]!="undefined"){
                    d=u.map[c].split(",");
                  }
                } else {
                  //h.length is determined by how many colons are found
                  if(h.length>1){
                    var subTrigger = h[0];
                    //Subtrigger is a concatenation of all but the last index, which is a detected serialization
                    for(var i=1; i<h.length-1;i++) {
                      subTrigger += ":"+h[i];
                    }
                    // Redefine h with subTrigger and detected serialization
                    h[0] = subTrigger;
                    h[1] = h[h.length-1];
                  }
                  if(typeof u.map[c+":"+h[0]]!="undefined"){
                    d=u.map[c+":"+h[0]].split(",");
                  }else if(typeof u.map[c]!="undefined"){
                    d=u.map[c].split(",");
                  }
                }
                for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&d[e].indexOf("SERIAL_")!==0){
                  if(u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "" ) {
                    u.addEvent(d[e]+":"+u.data.serial[d[e]]);
                  } else {
                    if(u.data.detectserial === "yes") {
                      u.addEvent(d[e]+(h.length>1?":"+h[1]:""));
                    } else {
                      u.addEvent(d[e]);
                    }
                  }
                }}
              }
            }
          }
          //Placing mobile data in contextData
          for (var m in u.data.a) {
            u.o.contextData["a."+m] = u.data.a[m];
            u.pushlt(u.ltv, "contextData.a." + m);
          }

          for(c in utag.loader.GV(b)){
            if(typeof u.map[c]!="undefined"){
              d=u.map[c].split(",");
              for(e=0;e<d.length;e++){
                // map to VALUE_event51 for events = "event51=60"
                if(d[e].indexOf("VALUE_")==0){
                  // If an event serialization was mapped for this event
                  if(u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== ""){
                    u.addEvent( d[e].substring(6), b[c]+":"+u.data.serial[d[e]] );
                  } else {
                    u.addEvent(d[e].substring(6), b[c]);
                  }
                }else if(d[e]=="doneAction"){
                  b.doneAction=b[c];
                  if(b.doneAction!="navigate"){
                    b.doneAction=eval(b[c]);
                  }
                }else if(d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0){
                  d[e]=d[e].replace("contextData.", "c.");
                  if (!(d[e][2] === "a" && d[e][3] === ".")) {   // Exclude mobile vars
                    u.o.contextData[d[e].substring(2)] = b[c];
                    u.pushlt(u.ltv,"contextData."+d[e].substring(2))
                  }
                } else {
                  if(c=="sc_events" || c=="sc_prodevents" || c=="sc_prodevars"){
                    utag.DB("Error:167: Mapping reserved object name " + c)
                  }else{
                    u.o[d[e]]=b[c];
                  }
                  // if linkTrackVars is mapped then turn off auto-generation of linkTrackVars
                  if(d[e]=="s_account"){
                    u.o.account=b[c];
                  }else if(d[e]=="linkTrackVars"){
                    u.ltflag=false;
                  }else{
                    if(u.combineLinkVar){u.ltflag=true;}
                    if(d[e] !== "combineLinkVar"){
                      u.pushlt(u.ltv,d[e]);
                    }
                  }
                }
              }
            }
          }
          d=[];
          for(c in utag.loader.GV(b.sc_events)){
            if(b.sc_events[c]){d.push(c)}
          }
          if(d.length>0){
            u.o.events=d.join(",");
            u.pushlt(u.lte,u.o.events);
          } else {
            u.o.events = u.o.events || ""; // added fix u.o.events || by stan
          }

          if(b._ccurrency){
            u.o.currencyCode=b._ccurrency;
          }

          if(b._corder){
            u.pushlt(u.lte,"purchase");
            u.pushlt(u.ltv,"purchaseID");
            u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);
            u.o.events=((u.o.events)?u.o.events:"purchase");
            if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase";}
          }

          //Use case: Visitor API set up in Tealium iQ, we will use this instance of the Visitor API
          if (instance) {
            u.o.visitor = instance;
          }

          //Use case: Visitor API not set up in Tealium iQ -
          //If a previously created instance of the Visitor API object is found on the page, that will be referenced.
          //Otherwise a new Visitor API object is instantiated.
          if (!u.o.visitor) {
            if(typeof visitor !== "undefined") {
              u.o.visitor = window.visitor;
            } else if (typeof Visitor !== "undefined" && typeof Visitor.getInstance !== "undefined") {
              u.o.visitor = Visitor.getInstance(u.data.adobe_org_id);
            }
          }

          // marketing cloud cookie domain should take precedence if exist
          u.o.cookieDomain = u.o.visitor ? u.o.visitor.cookieDomain || u.data.cookieDomain : u.data.cookieDomain;

          if (u.a === "view") {
            var img = u.o.t();
            /* still track on user agents Adobe cannot detect */
            if (typeof img !== "undefined" && img !== "") {
              u.img = new Image();
              u.img.src = img.substring(img.indexOf("src=")+5,img.indexOf("width=")-2);
            }
          } else if (u.a === "link") {
            if (typeof u.ltv !== "undefined" && u.ltflag) {
              if (u.o.events) {u.ltv.push("events");}
              if (u.o.products) {u.ltv.push("products");}
              b.linkTrackVars = u.ltv.join(",");
            }
            if (typeof u.lte !== "undefined" && u.ltflag) {b.linkTrackEvents = u.lte.join(",");}
            u.o.linkTrackVars = (b.linkTrackVars) ? b.linkTrackVars : "None";
            u.o.linkTrackEvents = (b.linkTrackEvents) ? b.linkTrackEvents : "None";

            /*
            in some implementations of AppMeasurement through Tealium iQ, values for linkName and linkType were provided directly in the data layer, e.g., through
            the link tracking extension. This was done to minimize the number of mappings needed to set up AppMeasurement. To support these implementations the fallback checks
            for b.link_text, b.link_name are included
            */

            //setting linkType: the values 'download link' and 'exit link' are set by the Link Tracking extension automatically; mappings supersede the setting of b.link_type
            if (!u.data.linkType) {
             if (b.link_type === "download link") {
               u.data.linkType = "d";
             } else if (b.link_type === "exit link") {
               u.data.linkType = "e";
             }
            }

            // the fallback to u.o.linkType in this assignment is to handle static mappings to linkType as this template only runs static mappings when the vAPI.getInstance method is invoked,
            // and not when u.send is invoked, as it is with most templates, defaulting to `o` if not otherwise set
            u.o.linkType = u.data.linkType || u.o.linkType || "o";

            //setting linkName: this fallback order is here to preserve the behavior of implementations referencing the data layer (b object) variables (link_name, link_text) directly
            u.data.linkName = u.data.linkName || b.link_name || b.link_text || "no link_name";

            u.o.tl(((b.link_obj) ? b.link_obj : true), u.o.linkType, u.data.linkName, null, (b.doneAction ? b.doneAction : null));
          }

          /* clear variables */
          if ("no" === "yes") {
            u.o.registerPostTrackCallback(u.o.clearVars);
          }
        };

        utag.DB("send:167:COMPLETE");
      });
    }
  };
    try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
  })("167","vodafone.cz-main");
}catch(e){
  utag.DB(e);
}
//end tealium universal tag
