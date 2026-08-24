//tealium universal tag - utag.loader ut4.54.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.

(function (w) {
  if (typeof w.utag !== 'undefined' && typeof w.utag.e === 'object') {
    w.utag_events = w.utag.e;
    delete w.utag;
  }
}(window));
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};var match = (""+document.cookie).match("(^|;\\s)utag_env_vodafone_cz-main=(\/\/tags\.tiqcdn\.com\/utag\/vodafone\/[a-z0-9\\.-]{1,30}\\/[^\\s;]*)");if(match){if(match[2].indexOf("/prod/") === -1) {var s = match[2];while(s.indexOf("%") != -1) {s = decodeURIComponent(s);}s = s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/vodafone/cz-main/prod/';}}})();}catch(e){};try{
/*
 * 
 * @author: kevin thomas faurholt - tealium, inc.
 * extension: 0.preloader-initialize-things
 */
// adobe tag manager is setting w.mboxVersion='mini' if these guys are missing
// if(!w.mboxCreate&&!w.mboxDefine&&!w.mboxUpdate)
// so we have to make sure it does not set mboxVersion!

//-----------------------------------------------------------------------
// Addition to set jsvars_on_ajax to repopulate js_page vars on utag.view
// steve.lake@tealium.com
window.utag_cfg_ovrd =   window.utag_cfg_ovrd || {};
window.utag_cfg_ovrd.jsvars_on_ajax = true;
//window.utag_cfg_ovrd.load_rules_at_wait = true;
window.utag_cfg_ovrd.dom_complete = true;
window.utag_cfg_ovrd.secure_cookie = true;
//-----------------------------------------------------------------------

/*
if (window.mboxVersion === "mini") {
  window.mboxVersion = undefined;
  if (console && console.log) {console.log("mboxVersion already defined ('mini') - reseting to undefined");}
}
*/

(function() {

  // turn off implicit call to utag.view
  window.utag_cfg_ovrd =   window.utag_cfg_ovrd || {};
  window.utag_cfg_ovrd.noview = true;
  
  window.TEALIUM = window.TEALIUM || {};
  window.TEALIUM.sitecatalyst = window.TEALIUM.sitecatalyst || {};
  window.TEALIUM.vodafone = window.TEALIUM.vodafone || {};
 
  window.utag_data = (typeof utag_data != 'undefined') ? utag_data : {};
    // global var to detect mobile devices based on user agent
 window.utag_data.device_mobile = ((function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true})(navigator.userAgent||navigator.vendor||window.opera))?'true':'false';
 
  // global var to detect tablets based on user agent
 window.utag_data.device_tablet = ((function(a){if(/ipad|android.+\d safari|tablet/i.test(a))return true})(navigator.userAgent||navigator.vendor||window.opera))?'true':'false';
 
 /* 
  // try find the event
  var isset = function (event) {

    var events = ("" + window.s.events).split(",");

    for (var i = 0, elen = events.length; i < elen; i++) {

      if (events[i] === event) {

        return true;
      }
    }

    return false;
  };

  var capture_events = function() {

    var data = {};

    // todo: translate inline calls with s.eventsX set?
    // if (isset("event1")) {  data.search_event = "search"; }

    return data;
  };
*/

  function log (msg) {
  
    if (window.utag && window.utag.cfg.path && /dev|qa/i.test(window.utag.cfg.path)) {
     
      //if ((typeof(console)!=="undefined") && (typeof(console.log)!=="undefined")) {console.log("s.t() called");}
      if (window.console && window.console.log) {

        window.console.log(msg);
      }
    }
  }
  
/*  
    // guarantee an s object on page
  // this dummy object is also in an extension scoped to utag.js
  // sometimes utag.sync.js is loaded AFTER the utag.js in the way that
  // stan is currently loading Tealium
  window.s = window.s || {

    "version" : "tealium-migration-v1.0",
  
    "events" : "",
    
    "linkTrackVars" : "None",
    
    "linkTrackEvents" : "None",

    "contextData" : {},
      
    // capture inline calls to s.t()
    "t" : function() {
      
      log("s.t called");
      
      try {
        
        (function retry(retries) {
          
          if (retries === 0) {
            
            log("utag.loader.ended did not make it in time!");
            
            return false;
          }
          else {
            
            if (window.utag && window.utag.loader && window.utag.loader.ended) {
              
              var dataprocessed = window.utag.extn.preprocessor.init(window.s, window.utag.extn.preprocessor.instance);
              
              if (dataprocessed.events) {
                
                // short term hack to preserve page events (no translation)
                dataprocessed.sc_events = {};
                
                var eventdata = dataprocessed.events.split(",");
                
                for (var i = 0; i < eventdata.length; i++) {
                  
                  dataprocessed.sc_events[eventdata[i]] = 1;
                }
              }
              
              window.utag.track("view", dataprocessed);
            }
            else {
              
              window.setTimeout(function() {
              
                retry.call(window, --retries);
              }, 200);
            }
          }
          return true;
        }(100));
      }
      catch(e) {

        log("ERROR:\n" + this.version + "\n" + document.URL + "\n" + e.stack);
      }
    },

    // capture in html inline calls to s.tl()
    "tl" : function(linkObj, linkType, linkName, variableOverrides, doneAction) {

      log("s.tl called");
      
      try {
        
        var dataprocessed = {},
          linkdata = {},
          pagesource = variableOverrides || window.s;
        
        // tealium sc template specific data sources start
        linkdata.link_obj = linkObj;
        linkdata.link_type = linkType === "d" ? "download link" : (linkType === "e" ? "exit link" : "");
        linkdata.link_name = linkName;
        // tealium sc template specific data sources end

        dataprocessed = window.utag.extn.preprocessor.init(pagesource, window.utag.extn.preprocessor.instance, linkdata);

        window.utag.track("link", dataprocessed);
      }
      catch(e) {

        log("ERROR:\n" + this.version + "\n" + document.URL + "\n" + e.stack);
      }
    
    },
    "loadModule" : function(module) {

      try {
        if ((module === "Integrate")||(module === "AudienceManagement")) { 
            window.tealium_s.loadModule(module);                            
        } 
      }
      catch(e) {

        // do something with e
      }
    }

  };
  
  // intercept s_gi calls from page
  window.s_gi = window.s_gi || function () { return window.s; };

  // dummy placeholder methods to catch inline calls to native mbox methods
  window.mboxCreate = window.mboxCreate || function() {};
  window.mboxDefine = window.mboxDefine || function() {};
  window.mboxUpdate = window.mboxUpdate || function() {};
  window.mboxLoadSCPlugin = window.mboxLoadSCPlugin || function() {

    // need to busyloop until tealium_s is ready?
    if (console && console.log) {console.log("mboxLoadSCPlugin called");}
  };
*/
}());

/*
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
!function(){"use strict";var r,o,a;"function"!=typeof window.DIL&&(window.DIL=function(n){var c,e,I,r,u,h,t,o,s,i,a,d,y,l,f,g,p,m,b,v,D,O=[],C={};function S(e){return void 0===e||!0===e}n!==Object(n)&&(n={}),I=n.partner,r=n.containerNSID,u=n.mappings,h=n.uuidCookie,t=!0===n.enableErrorReporting,o=n.visitorService,s=n.declaredId,i=!0===n.delayAllUntilWindowLoad,a=S(n.secureDataCollection),d="boolean"==typeof n.isCoopSafe?n.isCoopSafe:null,y=S(n.enableHrefererParam),l=S(n.enableLogging),f=S(n.enableUrlDestinations),g=S(n.enableCookieDestinations),p=!0===n.disableDefaultRequest,m=n.afterResultForDefaultRequest,b=n.visitorConstructor,v=!0===n.disableCORS,D=!0===n.ignoreHardDependencyOnVisitorAPI,t&&DIL.errorModule.activate(),D&&O.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");var w=!0===window._dil_unit_tests;if((c=arguments[1])&&O.push(c+""),!I||"string"!=typeof I){var _={name:"error",message:c="DIL partner is invalid or not specified in initConfig",filename:"dil.js"};return DIL.errorModule.handleError(_),new Error(c)}if(c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",!r&&"number"!=typeof r||(r=parseInt(r,10),!isNaN(r)&&0<=r&&(c="")),c&&(r=0,O.push(c),c=""),(e=DIL.getDil(I,r))instanceof DIL&&e.api.getPartner()===I&&e.api.getContainerNSID()===r)return e;if(!(this instanceof DIL))return new DIL(n,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+I+" and containerNSID = "+r);DIL.registerDil(this,I,r);var R={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(e){O.push(e),l&&this.doesConsoleLogExist&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(e){this.logMemo[e]||(this.logMemo[e]=!0,R.log(e))}},E={IS_HTTPS:a||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var e=7;4<e;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return null}()};E.IS_IE_LESS_THAN_10="number"==typeof E.IE_VERSION&&E.IE_VERSION<10;var P={stuffed:{}},L={},A={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:r+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3e4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(this.admsProcessingStarted)return;this.admsProcessingStarted=!0;var t,n,s,i=o;if("function"!=typeof e||"function"!=typeof e.getInstance)throw this.noVisitorAPI=!0,new Error("Visitor does not exist.");if(i!==Object(i)||!(t=i.namespace)||"string"!=typeof t)throw this.releaseType="no namespace",new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");if((n=e.getInstance(t,{idSyncContainerID:r}))!==Object(n)||"function"!=typeof n.isAllowed||"function"!=typeof n.getMarketingCloudVisitorID||"function"!=typeof n.getCustomerIDs||"function"!=typeof n.isOptedOut||"function"!=typeof n.publishDestinations)throw this.releaseType="invalid instance",s="Invalid Visitor instance.",n===Object(n)&&"function"!=typeof n.publishDestinations&&(s+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),new Error(s);if(this.VisitorAPI=e,!n.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=n,this.waitForMidToReleaseRequests()}catch(e){if(!D)throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+e.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var t=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(e){t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests()},!0),(!N.exists||!N.isIabContext&&N.isApproved()||N.isIabContext&&B.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0,A.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=k.isPopulatedString,t=this.getMarketingCloudVisitorID();return e(this.mid)&&this.mid===t||(this.mid=t),e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e!==Object(e))return"";var t,n,s,i,r="",o=[],a=[];for(t in e)e.hasOwnProperty(t)&&(n=e[a[0]=t])===Object(n)&&(a[1]=n.id||"",a[2]=n.authState||0,o.push(a),a=[]);if(i=o.length)for(s=0;s<i;s++)r+="&d_cid_ic="+x.encodeAndBuildRequest(o[s],"%01");return r},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e,this.isOptedOutCallbackCalled=!0,A.registerRequest(),N.isIabContext()&&B.checkQueryStringObject()},getLoadTimeout:function(){var e=this.instance;if(e){if("function"==typeof e.getLoadTimeout)return e.getLoadTimeout();if(void 0!==e.loadTimeout)return e.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var n=k.isPopulatedString,s=encodeURIComponent;if(e===Object(e)&&n(t)){var i=e.dpid,r=e.dpuuid,o=null;if(n(i)&&n(r))return o=s(i)+"$"+s(r),!0===this.declaredIdCombos[o]?"setDeclaredId: combo exists for type '"+t+"'":(this.declaredIdCombos[o]=!0,this.declaredId[t]={dpid:i,dpuuid:r},"setDeclaredId: succeeded for type '"+t+"'")}return"setDeclaredId: failed for type '"+t+"'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,n=encodeURIComponent,s="";return null!==e?s="&d_dpid="+n(e.dpid)+"&d_dpuuid="+n(e.dpuuid):null!==t&&(s="&d_dpid="+n(t.dpid)+"&d_dpuuid="+n(t.dpuuid)),s}},registerRequest:function(e){var t,n=this.firingQueue;e===Object(e)&&(n.push(e),e.isDefaultRequest||(p=!0)),this.firing||!n.length||i&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(N.isApproved()||B.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(t=n.shift()).src=t.src.replace(/&d_nsid=/,"&"+this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid="),k.isPopulatedString(t.corsPostData)&&(t.corsPostData=t.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid=")),V.fireRequest(t),this.firstRequestHasFired||"script"!==t.tag&&"cors"!==t.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(b||window.Visitor)},getCoopQueryString:function(){var e="";return!0===d?e="&d_coop_safe=1":!1===d&&(e="&d_coop_unsafe=1"),e}};C.requestController=A;var q,j,T={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(e,t){var n,s=this;function i(){s.jsonForComparison.push(e),s.jsonWaiting.push([e,t])}if(e&&!k.isEmptyObject(e))if(n=JSON.stringify(e.dests||[]),this.jsonForComparison.length){var r,o,a,d=!1;for(r=0,o=this.jsonForComparison.length;r<o;r++)if(a=this.jsonForComparison[r],n===JSON.stringify(a.dests||[])){d=!0;break}d?this.jsonDuplicates.push(e):i()}else i();if(this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u[0],u[1]),this.requestToProcess()}this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(e){if(f){var t,n,s,i,r,o,a=encodeURIComponent,d=this.getPublishDestinationsVersion(),u=!1;if(-1!==d){if((t=e.dests)&&t instanceof Array&&(n=t.length)){for(s=0;s<n;s++)i=t[s],o=[a("dests"),a(i.id||""),a(i.y||""),a(i.c||"")].join("|"),this.addMessage(o),r={url:i.c,hideReferrer:void 0===i.hr||!!i.hr,message:o},this.addDestination(r),void 0!==i.hr&&(u=!0);1===d&&u&&R.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(e)}}},addMessage:function(e){this.messages.push(e)},addDestination:function(e){this.destinations.push(e)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,f&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){function e(e){R.log("visitor.publishDestinations() result: "+(e.error||e.message)),n.sendingMessages=!1,n.requestToProcess()}function t(){n.messages=[],n.destinations=[]}var n=this,s=A.adms.instance,i=[],r=[];return 1===this.publishDestinationsVersion?(x.extendArray(i,this.messages),x.extendArray(this.messagesPosted,this.messages),t(),s.publishDestinations(I,i,e),"Called visitor.publishDestinations() version 1"):1<this.publishDestinationsVersion?(x.extendArray(r,this.destinations),x.extendArray(this.destinationsPosted,this.destinations),t(),s.publishDestinations({subdomain:I,callback:e,urlDestinations:r}),"Called visitor.publishDestinations() version > 1"):void 0},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;var e=A.adms.instance,n=-1;return e.publishDestinations(null,null,function(e){if(e===Object(e)){var t=e.error;"subdomain is not a populated string."===t?n=1:"Invalid parameters passed."===t&&(n=2)}}),this.publishDestinationsVersion=n}},M={traits:function(e){return k.isValidPdata(e)&&(L.sids instanceof Array||(L.sids=[]),x.extendArray(L.sids,e)),this},pixels:function(e){return k.isValidPdata(e)&&(L.pdata instanceof Array||(L.pdata=[]),x.extendArray(L.pdata,e)),this},logs:function(e){return k.isValidLogdata(e)&&(L.logdata!==Object(L.logdata)&&(L.logdata={}),x.extendObject(L.logdata,e)),this},customQueryParams:function(e){return k.isEmptyObject(e)||x.extendObject(L,e,A.reservedKeys),this},signals:function(e,t){var n,s=e;if(!k.isEmptyObject(s)){if(t&&"string"==typeof t)for(n in s={},e)e.hasOwnProperty(n)&&(s[t+n]=e[n]);x.extendObject(L,s,A.reservedKeys)}return this},declaredId:function(e){return A.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(L.callback=e),this},afterResult:function(e){return"function"==typeof e&&(L.postCallbackFn=e),this},useImageRequest:function(){return L.useImageRequest=!0,this},clearData:function(){return L={},this},submit:function(e){return L.isDefaultRequest=!!e,V.submitRequest(L),L={},this},getPartner:function(){return I},getContainerNSID:function(){return r},getEventLog:function(){return O},getState:function(){var e={},t={};return x.extendObject(e,A,{registerRequest:!0}),x.extendObject(t,T,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:n,pendingRequest:L,otherRequestInfo:e,destinationPublishingInfo:t,log:O}},idSync:function(){throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")},aamIdSync:function(){throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")},passData:function(e){return k.isEmptyObject(e)?"Error: json is empty or not an object":(V.defaultCallback(e),e)},getPlatformParams:function(){return A.platformParams},getEventCallConfigParams:function(){var e,t=A,n=t.modStatsParams,s=t.platformParams;if(!n){for(e in n={},s)s.hasOwnProperty(e)&&!t.nonModStatsParams[e]&&(n[e.replace(/^d_/,"")]=s[e]);!0===d?n.coop_safe=1:!1===d&&(n.coop_unsafe=1),t.modStatsParams=n}return n},setAsCoopSafe:function(){return d=!0,this},setAsCoopUnsafe:function(){return d=!1,this},getEventCallIabSignals:function(e){var t;return e!==Object(e)?"Error: config is not an object":"function"!=typeof e.callback?"Error: config.callback is not a function":(t=parseInt(e.timeout,10),isNaN(t)&&(t=null),void B.getQueryStringObject(e.callback,t))}},V={corsMetadata:(q="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(q="XMLHttpRequest"),{corsType:q}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){return A.registerRequest(V.createQueuedRequest(e)),!0},createQueuedRequest:function(e){var t,n,s,i,r,o=e.callback,a="img",d=e.isDefaultRequest;if(delete e.isDefaultRequest,!k.isEmptyObject(u))for(s in u)if(u.hasOwnProperty(s)){if(null==(i=u[s])||""===i)continue;if(s in e&&!(i in e)&&!(i in A.reservedKeys)){if(null==(r=e[s])||""===r)continue;e[i]=r}}return k.isValidPdata(e.sids)||(e.sids=[]),k.isValidPdata(e.pdata)||(e.pdata=[]),k.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=x.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof o&&(o=this.defaultCallback),t=this.makeRequestSrcData(e),(n=this.getCORSInstance())&&!0!==e.useImageRequest&&(a="cors"),{tag:a,src:t.src,corsSrc:t.corsSrc,callbackFn:o,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:n,corsPostData:t.corsPostData,isDefaultRequest:d}},defaultCallback:function(e,t){var n,s,i,r,o,a,d,u,c;if(g&&(n=e.stuff)&&n instanceof Array&&(s=n.length))for(i=0;i<s;i++)(r=n[i])&&r===Object(r)&&(o=r.cn,a=r.cv,void 0!==(d=r.ttl)&&""!==d||(d=Math.floor(x.getMaxCookieExpiresInMinutes()/60/24)),u=r.dmn||"."+document.domain.replace(/^www\./,""),c=r.type,o&&(a||"number"==typeof a)&&("var"!==c&&(d=parseInt(d,10))&&!isNaN(d)&&x.setCookie(o,a,24*d*60,"/",u,!1),P.stuffed[o]=a));var l,f,p=e.uuid;k.isPopulatedString(p)&&(k.isEmptyObject(h)||("string"==typeof(l=h.path)&&l.length||(l="/"),f=parseInt(h.days,10),isNaN(f)&&(f=100),x.setCookie(h.name||"aam_did",p,24*f*60,l,h.domain||"."+document.domain.replace(/^www\./,""),!0===h.secure))),A.abortRequests||T.requestToProcess(e,t)},makeRequestSrcData:function(r){r.sids=k.removeEmptyArrayValues(r.sids||[]),r.pdata=k.removeEmptyArrayValues(r.pdata||[]);var o=A,e=o.platformParams,t=x.encodeAndBuildRequest(r.sids,","),n=x.encodeAndBuildRequest(r.pdata,","),s=(r.logdataArray||[]).join("&");delete r.logdataArray;var i,a,d=encodeURIComponent,u=E.IS_HTTPS?"https://":"http://",c=o.declaredId.getDeclaredIdQueryString(),l=o.adms.instance?o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()):"",f=function(){var e,t,n,s,i=[];for(e in r)if(!(e in o.reservedKeys)&&r.hasOwnProperty(e))if(t=r[e],e=d(e),t instanceof Array)for(n=0,s=t.length;n<s;n++)i.push(e+"="+d(t[n]));else i.push(e+"="+d(t));return i.length?"&"+i.join("&"):""}(),p="d_dil_ver="+d(DIL.version),h="d_nsid="+e.d_nsid+o.getCoopQueryString()+c+l+(t.length?"&d_sid="+t:"")+(n.length?"&d_px="+n:"")+(s.length?"&d_ld="+d(s):""),g="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst,m=y?"&h_referer="+d(location.href):"";return a=(i=u+I+".demdex.net/event")+"?"+p+"&"+h+g+f+m,{corsSrc:i+"?"+p+"&_ts="+(new Date).getTime(),src:a,corsPostData:h+g+f+m,isDeclaredIdCall:""!==c}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var t=A.declaredId,n=t.declaredId.request||t.declaredId.init||{},s={dpid:n.dpid||"",dpuuid:n.dpuuid||""};this.fireCORS(e,s)}},fireImage:function(t){var e,n,s=A;s.abortRequests||(s.firing=!0,e=new Image(0,0),s.sent.push(t),e.onload=function(){s.firing=!1,s.fired.push(t),s.num_of_img_responses++,s.registerRequest()},n=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type,R.log(c),s.abortRequests=!0,s.firing=!1,s.errored.push(t),s.num_of_img_errors++,s.registerRequest()},e.addEventListener("error",n),e.addEventListener("abort",n),e.src=t.src)},fireCORS:function(s,i){var r=this,o=A,e=this.corsMetadata.corsType,t=s.corsSrc,n=s.corsInstance,a=s.corsPostData,d=s.postCallbackFn,u="function"==typeof d;if(!o.abortRequests&&!v){o.firing=!0;try{n.open("post",t,!0),"XMLHttpRequest"===e&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t;try{if((t=JSON.parse(e))!==Object(t))return r.handleCORSError(s,i,"Response is not JSON")}catch(e){return r.handleCORSError(s,i,"Error parsing response as JSON")}try{var n=s.callbackFn;o.firing=!1,o.fired.push(s),o.num_of_cors_responses++,n(t,i),u&&d(t,i)}catch(e){e.message="DIL handleCORSResponse caught error with message "+e.message,c=e.message,R.log(c),e.filename=e.filename||"dil.js",e.partner=I,DIL.errorModule.handleError(e);try{n({error:e.name+"|"+e.message},i),u&&d({error:e.name+"|"+e.message},i)}catch(e){}}finally{o.registerRequest()}}(this.responseText)}),n.onerror=function(){r.handleCORSError(s,i,"onerror")},n.ontimeout=function(){r.handleCORSError(s,i,"ontimeout")},n.send(a)}catch(e){this.handleCORSError(s,i,"try-catch")}o.sent.push(s),o.declaredId.declaredId.request=null}},handleCORSError:function(e,t,n){A.num_of_cors_errors++,A.corsErrorSources.push(n)}},k={isValidPdata:function(e){return!!(e instanceof Array&&this.removeEmptyArrayValues(e).length)},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){var t,n=0,s=e.length,i=[];for(n=0;n<s;n++)null!=(t=e[n])&&""!==t&&i.push(t);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},x={convertObjectToKeyValuePairs:function(e,t,n){var s,i,r=[];for(s in t=t||"=",e)e.hasOwnProperty(s)&&null!=(i=e[s])&&""!==i&&r.push(s+t+(n?encodeURIComponent(i):i));return r},encodeAndBuildRequest:function(e,t){return e.map(function(e){return encodeURIComponent(e)}).join(t)},getCookie:function(e){var t,n,s,i=e+"=",r=document.cookie.split(";");for(t=0,n=r.length;t<n;t++){for(s=r[t];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(i))return decodeURIComponent(s.substring(i.length,s.length))}return null},setCookie:function(e,t,n,s,i,r){var o=new Date;n=n&&1e3*n*60,document.cookie=e+"="+encodeURIComponent(t)+(n?";expires="+new Date(o.getTime()+n).toUTCString():"")+(s?";path="+s:"")+(i?";domain="+i:"")+(r?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array&&(Array.prototype.push.apply(e,t),!0)},extendObject:function(e,t,n){var s;if(e!==Object(e)||t!==Object(t))return!1;for(s in t)if(t.hasOwnProperty(s)){if(!k.isEmptyObject(n)&&s in n)continue;e[s]=t[s]}return!0},getMaxCookieExpiresInMinutes:function(){return E.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(e,t){var n;if(e===Object(e)&&"function"==typeof t)for(n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t)}},N=(j=C.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var e=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){e.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=this.instance.isApproved([this.instance.Categories.AAM]),j.adms.waitForMidToReleaseRequests(),j.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!j.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});C.optIn=N;var F,Q,H,U,B=(Q=(F=C).requestController,H=F.optIn,U={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},hasGoSignal:function(){return!(!(H.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||Q.adms.isOptedOut)},fetchConsentData:function(n,e){var s=this,t={};"function"!=typeof n&&(n=function(){}),H.instance&&H.isIabContext()?(e&&(t.timeout=e),H.instance.execute({command:"iabPlugin.fetchConsentData",params:t,callback:function(e,t){t===Object(t)?(s.doesGdprApply=!!t.gdprApplies,s.consentString=t.consentString||""):(s.doesGdprApply=!1,s.consentString=""),s.isVendorConsented=H.instance.isApproved(H.instance.Categories.AAM),e?n({}):s.checkQueryStringObject(n),Q.adms.waitForMidToReleaseRequests()}})):n({})},getQueryString:function(){return H.isIabContext()?"gdpr="+(this.doesGdprApply?1:0)+"&gdpr_consent="+this.consentString+"&":""},getQueryStringObject:function(e,t){this.fetchConsentData(e,t)},checkQueryStringObject:function(e){U.hasGoSignal()&&"function"==typeof e&&e({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});C.iab=B,"error"===I&&0===r&&window.addEventListener("load",function(){DIL.windowLoaded=!0});function G(){W||(W=!0,A.registerRequest(),X())}var W=!1,X=function(){setTimeout(function(){p||A.firstRequestHasFired||("function"==typeof m?M.afterResult(m).submit(!0):M.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)},K=document;"error"!==I&&(DIL.windowLoaded?G():"complete"!==K.readyState&&"loaded"!==K.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0,G()}):(DIL.windowLoaded=!0,G())),A.declaredId.setDeclaredId(s,"init"),N.init(),B.init(),A.processVisitorAPI();E.IS_IE_LESS_THAN_10&&x.replaceMethodsWithFunction(M,function(){return this}),this.api=M,this.getStuffedVariable=function(e){var t=P.stuffed[e];return t||"number"==typeof t||(t=x.getCookie(e))||"number"==typeof t||(t=""),t},this.validators=k,this.helpers=x,this.constants=E,this.log=O,this.pendingRequest=L,this.requestController=A,this.destinationPublishing=T,this.requestProcs=V,this.units=C,this.initConfig=n,this.logger=R,w&&(this.variables=P,this.callWindowLoadFunctions=G)},DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"9.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(){var e=arguments[0];this.windowLoaded="function"==typeof e?!!e():"boolean"!=typeof e||e},create:function(e){try{return new DIL(e)}catch(e){throw new Error("Error in attempt to create DIL instance with DIL.create(): "+e.message)}},registerDil:function(e,t,n){var s=t+"$"+n;s in this.dils||(this.dils[s]=e)},getDil:function(e,t){var n;return"string"!=typeof e&&(e=""),(n=e+"$"+(t=t||0))in this.dils?this.dils[n]:new Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,n){var s=this.getDil(t,n);return s instanceof this?s.getStuffedVariable(e):""}}),DIL.errorModule=(r=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),a=!(o={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){a=!0},handleError:function(e){if(!a)return"DIL error module has not been activated";e!==Object(e)&&(e={});var t=e.name?(e.name+"").toLowerCase():"",n=t in o?o[t]:o.noerrortypedefined,s=[],i={name:t,filename:e.filename?e.filename+"":"",partner:e.partner?e.partner+"":"no_partner",site:e.site?e.site+"":document.location.href,message:e.message?e.message+"":""};return s.push(n),r.api.pixels(s).logs(i).useImageRequest().submit(),"DIL error report sent"},pixelMap:o}),DIL.tools={},DIL.modules={helpers:{}})}();
*/																																																																																																																																																																																																																																																																																																																																																																													    
																																																																																																																																																																																																																																																																																																																																																																																				    
			

}catch(e){console.log(e);}

if(!utag_condload){try{ try{
// Taken from group-lib-template as of 2023-10-31

/**
 * TEALIUM ENRICHMENT & DLE READY FUNCTIONS DEFINITION
 * Tealium docs for Tealium Enrichment: https://community.tealiumiq.com/t5/Customer-Data-Hub/Data-Layer-Enrichment/ta-p/684#technical_details
 * 
 * The data layer enrichment request provides a callback mechanism so that you can execute code 
 * based on the response of the data layer enrichment request. 
 * The callback method is named window.tealium_enrichment().
 * 
 * To be able to potentially add multiple functions using data layer enrichment,
 * we have developed an Event-based logic.
 * 
 * Similarly, we use an intelligent polling mechanism (Tealium DLE Ready) to attempt getting 
 * the most recent version of the Visitor Profile in the CDP.
 * More details on the approach here: https://cps.confluence.agile.vodafone.com/pages/viewpage.action?spaceKey=DO&title=CDP+-+Adobe+Target+Integration
 * 
 * One would use tealium_enrichment Event to have the first response from the the CDP,
 * and tealium_dle_ready Event to make sure to have the latest CDP available.
 * 
 * Inside the event listener, e.detail.data is the data coming from the CDP.
 * 
 * This extension must be scoped to Preloader
 */
window.tealium_enrichment = function (data) {
    if (typeof utag === 'object' && typeof utag.DB === 'function') { // Logging
        utag.DB('TEALIUM ENRICHMENT - dispatching tealium_enrichment event with data:');
        utag.DB(JSON.parse(JSON.stringify(data)));
    }

    const tealiumEnrichmentEvent = new CustomEvent('tealium_enrichment', {
        detail: data
    });
    document.dispatchEvent(tealiumEnrichmentEvent);

    if (typeof utag === 'object' && typeof utag.DB === 'function') // Logging
        utag.DB('TEALIUM ENRICHMENT - END (OK)');
}

window.tealium_dle_ready = function (data) {
    if (data === false) {
        if (typeof utag === 'object' && typeof utag.DB === 'function') // Logging
            utag.DB('TEALIUM DLE READY - END (Intelligent Polling failed)');
        return;
    }
    if (typeof utag === 'object' && typeof utag.DB === 'function') { // Logging
        utag.DB('TEALIUM DLE READY - dispatching tealium_dle_ready event with data:');
        utag.DB(JSON.parse(JSON.stringify(data)));
    }

    const tealiumEnrichmentEvent = new CustomEvent('tealium_dle_ready', {
        detail: data
    });
    document.dispatchEvent(tealiumEnrichmentEvent);

    if (typeof utag === 'object' && typeof utag.DB === 'function') // Logging
        utag.DB('TEALIUM DLE READY - END (OK)');
}

/**
 * USAGE:
 * (function must be at a persistent scope, like "utag", so that the "once" option works)
 * Tealium Enrichment:
    utag.handleTealiumEnrichment = utag.handleTealiumEnrichment || function(e) {
        let data = e.detail;
        // Do something here
    }
    document.addEventListener('tealium_enrichment', utag.handleTealiumEnrichment, {
        once: true
    });
* Tealium DLE Ready
    utag.handleTealiumDLE = utag.handleTealiumDLE || function(e) {
        let data = e.detail;
        // Do something here
    }
    document.addEventListener('tealium_dle_ready', utag.handleTealiumEnrichment, {
        once: true
    });
 *
 */
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id: "vodafone.cz-main",
    o: {},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log: [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      blr_always: 1,
      ready_q: [],
      sendq: { "pending": 0 },
      run_ready_q: function () {
        for (var i = 0; i < utag.loader.ready_q.length; i++) {
          utag.DB("READY_Q:" + i);
          try { utag.loader.ready_q[i]() } catch (e) { utag.DB(e) };
        }
      },
      lh: function (a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function (a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if (utag.udoname && utag.udoname.indexOf(".") < 0) {
            utag.ut.merge(utag.data, window[utag.udoname], 0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if (utag.cfg.load_rules_at_wait) {
            utag.handler.LR(utag.data);
          }
        } catch (e) { utag.DB(e) };

        d = 0;
        g = [];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4) {
            //LOAD the bundled tag set to wait here
            this.f[b.id] = 0;
            utag.loader.LOAD(b.id)
          } else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
            d++;
          } else {
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id] = 1;
          }
        }

        if (utag.cfg.nonblocking_tags === true) {
          var promises = [];
          var addExecutionPromise = function (self, functionToExecute, args, tagId) {
            // just use one group
            // use a function that returns the Promise to make sure they don't load/fire out of order because Promises queue for execution immediately upon creation
            promises.push(async function () {
                try {
                  // this is important to avoid having the tag block the main thread
                  setTimeout(function () {
                    functionToExecute.apply(self, args)
                  }, 1)
                } catch (e) {
                  utag.DB && utag.DB(e);
                }
            })
          }
          for (a = 0; a < g.length; a++) {
            addExecutionPromise(this, utag.loader.AS, [g[a]], g[a].id)
          }
          var settlePromisesInSequence = async function (promises) {
            const results = [];
            // sequentially process each set of promises
            for (var i = 0; i < promises.length; i++) {
              // wait for the current set of promises to settle;
              var result = await promises[i]();
              // store the results (optional, depending on whether you need to use the results later)
              results.push(result);
            }
            // return the results so we can tell what's happening maybe? Might need to improve this output
            return results;
          }

          settlePromisesInSequence(promises)
            .then(function (results) {
              utag.DB('PROMISE RESULTS ' + results)
              if (d == 0) {
                utag.loader.END();
              }
            })
        } else {
          for (a = 0; a < g.length; a++) {
            utag.loader.AS(g[a]);
          }
          if (d == 0) {
            utag.loader.END();
          }
        }
      },
      AS: function (a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a, 'src')) {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id] = 0;
        if (a.load == 2) {
          utag.DB("Attach sync: " + a.src);
          a.uid = a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if (typeof a.cb != 'undefined') a.cb();
        } else if (a.load == 1 || a.load == 3) {
          if (b.createElement) {
            c = 'utag_vodafone.cz-main_' + a.id;
            if (!b.getElementById(c)) {
              d = {
                src: a.src,
                id: c,
                uid: a.id,
                loc: a.loc
              }
              if (a.load == 3) { d.type = "iframe" };
              if (typeof a.cb != 'undefined') d.cb = a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function (a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function (tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    // if we know the tid but don't know the category and this is a category opt out...
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) { utag.DB(e) }
        return false;
      },
      RDdom: function (o) {
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
      },
      RDcp: function (o, b, c, d) {
        b = utag.loader.RC();

        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      getCookieState: function (key) {
        utag.loader.cookieState = utag.loader.cookieState || {};
        return utag.loader.cookieState[key];
      },
      setCookieState: function (key, value) {
        utag.loader.cookieState = utag.loader.cookieState || {};
        utag.loader.cookieState[key] = value;
        return utag.loader.cookieState[key];
      },
      hasSplitUtagMainCookie: function () {
        if (utag.loader.getCookieState('hasSplit') === true && utag.cfg.split_cookie === true) return true // already have the cookie we need
        if (utag.loader.getCookieState('hasSplit') === false && utag.cfg.split_cookie === false) return false // already have the cookie we need
        // otherwise run the function and actually check the cookies
        var hasSplitCookies = document.cookie.includes("utag_main_")
        utag.loader.setCookieState('hasSplit', hasSplitCookies)
        return hasSplitCookies;
      },
      hasUtagMainCookie: function () {
        if (utag.loader.getCookieState('hasUnsplit') === true && utag.cfg.split_cookie === false) return true // already have the cookie we need
        if (utag.loader.getCookieState('hasUnsplit') === false && utag.cfg.split_cookie === true) return false // already have the cookie we need
        // otherwise run the function and actually check the cookies
        var hasUnsplitCookie = document.cookie.includes("utag_main=")
        utag.loader.setCookieState('hasUnsplit', hasUnsplitCookie)
        return hasUnsplitCookie;
      },
      convertingToSplitCookies: function () {
        return utag.cfg.split_cookie && utag.loader.hasUtagMainCookie();
      },
      revertingSplitCookies: function () {
        return !utag.cfg.split_cookie && utag.loader.hasSplitUtagMainCookie();
      },
      readIndividualCookies: function () {
        if (!document.cookie || document.cookie === "") {
          return {};
        }
        var cookies = document.cookie.split("; ");
        return cookies.reduce(function (result, cookie) {
          var kv = cookie.split("=");
          if (kv[0].startsWith("utag_")) {
            var cookieName = kv[0].split("_")[1];
            var cookieNameWithTag = "utag_" + cookieName;
            if (!result[cookieNameWithTag]) {
              result[cookieNameWithTag] = {};
            }
            var nameTrimmed = kv[0].replace(cookieNameWithTag + "_", "");
            result[cookieNameWithTag][nameTrimmed] = String(kv[1]).replace(/%3B/g, ';')
          }
          return result;
        }, {});
      },
      RDqp: function (o, a, b, c) {
        a = location.search + (location.hash + '').replace("#", "&");
        if (utag.cfg.lowerqp) { a = a.toLowerCase() };
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if (c.length > 1) {
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function (o, a, b, h) {
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try {
            h = a[b].name || a[b].getAttribute("property") || "";
          } catch (e) { h = ""; utag.DB(e) };
          if (utag.cfg.lowermeta) { h = h.toLowerCase() };
          if (h != "") { o["meta." + h] = a[b].content }
        }
      },
      RDva: function (o) {
        // Read visitor attributes in local storage
        var readAttr = function (o, l) {
          var a = "", b;
          a = localStorage.getItem(l);
          if (!a || a == "{}") return;
          b = utag.ut.flatten({ va: JSON.parse(a) });
          utag.ut.merge(o, b, 1);
        }
        try {
          readAttr(o, "tealium_va");
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
        } catch (e) { utag.DB(e) }
      },
      RDut: function (o, a) {
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        var t = {};
        var d = new Date();
        var m = (utag.ut.typeOf(d.toISOString) == "function");
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        o["ut.event"] = a || "view";
        t["tealium_event"] = o["tealium_event"] || o["ut.event"]
        t["tealium_visitor_id"] = (o["tealium_visitor_id"] || o["cp.utag_main_v_id"] || o["ut.visitor_id"]);
        o["ut.visitor_id"] = o["cp.utag_main_v_id"];

        t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try {
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = "prod";
        } catch (e) { utag.DB(e) }

        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut" + "ag.js";
        t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
        t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
        t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
        // Adjust date to local time
        d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
        t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");

        if (utag.cfg.disable_tealium_attribute_override) {
          utag.ut.merge(o,t,1);
        } else {
          utag.ut.merge(o,t,0);
        }
      },
      RDses: function (o, a, c) {
        a = (new Date()).getTime();
        c = (a + parseInt(utag.cfg.session_timeout)) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
        if (!o["cp.utag_main_ses_id"]) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
        }

        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        var ses_id = utag.loader.addExpSessionFlag(o["cp.utag_main_ses_id"] || a);
        var pn = utag.loader.addExpSessionFlag(o["cp.utag_main__pn"]);
        var ss = utag.loader.addExpSessionFlag(o["cp.utag_main__ss"]);
        var st = utag.loader.addExpSessionFlag(c);
        var se = utag.loader.addExpSessionFlag(o["cp.utag_main__se"]);

        utag.loader.SC("utag_main",
          {
            _sn: (o["cp.utag_main__sn"] || 1),
            _se: se,
            _ss: ss,
            _st: st,
            ses_id: ses_id,
            _pn: pn
          });
      },
      containsExpSessionFlag: function (v) {
        return String(v).replace(/%3B/g, ';').includes(";exp-session");
      },
      addExpSessionFlag: function (v) {
        return utag.loader.containsExpSessionFlag(v) ? v : v + ";exp-session";
      },
      containsExpFlag: function (v) {
        return String(v).replace(/%3B/g, ';').includes(";exp-");
      },
      addExpFlag: function (v, x) {
        return utag.loader.containsExpFlag(v) ? v : v + ";exp-" + String(x);
      },
      RDpv: function (o) {
        if (typeof utag.pagevars == "function") {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RDlocalStorage: function (o) {
        if (utag.cfg.ignoreLocalStorage) {
          return;
        }
        Object.keys(window.localStorage).forEach(function (localStorageKey) {
          o["ls." + localStorageKey] = window.localStorage[localStorageKey];
        });
      },
      RDsessionStorage: function (o) {
        if (utag.cfg.ignoreSessionStorage) {
          return;
        }
        Object.keys(window.sessionStorage).forEach(function (sessionStorageKey) {
          o["ss." + sessionStorageKey] = window.sessionStorage[sessionStorageKey];
        });
      },
      convertCustomMultiCookies: function () {
        var cookiesToConvert = {}
        if (utag.loader.convertingToSplitCookies()) {
          utag.loader.mapUtagCookies(function (parentCookie) {
            cookiesToConvert[parentCookie.key] = cookiesToConvert[parentCookie.key] || {}
            parentCookie.value.split('$').forEach(function (subCookie) {
              var key = subCookie.split(':')[0]
              var value = subCookie.split(':')[1]
              cookiesToConvert[parentCookie.key][key] = (String(value).indexOf('%3Bexp-') !== -1 && String(value).indexOf('%3Bexp-session') === -1) ? String(value).replace(/%3B/g, ';') + 'u' : String(value).replace(/%3B/g, ';');
            })
          })
        } else if (utag.loader.revertingSplitCookies()) {
          utag.loader.mapUtagCookies(function (splitCookie) {
            var parentCookieName = splitCookie.key.match(/^utag_[^_]*/)[0];
            var subCookieName = splitCookie.key.split(parentCookieName + '_')[1];
            cookiesToConvert[parentCookieName] = cookiesToConvert[parentCookieName] || {};
            cookiesToConvert[parentCookieName][subCookieName] = (String(splitCookie.value).indexOf('%3Bexp-') !== -1 && String(splitCookie.value).indexOf('%3Bexp-session')) === -1 ? String(splitCookie.value).replace(/%3B/g, ';') + 'u' : String(splitCookie.value).replace(/%3B/g, ';');
          })
        }
        if (utag.loader.convertingToSplitCookies()) {
          utag.loader.getUtagCookies().forEach(function (cookie) {
            utag.loader.deleteCookie(cookie.key);
          });
        } else if (utag.loader.revertingSplitCookies()) {
          utag.loader.deleteIndividualCookies();
        }
        Object.keys(cookiesToConvert).forEach(function (key) {
          utag.loader.SC(key, cookiesToConvert[key]);
        });
      },
      RD: function (o, a) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if (utag.cfg.split_cookie) {
          utag.loader.checkCookiesAgainstWhitelist();
        }

        if (utag.loader.convertingToSplitCookies() || utag.loader.revertingSplitCookies()) {
          utag.loader.convertCustomMultiCookies();
        }

        if (!utag.loader.rd_flag) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          var setVId = window.utag_cfg_ovrd && window.utag_cfg_ovrd.always_set_v_id || false;
          if (setVId) {
            o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
            utag.loader.SC("utag_main", { "v_id": o["cp.utag_main_v_id"] });
          }
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if (a && !utag.cfg.noview) utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
        utag.loader.RDlocalStorage(o);
        utag.loader.RDsessionStorage(o);
      },
      whitelistDefined: function () {
        return utag.cfg.split_cookie_allowlist && Array.isArray(utag.cfg.split_cookie_allowlist);
      },
      cookieIsAllowed: function (key) {
        return !utag.loader.whitelistDefined() || utag.cfg.split_cookie_allowlist.includes(key);
      },
      checkCookiesAgainstWhitelist: function () {
        if (!utag.loader.whitelistDefined()) {
          return;
        }
        utag.loader.mapUtagCookies(function (cookie) {
          if (!utag.loader.cookieIsAllowed(cookie.key.replace("utag_main_", ""))) {
            utag.loader.deleteCookie(cookie.key);
          }
        }, true);
      },
      deleteIndividualCookies: function () {
        utag.loader.mapUtagCookies(function (cookie) {
          utag.loader.deleteCookie(cookie.key);
        });
      },
      deleteCookie: function (key) {
        document.cookie = key + "=; path=/;domain=" + utag.cfg.domain + ";max-age=0;";
      },
      getUtagCookies: function (onlyUtagMain = false) {
        var cookies = document.cookie.split("; ");
        var result = [];
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          if (cookie.startsWith(onlyUtagMain ? "utag_main_" : "utag_")) {
            var kv = cookie.split("=");
            result.push({
              key: kv[0],
              value: kv[1]
            });
          }
        }
        return result;
      },
      mapUtagCookies: function (mapFunction, onlyUtagMain = false) {
        var cookies = utag.loader.getUtagCookies(onlyUtagMain);
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          mapFunction(cookie);
        }
      },
      filterArray: function (array, predicate) {
        var y = 0;
        for (var x = 0; x < array.length; x++) {
          if (predicate(array[x])) {
            array[y] = array[x];
            y++;
          }
        }
        array.length = y;
      },
      RC: function (a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();

        var newMultiCookies;
        if (utag.loader.hasSplitUtagMainCookie()) {
          newMultiCookies = utag.loader.readIndividualCookies();
          utag.loader.filterArray(b, function (cookie) { return !cookie.startsWith("utag_") });
        }

        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck != "undefined") {
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try {
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                } catch (er) { utag.DB(er) };
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (utag.ut.typeOf(j[f]) == "array") {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)) {
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        if (newMultiCookies) {
          Object.keys(newMultiCookies).forEach(function (tag) {
            o[tag] = {};
            Object.keys(newMultiCookies[tag]).forEach(function (key) {
              o[tag][key] = newMultiCookies[tag][key].split(';exp-')[0]
            })
          });
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function (a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a == "utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        var data;
        exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        x = exp.toGMTString();
        if (c && c === "da" || (utag.cfg.split_cookie && c === 'd')) {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
          data = utag.loader.GV(b);
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          if (utag.cfg.split_cookie) {
            d = utag.loader.readIndividualCookies()[a] || {};
            data = utag.loader.GV(b);
          } else {
            d = utag.loader.RC(a, 0);
          }
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (utag.ut.typeOf(d[e]) == "array") ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          if (utag.loader.convertingToSplitCookies() === true) {
            delete d[a];
          }
          data = utag.loader.GV(d);
          h = new Array();
          for (g in data) {
            if (utag.ut.typeOf(d[g]) == "array") {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        if (utag.cfg.split_cookie && c !== 'da' && c !== 'd') {
          utag.loader.prepareAndWriteCookies(a, data, x);
        } else if (utag.cfg.split_cookie) {
          utag.loader.mapUtagCookies(function (cookieInfo) {
            var cookiesToDelete = Object.keys(data || {}).map(function (key) {
              return a + '_' + key
            });
            if ((c === 'da' && cookieInfo.key.startsWith(a)) || (c === 'd' && cookiesToDelete.indexOf(cookieInfo.key) !== -1)) {
              document.cookie = cookieInfo.key + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
            }
          })
        } else {
          document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie ? ";secure" : "");
        }
        return 1
      },
      prepareAndWriteCookies: function (tag, data, expiration) {
        var defaultSessionExpirationCookies = ["_pn", "_ss", "_st", "_ses_id", "_se"];
        var originalExpiration = expiration;
        if (Object.keys(data).length > 0) {
          for (var key in data) {
            expiration = originalExpiration;
            if (!utag.loader.cookieIsAllowed(key)) {
              continue;
            }
            var value = String(data[key]);
            //add exp-session to the default session expiration cookies
            if (defaultSessionExpirationCookies.includes(key)) {
              value = utag.loader.addExpSessionFlag(value);
            }
            //check for a user set expiration on each cookie
            if (value.match(/exp-(\d+|session)$/)) {
              var expValue = RegExp.$1;
              if (expValue === "session" && !!utag.cfg.session_timeout) {
                value = utag.loader.addExpSessionFlag(value);
                expiration = new Date();
                expiration.setTime(expiration.getTime() + parseInt(utag.cfg.session_timeout));
                expiration = expiration.toGMTString(); // FIX for Chrome with US time settings
              } else {
                var expInt = parseInt(expValue);
                if (!!expInt) {
                  value = utag.loader.addExpFlag(value, expInt);
                  expiration = new Date(expInt);
                  expiration = expiration.toGMTString(); // FIX for Chrome with US time settings
                }
              }
            }
            utag.loader.writeCookie(tag + "_" + key, value, expiration);
          }
          utag.loader.deleteCookie(tag);
        }
      },
      writeCookie: function (key, value, expiration) {
        if (value.includes(";")) {
          value = value.replace(/;/g, encodeURIComponent(";"));
        }
        document.cookie = key + "=" + value + ";path=/;domain=" + utag.cfg.domain + ";expires=" + expiration + (utag.cfg.secure_cookie ? ";secure" : "");
      },
      LOAD: function (a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if (!utag.loader.cfg) {
          return
        }
        if (this.ol == 0) {
          if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
            this.f[a] = 1;
            delete utag.loader.bq[a];
          }
          for (b in utag.loader.GV(utag.loader.bq)) {
            if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
              utag.loader.bk[a] = 1;
              utag.DB("blocked: " + a);
            }
            utag.DB("blocking: " + b);
            return;
          }
          utag.loader.INIT();
          return;
        }
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;

          if (utag.cfg.noview != true) {
            if (utag.loader.cfg[a].send) {
              utag.DB("SENDING: " + a);
              try {
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: " + a);
                  while (d = utag.loader.sendq[a].shift()) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view', utag.handler.C(utag.data));
                }
                utag.rpt['s_' + a] = 0;
              } catch (e) {
                utag.DB(e);
                utag.rpt['s_' + a] = 1;
              }
            }
          }
          if (utag.loader.rf == 0) return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
          utag.loader.END();
        }
      },
      EV: function (a, b, c, d) {
        if (b == "ready") {
          if (!utag.data) {
            try {
              utag.cl = { '_all_': 1 };
              utag.loader.initdata();
              utag.loader.RD(utag.data);
            } catch (e) { utag.DB(e) };
          }
          if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if (utag.loader.ready_q.length <= 1) {
              if (document.addEventListener) {
                RH = function () {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function () {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function (b, c, d, e, v, w) {
        if (this.ended) { return };
        this.ended = 1;
        utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
        if (utag.handler.base && utag.handler.base != '*') {
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        } else if (utag.handler.base == '*') {
          utag.ut.merge(utag.handler.df, b, 1);
        }

        utag.rpt['r_0'] = "t";
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
        }

        utag.rpt.ts['s'] = new Date();
      

        v = utag.cfg.path;

        if (b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({ src: v + "ut" + "ag" + ".v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()), id: "tiqapp" })

        if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
        utag.handler.INIT();
      }
    },
    DB: function (a, b) {
      // return right away if we've already checked the cookie
      if (utag.cfg.utagdb === false) {
        return;
      } else if (typeof utag.cfg.utagdb == "undefined") {
        b = document.cookie + '';
        utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
      }
      if (utag.cfg.utagdb === true) {
        var t;
        if (utag.ut.typeOf(a) == "object") {
          t = utag.handler.C(a)
        } else {
          t = a
        }
        utag.db_log.push(t);
        try { if (!utag.cfg.noconsole) console.log(t) } catch (e) { }
      }
    },
    RP: function (a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function (a, c, d) {
      return this.track({ event: 'view', data: a || {}, cfg: { cb: c, uids: d } })
    },
    link: function (a, c, d) {
      return this.track({ event: 'link', data: a || {}, cfg: { cb: c, uids: d } })
    },
    track: function (a, b, c, d, e) {
      a = a || {};
      if (typeof a == "string") {
        a = { event: a, data: b || {}, cfg: { cb: c, uids: d } }
      }

      a.data = { ...a.data }

      // track called directly also supports a 3rd option where first param (a) is data layer and second param (b) is cb function
      for (e in utag.loader.GV(utag.o)) {
        utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || { cb: b, uids: c })
      }
      a.cfg = a.cfg || { cb: b };
      if (typeof a.cfg.cb == "function") a.cfg.cb();

      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function (a, b, c) {
        utag.DB('utag.handler.INIT');
        if (utag.initcatch) {
          utag.initcatch = 0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function () {
        return 1
      },
      // reset and run load rules
      LR: function (b) {
        utag.DB("Load Rules");
        for (var d in utag.loader.GV(utag.cond)) {
          utag.cond[d] = false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
        for (var r in utag.loader.GV(utag.cond)) {
          utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE: function (a, b, c, d, e, f, g) {
        if (c != "alr" && !this.cfg_extend) {
          return 0;
        }
        utag.DB("RE: " + c);
        if (c == "alr") utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if (typeof this.extend != "undefined") {
          g = 0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e = 0;
              if (typeof this.cfg_extend != "undefined") {
                f = this.cfg_extend[d];
                if (typeof f.count == "undefined") f.count = 0;
                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) {
                  e = 1
                } else {
                  if (f[c] == 1) { g = 1 };
                  f.count++
                }
              }
              if (e != 1) {
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
              utag.ut.error({ e: er.message, s: utag.cfg.path + 'utag.js', l: d, t: 'ge' });
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function (a, b, c, d, e, f) {
        utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b, this.df, 0);
        utag.loader.RD(b, a);

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d) {
          try {
            if (typeof utag.sender[d] != "undefined") {
              utag.DB("SENDING: " + d);
              utag.sender[d].send(a, utag.handler.C(b));
              utag.rpt['s_' + d] = 0;
            } else if (utag.loader.cfg[d].load != 2) {
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({ "event": a, "data": utag.handler.C(b) });
              utag.loader.sendq.pending++;
              utag.loader.AS({ id: d, load: 1 });
            }
          } catch (e) { utag.DB(e) }
        }

        if (utag.cfg.nonblocking_tags === true) {
          var promises = [];
          var addExecutionPromise = function (self, functionToExecute, args, tagId) {
            // use a function that returns the Promise to make sure they don't load/fire out of order because Promises queue for execution immediately upon creation
            promises.push(async function () {
                try {
                  // this is important to avoid having the tag block the main thread
                  setTimeout(function () {
                    functionToExecute.apply(self, args)
                  }, 1)
                } catch (e) {
                  utag.DB && utag.DB(e);
                }
            })
          }
        }

        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if (c && c.uids) {
          if (!utag.cfg.suppress_before_load_rules_with_uids) {
            this.RE(a, b, "blr");
          }
          this.RE(a, b, "alr");
          for (f = 0; f < c.uids.length; f++) {
            d = c.uids[f];
            // bypass load rules, but still check the OPTOUTMULTI cookie before firing
            if (utag.loader.cfg[d] && !utag.loader.OU(utag.loader.cfg[d].tid)) {

              if (utag.cfg.nonblocking_tags === true) {
                addExecutionPromise(this, sendTag, [a, b, d], d)
              } else {
                sendTag(a, b, d);
              }
            }
          }
        } else if (utag.cfg.load_rules_ajax) {
          this.RE(a, b, "blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a, b, "alr");

          for (f = 0; f < utag.loader.cfgsort.length; f++) {
            d = utag.loader.cfgsort[f];
            if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) {
              if (utag.cfg.nonblocking_tags === true) {
                addExecutionPromise(this, sendTag, [a, b, d], d)
              } else {
                sendTag(a, b, d);
              }
            }
          }
        } else {
          // legacy behavior
          this.RE(a, b, "alr");
          for (d in utag.loader.GV(utag.sender)) {
            if (utag.cfg.nonblocking_tags === true) {
              addExecutionPromise(this, sendTag, [a, b, d], d)
            } else {
              sendTag(a, b, d);
            }
          }
        }

        if (utag.cfg.nonblocking_tags === true) {
          var settlePromisesInSequence = async function (promises) {
            utag.DB('PROMISES ACTIVE - ' + JSON.stringify(promises), null, 2);
            const results = [];
            // sequentially process each set of promises
            for (var i = 0; i < promises.length; i++) {
              // call the function to intiatlize the promise
              var result = await promises[i]();
              // store the results (optional, depending on whether you need to use the results later)
              results.push(result);
            }
            // return the results so we can tell what's happening maybe? Might need to improve this output
            return results;
          }
          var thisRe = this.RE.bind(this);

          settlePromisesInSequence(promises)
            .then(function (results) {
              utag.DB('PROMISE RESULTS ' + results)
              thisRe(a, b, "end");
            })
        } else {
          this.RE(a, b, "end");
        }
      },
      // "sort-of" copy
      C: function (a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if (utag.ut.typeOf(a[c]) == "array") {
            b[c] = a[c].slice(0)
          } else {
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut: {
      pad: function (a, b, c, d) {
        a = "" + ((a - 0).toString(16)); d = ''; if (b > a.length) { for (c = 0; c < (b - a.length); c++) { d += '0' } } return "" + d + a
      },
      vi: function (t, a, b) {
        if (!utag.v_id) {
          a = this.pad(t, 12); b = "" + Math.random(); a += this.pad(b.substring(2, b.length), 16); try { a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2); a += this.pad(navigator.userAgent.length, 3); a += this.pad(document.URL.length, 4); a += this.pad(navigator.appVersion.length, 3); a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5) } catch (e) { utag.DB(e); a += "12345" }; utag.v_id = a;
        }
        return utag.v_id
      },
      hasOwn: function (o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function (o, a) {
        for (a in o) {
          if (utag.ut.hasOwn(o, a)) return false
        }
        return true
      },
      isEmpty: function (o) {
        var t = utag.ut.typeOf(o);
        if (t == "number") {
          return isNaN(o)
        } else if (t == "boolean") {
          return false
        } else if (t == "string") {
          return o.length === 0
        } else return utag.ut.isEmptyObject(o)
      },
      typeOf: function (e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function (o) {
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {};
        function r(c, p) {
          if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
            a[p] = c;
          } else {
            if (utag.ut.isEmptyObject(c)) {
              //a[p] = {};
            } else {
              for (var d in c) {
                r(c[d], p ? p + "." + d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      // if c is true, b always overwrites a, otherwise b only writes new keys to a
      merge: function (a, b, c, d) {
        if (c) {
          for (d in utag.loader.GV(b)) {
            a[d] = b[d]
          }
        } else {
          for (d in utag.loader.GV(b)) {
            if (typeof a[d] == "undefined") a[d] = b[d]
          }
        }
      },
      decode: function (a, b) {
        b = "";
        try { b = decodeURIComponent(a) } catch (e) { utag.DB(e) };
        if (b == "") { b = unescape(a) };
        return b
      },
      encode: function (a, b) {
        b = "";
        try { b = encodeURIComponent(a) } catch (e) { utag.DB(e) };
        if (b == "") { b = escape(a) };
        return b
      },
      error: function (a, b, c) {
        if (typeof utag_err != "undefined") {
          utag_err.push(a)
        }
      },
      loader: function (o, a, b, c, l, m) {
        utag.DB(o);
        a = document;
        if (o.type == "iframe") {
          // if an iframe of same id already exists, remove and add again (to keep DOM clean and avoid impacting browser history)
          m = a.getElementById(o.id);
          if (m && m.tagName == "IFRAME") {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0);
        } else if (o.type == "img") {
          utag.DB("Attach img: " + o.src);
          b = new Image();
        } else {
          b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8";
        }
        if (o.id) { b.id = o.id };
        for (l in utag.loader.GV(o.attrs)) {
          b.setAttribute(l, o.attrs[l])
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb == "function") {
          if (b.addEventListener) {
            b.addEventListener("load", function () { o.cb() }, false);
          } else {
            // old IE support
            b.onreadystatechange = function () { if (this.readyState == 'complete' || this.readyState == 'loaded') { this.onreadystatechange = null; o.cb() } };
          }
        }
        if (typeof o.error == "function") {
          utag.loader.EV(b, "error", o.error);
        }
        if (o.type != "img") {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to " + l + ": " + o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['vodafone.cz-main'] = utag;
  utag.cfg = {
    template: "ut4.54.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""),
    secure_cookie: ("##UTSECURECOOKIE##".replace("##" + "UTSECURECOOKIE##", "") === "true") ? true : false,
    path: "//tags.tiqcdn.com/utag/vodafone/cz-main/prod/",
    utid: "vodafone/cz-main/202608191051",
    ignoreSessionStorage: false,
    ignoreLocalStorage: false,
    split_cookie: true
  };
  utag.cfg.v = utag.cfg.template + "202608191051";
try{var _gaq=_gaq || [];var pageTracker=pageTracker || {_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[63]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};try{var _gaq=_gaq || [];var pageTracker=pageTracker || {_trackEvent:function(c,d,e,f,g){g={ga_eventCat:c,ga_eventAction:d,ga_eventLabel:e,ga_eventValue:f};utag.link(g,null,[72]);},_trackPageview:function(c){_gaq.push(['_trackPageview',c?c:null]);}}}catch(e){};utag.cond={100:0,101:0,102:0,103:0,105:0,107:0,108:0,109:0,10:0,112:0,113:0,115:0,116:0,117:0,118:0,119:0,120:0,122:0,124:0,126:0,127:0,135:0,136:0,139:0,142:0,143:0,144:0,146:0,148:0,149:0,150:0,157:0,159:0,160:0,161:0,162:0,19:0,20:0,21:0,23:0,24:0,25:0,30:0,35:0,44:0,45:0,46:0,47:0,4:0,52:0,55:0,56:0,61:0,62:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,76:0,77:0,78:0,80:0,81:0,82:0,83:0,84:0,85:0,88:0,89:0,90:0,91:0,92:0,93:0,95:0,96:0,97:0,9:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.utag.cfg.path']=utag.cfg.path}catch(e){utag.DB(e)};try{ud['js_page.adf_products_dummy']=adf_products_dummy}catch(e){utag.DB(e)};try{ud['js_page.s.events']=s.events}catch(e){utag.DB(e)};try{ud['js_page.adf_products']=adf_products}catch(e){utag.DB(e)};try{ud['js_page.sessionStorage.s_prevPageWasLogin']=sessionStorage.s_prevPageWasLogin}catch(e){utag.DB(e)};try{ud['js_page.s.pageName']=s.pageName}catch(e){utag.DB(e)};try{ud['js_page.sessionStorage.careCentreDisplayed']=sessionStorage.careCentreDisplayed}catch(e){utag.DB(e)};try{ud['js_page.VfEngagementModule']=VfEngagementModule}catch(e){utag.DB(e)};try{ud['js_page.survey_sampled']=survey_sampled}catch(e){utag.DB(e)};try{ud['js_page.device_consent_trigger']=device_consent_trigger}catch(e){utag.DB(e)};try{ud['js_page.vfconsents.isFirstPageOfVisit']=vfconsents.isFirstPageOfVisit}catch(e){utag.DB(e)};try{ud['js_page.timeoutTrigger']=timeoutTrigger}catch(e){utag.DB(e)};try{ud['js_page.nOrderProcessStep']=nOrderProcessStep}catch(e){utag.DB(e)};try{ud['js_page.EhubClick']=EhubClick}catch(e){utag.DB(e)};try{ud['js_page.seznam_cId']=seznam_cId}catch(e){utag.DB(e)};try{ud['js_page.thirdPartCookiesSupport']=thirdPartCookiesSupport}catch(e){utag.DB(e)};try{ud['js_page.value']=value}catch(e){utag.DB(e)};try{ud['js_page.meta_product_id']=meta_product_id}catch(e){utag.DB(e)};try{ud['js_page.meta_product_price']=meta_product_price}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '10':try{c[10]|=(d['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase())||(d['page_name'].toString().toLowerCase()=='WSC:Kosik:aktivace'.toLowerCase()&&/^WS/i.test(d['purchase_id'])&&!/^WSC/i.test(d['purchase_id']))}catch(e){utag.DB(e)}; break;
case '100':try{c[100]|=(d['page_name'].toString().toLowerCase()=='eShop:Objednavka:4. Dekujeme'.toLowerCase())||(d['page_name'].toString().toLowerCase()=='WSC:Kosik:aktivace'.toLowerCase()&&/^WS/i.test(d['purchase_id'])&&!/^WSC/i.test(d['purchase_id']))||(/Thank You$/i.test(d['page_name']))||(/ThankYou$/i.test(d['page_name']))||(typeof d['campaign_id']!='undefined')||(typeof d['js_page.vfconsents.isFirstPageOfVisit']=='undefined')||(/true$/i.test(d['js_page.vfconsents.isFirstPageOfVisit']))}catch(e){utag.DB(e)}; break;
case '101':try{c[101]|=(d['dom.domain'].toString().indexOf('cilichili.cz')>-1)||(d['dom.domain'].toString().indexOf('www.upc.cz')>-1)}catch(e){utag.DB(e)}; break;
case '102':try{c[102]|=(d['dom.domain'].toString().indexOf('upc.cz')>-1)}catch(e){utag.DB(e)}; break;
case '103':try{c[103]|=(d['dom.domain'].toString().indexOf('upc.cz')<0&&d['dom.domain'].toString().indexOf('upc.biz')<0)}catch(e){utag.DB(e)}; break;
case '105':try{c[105]|=(typeof d['survey_products']!='undefined'&&d['survey_products'].toString().toLowerCase().indexOf('tariff'.toLowerCase())>-1)||(typeof d['survey_products']!='undefined'&&d['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())>-1)||(typeof d['survey_products']!='undefined'&&d['survey_products'].toString().toLowerCase().indexOf('postpaid'.toLowerCase())>-1)||(typeof d['survey_products']!='undefined'&&d['survey_products'].toString().toLowerCase().indexOf('prepaid'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '107':try{c[107]|=(d['dom.domain'].toString().indexOf('upc.cz')>-1)||(d['dom.domain'].toString().indexOf('origin')>-1)}catch(e){utag.DB(e)}; break;
case '108':try{c[108]|=(d['dom.query_string'].toString().toLowerCase().indexOf('tc=a_affil:ehub'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '109':try{c[109]|=(/^a_affil:ehub/i.test(d['cp.s_campaign']))}catch(e){utag.DB(e)}; break;
case '112':try{c[112]|=(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().toLowerCase().indexOf('ind4:i'.toLowerCase())>-1)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('ind4:y')>-1)}catch(e){utag.DB(e)}; break;
case '113':try{c[113]|=(d['dom.domain'].toString().indexOf('my.upc.cz')<0)}catch(e){utag.DB(e)}; break;
case '115':try{c[115]|=(d['dom.pathname'].toString().toLowerCase().indexOf('/MyServices/Internet'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/MyServices/TV'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/MyServices/Phone'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/MyPayments/Index'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('/MyAccount/Index'.toLowerCase())>-1)||(d['dom.pathname'].toString().indexOf('/returngateway')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/kontakty-a-dokumenty/dokumenty/')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/obecne-dotazy/dotazy-ke-smlouve/stehovani')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/obecne-dotazy/dotazy-ke-smlouve/vraceni-zarizeni')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/obecne-dotazy/definice-vernostniho-portfolia-a-slevy')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/sluzby/uvazuji-o-ukonceni-sluzby-upc/')>-1)||(d['dom.pathname'].toString().indexOf('/pece-o-zakazniky/sluzby/premyslite-o-vypovedi-upc-smlouvy/')>-1)||(/^\/odchod\//.test(d['dom.pathname']))||(/^\/o-vodafonu\/ke-stazeni\/formulare\/upc-formulare\//.test(d['dom.pathname']))||(/^\/pece\/internet-data\/kabelovy-internet\//.test(d['dom.pathname']))||(/^\/pece\/telefony\/zaruka\/vraceni-zarizeni\//.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '116':try{c[116]|=(d['dom.pathname'].toString().toLowerCase().indexOf('/tarify'.toLowerCase())>-1&&d['dom.domain'].toString().indexOf('vf-4984-block-nps-popup-on-active-leadform.vodafonecz.devbox.dev.cz')>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('cms27l5shop31.oskarmobil.cz'.toLowerCase())>-1&&d['dom.pathname'].toString().indexOf('/neomezeny-internet-na-doma/')>-1)||(d['dom.domain'].toString().indexOf('www.vodafone.cz')<0&&d['dom.pathname']=='/muj/xx')||(d['dom.domain'].toString().indexOf('www-preprod.vodafone.cz')>-1&&d['dom.pathname'].toString().indexOf('/muj/odhlaseni-uspesne')>-1)||(/^\/nps/.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '117':try{c[117]|=(typeof d['vfBannerSwitcherParam1']!='undefined'&&typeof d['vfBannerSwitcherParam2']!='undefined')}catch(e){utag.DB(e)}; break;
case '118':try{c[118]|=(typeof d['js_page.s.pageName']=='undefined')||(d['js_page.s.pageName'].toString().toLowerCase().indexOf('chat:'.toLowerCase())<0&&d['js_page.s.pageName'].toString().toLowerCase().indexOf('xShop'.toLowerCase())<0&&d['js_page.s.pageName'].toString().toLowerCase().indexOf('PROGRAMY - iframes'.toLowerCase())<0&&d['isInIframe']!='true')}catch(e){utag.DB(e)}; break;
case '119':try{c[119]|=(d['cp._vfchprogress']=='true')||(d['dom.pathname']=='/pece-o-zakazniky/kontakty-a-dokumenty/kontakt')||(d['dom.pathname']=='/pece-o-zakazniky/')||(d['dom.pathname']=='/pece-o-zakazniky/kontakty-a-dokumenty/dokumenty/')||(d['dom.pathname']=='/pece-o-zakazniky/sluzby/poruchy-rady-a-tipy/')||(d['dom.pathname']=='/pece-o-zakazniky/vyuctovani/platby/')}catch(e){utag.DB(e)}; break;
case '120':try{c[120]|=(d['dom.pathname'].toString().indexOf('/vse-o-nakupu/jak-platit/')<0)}catch(e){utag.DB(e)}; break;
case '122':try{c[122]|=(typeof d['tobi_started']=='undefined'&&typeof d['tobi_session_id']=='undefined')}catch(e){utag.DB(e)}; break;
case '124':try{c[124]|=(d['dom.url'].toString().toLowerCase().indexOf('.vodafone.cz/chatpilot'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('.vodafone.cz/tobi'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('.vodafone.cz/muj'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('/muj/en'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('/en'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('/registrace'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('/pece/onenet/'.toLowerCase())<0&&d['dom.url'].toString().toLowerCase().indexOf('/pece/en'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '126':try{c[126]|=(d['page_name'].toString().toLowerCase()=='eShop:Objednavka:4. Dekujeme'.toLowerCase())||(d['page_name'].toString().toLowerCase()=='WSC:Kosik:aktivace'.toLowerCase()&&/^WS/i.test(d['purchase_id'])&&!/^WSC/i.test(d['purchase_id']))||(/Thank You$/i.test(d['page_name']))||(/ThankYou$/i.test(d['page_name']))}catch(e){utag.DB(e)}; break;
case '127':try{c[127]|=(d['dom.domain'].toString().toLowerCase().indexOf('techforum.cz'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '135':try{c[135]|=(d['dom.domain'].toString().indexOf('www.techforum.cz')>-1)}catch(e){utag.DB(e)}; break;
case '136':try{c[136]|=(d['page_name'].toString().indexOf('Osobni:#jetovtobe')>-1)}catch(e){utag.DB(e)}; break;
case '139':try{c[139]|=(d['page_url'].toString().indexOf('funa:i')<0)}catch(e){utag.DB(e)}; break;
case '142':try{c[142]|=(d['tealium_event'].toString().toLowerCase().indexOf('engagement'.toLowerCase())<0)||(d['tealium_event'].toString().toLowerCase().indexOf('lead'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '143':try{c[143]|=(d['tealium_event']=='engagement_ios_app_click')||(d['tealium_event']=='engagement_android_app_click')||(d['tealium_event']=='engagement_10_sec_delay')||(d['tealium_event']=='engagement_30_sec_delay')||(d['tealium_event']=='engagement_scroll_25')||(d['tealium_event']=='engagement_scroll_50')||(d['tealium_event']=='engagement_scroll_75')||(d['tealium_event']=='engagement_scroll_100')||(d['tealium_event']=='engaged_2_pages')}catch(e){utag.DB(e)}; break;
case '144':try{c[144]|=(d['tealium_event']=='product_detail')||(d['tealium_event']=='view_cart')||(d['tealium_event']=='initiate_checkout')||(d['tealium_event']=='purchase_vbu')||(d['tealium_event']=='purchase_cbu')||(d['tealium_event']=='purchase')||(d['tealium_event']=='add_to_cart')||(d['tealium_event']=='open_form')}catch(e){utag.DB(e)}; break;
case '146':try{c[146]|=(d['page_events'].toString().indexOf('scAdd')>-1)||(d['va.current_visit.properties.5539'].toString().indexOf('scAdd')>-1)}catch(e){utag.DB(e)}; break;
case '148':try{c[148]|=(/^\/muj/.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '149':try{c[149]|=(d['dom.url'].toString().indexOf('onenetsamoobsluha')>-1)}catch(e){utag.DB(e)}; break;
case '150':try{c[150]|=(d['dom.domain'].toString().indexOf('oskarta.cz')>-1)}catch(e){utag.DB(e)}; break;
case '157':try{c[157]|=(d['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase()&&d['vfcz__lead_type'].toString().toLowerCase().indexOf('CBU'.toLowerCase())>-1&&d['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '159':try{c[159]|=(d['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase()&&d['survey_products'].toString().indexOf('paid')>-1)}catch(e){utag.DB(e)}; break;
case '160':try{c[160]|=(d['page_name']=='Osobni:eShop:Objednavka:Dekujeme'&&d['vfcz__lead_type'].toString().toLowerCase().indexOf('VBU'.toLowerCase())>-1&&d['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '161':try{c[161]|=(d['va.current_visit.properties.5481'].toString().indexOf('Osobni:eShop:Kosik:popup-eshop-kosik-osvc')>-1&&d['va.current_visit.properties.5255'].toString().indexOf('purchase')>-1)}catch(e){utag.DB(e)}; break;
case '162':try{c[162]|=(d['va.current_visit.properties.5481'].toString().indexOf('Osobni:eShop:Objednavka:Dekujeme')>-1&&d['page_events'].toString().indexOf('purchase')>-1&&d['sales_products'].toString().toLowerCase().indexOf('Lead;Lead:Podnikatele:eShop:Kosik;1;0'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '19':try{c[19]|=(d['dom.domain'].toString().toLowerCase().indexOf('www.vodafone.cz'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '20':try{c[20]|=(d['dom.pathname'].toString().indexOf('eshop/objednavka/')>-1&&d['dom.query_string'].toString().indexOf('step=thank_you')>-1)||(/.*(\/muj\/vyuctovani\/|\/muj\/en\/billing\/).*/.test(d['dom.pathname']))||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().toLowerCase().indexOf('Osobni:Volani:Predplacene karty:Dobijeni'.toLowerCase())>-1)||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().toLowerCase().indexOf('WSC:Kosik:aktivace'.toLowerCase())>-1)||(/.*pece\/manualy\/.*\//.test(d['dom.pathname'])&&typeof d['js_page.sessionStorage.careCentreDisplayed']=='undefined')||(d['dom.pathname'].toString().indexOf('utrata-a-vyuctovani/dobijeni')>-1)||(d['dom.pathname'].toString().indexOf('\/app\/answers\/list\/')>-1&&typeof d['js_page.sessionStorage.careCentreDisplayed']=='undefined')||(d['dom.pathname'].toString().indexOf('/muj/kosik/podekovani')>-1&&d['dom.referrer'].toString().indexOf('/muj/kosik/objednavka')>-1)||(/.*pece\/([^e].+|en\/).+\/.+\/.+\//.test(d['dom.pathname'])&&typeof d['js_page.sessionStorage.careCentreDisplayed']=='undefined')||(/^\/mapa-pokryti\//i.test(d['dom.pathname']))||(/.*\/muj\/cerpani\/.*/.test(d['dom.pathname']))||(/^\/nps/.test(d['dom.pathname']))||(/.*\/muj\/vyuctovani.*/.test(d['dom.pathname']))||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().indexOf('WSC:Utrata a Vyuctovani:Zaplatit pres internet')>-1)||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Platba:OK'.toLowerCase())||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().toLowerCase()=='Osobni:Volani:Predplacene karty:Dobijeni:OK'.toLowerCase())||(/^\/vypadky/i.test(d['dom.pathname']))||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().toLowerCase()=='Osobni:Predplacena karta + Dobijeni kreditu:OK'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase().indexOf('/eshop/platba-uspech/'.toLowerCase())>-1)||(/^\/pece\/telefony/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '21':try{c[21]|=(typeof d['page_name']!='undefined'&&d['page_name'].toString().indexOf('chat')<0)||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName'].toString().indexOf('chat')<0)||(typeof d['js_page.s.pageName']=='undefined')}catch(e){utag.DB(e)}; break;
case '23':try{c[23]|=(d['js_page.s.pageName'].toString().indexOf('WSC:Nastaveni sluzeb:Potvrzeni')>-1)||(d['js_page.s.pageName'].toString().indexOf('WSC:eShop:Odmeny')>-1)||(d['js_page.s.pageName'].toString().indexOf('WSC:Ucet:Stav uctu')>-1)||(d['dom.pathname'].toString().indexOf('/ucet/zpravy')>-1)||(d['js_page.s.pageName'].toString().indexOf('WSC:Platba:OK')>-1&&typeof d['sales_products']!='undefined'&&d['sales_products'].toString().indexOf('invoice')>-1)||(d['dom.pathname'].toString().indexOf('muj/eshop/specialni-nabidky')>-1)||(d['js_page.s.pageName'].toString().indexOf('WSC:Nastaveni sluzeb:Zmenit muj tarif')>-1)||(d['js_page.s.pageName'].toString().indexOf('WSC:Prehled-light')>-1)||(d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Prehledxx'.toLowerCase())||(d['dom.pathname'].toString().indexOf('/muj/nastaveni-sluzeb/aktivni-sluzby')>-1&&d['dom.pathname'].toString().indexOf('/muj/nastaveni-sluzeb/aktivni-sluzby/prehled')<0)||(typeof d['cp.tobi_nps_trigger']!='undefined'&&d['cp.tobi_nps_trigger'].toString().indexOf('reset')>-1&&d['dom.pathname']=='/muj/'&&typeof d['visitor_login_status']!='undefined'&&d['visitor_login_status'].toString().indexOf('logged in')>-1)||(typeof d['survey_trigger_point']!='undefined')||(typeof d['cp.tobi_password_recovery']!='undefined'&&typeof d['visitor_login_status']!='undefined'&&d['visitor_login_status'].toString().indexOf('logged in')>-1&&d['dom.pathname']=='/muj/')||(d['tobi_password_recovery_unsuccessful']=='true')||(d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Dashboard'.toLowerCase()&&d['page_previous_name'].toString().toLowerCase()=='WSC:Osobní účet Registrace Potvrzení:forcedCiMigration'.toLowerCase()&&d['visitor_login_status'].toString().indexOf('logged in')>-1)||(d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Prihlaseni'.toLowerCase()&&d['visitor_login_status'].toString().indexOf('logged in')>-1&&d['js_page.s.events'].toString().indexOf('event5')>-1)||(d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Dashboard'.toLowerCase()&&d['visitor_login_status'].toString().indexOf('logged in')>-1&&d['js_page.s.events'].toString().indexOf('event6')>-1)||(d['js_page.s.pageName'].toString().indexOf('wsc:microsite:UNL_R6_UNL_SPEED')>-1)||(d['js_page.s.pageName'].toString().toLowerCase()=='WSC:Kosik:aktivace'.toLowerCase()&&d['survey_products'].toString().indexOf('WSC')>-1&&d['survey_products'].toString().indexOf('roaming')>-1&&d['device_mobile'].toString().indexOf('false')>-1)}catch(e){utag.DB(e)}; break;
case '24':try{c[24]|=(/\/podnikatele\/.*\//.test(d['dom.pathname']))||(/\/firmy-a-korporace\/.*\//.test(d['dom.pathname']))||(/\/verejna-sprava\/.*\//.test(d['dom.pathname']))||(/\/prodejny\/.*\/.*\//.test(d['dom.pathname'])&&d['isInIframe']=='false')||(/\/internet\/.*\/.*\//.test(d['dom.pathname']))||(/\/telefony\/.*\/.*\//.test(d['dom.pathname']))||(/\/osobni\/volani\/(roaming|volani-do-zahranici)\//.test(d['dom.pathname']))||(/\/tarif.*\/.*\//.test(d['dom.pathname']))||(/^\/predplacene-karty\//i.test(d['dom.pathname'])&&d['dom.url'].toString().toLowerCase().indexOf('/predplacene-karty/#rechargeByCard'.toLowerCase())<0&&typeof d['page_name']!='undefined'&&!/Thank You$/i.test(d['page_name']))||(d['dom.pathname'].toString().indexOf('/kontakty/')>-1)||(typeof d['page_previous_name']!='undefined'&&d['page_previous_name'].toString().toLowerCase().indexOf('vyhledavani'.toLowerCase())>-1&&typeof d['page_name']!='undefined'&&d['page_name']!='osobni')||(/^\/pripojeni-bez-kabelu\//.test(d['dom.pathname']))||(typeof d['js_page.sessionStorage.s_prevPageWasLogin']!='undefined'&&d['js_page.sessionStorage.s_prevPageWasLogin']=='true'&&typeof d['visitor_login_status']!='undefined'&&d['visitor_login_status'].toString().toLowerCase().indexOf('out'.toLowerCase())>-1)||(typeof d['page_channel']!='undefined'&&d['page_channel'].toString().toLowerCase().indexOf('Cart'.toLowerCase())<0&&d['page_channel'].toString().toLowerCase().indexOf('Checkout'.toLowerCase())<0&&d['page_channel'].toString().toLowerCase().indexOf('WSC:eShop:'.toLowerCase())>-1&&d['dom.pathname'].toString().toLowerCase().indexOf('muj/eshop/specialni-nabidky'.toLowerCase())<0)||(d['dom.pathname']=='/v-hub/')||(d['dom.pathname'].toString().indexOf('/televize/')>-1)}catch(e){utag.DB(e)}; break;
case '25':try{c[25]|=(d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Smart Overview')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/invoices')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Invoices')>-1)||(d['dom.pathname'].toString().indexOf('onsc/services/security/')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Services:SIM Card')>-1)||(d['dom.pathname'].toString().indexOf('/onsc/services/data/data-tariffs')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Services:Data')>-1)||(d['dom.pathname'].toString().indexOf('onsc/services/voice/calls-management')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Services:Voice:Calls Management')>-1)||(d['dom.pathname'].toString().indexOf('onsc/company/eshop/phones-and-accessories')>-1&&d['page_name'].toString().indexOf('ONSC:Home:eShop:eShop:Phones and Accessories')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/user-summary-overview')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Users Overview')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/usage-summary')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Usage Summary')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/usage-detailed')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Usage Details')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/spending-trend')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Spending Trend')>-1)||(d['dom.pathname'].toString().indexOf('onsc/billing/billing-overview/users-overview')>-1&&d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Number Summary')>-1)||(typeof d['js_page.s.pageName']!='undefined'&&d['js_page.s.pageName']=='ONSC:Home'&&typeof d['js_page.s.events']!='undefined'&&d['js_page.s.events'].toString().indexOf('event64')>-1)||(d['page_name'].toString().indexOf('ONSC:Home:Billing:Billing Overview:Invoices:Summary Statement')>-1)}catch(e){utag.DB(e)}; break;
case '30':try{c[30]|=(typeof d['js_page.adf_products']!='undefined'&&d['js_page.adf_products'].toString().indexOf('red')>-1)}catch(e){utag.DB(e)}; break;
case '35':try{c[35]|=(d['cp.vfconsents'].toString().indexOf('ind4:o')>-1)||(d['cp.vfconsents'].toString().indexOf('ind4:')<0)||(d['cp.vfconsents'].toString().indexOf('cvu:6')<0)||(d['cp.vfconsents'].toString().indexOf('trf4:o')>-1)||(d['cp.vfconsents'].toString().indexOf('trf4:')<0)||(d['cp.vfconsents'].toString().indexOf('loc4:o')>-1)||(d['cp.vfconsents'].toString().indexOf('loc4:')<0)||(d['cp.vfconsents'].toString().indexOf('thr4:o')>-1)||(d['cp.vfconsents'].toString().indexOf('thr4')<0)}catch(e){utag.DB(e)}; break;
case '4':try{c[4]|=(typeof d['cp.mcare']!='undefined'&&d['cp.mcare'].toString().toLowerCase().indexOf('universal'.toLowerCase())>-1)||(typeof d['cp.suite']=='undefined')}catch(e){utag.DB(e)}; break;
case '44':try{c[44]|=(d['dom.pathname'].toString().indexOf('/vse-o-nakupu/jak-platit/')>-1)}catch(e){utag.DB(e)}; break;
case '45':try{c[45]|=(/Thank You$/i.test(d['page_name']))||(/thankyou$/i.test(d['page_name']))}catch(e){utag.DB(e)}; break;
case '46':try{c[46]|=(d['dom.query_string'].toString().indexOf('tobi=')>-1)||(typeof d['tobi_started']!='undefined'&&d['tobi_started'].toString().indexOf('started')>-1)||(/\/pece\/formular\/xx/.test(d['dom.pathname']))||(/\/pece\/manualy\/xx/.test(d['dom.pathname']))||(/\/pece\/en\/form-social\/xx/.test(d['dom.pathname']))||(/\/jetovtobe/.test(d['dom.pathname']))||(/\/roaming/.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '47':try{c[47]|=(d['dom.query_string'].toString().toLowerCase().indexOf('techstack=no'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '52':try{c[52]|=(d['dom.query_string'].toString().toLowerCase().indexOf('hide_hf=1'.toLowerCase())<0&&typeof d['cp.mcare']=='undefined')||(d['dom.query_string'].toString().indexOf('myVodafone=AppConsents')>-1)}catch(e){utag.DB(e)}; break;
case '55':try{c[55]|=(d['dom.domain'].toString().indexOf('jetovtobe.vodafone.cz')>-1)||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1)||(d['dom.domain'].toString().indexOf('onenetsamoobsluha.vodafone.cz')>-1)||(d['dom.domain'].toString().indexOf('www.techforum.cz')>-1)||(d['dom.domain'].toString().indexOf('reknitogifem.cz')>-1)||(d['dom.domain'].toString().indexOf('cz-mktg.vodafone.com')>-1)||(d['dom.domain'].toString().indexOf('zehlirna.vodafone.cz')>-1)||(d['dom.domain'].toString().indexOf('upczone.cz')>-1)||(d['dom.domain'].toString().indexOf('upc.cz')>-1)||(d['dom.domain'].toString().indexOf('www.oskarta.cz')>-1)}catch(e){utag.DB(e)}; break;
case '56':try{c[56]|=(d['dom.domain'].toString().toLowerCase().indexOf('alza.cz'.toLowerCase())<0&&d['dom.domain'].toString().toLowerCase().indexOf('hzs.vodafone.cz'.toLowerCase())<0&&d['dom.pathname'].toString().toLowerCase().indexOf('/na cestach'.toLowerCase())<0&&d['dom.pathname'].toString().toLowerCase().indexOf('_edit_'.toLowerCase())<0&&!/iframes$/i.test(d['dom.pathname'])&&d['dom.pathname'].toString().toLowerCase().indexOf('error-404'.toLowerCase())<0&&d['dom.pathname'].toString().toLowerCase().indexOf('/prodejny/mapa-prodejen/cc/'.toLowerCase())<0&&d['dom.pathname'].toString().toLowerCase().indexOf('_prw_'.toLowerCase())<0&&d['dom.pathname'].toString().toLowerCase().indexOf('_sys_'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '61':try{c[61]|=(typeof d['cp.s_ppv']=='undefined')||(typeof d['cp.s_ppv']!='undefined'&&d['cp.s_ppv'].toString().toLowerCase().indexOf('vyhledavani'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '62':try{c[62]|=(d['dom.domain'].toString().toLowerCase().indexOf('vodafone.jobs.cz'.toLowerCase())<0)||(d['dom.domain'].toString().toLowerCase().indexOf('vodafone.jobs.cz'.toLowerCase())>-1&&typeof d['cp.lmc_ccm']=='undefined')}catch(e){utag.DB(e)}; break;
case '64':try{c[64]|=(/^\/podnikatele\//.test(d['dom.pathname']))||(/^\/firmy-a-korporace\//.test(d['dom.pathname']))||(/^\/verejna-sprava\//.test(d['dom.pathname']))||(/^\/en\/business\//.test(d['dom.pathname']))||(d['dom.domain'].toString().indexOf('cz-mktg.vodafone.com')>-1)}catch(e){utag.DB(e)}; break;
case '65':try{c[65]|=(typeof d['cp.vfconsents']!='undefined'&&/event6$|event6,/.test(d['page_events']))}catch(e){utag.DB(e)}; break;
case '66':try{c[66]|=(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('funa:o')<0&&d['cp.vfconsents'].toString().toLowerCase().indexOf('cvx:4'.toLowerCase())>-1)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().toLowerCase().indexOf('funa:i'.toLowerCase())>-1&&d['cp.vfconsents'].toString().toLowerCase().indexOf('cvx:5'.toLowerCase())>-1)||(typeof d['cp.lmc_ccm']!='undefined'&&d['cp.lmc_ccm'].toString().indexOf('"analytics"')>-1)}catch(e){utag.DB(e)}; break;
case '67':try{c[67]|=(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().toLowerCase().indexOf('mktg:i'.toLowerCase())>-1&&d['dom.query_string'].toString().toLowerCase().indexOf('techstack=no'.toLowerCase())<0)||(typeof d['cp.lmc_ccm']!='undefined'&&d['cp.lmc_ccm'].toString().indexOf('"ad"')>-1)}catch(e){utag.DB(e)}; break;
case '68':try{c[68]|=(typeof d['cp.vfconsents']=='undefined')||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('nps4:o')<0&&d['cp.vfconsents'].toString().indexOf('nps4:n')<0)}catch(e){utag.DB(e)}; break;
case '69':try{c[69]|=(typeof d['cp.vfconsents']=='undefined')||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('nps2:o')<0&&d['cp.vfconsents'].toString().indexOf('nps2:n')<0)}catch(e){utag.DB(e)}; break;
case '70':try{c[70]|=(d['dom.domain'].toString().indexOf('moje.oskarta.cz')<0&&d['dom.domain'].toString().indexOf('samoobsluha.f201.acc2.oskarmobil.cz')<0)}catch(e){utag.DB(e)}; break;
case '71':try{c[71]|=(d['dom.domain'].toString().indexOf('epokladna')<0)}catch(e){utag.DB(e)}; break;
case '72':try{c[72]|=(d['dom.domain']!='inet'&&d['dom.domain'].toString().indexOf('partnerinfo')<0&&d['dom.domain'].toString().indexOf('support')<0&&d['dom.domain'].toString().indexOf('indinfo')<0&&d['dom.domain'].toString().indexOf('irs.vodafone')<0&&d['dom.domain'].toString().indexOf('smcapi')<0&&d['dom.domain'].toString().indexOf('intranet.oskarmobil')<0&&d['dom.domain'].toString().indexOf('ccvf')<0&&d['dom.domain'].toString().indexOf('internal.vodafone.cz')<0&&d['dom.domain'].toString().indexOf('inet.oskarmobil')<0)}catch(e){utag.DB(e)}; break;
case '73':try{c[73]|=(d['dom.domain'].toString().indexOf('l5onsc31')<0&&d['dom.domain'].toString().indexOf('172.24.68.97')<0)}catch(e){utag.DB(e)}; break;
case '74':try{c[74]|=(d['dom.domain'].toString().toLowerCase().indexOf('vodafone.cz'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('oskarmobil.cz'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('custhelp.cz'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('dev.cz'.toLowerCase())>-1)||(d['dom.domain'].toString().toLowerCase().indexOf('vodafone.com'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '76':try{c[76]|=(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('nacm:i')<0)||(typeof d['cp.vfconsents']=='undefined')}catch(e){utag.DB(e)}; break;
case '77':try{c[77]|=(typeof d['cp.vfconsents']=='undefined')||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('res4:i')<0&&d['cp.vfconsents'].toString().indexOf('res4:y')<0)}catch(e){utag.DB(e)}; break;
case '78':try{c[78]|=(typeof d['cp.vfconsents']=='undefined')||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('funa:o')>-1)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('mktg:o')>-1)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('funa:')<0)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('cvd:4')<0&&d['cp.vfconsents'].toString().indexOf('cvd:5')<0)||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('vn:1')>-1)}catch(e){utag.DB(e)}; break;
case '80':try{c[80]|=(typeof d['page_channel']=='undefined')||(d['page_channel'].toString().indexOf('MONSC')<0)}catch(e){utag.DB(e)}; break;
case '81':try{c[81]|=(typeof d['sc_dynamicAccountList']=='undefined')||(typeof d['sc_dynamicAccountList']!='undefined'&&d['sc_dynamicAccountList'].toString().toLowerCase().indexOf('dev'.toLowerCase())<0&&d['sc_dynamicAccountList'].toString().toLowerCase().indexOf('internal'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '82':try{c[82]|=(typeof d['cp.vfconsents']=='undefined')||(typeof d['cp.vfconsents']!='undefined'&&d['cp.vfconsents'].toString().indexOf('res2:i')<0&&d['cp.vfconsents'].toString().indexOf('res2:y')<0)}catch(e){utag.DB(e)}; break;
case '83':try{c[83]|=(d['dom.domain']=='cz-mktg.vodafone.com'&&d['dom.pathname'].toString().indexOf('/LP=2513')>-1&&d['page_name'].toString().indexOf(':Thank You')>-1)}catch(e){utag.DB(e)}; break;
case '84':try{c[84]|=(/^\/muj\/utrata-a-vyuctovani\/aktualni-utrata-a-cerpani\/prehled/.test(d['dom.pathname']))||(/^\/muj\/lepsi-tarif-s-cd-in-kartou/i.test(d['dom.pathname']))||(/^\/red-home-2\/xx/.test(d['dom.pathname']))||(d['dom.pathname']=='/tarify/student-2016/xx')||(d['dom.pathname']=='/vanoce/xx')||(d['dom.pathname']=='/prejdete-k-nam/xx')||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1&&!/^\/muj/.test(d['dom.pathname']))||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1&&d['dom.pathname']=='/muj/')||(d['dom.domain'].toString().indexOf('vodafone.jobs.cz')>-1)||(d['dom.domain'].toString().indexOf('ww.vodafone.cz')>-1&&d['dom.pathname']=='/muj/lepsi-tarif')||(d['dom.domain'].toString().indexOf('ww.vodafone.cz')>-1&&/^\/muj\/registrace/.test(d['dom.pathname']))||(d['dom.domain'].toString().indexOf('ww.vodafone.cz')>-1&&/^\/muj\/profil/.test(d['dom.pathname']))||(d['dom.domain'].toString().indexOf('onenetsamoobsluha')>-1)||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1&&d['dom.pathname']=='/muj/prihlaseni'&&d['page_errors'].toString().indexOf('security.login.cuam.ChannelMismatchException')>-1)||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1&&d['dom.pathname']=='/muj/prihlaseni'&&d['page_errors'].toString().indexOf('security.login.invalid_credentials')>-1)}catch(e){utag.DB(e)}; break;
case '85':try{c[85]|=(d['dom.domain']=='cz-mktg.vodafone.com'&&d['dom.pathname'].toString().indexOf('/LP=2512')>-1&&d['page_name'].toString().indexOf(':Thank You')>-1)}catch(e){utag.DB(e)}; break;
case '88':try{c[88]|=(d['dom.pathname'].toString().indexOf('/vodafonekomunita')>-1)||(d['dom.pathname'].toString().indexOf('/pece/osobni-a-firemni/otazky/kody-pin-puk/zablokovany-pinpuk/')>-1&&d['dom.domain'].toString().indexOf('www.vodafone.cz')<0)||(typeof d['cp.tobi_password_recovery']!='undefined'&&d['dom.domain'].toString().indexOf('www.vodafone.cz')<0)||(d['dom.domain'].toString().indexOf('www.vodafone.cz')>-1&&d['dom.pathname'].toString().indexOf('/muj/odhlaseni-uspesne')>-1)}catch(e){utag.DB(e)}; break;
case '89':try{c[89]|=(d['sc_dynamicAccountList'].toString().indexOf('vodaczprod')>-1)||(d['sc_dynamicAccountList'].toString().indexOf('vodaczpecky')>-1)||(d['sc_dynamicAccountList'].toString().indexOf('vodaczdev')>-1&&/^\/nps/.test(d['dom.pathname'])&&d['dom.domain'].toString().indexOf('www-uat2.vodafone.cz')>-1)||(d['sc_dynamicAccountList'].toString().indexOf('vodaczdev')>-1&&d['dom.pathname'].toString().toLowerCase().indexOf('/muj/'.toLowerCase())>-1&&d['dom.domain'].toString().indexOf('www-preprod.vodafone.cz')>-1)}catch(e){utag.DB(e)}; break;
case '9':try{c[9]|=(d['dom.domain'].toString().toLowerCase().indexOf('.vodafone.cz'.toLowerCase())>-1&&d['dom.domain'].toString().toLowerCase().indexOf('www.vodafone.cz'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '90':try{c[90]|=(typeof d['js_page.timeoutTrigger']=='undefined')}catch(e){utag.DB(e)}; break;
case '91':try{c[91]|=(d['dom.pathname']=='/pece/tarify-sluzby/nabidka-tarifu-karet/balicky-ke-karte/')||(d['dom.pathname']=='/pece/tarify-sluzby/nabidka-tarifu-karet/neomezene-volani-pro-predplacene-karty-2/')||(d['dom.pathname']=='/predplacene-karty/balicky-ke-kartam/')||(d['dom.pathname'].toString().toLowerCase()=='/tarify/'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/podnikatele/volani/tarify/'.toLowerCase())||(d['dom.pathname'].toString().toLowerCase()=='/muj/kosik'.toLowerCase())||(/^\/eshop\/kosik\//i.test(d['dom.pathname']))||(/\/tarify\/kombi\/$/i.test(d['dom.pathname']))||(d['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/eshop/objednavka/?step=thank_you'.toLowerCase())>-1)||(d['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/muj/kosik/podekovani'.toLowerCase())>-1)||(/^\/kombinovana-nabidka\//i.test(d['dom.pathname']))||(d['dom.pathname'].toString().toLowerCase()=='/internet/'.toLowerCase())||(/^xx\/odchod\//i.test(d['dom.pathname']))||(/^\/muj\/vyuctovani/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '92':try{c[92]|=(d['cp.s_sv_p46'].toString().toLowerCase().indexOf('pacr3'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '93':try{c[93]|=(typeof d['s_abort']=='undefined')}catch(e){utag.DB(e)}; break;
case '95':try{c[95]|=(d['dom.domain'].toString().indexOf('uat3')>-1)||(d['dom.domain'].toString().indexOf('uat2')>-1)||(d['dom.domain'].toString().indexOf('acc2')>-1)||(d['dom.domain'].toString().indexOf('sys2')>-1)||(d['dom.domain'].toString().indexOf('pre')>-1)||(d['dom.domain'].toString().indexOf('int')>-1)||(d['dom.domain'].toString().indexOf('stage')>-1)}catch(e){utag.DB(e)}; break;
case '96':try{c[96]|=(!/^\/muj/i.test(d['dom.pathname']))||(/^\/muj\/prihlaseni/i.test(d['dom.pathname']))||(/^\/muj\/eshop/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;
case '97':try{c[97]|=(!/^\/onsc\//i.test(d['dom.pathname']))||(/^\/onsc\/login/i.test(d['dom.pathname']))}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();    };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b){
/*
 * @author: kevin thomas faurholt
 *
 * @extension: populate-js_page-variables-due-to-pagetiming-issue
 *
 * @scope: all tags
 * @execution: before load rules
 */
if (utag.pagevars !== undefined) {
   utag.pagevars();
}
function isLocalStorageNameSupported() {
    var testKey = 'test';
    try {
        var storage = window.localStorage;
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}
if (typeof utag.data.localStorageSupported == "undefined") {
  utag.data.localStorageSupported = isLocalStorageNameSupported().toString();
  if(utag.data.localStorageSupported === "true") {
    var getLSItemTemp = localStorage.getItem("TOBI_conversationStarted");
    if (getLSItemTemp != null) { 
      utag.data.tobi_started = getLSItemTemp;
    }  
  } 
}  
},
function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'ccvf':'vodaczprodinternalaligned'},{'beta.dev.cz':'vodaczdevaligned'},{'oskarta.cz':'vodaczprodaligned'},{'wm-staging.com':'vodaczdevaligned'},{'localhost':'vodaczdevaligned'},{'mopa.cz':'vodaczdevaligned'},{'partnerinfo.oskarmobil.cz':'vodaczprodinternalaligned'},{'inet.oskarmobil.cz':'vodaczprodinternalaligned'},{'myexupc.vodafone.cz':'vodaczprodaligned'},{'www-acc2.vodafone.cz':'vodaczdevaligned'},{'www-internal.vodafone.cz':'vodaczprodinternalaligned'},{'www-preprod2.vodafone.cz':'vodaczdevaligned'},{'www-uat2.vodafone.cz':'vodaczdevaligned'},{'www.vodafone.cz':'vodaczprodaligned'},{'galerie.vodafone.cz':'vodaczprodaligned'},{'onenetms.vodafone.cz':'vodaczprodaligned'},{'nastaveni.vodafone.cz':'vodaczprodaligned'},{'alza.cz':'vodaczprodaligned'},{'vodafonesms.cz':'vodaczprodaligned'},{'internetdomobilu.cz':'vodaczprodaligned'},{'techforum.cz':'vodaczprodaligned'},{'pbapps.net':'vodaczprodaligned'},{'mcapps.cz':'vodaczprodaligned'},{'onenetsamoobsluha.vodafone.cz':'vodaczprodaligned'},{'muj-acc2.vodafone.cz':'vodaczdevaligned'},{'muj-internal.vodafone.cz':'vodaczdevaligned'},{'muj-preprod2.vodafone.cz':'vodaczdevaligned'},{'www-uat3.vodafone.cz':'vodaczdevaligned'},{'www-preprod2.vodafone.cz':'vodaczdevaligned'},{'katalogy.vodafone.cz':'vodaczprodaligned'},{'chatapi.vodafone.cz':'vodaczprodaligned'},{'cdbonus.vodafone.cz':'vodaczprodaligned'},{'forum.park.vodafone.cz':'vodaczprodaligned'},{'hzs.vodafone.cz':'vodaczprodaligned'},{'jetovtobe.vodafone.cz':'vodaczprodaligned'},{'liveshop.vodafone.cz':'vodaczprodaligned'},{'dotazy.vodafone.cz':'vodaczprodaligned'},{'reknitogifem.cz':'vodaczprodaligned'},{'vodafone.jobs.cz':'vodaczprodaligned'},{'inet':'vodaczprodinternalaligned'},{'partnerinfo':'vodaczprodinternalaligned'},{'e-mail.vodafone.cz':'vodaczprodaligned'},{'support.vodafone.cz':'vodaczprodinternalaligned'},{'indinfo':'vodaczprodinternalaligned'},{'irs.vodafone.cz':'vodaczprodinternalaligned'},{'cilichili.cz':'vodaczprodaligned'},{'smcapi.vodafone.cz':'vodaczprodaligned'},{'cz-mktg.vodafone.com':'vodaczprodaligned'},{'zehlirna.vodafone.cz':'vodaczprodaligned'},{'formular.vodafone.cz':'vodaczprodaligned'},{'backoffice.oskarmobil.cz':'vodaczprodinternalaligned'},{'www.sazkamobil.cz':'vodaczprodaligned'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['sc_dynamicAccountList']=c[e][f];m=true};};if(m)break};if(!m)b['sc_dynamicAccountList']='vodaczdevaligned';   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'vodafone.cz':'vodaczprodaligned'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['sc_dynamicAccountList']=c[e][f];m=true};};if(m)break};   }},
function(a,b){
if(/hide_hf=0/.test(document.location.href)){ //restore web reporting suite to cookies
  document.cookie="mcare="+b['sc_dynamicAccountList']+";path=/;domain="+utag.cfg.domain+";expires=Thu, 01 Jan 1970 00:00:01 GMT"+";secure;samesite=none";
  delete b['cp.mcare'];
  document.cookie="app_version_cookie="+";path=/;domain="+utag.cfg.domain+";expires=Thu, 01 Jan 1970 00:00:01 GMT"+";secure;samesite=none";
  delete b['cp.app_version_cookie'];
}
if(/hide_hf=1/.test(document.location.href)){
  if(/app_version/.test(document.location.href)){  
    var repSuite = 'vodaczproduniversal';
    if((/env=dev/.test(document.location.href))||(/vodaczdevaligned/.test(b['sc_dynamicAccountMatch']))){ 
       repSuite = 'vodaczdevuniversal';
    }
  } else { 
    var repSuite = 'vodaczpecky';
    if((/env=dev/.test(document.location.href))||(/vodaczdevaligned/.test(b['sc_dynamicAccountMatch']))){ 
      repSuite = 'vodaczappsdev';
    }
  }
  document.cookie="mcare="+repSuite+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
  b['cp.mcare']=repSuite;
}
if((/hide_hf=1/.test(document.location.href))&&(typeof b['qp.app_version']!='undefined'&&b['qp.app_version']!='')){
  document.cookie="app_version_cookie="+b['qp.app_version']+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
  b['cp.app_version_cookie']=b['qp.app_version'];
}
if (typeof b['cp.mcare'] !== "undefined") {
  if(b['cp.mcare']=='vodaczpecky'||b['cp.mcare']=='vodaczappsdev'||b['cp.mcare'].indexOf('universal')>-1){
    b['sc_dynamicAccountList']=b['cp.mcare'];
  }  
} 
b['sc_dynamicAccountListUniversal'] = b['sc_dynamicAccountList'].replace("aligned","universal");
if (typeof b['sc_dynamicAccountListUniversal'] !== "undefined") {
    if (b['sc_dynamicAccountListUniversal'] == "vodaczprodinternaluniversal") {
        b['sc_dynamicAccountListUniversal'] = "vodaczproduniversalinternal";
   } 
}
},
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[131]=='undefined'){utag.runonce.ext[131]=1;if(1){
if ((typeof b["qp.vfconsents"] !== "undefined")&&(typeof vfconsents !== "undefined")&&(typeof vfconsents.set === "function")) {
  if (typeof b["qp.app_version"] === "undefined") {
    b["qp.vfconsents"] = b["qp.vfconsents"].replace("mktg:i","mktg:o"); //forced mktg off for old App versions
    b["qp.vfconsents"] += (b["qp.vfconsents"].indexOf("mktg") == -1) ? "|mktg:o" : "";
  }    
  var cookieElements = b["qp.vfconsents"].split("|");
  for (var i in cookieElements) {
    var consentElements = cookieElements[i].split(":");
    vfconsents.set(consentElements[0],consentElements[1]);
  }
  vfconsents.save();
}  
if (/hide_hf=/.test(document.location.search)||(/vfconsents=/.test(document.location.search)||(/app_version=/.test(document.location.search)))) {
   if (!(/hide_hf=/.test(document.location.search)&&(/vfconsents=/.test(document.location.search)&&(/app_version=/.test(document.location.search))))) {
      s.prop16 = typeof s.prop16 === "undefined" ? "" : s.prop16 + ",";
      s.prop16 += "missing params:"+document.location.pathname+document.location.search;
   }
}
}}} catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'xxonenetsamoobsluha.vodafone.cz':'cz'},{'xxl5onsc31':'cz'},{'xx172.24.68.97':'cz'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['sc_playbook']=c[e][f];m=true};};if(m)break};if(!m)b['sc_playbook']='group';   }},
function(a,b){
/*
 * SITECATALYST DOPLUGINS METHOD
 * @author: kevin thomas faurholt - tealium, inc
 *
 * 3. PRE-PROCESSOR : sitecatalyst : do_plugins function
 * 
 * extension: 3.preprocessor-doplugins
 * 
 * Vodafone CZ has websites outside tag management and to try lower Vodafone effort
 * to keep non TMS sites doPlugins method in sync with the version in Tealium
 *
 * scope: all tags (important!)
 */
// Tealium integration start /////////////////////////////////////////
if (a !== "view") { return true; } // do not modify this line stan

window.utag.extn = window.utag.extn || {};
window.utag.extn.preprocessor = window.utag.extn.preprocessor || {};

var s = window.utag.extn.preprocessor.instance = window.utag.extn.preprocessor.instance || {};
s.dynamicAccountList = b.sc_dynamicAccountList;
s.contextData = s.contextData || {}; 

// PROCESSING RULES REQUIREMENTS ///////////////////////////////////////////////

/*if (b.sc_playbook) { s.contextData["playbook"] = b.sc_playbook; }
else { s.prop16 = "missing playbook"; }*/

////////////////////////////////////////////////////////////////////////////////
window.s_account = b.sc_dynamicAccountList ? b.sc_dynamicAccountList : window.s_account;
window.s_account = window.s_accountm ? window.s_accountm : window.s_account;
b.sc_dynamicAccountList = window.s_account;
// Tealium integration end ///////////////////////////////////////////

s.load_s_doPlugins = true;

/* Plugin Config */
s.usePlugins = true;
s.writeSecureCookies = true;

/*******************************************************************************/
/************ PLUGINS SECTION: PRE-PAGEVIEW VARS AND FUNCTIONS***********/
/*******************************************************************************/
s.doPlugins = function (s) {
    try {
        if (typeof s === "undefined") {
            return;
        }
        var _errorSections = [];

        try {
            // section 1 
            s.events = s.events ? s.events : (b.page_events ? b.page_events : "");
            if((document.cookie.indexOf("test_after_login_call=dev")!=-1)&&(/event6($|,)/.test(s.events))){
              console.log("here is the call to MF script");
              var d = new Date();
              window.login_detected_time = d.getTime();
            }	
            if ((typeof Visitor !== "undefined") && (typeof Visitor.getInstance !== "undefined")) {
                s.visitor = Visitor.getInstance("3E463FE452A647F00A490D45@AdobeOrg");
            }
            if (window.location.pathname&&((!s.channel) || (s.channel == ''))) {             
                var pathFirstElement = window.location.pathname.split("/")[1];
                switch (pathFirstElement) {
                case "pece":
                    s.channel = "Care Centre"; break;
                case "muj":
                    s.channel = "WSC"; break;
                }
            }
            s.server = window.location.host;
            if ((!s.channel) || (s.channel == '')) {
                switch (s.server) {
                case "www.vodafone.cz":
                    s.channel = "Public web"; break;
                case "samoobsluha.vodafone.cz":
                    s.channel = "WSC"; break;
                case "formular.vodafone.cz":
                    s.channel = "Standalone order form"; break;
                default:
                    s.channel = s.server; break;
                }
            }
            if ((typeof s.linkName !== "undefined") && (s.linkName === "Login")){
                s.abort = true;
            }
            if (typeof s.contextData !== "undefined"){
                if (typeof s.contextData.eventName!== "undefined") {
                    if (/form_displayed/.test(s.contextData.eventName)) {
                        window.vfpopup = "disabled";
                    }
                    var eventsRegex = /(form_close_no_submit|feedback_submitted)/g
                    if (eventsRegex.test(s.contextData.eventName)) {
                        delete window.vfpopup;
                    }
                    if ((!/form_displayed/.test(s.contextData.eventName))&&(!/\d+/.test(s.contextData.Recommendation))) {
                        s.abort = true;
                    }
                    if (s.contextData.Recommendation===0) {
                        s.contextData.Recommendation="0"    
                    }   
                    s.linkTrackVars = ((typeof s.linkTrackVars !== "undefined") && (s.linkTrackVars!="None"))? s.linkTrackVars+",contextData.eventName" : "contextData.eventName";
                }   
                if (typeof s.contextData.formId!== "undefined") {
                    s.linkTrackVars = ((typeof s.linkTrackVars !== "undefined") && (s.linkTrackVars!="None"))? s.linkTrackVars+",contextData.formId" : "contextData.formId";
                }    
                if (typeof s.contextData.content!== "undefined") {
                    s.linkTrackVars = ((typeof s.linkTrackVars !== "undefined") && (s.linkTrackVars!="None"))? s.linkTrackVars+",contextData.content" : "contextData.content";
                }            
            }
           if ((s.pageName === "Osobni:Internet:Pevny internet" ) && (/ruianid=/.test(document.location.search))) {
                s.abort = true;
           }
           /* if ((typeof s.linkTrackVars !== "undefined") && (s.linkTrackVars!="None")) {
                if ((typeof s.contextData['playbook']=== "undefined") &&  (typeof tealium_s.contextData.playbook!== "undefined")) {
                    s.contextData['playbook'] = tealium_s.contextData.playbook;}
                s.linkTrackVars = s.linkTrackVars+",contextData.playbook";
            } //force playbook at link tracking */
            if (typeof wm_pageName !== "undefined") {
                s.pageName = wm_pageName;
            }
            var date = new Date();
            var exp = new Date();
            exp.setTime(date.getTime() + (2 * 365 * 24 * 60 * 60 * 1000));
            if (/*(*/(typeof s.pageName === "undefined") || (s.pageName == '')/*)&&(typeof s.linkType === "undefined")*/) {
                if ((typeof b.page_name !== "undefined")&&(b.page_name != '')) {
                    s.pageName = b.page_name;
                } else {
                    if (/techforum\.cz/.test(window.location.host)) {
                        s.channel = "techforum";
                        s.pageName = "techforum";
                        if (window.location.pathname != "/") {
                            s.pageName += decodeURIComponent(window.location.pathname.replace(/\//g,":"));
                            if (s.pageName[s.pageName.length-1]==":") {
                                s.pageName = s.pageName.slice(0,-1);
                            }
                            if (s.pageName.indexOf(":page") != -1) {
                                s.pageName = s.pageName.slice(0,s.pageName.indexOf(":page"));
                            }    
                        }
                        s.prop7 = (document.getElementsByClassName("cNotifications").length == 0) ? "logged out" : "logged in";
                    }   
                    if (/myexupc/.test(window.location.host)) {
                        s.channel = "myexupc";
                        s.pageName = "myexupc";
                        if (window.location.pathname != "/") {
                            s.pageName += window.location.pathname.replace(/\//g,":");
                            if (s.pageName[s.pageName.length-1]==":") {
                                s.pageName = s.pageName.slice(0,-1);
                            }
                            if (s.pageName.indexOf(":page") != -1) {
                                s.pageName = s.pageName.slice(0,s.pageName.indexOf(":page"));
                            }    
                        }
                        s.prop7 = (document.getElementsByClassName("logout").length == 0) ? "logged out" : "logged in";
                        if ((!/exupc=y/.test(document.cookie)) && s.prop7 === "logged in") {
                            if (/exupc=n/.test(document.cookie)) {
                                s.prop16 = (typeof s.prop16 === "undefined" ? "" : prop16+";") + "exUPC flag mismatch"
                            }   
                            s.c_w("exupc", "y", exp);
                        }
                    }   
                    if (typeof s.pageName === "undefined") {
                        s.pageName = window.location.host + window.location.pathname;
                    }    
                }   
            }
            if (s.pageName.indexOf("jsessionid") != -1) {
                s.pageName = s.pageName.substr(0, s.pageName.indexOf("jsessionid"));
            }
            if (window.location.pathname.indexOf("jsession") != -1){
                    s.pageURL = window.location.protocol+"//"+window.location.host+window.location.pathname.substr(0, window.location.pathname.indexOf("jsessionid")-1);
                }
            if (s.pageName.indexOf(":Homepage:") != -1) {
                s.pageName = s.pageName.replace(":Homepage:", ":");
            }
            if (s.pageName.length>100) {s.pageName=s.pageName.slice(0,99);}
            if ((typeof s.hier1 !== "undefined") && (s.hier1 != '')) {
                if (s.hier1.indexOf(":Homepage:") != -1) {
                    s.hier1 = s.hier1.replace(":Homepage:", ":");
                } 
            } else {
                if (s.pageName.indexOf('http') == -1) {
                    s.hier1 = s.pageName;  
                } else {
                    s.hier1 = s.pageName; 
                }              
            }    
            if (s.hier1.indexOf(":") == 2) {
                s.prop31 = s.hier1.substring(0, 2);
                s.hier1 = s.hier1.substring(3);
            } 
            if (typeof s.prop31 !== "undefined") {
                if (s.prop31.length > 2) {
                    s.prop31 = s.prop31.substring(0, 2);
                }    
            }
            if ((typeof s.prop31 === "undefined" ) || (s.prop31!="CZ"&&s.prop31!="EN")) {
                if ((typeof s.prop20 !== "undefined" ) && (s.prop20.indexOf(":") == 2)){
                    s.prop31 = s.prop20.substring(0, 2);
                } else {
                    if ((typeof vfSearchLayer !== "undefined" )&&(typeof vfSearchLayer.layerOptions !== "undefined")&&(typeof vfSearchLayer.layerOptions.lang !== "undefined" )){
                       s.prop31 = vfSearchLayer.layerOptions.lang.toUpperCase();                        
                    } else {
                        if (typeof b["meta.language"] !== "undefined") {
                            s.prop31 = b["meta.language"].toUpperCase();
                        } else {
                            if (typeof b.page_language !== "undefined") {
                                s.prop31 = b.page_language.toUpperCase();
                            } else {                            
                                s.prop31 = "CZ";
                            }
                        }
                    }
                }
            }
            if (s.prop31=="CS") {s.prop31="CZ"};
            if (s.hier1.length>100) {
                s.hier1=s.hier1.slice(0,99);
            }
            if (s.hier1 == s.pageName) {
                s.hier1="D=pageName";
            }
        } catch (err) {
            _errorSections.push('1:'+err.message);
        }
        try {
            // section 1A
            s.eVar82 = s.getQueryParam('ref1',"&",decodeURIComponent(window.location.href));
            if (s.eVar82!="") {s.eVar82 ="ipap_"+s.eVar82;} 
            if (!s.eVar27) {
                var temp_campaign_id = s.getQueryParam('promo',"&",decodeURIComponent(window.location.href));
            } else {
                temp_campaign_id = s.eVar27;
            }
            if (temp_campaign_id != "") {
                var temp_sent_campaign_id = s.getValOnce(temp_campaign_id, 's_var_27', 30);
                if (temp_sent_campaign_id != "") {
                    s.eVar27 = (temp_sent_campaign_id != "") ? temp_sent_campaign_id : "";
                } 
                if (temp_campaign_id.indexOf("cvm")!=-1) {
                    var temp_cvm_campaign_id = s.getValOnce(temp_campaign_id, 's_var_127', 30);
                    if (temp_cvm_campaign_id != "") {
                        s.eVar127 = (temp_cvm_campaign_id != "") ? temp_cvm_campaign_id : "";
                    }    
                }             
            }    
            if (s_account == "setbyextension" && typeof b.sc_dynamicAccountList !== "undefined") {
                s_account = b.sc_dynamicAccountList;
            }
            if ((typeof s_account != "undefined") && (s_account.indexOf("oskarta") == -1) && (s_account.indexOf("partner") == -1) && (s.channel != "MONSC"    ) && window.location.host && (window.location.host.indexOf("samoobsluha.f20") == -1) && (window.location.host.indexOf("alza.cz") == -1)) {
                if (!window["RunAdform_executed_form_success"]){
                }
                PromoView(s);
            }
	    if ((typeof s_account !== "undefined") && (s_account.indexOf(",") != -1)) {
                s.prop16 = s_account;
            }
                // any call remapping
   /*         if (s.contextData['playbook'] != "group"){ 
                if (s.prop7){s.prop16 = "error:"+s.prop7;delete s.prop7;} else {delete s.prop16;} 
                if (s.prop8){s.prop16 = "warning:"+s.prop8; delete s.prop8;} else {delete s.prop16;}         
                if (s.prop9){s.prop16 = "content:"+s.prop9;delete s.prop9;} else {delete s.prop16;}
                if ((!s.eVar19)&&(s.contextData['evar19_cz'])) {delete s.contextData['evar19_cz'];}
                if ((s.prop7)&&(s.prop7.indexOf("logged in") == -1)){s.contextData['error_message'] = "error:"+s.prop7;s.prop7 = "";}
                if ((s.prop8)&&(!s.prop7)){s.contextData['error_message'] = "warning:"+s.prop8;s.prop8 = "";}         
                if ((s.prop9)&&(!s.prop7)){s.contextData['error_message'] = "content:"+s.prop9;s.prop9 = "";}

            }*/
        } catch (err) {
            _errorSections.push('1A:'+err.message);
        }
        s.initialLoad = s.p_fo("first_analytics_call");
        if ((typeof s.prop32 === "undefined") || (s.prop32 != s.pageName)){s.sc_newPage = 1;} //virtual call restart new page processing
        if ((s.initialLoad == 1) || (s.sc_newPage == 1)) { // only do this on the first time the code is called or the new Page flag is set!
            try {
                // section 2
	        s.currencyCode = "CZK";
                if (typeof utag.data.page_server === "undefined") {
                    if (typeof s.prop50 === "undefined") {
                        s.prop50 = document.location.host;
                    }
                }
                if ((s.channel.indexOf("ONSC") != -1)||(s.pageName.indexOf("Techforum") != -1)) {
                    s.prop5 = "selfservice";
                }   
                if (s.pageName.indexOf("centrumPece") != -1) {
                    s.prop5 = "selfservice:"+((document.referrer&&document.referrer.indexOf("vodafone.cz/pece") != -1)?"clicked":"linked");
                    var slices = s.pageName.split(":");
                    if (slices.length == 4) {
                        s.eVar65 = slices[3];
                        s.events = (s.events=="") ? "event68" : s.events+",event68";
                    }
                }
                if (s.pageName.indexOf("V-HUB:Rady a inspirace") != -1) {
                    var slices = s.pageName.split(":");
                    if (slices.length > 3) {
                        slices.splice(0,3);
                        s.eVar65 = slices.join(":");
                        s.events = (s.events=="") ? "event68" : s.events+",event68";
                    }
                }
                if (s.pageName.indexOf("Podnikatele:Business Blog") != -1) {
                    var slices = s.pageName.split(":");
                    if (slices.length > 2) {
                        slices.splice(0,2);
                        s.eVar65 = slices.join(":");
                        s.events = (s.events=="") ? "event68" : s.events+",event68";
                    }
                }
                if (s.prop51) s.eVar63 = "D=c51";
                if (s.prop52) s.eVar64 = "D=c52";
                if ((typeof s.eVar65 !== "undefined") && s.eVar65 != "") {
                    if (s.eVar65.charAt(2) != ":") {
                        if (s.channel == "Public web") {s.eVar65 = "pw:" + s.eVar65;}
                        if (s.channel == "WSC") {s.eVar65 = "ws:" + s.eVar65;}
                        if (s.channel == "Care Centre") {s.eVar65 = "qu:" + s.eVar65;}
                        if ((s.pageName.indexOf("V-HUB:Rady a inspirace") != -1)||(s.pageName.indexOf("Podnikatele:Business Blog") != -1)) {s.eVar65 = "bb:" + s.eVar65;}
                    }
                }
                if ((typeof s.prop54 !== "undefined") && (s.prop54 != "")) 
                    {s.eVar66 = "D=c54";}
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (2 * 365 * 24 * 60 * 60 * 1000));
              /*  if (s.contextData['playbook'] != "group") {
                    if (s.prop10){
                        if (s.prop10.indexOf("inside") !== -1) {
                            s.prop7="logged in";
                        }     
                        if (s.prop10.indexOf("outside") !== -1) {
                            s.prop7="logged out";
                        }     
                        delete s.prop10;
                    } else {
                         s.prop7="logged out";
                    }
                    if ((s.prop24)&&(s.prop24!='D=s_vi')) {s.prop8=s.prop24;s.prop24="";s.c_w("s_sv_p8",s.prop8,0);delete s.prop8;}
                    if (s.eVar8)  {s.eVar8="";}
                    if (s.eVar19) {s.contextData['evar19_cz'] = s.eVar19;
                        switch (s.eVar19){
                            case "FT": s.prop8="consumer wsc admin";s.prop9="paym";break;
                            case "Ft": s.prop8="consumer wsc end-user";s.prop9="paym";break;
                            case "FC": s.prop8="consumer wsc admin";s.prop9="payg";break;
                            case "Fc": s.prop8="consumer wsc end-user";s.prop9="payg";break;
                            case "FB": s.prop8="business wsc admin";s.prop9="paym";break;
                            case "Fb": s.prop8="business wsc end-user";s.prop9="paym";break;
                            case "T": s.prop8="consumer wsc admin";s.prop9="paym";break;
                            case "t": s.prop8="consumer wsc end-user";s.prop9="paym";break;
                            case "C": s.prop8="consumer wsc admin";s.prop9="payg";break;
                            case "c": s.prop8="consumer wsc end-user";s.prop9="payg";break;
                            case "B": s.prop8="business wsc admin";s.prop9="paym";break;
                            case "b": s.prop8="business wsc end-user";s.prop9="paym";break;                        
                            case "OE": s.prop8="business onenet end-user";s.prop9="paym";break;
                            case "OG": s.prop8="business onenet group-manager";s.prop9="paym";break;
                            case "OB": s.prop8="business onenet admin";s.prop9="paym";break;
                            case "OVF": s.prop8="business onenet vodafone-support";s.prop9="paym";break;                   
                        } 
                        var user_profile_changed=(s.prop8!=s.c_r("s_sv_p8"))||(s.prop9!=s.c_r("s_sv_p9"));
                        s.c_w("s_sv_p8",s.prop8,exp);
                        s.c_w("s_sv_p9",s.prop9,exp);
                        delete s.eVar19; delete s.prop8; delete s.prop9;
                    } else {
                        if (s.contextData['evar19_cz']) {delete s.contextData['evar19_cz'];}
                    }
                    if (s.eVar44) {s.contextData['onsc_company_id'] = s.eVar44; s.prop30 = "ONSC:"+s.eVar44+":";s.eVar44="";}
                    if (s.eVar45) {s.contextData['onsc_vpn'] = s.eVar45;
                        if (s.prop30){s.prop30 = s.prop30+s.eVar45+":";}else{s.prop30 = "ONSC::"+s.eVar45+":";}
                        s.eVar45="";}
                    if (s.eVar46) {s.contextData['onsc_used_id'] = s.eVar46;
                        if (s.prop30){s.prop30 = s.prop30+s.eVar46;}else{s.prop30 = "ONSC:::"+s.eVar46;} 
                        s.eVar46="";}    
                    if (s.prop30) {s.c_w("s_sv_p30",s.prop30,exp);}
                }
                else { */
                    if ((typeof s.prop7 === "undefined")||(s.prop7=="unknown")){
                        if (/ipap:/i.test(s.pageName)) {
                            s.prop7 = "logged in";
                        } else {
                            var GetTempCookie=s.c_r("s_sv_p7");
                            if ((GetTempCookie != null) && (GetTempCookie != "")){
                                s.prop7=GetTempCookie;
                            } else {
                                s.prop7="logged out";
                            }
                        }
                    }
                    s.prop7 = s.prop7.replace("_"," "); //fix for unwanted _
                    if (/i/.test(vfconsents.get("funa"))) {
                        s.c_w("s_sv_p7",s.prop7,0);
                    }
                    if (typeof s.prop8 !== "undefined") {
                        switch (s.prop8){
                            case "Consumer Admin": s.prop8="consumer wsc admin";break;
                            case "Consumer User": s.prop8="consumer wsc end-user";break;
                            case "Business Admin": s.prop8="business wsc admin";break;
                            case "Business User": s.prop8="business wsc end-user";break;
                            case "Consumer BillingAdmin": s.prop8="consumer wsc adminb";break;
                            case "Employee Admin": s.prop8="employee wsc admin";break;
                        }        
                    } 
                    if (s.channel == "MONSC") {
                        if (s.prop31 && (s.prop31.indexOf("CZ")==-1)) {
                            s.contextData['onsc_vpn'] = s.prop31;
                        }
                       /* if (s.prop8) {
                            if (s.prop8 == "business end-user") {
                                s.contextData['evar19_cz'] = "OB";
                            }  // s.eVar7="D=c8"
                            if (s.prop8 == "business admin") {
                                s.contextData['evar19_cz'] = "OA";
                            }
                            if (s.prop8 == "business group manager") {
                                s.contextData['evar19_cz'] = "OG";
                            }
                            if (s.prop8 == "business vodafone support") {
                                s.contextData['evar19_cz'] = "OVF";
                            }
                        }*/
                    } 
                    if (s.channel.match(/^WSC/gi)=="WSC") {
                        s.prop5="self service";
                        /*if (s.prop8) {
                            if ((s.prop9 == "paym")||(s.prop9 == "fixed")) {
                                s.contextData['evar19_cz'] = "FT";
                            }
                            if (s.prop8.indexOf("business wsc") != -1) {
                                s.contextData['evar19_cz'] = "FB";
                            }  // s.eVar7="D=c8"
                            if (s.prop9 == "payg") {
                                s.contextData['evar19_cz'] = "FC";
                            }
                        }   */
                    }
                    if ((typeof user_profile_changed!== "undefined")&&((typeof s.prop8!== "undefined")||(typeof s.prop9!== "undefined"))) {
                        var user_profile_changed=(s.prop8!=s.c_r("s_sv_p8"))||(s.prop9!=s.c_r("s_sv_p9"));
                    }
                    if (typeof s.prop8!== "undefined") {
                        s.c_w("s_sv_p8",s.prop8,exp);
                        s.c_w("s_sv_p9",s.prop9,exp);
                        delete s.prop8; delete s.prop9;
                    }
                    if (typeof s.prop46!== "undefined") {
                        if (s.prop46.length == 32) {
                            s.c_w("s_sv_p46",s.prop46,exp);
                        } else {
                            if ((s.prop46.length > 32)&&(typeof vfAcr!=="undefined")&&(typeof vfAcr.getAcr!=="undefined")&&(typeof vfAcr.setAcr!=="undefined")) {
                                var storedFACR = vfAcr.getAcr("facr");
                                if (storedFACR!=s.prop46) {
                                    vfAcr.setAcr("facr",s.prop46);
                                    vfAcr.save();
                                }    
                            }    
                        }
                    }   
                
                var auth_State = s.prop7=="logged in"?1:2;
                var GetTempCookie=s.c_r("s_sv_p8");
                if ((GetTempCookie != null) && (GetTempCookie != "")){
                    s.prop8=GetTempCookie;
                }
                GetTempCookie=s.c_r("s_sv_p9");
                if ((GetTempCookie != null) && (GetTempCookie != "")){
                    s.prop9=GetTempCookie;
                }
                GetTempCookie=s.c_r("s_sv_p30");
                if ((GetTempCookie != null) && (GetTempCookie != "")){s.prop30=GetTempCookie;}
                GetTempCookie=s.c_r("s_sv_p46");
                if (((GetTempCookie != null) && (GetTempCookie != ""))&&(GetTempCookie.length > 2)&&(!(/^\42sync:[0-9]+\42$/.test(GetTempCookie)))){
                    if (GetTempCookie.indexOf("facr:")==-1){
                        s.prop46=GetTempCookie;
                    }
                    else {
                        if ((typeof vfAcr!=="undefined")&&(typeof vfAcr.getAcr!=="undefined")) {
                            s.prop46=vfAcr.getAcr("facr");
                            s.prop44=vfAcr.getAcr("pacr3");
                            b.visitor_id_adform=vfAcr.getAcr("pacr2");
                            b.visitor_id_medallia=vfAcr.getAcr("pacr1");
                            if ((typeof vfconsents !== "undefined")&&(typeof vfconsents.get !== "undefined")&&(vfconsents.get("ind4")=="i")&&((typeof s.prop44==="undefined")||(typeof b.visitor_id_adform==="undefined")||(typeof b.visitor_id_medallia==="undefined"))) {
                                s.prop16 = (typeof s.prop16 == "undefined") ? "" : s.prop16+":";
                                s.prop16 += "PACRs undefined:"+((typeof s.prop44==="undefined")?"Adobe ":"")+((typeof b.visitor_id_adform==="undefined")?"Adform ":"")+((typeof b.visitor_id_medallia==="undefined")?"Medallia":"");
                            }
                            if (s.events.indexOf("event206")!=-1) {
                                s.eVar16=vfAcr.getAcr("fmacr");
                            }
                        }
                    }
                }   
                GetTempCookie = s.getQueryParam('hash',"&",decodeURIComponent(window.location.href));
                if ((typeof GetTempCookie !== "undefined")&&(GetTempCookie != "")){
                    s.prop46=GetTempCookie;
                    if (s.prop46.length == 32)  {                     
                        s.c_w("s_sv_p46",s.prop46,exp);
                    } else {
                        if ((s.prop46.length > 32)&&(typeof vfAcr!=="undefined")&&(typeof vfAcr.setAcr!=="undefined")) {
                            vfAcr.setAcr("facr",s.prop46);
                            GetTempCookie = s.getQueryParam('fmacr',"&",decodeURIComponent(window.location.href));
                            if (GetTempCookie != "") {
                                s.eVar16 = GetTempCookie;
                                vfAcr.setAcr("fmacr",s.eVar16);
                            }
                            GetTempCookie = s.getQueryParam('pacr3',"&",decodeURIComponent(window.location.href));
                            if (GetTempCookie != "") {
                                s.prop44 = GetTempCookie;
                                vfAcr.setAcr("adobe",s.prop44);
                            }
                            GetTempCookie = s.getQueryParam('pacr2',"&",decodeURIComponent(window.location.href));
                            if (GetTempCookie != "") {
                                b.visitor_id_adform = GetTempCookie;
                                vfAcr.setAcr("adform",b.visitor_id_adform);
                            }
                            GetTempCookie = s.getQueryParam('pacr1',"&",decodeURIComponent(window.location.href));
                            if (GetTempCookie != "") {
                                b.visitor_id_medallia = GetTempCookie;
                                vfAcr.setAcr("medallia",b.visitor_id_medallia);
                            }
                            vfAcr.save();
                        }                                 
                    }
                }    
                if ((typeof s.prop46!== "undefined")&&(typeof s.visitor!== "undefined")&&(typeof s.visitor.setCustomerIDs !== "undefined")){
                    var oldNewPACR = (s.prop46.length == 32) ? s.prop46 : (((typeof s.prop44 !== "undefined")&&(s.prop44.length>1))?s.prop44 : "" );
                    if ((oldNewPACR != "")&&(typeof vfconsents !== "undefined")&&(typeof vfconsents.get !== "undefined")&&(!(/i|y/.test(vfconsents.get('res4'))))&&(/i|y/.test(vfconsents.get('ind4')))) {
                        s.visitor.setCustomerIDs({
                            "hashmanual":{
                                "id":oldNewPACR,
                                "authState":auth_State
                            },    
                            "hash":{
                                "id":oldNewPACR,
                                "authState":auth_State
                            },  
                            "odcd":{
                                "id":oldNewPACR,
                                "authState":auth_State
                            }                         
                        });
                    }
                }    
                GetTempCookie = s.getQueryParam('paidSearchTracking');
                if ((typeof GetTempCookie !== "undefined")&&(GetTempCookie != "")) {
                   var elems = GetTempCookie.split("_");
                   if (elems[1] !== "undefined" ) {
                       switch (elems[1]) {
                            case 'e' : elems[1] = "exact"; break;
                            case 'p' : elems[1] = "phrase"; break;
                            case 'b' : elems[1] = "broad"; break;
                        }
                    }    
                    if (elems[0].indexOf("+")!=-1) {
                        elems[1] = "modifier"; 
                        elems[0] = elems[0].replace(/\+/g, "");
                    }
                    s.eVar101 = elems.join("_");
                }
                GetTempCookie = s.getQueryParam('kpid');
                if ((typeof GetTempCookie !== "undefined")&&(GetTempCookie != "")) {
                    s.eVar102 = GetTempCookie;
                }
                //s.prop25 = s.version.toLowerCase(); set in tealium
                //s.prop25 += (typeof s.prop46 !== "undefined") ? ":vid" : ":mid";
                //if (s.props25) {s.prop25 += ":"+s.props25;}
                s.prop27 = s.getVisitNum();
                s.prop32 = s.c_r("s_sv_p32");
                if (/i/.test(vfconsents.get("funa"))) {
                    s.c_w("s_sv_p32",s.pageName,0);
                }
                if ((typeof s.getPercentPageViewed === "function") && (typeof s.initialLoad !== "undefined") && (s.initialLoad == 1)) {
                    s.getPercentPageViewed(s.pageName);
                    s.prop71 = s._ppvPreviousPage;  //Previous page name
                    if ((typeof s._ppvHighestPercentViewed !== "undefined")&&(s._ppvHighestPercentViewed != "")) {
                        s.prop42 = s._ppvHighestPercentViewed + "|"+ s._ppvInitialPercentViewed;
                    }
                    if ((typeof s._ppvFoldsSeen !== "undefined")&&(s._ppvFoldsSeen != "")) {
                        s.prop28 = s._ppvFoldsSeen + "|" + s._ppvFoldsAvailable;
                    }
                }
                /*if (s.pageName.indexOf(":Business Blog") != -1) {
                    s.prop20 = "Business Blog";
                    s.channel = "Public web";
                }*/
                if ((s.channel.indexOf("eShop") > -1)||(s.channel.indexOf("WSC") > -1)) {
                    if (s.prop20 && (s.prop20 != "")) {
                        if ((s.prop20=="CZ:eShop")||(s.prop20=="EN:eShop")||(s.prop20.indexOf("Kosik") != -1)||(s.prop20.indexOf("Objednavka") != -1)) {
                            if (typeof s.prop8 !== "undefined") {
                                s.prop20 = s.prop20.substring(0, 3)+((s.prop8.indexOf("business")!=-1)?"Business":"Consumer")+ " HSRP eShop";
                            }    
                            if ((!s.prop20)&&(s.channel.indexOf("eShop") > -1)) {s.prop20 = "CZ:Consumer eShop";}
                        }
                        if ((!s.eVar50)&&(s.prop20.indexOf("eShop") > -1)) {s.eVar50 = s.prop20.substr(3);}
                    }
                    if (s.prop41) {
                        if ((s.prop41.indexOf("cash") != -1) || (s.prop41.indexOf("cache") != -1)) {
                            s.contextData['cz_payment_options'] =  "Cash on delivery";
                        } else {
                            s.contextData['cz_payment_options'] = "Credit Card";                         
                        }   
                    }
                    if (s.eVar21) {
                        s.contextData['acquisition'] = s.eVar21.indexOf("acq") != -1 ? "Acquisition" : "Upgrade";
                        if ((s.eVar21.indexOf("acq") == -1)&&s.prop20) {
                            s.contextData['hsrp_type'] = s.prop20.indexOf("Consumer") != -1 ? "Consumer HSRP" : "Business HSRP";
                        }
                    }
                }
                if ((typeof adf_products!== "undefined")&& (adf_products != "")) {
                    s.products = adf_products;
                }
	      /* 2025-01-07 - update of condition by Robert Zelenka */
	      if ((typeof s.products !== "undefined") && (s.products != "") && (/purchase/.test(s.events) || s.products.toLowerCase().indexOf("solus-deposit") !== -1)) {
	  /*  if ((typeof s.products !== "undefined") && (s.products != "") && (/purchase/.test(s.events))) { */ 
                    if (s.products.indexOf(",") != -1) {var split_prods = s.products.split(",");}
                    else {var split_prods = [s.products];}
                    if (s.products.indexOf(",") != -1) {var split_prods_universal = s.products.split(",");}
                    else {var split_prods_universal = [s.products];}
                    utag.data.transaction_total = new Number(0);
                    utag.data.transaction_contract_value = new Number(0);
                    for (var i in split_prods) {
                        if (typeof split_prods[i].split == "function") {
                            var split_single_prod = split_prods[i].split(";");
                            var split_single_prod_universal = split_prods[i].split(";");
                            if (split_single_prod.length > 3) {
                                utag.data.transaction_total += Number(split_single_prod[3]);
                                if ((split_single_prod[1].toLowerCase().indexOf("topup") != -1) || (split_single_prod[1].toLowerCase().indexOf("invoice") != -1)){
                                    split_single_prod_universal[3] = split_single_prod[3] = "0";
                                }    
                            }
                            if (split_single_prod.length > 4) {
                                var split_events = split_single_prod[4].split("|");
                                var split_event_name = split_single_prod[4].split("|");
                                utag.data.event_name = utag.data.event_name || [];
                                for (var j in split_events) {
                                    if (/event51=/.test(split_events[j])) {
                                        split_event_name[j] = split_events[j].replace(/event51=/,"event215=");
                                        utag.data.transaction_contract_value += Number(split_events[j].split("=")[1]);
                                        if (!/transaction_contract_value/.test(utag.data.event_name.toString())) {
                                             utag.data.event_name.push("transaction_contract_value");
                                        }
                                        if (!/event51/.test(s.events)) {
                                            s.events += ",event51";
                                        }
                                    }
                                    if (/event1[67]=/.test(split_events[j])) {
                                        split_event_name[j] = split_events[j].replace(/event1[67]=/,"event108=");
                                        if (!/product_price_recurrence_amount/.test(utag.data.event_name.toString())) {
                                            utag.data.event_name.push("product_price_recurrence_amount");
                                        }
                                    }
                                }
                                split_single_prod_universal[4] = split_event_name.join("|");
                            }
                            if (split_single_prod.length > 5) {
                                var split_evars = split_single_prod[5].split("|");
                                var eVar51ToBeDeleted = -1;
                                for (var j in split_evars) {
                                    if (/eVar51/.test(split_evars[j])) {
                                        split_single_prod_universal[4] = (split_single_prod_universal[4] == "" ? "" : split_single_prod_universal[4]+"|") + "event109=" + split_evars[j].split("=")[1];
                                        if (!/product_price_recurrence_number/.test(utag.data.event_name.toString())) {
                                            utag.data.event_name.push("product_price_recurrence_number");
                                        }
                                        eVar51ToBeDeleted = Number(j);
                                    }
                                }
                                if (eVar51ToBeDeleted > -1) {
                                    if (split_evars.length == 1) {
                                        split_evars = [];
                                    } else {
                                        split_evars = split_evars.splice(eVar51ToBeDeleted, 1);  
                                    }
                                    split_single_prod_universal[5] = split_evars.join("|");    
                                }   
                            }
                            split_prods[i] = split_single_prod.join(";");
                            split_prods_universal[i] = split_single_prod_universal.join(";");
                        }    
                    }
                    if (utag.data.transaction_contract_value == 0) {
                        delete utag.data.transaction_contract_value;
                    }
                    s.products = split_prods.join(",");
                    s.products_universal = split_prods_universal.join(",");
                    if (/event29/.test(s.events)) {
                        //utag.data.transaction_total_op = new Number(0);
                        utag.data.transaction_total_op = utag.data.transaction_total;
                    }

                }
                s.prop15 = s.getTimeSinceLastVisit();
                s.prop15 = s.prop15.toLowerCase();
                var disabled_DNT = false;
                if ((window.doNotTrack)&&(window.doNotTrack == "1")) {
                    disabled_DNT = true;
                } 
                if (navigator.doNotTrack&&((navigator.doNotTrack == true)||(navigator.doNotTrack == "yes"))){
                    disabled_DNT = true;
                }
                if ((typeof window.external === "object")&&(typeof window.external.msTrackingProtectionEnabled === "function")&&(window.external.msTrackingProtectionEnabled())){
                    disabled_DNT = true;
                }
                if (disabled_DNT) {
                    // Do Not Track is enabled!
                    s.events +=  (s.events!="" ? ',' : '')+"event201";
                    if (typeof s.linkName !== "undefined") {
                        if ((typeof s.linkTrackEvents === "undefined") || (s.linkTrackEvents=="")) {
                            s.linkTrackEvents = "event201";
                        } else {
                            s.linkTrackEvents += ",event201";
                        }
                    }
                }
                if (/event6($|,)/.test(s.events)) {
                    s.c_w("exupc",/event183($|,)/.test(s.events) ? "y" : "n",exp);                   
                }
            } catch (err) {
                _errorSections.push('2:'+err.message);
            }
        }
        /// end tracking first run


        try {
            // section 3
            // any call remapping
          /*  if (s.contextData['playbook'] != "group") {
                if (s.prop47) {s.prop33=s.prop47; delete s.prop47;}
                if (s.eVar23) {s.eVar12 = s.eVar23;s.eVar23="";}
                if (s.eVar55){
                    s.eVar20=s.eVar55;s.eVar55="";
                    if (s.linkTrackVars.indexOf("eVar55") != -1) {
                        s.linkTrackVars = s.linkTrackVars.replace("eVar55","eVar20");
                    }
                }
                //referrer in a prop and eVar (document.referrer;) or take the definition from source code
                if (s.prop35) {
                    s.contextData['set_referrer'] = s.prop35;
                    s.prop35 = "";
                } else {
                    delete s.contextData['set_referrer'];
                }
            } else {*/
                if (s.events&&s.events != '') {
                    if (s.events.indexOf("event68") != -1) {
                        if (typeof s.eVar65 !== "undefined") {
                            s_eVar65Helper = s.eVar65;
                        }
                        if (typeof s.prop60 !== "undefined") {
                            s_prop60Helper = s.prop60;
                        }
                    }
                    if ((s.events.indexOf("event69") != -1)||(s.events.indexOf("event70") != -1)) {
                        if (typeof s_eVar65Helper !== "undefined") {
                            s.eVar65 = s_eVar65Helper;
                        }
                        if (typeof s_prop60Helper !== "undefined") {
                            s.prop60 = s_prop60Helper; 
                            if (!(/prop60/.test(s.linkTrackVars))) {
                                s.linkTrackVars += ",prop60"
                            }            
                        }
                        if ((s.eVar65=="")&&(tealium_s.eVar65!="")){
                            tealium_s.eVar65 = "";
                            if ((tealium_s.eVar65=="D=c53")&&s.eVar65){
                                tealium_s.evar65 = s.eVar65;
                            }
                        }
                    }    
                }
                if (typeof s.eVar145 !== "undefined"){
                    var date = new Date();
                    var exp24 = new Date();
                    exp24.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                    s.c_w("s_last_chatbot_id_nps",s.eVar145,exp24);
                }                
                if(/:close(:|$)/.test(s.pageName) && (typeof s.linkName==="undefined") && (s.c_r("s_last_chatbot_id_nps").length>0)){
                    var pageNameElements = s.pageName.split(":");
                    if (typeof pageNameElements[2] !== "undefined") {
                        s.c_w("tobi_nps_trigger",pageNameElements[2]);
                        if ((typeof pageNameElements[2] !== "reset")||(Math.random()<0.3)) {
                            if (typeof window.KAMPYLE_ONSITE_SDK === 'undefined' || typeof window.KAMPYLE_ONSITE_SDK.updatePageView !== 'function') {
                                var ss = document.createElement('script');
                                ss.type = 'text/javascript';
                                ss.async = true;
                                ss.src = 'https://nebula-cdn.kampyle.com/we/59724/onsite/embed.js';
                                var x = document.getElementsByTagName('script')[0];
                                x.parentNode.insertBefore(ss, x);
                            } else {
                                if (typeof window.KAMPYLE_ONSITE_SDK.updatePageView === 'function') {
                                    //window.tobi_nps_trigger = window.location.origin === PRODUCTION_PAGE ? 'prod' : 'test';
                                    window.KAMPYLE_ONSITE_SDK.updatePageView();
                                }
                            }
                        }
                    } 
                }
                if(/(^chat:.*:entry$)/.test(s.pageName)){
                    if (/.*s_chat_start.*/.test(document.cookie)) {
                        s.c_w("s_chat_start","-1");
                    } 
                    if (/.*s_chat_dialog.*/.test(document.cookie)) {
                        s.c_w("s_chat_dialog","-1");
                    }
                    if (s.prop32){
                        window.s.chat_start_page = s.prop32;
                    }
                }
                if((/(^chat:.*:start$)/.test(s.pageName))&&(/event7($|,)/.test(s.events) /*s.eVar47*/)){
                    //if (s.eVar47 && (/.*s_chat_start=\d.*/.test(document.cookie))) {
                    //    delete s.eVar47;
                    //} else {
                        var actual = new Date();
                        s.c_w("s_chat_start",(actual.getTime()).toString());
                        //s.eVar47 = window.s.chat_start_page;
                    //}
                }
                if((/(^chat:.*:dialog$)/.test(s.pageName))&&(/event8($|,)/.test(s.events))){
                    var actual = new Date();
                    var actualms = actual.getTime();
                    var start = s.c_r("s_chat_start");
                    s.events +=",event137="+Math.round((actualms-start)/1000).toString();
                    s.c_w("s_chat_dialog",(actualms).toString());
                    if (s.eVar44) {
                        s.c_w("s_chat_agent",s.eVar44);
                    }
                    if (s.eVar45) {
                        s.c_w("s_chat_id",s.eVar45);
                    }                
                }
                if(/event3(7|8)($|,)/.test(s.events)){
                    GetTempCookie=s.c_r("s_chat_agent");
                    if ((GetTempCookie != null) && (GetTempCookie != "")){
                         s.eVar44=GetTempCookie;
                    }
                    var start = s.c_r("s_chat_dialog");
                    if (start=="" || start=="-1") {  //chat dialog was not launched
                        if (s.eVar18) { delete s.eVar18;}
                        if (s.eVar19) { delete s.eVar19;}
                        Remove_Event('event8');
                    } else {
                        var actual = new Date();
                        s.events +=",event138="+Math.round((actual.getTime()-start)/1000).toString();
                    }
                }
                if ((typeof s.eVar120 !== "undefined")&&(s.eVar120 != "")&&((typeof s.eVar20 === "undefined")||(s.eVar20 == ""))) {
                    s.eVar20 = s.pageName;
                }
                if ((typeof s.purchaseID !== "undefined") && ((/^[0-9]+$/.test(s.purchaseID))||(/^le[0-9]+$/.test(s.purchaseID)))) {
                    if ((s.purchaseID.indexOf("420")==0)&&(s.purchaseID.length=12)) {
                        var dd=new Date();
                        s.purchaseID+=":"+ dd.getFullYear().toString().slice(2,4)+(dd.getMonth()<9?"0":"")+(dd.getMonth()+1).toString()+(dd.getDate()<10?"0":"")+dd.getDate().toString();
                    }
                    s.products = "Lead;lead:"+s.pageName.slice(0,s.pageName.lastIndexOf(":"))+";1;0";
                    if (!s.events || s.events=="") {
                        s.events = "purchase";
                    } else {
                        if (s.events.indexOf("purchase")==-1) {
                            s.events += ",purchase";
                        }
                    }
                }
                if (/PopupLeadformOpen/.test(s.pageName)) {
                    s.products = "Lead;lead:"+s.pageName;
                    s.events = "scOpen,scAdd";
                }
                if (/event6($|,)/.test(s.events)) {
                    if(/event206($|,)/.test(s.events)) {
                        s.survey_trigger_point = "email-login";
                        /*if (isSessionStorageNameSupported()) {
                            sessionStorage.setItem("visitor_login_type", "e-mail");
                        }*/ // visitor_login_type is set by DEV based on used login account
                        if(/event5($|,)/.test(s.events)){
                            s.survey_trigger_point = "registration";
                        }
                    } /*else {
                        if (isSessionStorageNameSupported()) {
                            sessionStorage.setItem("visitor_login_type", "msisdn");
                        }
                    }*/ // visitor_login_type is set by DEV based on used login account
                }
                /*           //Deduplication of orders based on purchase ID variable
                if (s.purchaseID) {
                    if (s.sc_newOrder != 1) {
                        s.sc_newOrder = 1; // prevent the order tracking in layers to take place on additional order tracking call
                        if (s.purchaseID.indexOf("WSC") != -1) {
                            if ((!s.events) || (s.events == "")) {
                                s.events = "event6,purchase"
                            }
                            else {
                                if (s.events.indexOf("purchase") == -1) {
                                    s.events += ",purchase";
                                }
                                if (s.events.indexOf("event6") == -1) {
                                    s.events += ",event6";
                                }
                            }
                        }
                    } else {
                        s.sc_newOrder = 0;
                        if (s.events && s.events.indexOf("purchase") != -1) {
                            Remove_Event('purchase');
                        }
                        if (s.events && s.events.indexOf("event6") != -1) {
                            Remove_Event('event6');
                        }
                    }
                }                            */
            /*}*/
        } catch (err) {
            _errorSections.push('3:'+err.message);
        }

        try {
            // section 4

          /*if ((s.events&&s.events != '')||(s.contextData&&s.contextData != '')) {                          // replace selected events by context variables
                if (s.contextData['playbook'] != "group") {
                    var s_events_removal = "event21:order_form_sent,event27:wsc_successfull_op,event64:login_event:onsc,event65:onsc_service_adc,event66:login_attempt:onsc,event72:form_abandon,event73:form_success,event74:form_error";
                }
                else {
                    var s_events_removal = "event27:checkout_review_confirm,event29:wsc_successfull_op,event30:login_attempt:set_channel,event74:wsc_service_adc";
                } 
                if (s.events&&s.events != '') {var s_events = s.split(s.events, ',');} else {var s_events = '';}
                var s_events_removal_list = s.split(s_events_removal, ',');
                for (var i = 0; i < s_events_removal_list.length; i++) {
                    var s_events_removal_list_elements = s.split(s_events_removal_list[i], ':');
                    if ((s.contextData[s_events_removal_list_elements[1]])&&(s.contextData[s_events_removal_list_elements[1]]!="")){
                        if ((s_events_removal_list_elements.length==2)||((s_events_removal_list_elements.length>2)&&(s.contextData[s_events_removal_list_elements[1]]==s_events_removal_list_elements[2]))){
                            delete s.contextData[s_events_removal_list_elements[1]];}
                    }
                    for (var j = 0; j < s_events.length; j++) {
                        if (s_events_removal_list_elements[0] == s_events[j]) {
                            if (s.linkTrackVars == "None") {
                                s.linkTrackVars = "contextData." + s_events_removal_list_elements[1];
                            } else {
                                s.linkTrackVars += ",contextData." + s_events_removal_list_elements[1];
                            }
                            if (s_events_removal_list_elements[2]){
                                if (s_events_removal_list_elements[2]=="set_channel"){
                                    var channel = ((document.domain.indexOf("muj")!=-1)||(document.location.pathname.indexOf("/muj/")==0)) ? "wsc" : "non wsc"; 
                                    s_events_removal_list_elements[2]=channel;
                                } else {    
                                    if (s_events_removal_list_elements[3]){s_events_removal_list_elements[2]+=":"+s_events_removal_list_elements[3]}   
                                    if (s_events_removal_list_elements[4]){s_events_removal_list_elements[2]+=":"+s_events_removal_list_elements[4]}                            
                                }    
                                s.contextData[s_events_removal_list_elements[1]] = s_events_removal_list_elements[2];
                            }
                            else{s.contextData[s_events_removal_list_elements[1]] = "set";}
                            if (s_events[j]!='event6'){Remove_Event(s_events[j]);}
                            s_events = s.split(s.events, ',');
                        }
                    }
                }
            }*/
        } catch (err) {
            _errorSections.push('4:'+err.message);
        }


        try {
            // section 5
            // remapping Group Playbook variables)
            // end of remapping
            if ((s.pageName) && (!s.pageType) && s.pageName != "") {
                var pageName_elements = s.pageName.split(':');
                s.prop21 = pageName_elements[0];
                if (pageName_elements.length > 1) {
                    s.prop21 = s.prop21 + ":" + pageName_elements[1];
                }
                s.prop22 = s.prop21;
                if (pageName_elements.length > 2) {
                    s.prop22 = s.prop22 + ":" + pageName_elements[2];
                }
                s.prop23 = s.prop22;
                if (pageName_elements.length > 3) {
                    s.prop23 = s.prop23 + ":" + pageName_elements[3];
                }
                if (s.eVar20&&((/.*:ThankYou/.test(s.eVar20))||((/.*:Thank.*You/.test(s.pageName))&&(s.eVar20=="D=pageName")))) {
                   pageName_elements.splice(pageName_elements.length-1,1);
                   s.eVar20 = pageName_elements.join(":");         
                } 
            }
            var articletags = document.getElementsByClassName("article-tag");
            if (articletags.length > 0) {
                var tags = articletags[0].innerText;
                for (var i = 1; i < articletags.length; i++) {
                    tags += ":"+articletags[i].innerText;
                }
            }
            if ((typeof tags !== "undefined")&&((s.channel == "eShop:Blog")||(/Podnikatele:V-HUB/.test(s.pageName)))) {
                s.eVar30 = "bb:"+tags;
            }
            if (!s.eVar43) {
                var temp_email_id = s.getQueryParam('eid,emailAddress',"",decodeURIComponent(window.location.href));
                if (temp_email_id != "" ) {
                    var temp_sent_email_id = s.getValOnce(temp_email_id, 's_var_43', 0);
                    if (temp_sent_email_id != "") {
                        s.eVar43 = temp_sent_email_id;
                        if (/@/.test(s.eVar43)) {
                           var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
                           s.eVar43 = MD5(s.eVar43); 
                        }
                    }    
                }
            } 
            if ((typeof vfconsents !== "undefined")&&(typeof vfconsents.get !== "undefined")&&(vfconsents.get('funa') !== 'o')){
                if ((vfconsents.get('mktg')!= "i")/*||(!s.initialLoad)*/||(/vodaczdev/.test(s_account))){ //send at all pages including virtual one e.g. for leads
                    s.contextData['cm.ssf']=1; //stop AAM server side forwarding
                }   
                s.prop40 = "funa:i|mktg:"+(typeof vfconsents.get('mktg') !== "undefined"?vfconsents.get('mktg'):"i" )+(typeof vfconsents.get('ind4') !== "undefined"?"|ind4:"+vfconsents.get('ind4'):"" );
                s.prop40 += (typeof vfconsents.get('res4') !== "undefined"?"|res4:"+vfconsents.get('res4'):"" )+(typeof vfconsents.get('nps4') !== "undefined"?"|nps4:"+vfconsents.get('nps4'):"" )+(typeof vfconsents.get('nacm') !== "undefined"?"|nacm:"+vfconsents.get('nacm'):"" );
                s.prop40 += (typeof vfconsents.get('loc4') !== "undefined"?"|loc4:"+vfconsents.get('loc4'):"" )+(typeof vfconsents.get('trf4') !== "undefined"?"|trf4:"+vfconsents.get('trf4'):"" );
                s.prop40 += (typeof vfconsents.get('cvx') !== "undefined"?"|cvd:"+vfconsents.get('cvx'):(typeof vfconsents.get('cvd') !== "undefined"?"|cvd:"+vfconsents.get('cvd'):"" ));
                s.prop40 += (typeof vfconsents.get('cvu') !== "undefined"?"|cvu:"+vfconsents.get('cvu'):"" )+(typeof vfconsents.get('thr4') !== "undefined"?"|thr4:"+vfconsents.get('thr4'):"" );
            }
            if ((typeof s.eVar240 !== "undefined")&&(s.eVar240 === "operation and location data")){
                s.eVar240 = "trf4,loc4";
            }
            if (isSessionStorageNameSupported()) {
                if (s.pageName == 'WSC:Prehled') {
                    sessionStorage.setItem('s_prevPageWasLogin', 'willtrue');
                } else {
                    if (typeof sessionStorage.s_prevPageWasLogin !== "undefined") {
                       if (sessionStorage.s_prevPageWasLogin =='willtrue') {
                          sessionStorage.setItem('s_prevPageWasLogin', 'true');
                       } else {
                          sessionStorage.removeItem("s_prevPageWasLogin");
                       }   
                    }
                }
                if (s.list1 === "user:banner:any:any" ) {
                    sessionStorage.setItem('consents', s.prop40);
                } else {
                    if (typeof sessionStorage.consents !== "undefined") {
                        var storageConsent = sessionStorage.consents.match(/thr4:./);
                        var prop40Consent = s.prop40.match(/thr4:./);
                        if ((storageConsent !== null)&&(prop40Consent !== null)&&(storageConsent[0])!==(prop40Consent[0])) {
                            s.eVar240 = "thr4";
                            if (/thr4:i/.test(s.prop40)) {
                                s.events = (s.events=="") ? "event240" : s.events+",event240";
                            }
                        }
                        storageConsent = sessionStorage.consents.match(/trf4:./);
                        prop40Consent = s.prop40.match(/trf4:./);
                        if ((storageConsent !== null)&&(prop40Consent !== null)&&(storageConsent[0])!==(prop40Consent[0])) {
                            s.eVar240 = (typeof s.eVar240==="undefined") ? "trf4" : s.eVar240 + ",trf4";
                            if ((/trf4:i/.test(s.prop40))&&(!/event240/.test(s.events))) {
                                s.events = (s.events=="") ? "event240" : s.events+",event240";
                            }
                        }
                        storageConsent = sessionStorage.consents.match(/loc4:./);
                        prop40Consent = s.prop40.match(/loc4:./);
                        if ((storageConsent !== null)&&(prop40Consent !== null)&&(storageConsent[0])!==(prop40Consent[0])) {
                            s.eVar240 = (typeof s.eVar240==="undefined") ? "loc4" : s.eVar240 + ",loc4";
                             if ((/loc4:i/.test(s.prop40))&&(!/event240/.test(s.events))) {
                                s.events = (s.events=="") ? "event240" : s.events+",event240";
                            }
                        }
                        storageConsent = sessionStorage.consents.match(/ind4:./);
                        prop40Consent = s.prop40.match(/ind4:./);
                        if ((storageConsent !== null)&&(prop40Consent !== null)&&(storageConsent[0])!==(prop40Consent[0])) {
                            if (/ind4:i/.test(s.prop40)) {
                                s.eVar240 = (typeof s.eVar240==="undefined") ? "ind4" : s.eVar240 + ",ind4";
                                if (!/event240/.test(s.events)) {
                                    s.events = (s.events=="") ? "event240" : s.events+",event240";
                                }    
                                sessionStorage.removeItem("consents");
                            } else {    
                                if (typeof s.eVar240==="undefined") {
                                    s.eVar240 = "ind4";
                                    s.events = (s.events=="") ? "event241" : s.events+",event241";
                                    sessionStorage.removeItem("consents");                                   
                                } else {
                                    sessionStorage.setItem('consents', storageConsent[0]);
                                }
                            }
                        } 
                    }
                }
            }

            var _tmp_split = s.getTimeParting("Europe/Prague");
            if ((typeof _tmp_split!== "undefined") && (typeof _tmp_split.split == "function") && (!(/(a:|caught:)/.test(_tmp_split)))) {
                var _tp_split= _tmp_split.split(' | '); // set hour of day
                if (typeof _tp_split !== "undefined") {
                    if ((typeof _tp_split[4] !== "undefined")&& (typeof _tp_split[4].split == "function")) {
                        var _time_split = _tp_split[4].split("=")[1].replace(" ","");
                        s.prop12 = _time_split.split(":")[0].length==1?"0"+_time_split : _time_split;
                     } // set hour of day
                    if ((typeof _tp_split[3] !== "undefined") && (typeof _tp_split[3].split == "function")) {
                        var _date_split = _tp_split[3].split("=")[1];
                        s.prop12 += "-"+_date_split; // set day of week
                        s.prop12 += "-"+(((_date_split.indexOf("Sunday")!=-1)||(_date_split.indexOf("Saturday")!=-1))?"Weekend":"Weekday"); // set weekend/weekday
                    }
                }    
            } else {
                s.prop16 = ((typeof s.prop16 == "undefined")||(s.prop16=='')) ? "" : s.prop16+":";
                s.prop16 += "s_code:getTimeParting:"+_tmp_split;
            } 
            s.prop11 = s.getNewRepeat(90);
            if (isLocalStorageNameSupported()) {
               if (typeof date === "undefined"){
                   var date = new Date();
               }
               if (typeof(window.localStorage.NR) !== "undefined") {
                   s.prop11 += (date.getTime()-90*86400000>Number(window.localStorage.NR))?":New":":Repeat";
               } else {
                   window.localStorage.setItem('NR',date.getTime());
                   s.prop11+=":New";
               }                   
            }
        } catch (err) {
            _errorSections.push('5:'+err.message);
        }

        try {
            // section 6
            //getCookie mbox and delete the inflated one
            if (document.cookie) {
                var CookieSize = document.cookie.length;
                if (CookieSize>3500){
                    if (CookieSize>7168) {s.prop37="Cookies size over 7168";} else {
                        if (CookieSize>6144) {s.prop37="Cookies size over 6144";} else {
                            if (CookieSize>5120) {s.prop37="Cookies size over 5120";} else {
                                if (CookieSize>4096) {s.prop37="Cookies size over 4096";} else {
                                    if (CookieSize>3900) {s.prop37="Cookies size over 3900";} else {
                                        s.prop37="Cookies size over 3500";
                                    }    
                                }
                            }
                        } 
                    }    
                }    
           }
            var chckCookie = s.c_r("mbox");
            if (typeof(chckCookie) != "undefined" && chckCookie != null) {
                if (chckCookie.length > 1023) {
                    s.c_w("mbox", "", 0);
                    s.prop16 = (typeof s.prop16 == "undefined") ? "" : s.prop16+":";
                    s.prop16 += "mboxCookiedeleted";
                }
                /* else
                 { if (s.list1)
                 {
                 if (s.list1.indexOf(":Default")!=-1) {s.prop16=chckCookie.substr(0,100)
                 }
                 }
                 }  */
            }

            //getCookie and set value for campaign
            if ((!s.campaign) || (s.campaign == "")) { //do not overwrite campaign defined in the source code of partner sites
                s.campaign = s.getQueryParam('tc',"&",decodeURIComponent(window.location.href));
                if (s.campaign.indexOf("&")>0) {
                    s.campaign = s.campaign.slice(0,s.campaign.indexOf("&"));
                }
                s.campaign = s.getValOnce(s.campaign, 's_campaign', 30);
                var utm_placement = s.getQueryParam('utm_placement',"&",decodeURIComponent(window.location.href));
                if ((document.referrer == "")&(utm_placement.length>0)) {
                    s.referrer = utm_placement;
                }
            }
            if (s.campaign) {
                //s.eVar17 = s.crossVisitParticipation(s.campaign, 's_tchist', '90', '5', '>', 'purchase');
               //s.eVar57 = s.crossVisitParticipation(s.campaign[0], 's_cmphist', '90', '5', '>', 'purchase',1);
                var chckCookie = s.c_r("s_cmphist");
                if (typeof(chckCookie) != "undefined" && chckCookie != null) {
                    s.eVar57 = chckCookie+">"+s.campaign[0];
                } else {
                    s.eVar57 = s.campaign[0];
                }
                var date = new Date();
                var exp30 = new Date();
                exp30.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
                s.c_w("s_cmphist", s.eVar57, exp30);
            }
            if (/purchase/.test(s.events)) {
                s.c_w("s_cmphist", "", 0); 
            }
            if (/@/.test(s.eVar190)) {
                var sha256 = function sha256(ascii) {
                    function rightRotate(value, amount) {
                        return (value>>>amount) | (value<<(32 - amount));
                    };

                    var mathPow = Math.pow;
                    var maxWord = mathPow(2, 32);
                    var lengthProperty = 'length'
                    var i, j; // Used as a counter across the whole file
                    var result = ''

                    var words = [];
                    var asciiBitLength = ascii[lengthProperty]*8;

                    //* caching results is optional - remove/add slash from front of this line to toggle
                    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
                    // (we actually calculate the first 64, but extra values are just ignored)
                    var hash = sha256.h = sha256.h || [];
                    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
                    var k = sha256.k = sha256.k || [];
                    var primeCounter = k[lengthProperty];
                    /*/
                    var hash = [], k = [];
                    var primeCounter = 0;
                    //*/

                    var isComposite = {};
                    for (var candidate = 2; primeCounter < 64; candidate++) {
                        if (!isComposite[candidate]) {
                            for (i = 0; i < 313; i += candidate) {
                                isComposite[i] = candidate;
                            }
                            hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
                            k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
                        }
                    }

                    ascii += '\x80' // Append Ƈ' bit (plus zero padding)
                    while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
                    for (i = 0; i < ascii[lengthProperty]; i++) {
                        j = ascii.charCodeAt(i);
                        if (j>>8) return; // ASCII check: only accept characters in range 0-255
                        words[i>>2] |= j << ((3 - i)%4)*8;
                    }
                    words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
                    words[words[lengthProperty]] = (asciiBitLength)

                    // process each chunk
                    for (j = 0; j < words[lengthProperty];) {
                        var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
                        var oldHash = hash;
                        // This is now the undefinedworking hash", often labelled as variables a...g
                        // (we have to truncate as well, otherwise extra entries at the end accumulate
                        hash = hash.slice(0, 8);

                        for (i = 0; i < 64; i++) {
                            var i2 = i + j;
                            // Expand the message into 64 words
                            // Used below if 
                            var w15 = w[i - 15], w2 = w[i - 2];

                            // Iterate
                            var a = hash[0], e = hash[4];
                            var temp1 = hash[7]
                                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                                + ((e&hash[5])^((~e)&hash[6])) // ch
                                + k[i]
                                // Expand the message schedule if needed
                                + (w[i] = (i < 16) ? w[i] : (
                                        w[i - 16]
                                        + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                                        + w[i - 7]
                                        + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                                    )|0
                                );
                            // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
                            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                                + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj

                            hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
                            hash[4] = (hash[4] + temp1)|0;
                        }

                        for (i = 0; i < 8; i++) {
                            hash[i] = (hash[i] + oldHash[i])|0;
                        }
                    }

                    for (i = 0; i < 8; i++) {
                        for (j = 3; j + 1; j--) {
                            var b = (hash[i]>>(j*8))&255;
                            result += ((b < 16) ? 0 : '') + b.toString(16);
                        }
                    }
                    return result;
                };
                s.eVar190 = sha256(s.eVar190);
            } 
        } catch (err) {
            _errorSections.push('6:'+err.message);
        }

        try {
            // section 7
            // Search implementation (Using group specific setup)
            if (s.prop1 && s.prop1 != "") {
                if (typeof s.prop1.toLowerCase == "function"){s.prop1 = s.prop1.toLowerCase();}
                //s.eVar1 = s.prop1;
                if ((typeof lastSearch != "undefined")&&(lastSearch != "")&&(lastSearch === s.prop1)) {
                    s.abort = true;
                }
                lastSearch = s.prop1;
                s.prop5 = "search";
                if (typeof s.prop2 != "undefined") { 
                    if (typeof s.prop2 == "number") {s.prop2 = s.prop2.toString(); }
                    if (s.prop2 == "0" || s.prop2.toLowerCase() == "zero") {
                    s.prop2 = "zero";
                    }
                }
                s.eVar1 = s.getValOnce(s.prop1, 's_gvo_v1', 0);
            }
            if (s.eVar1) {
                if (!s.c_r('s_scount')) {
                    s.c_w('s_scount', '1', 0);
                    s.c_w('s_stack', '1:' + s.eVar1, 0);
                    s.prop36 = '1:' + s.eVar1;
                } else {
                    var iSearchCounter = s.c_r('s_scount');
                    iSearchCounter = parseInt(iSearchCounter) + 1;
                    s.c_w('s_scount', iSearchCounter, 0);
                    var sFirstTerm = s.c_r('s_stack');
                    var sLatestTerm = '|' + iSearchCounter + ':' + s.eVar1;
                    if ((sLatestTerm.length + sFirstTerm.length) < 255) {
                        sLatestTerm = sFirstTerm += sLatestTerm;
                    }
                    s.c_w('s_stack', sLatestTerm, 0);
                    s.prop36 = sLatestTerm;
                }
                if ((!/event1($|,)/.test(s.events))&&(!/event7[23]($|,)/.test(s.events))) {
                    s.events = (s.events=="") ? "event1" : s.events+",event1";
                }
            }
            if (s.c_r('s_gvo_v1') && (typeof s.prop32 != "undefined")) {
                if ((/.*(Vyhledavani|search:results|Ipap:Search).*/.test(s.prop32)) && !(/.*(Vyhledavani|search:results|Ipap:Search).*/.test(s.pageName))) {
                    s.prop38 /*contextData['search_term_and_click']*/ = s.c_r('s_gvo_v1') + "|" + s.pageName;
                    s.events = s.apl(s.events, 'event21', ',', 1);
                }
            }

            //END Internal search settings
        } catch (err) {
            _errorSections.push('7:'+err.message);
        }



        try {
            // section 8
            s.sc_newPage = 0; // prevent the remapping to take place on additional tracking call (I.e. linktracking)
         /*   if ((utag.cond[65]===1)&&(utag.cond[72]===1)&&(utag.cond[35]===1)&&(typeof window.vfconsents.banner === 'function')) {
                 window.vfconsents.banner({userLogged: true});
                 if ((typeof (utag.data["cp.utag-async"])!=="undefined") && (utag.data["cp.utag-async"].indexOf("dev")!=-1)) {
                     console.log("user based banner tag triger");
                 }
            } */
             //test&target
            if ((user_profile_changed) && (user_profile_changed==true) && ((s.channel == 'WSC')||(s.channel == 'ONSC'))) {
                if (typeof adobe.target.getOffers != "function") {
                    mboxDefine("logon_customer_type_update", "logon_customer_type_update");
                    mboxUpdate("logon_customer_type_update", "profile._customertype=" + s.contextData['evar19_cz']);
                } else {   
                    var mymBoxes = [{index: 0, name: "logon_customer_type_update", "profileParameters": {"_customertype": s.contextData['evar19_cz']}}];
                }
            }
            if ((typeof s.products != "undefined")&&(s.products.indexOf("Topup") != -1)&&(typeof s.events != "undefined")&&(s.events.indexOf("purchase")!=-1)) {
                var chckCookie = s.c_r("mbox");
                if ((typeof(chckCookie) != "undefined" && chckCookie != null) && (chckCookie.indexOf("95678583847977698284898069") == -1)) {
                    var chckCookie = s.c_r("s_sv_p9");   
                    if ((typeof(chckCookie) == "undefined" || chckCookie == null)) {
                        if (typeof adobe.target.getOffers != "function") {
                            mboxDefine("logon_customer_type_update", "logon_customer_type_update");
                            mboxUpdate("logon_customer_type_update", "profile._customertype=FC");
                        } else {
                            if (typeof mymBoxes == "undefined") {
                                var mymBoxes = [{index:0, name: "logon_customer_type_update", "profileParameters": {"_customertype": "FC"}}];
                            } else {
                                mymBoxes.push({index: mymBoxes.length, name: "logon_customer_type_update", "profileParameters": {"_customertype": "FC"}});
                            }
                        }    
                        s.c_w("s_sv_p9","payg",exp);
                        s.prop9="payg";
                    }
                }    
            }
            if ((typeof(s.products)!=="undefined") && (s.products.length != 0) && (typeof s.events !== "undefined") &&
                    ((s.events.indexOf("prodView") != -1)||(s.events.indexOf("scAdd") != -1)||(s.events.indexOf("scOpen") != -1)||(s.events.indexOf("scView") != -1))) {
               /* var adf_prods = adf_products.split(",");
                var affinities = '';
                var i = 0;
                for (i=0; i<adf_prods.length;i++){
                    affinities += adf_prods[i] +',';
                }*/
                if (typeof adobe.target.getOffers != "function") {
                    mboxDefine("product affinity", "product affinity");
                    mboxUpdate("product affinity", "user.categoryId=" + s.products.split(";")[1]);            
                } else {
                    if (typeof mymBoxes == "undefined") {
                        var mymBoxes = [{index:0, name: "product affinity", "parameters": {"user.categoryId": s.products.split(";")[1]}}];
                    } else {
                        mymBoxes.push({index: mymBoxes.length, "name": "product affinity", "parameters": {"user.categoryId": s.products.split(";")[1]}});
                    }
                }    
            }
            if ((s.events.indexOf("purchase")!=-1)&&(typeof s.products!=="undefined")) {
                if (typeof s.products != "undefined") {
                    if (s.products.indexOf("lead")!=-1) {
                        var mboxType = "lead_mbox";
                    } else {
                        var mboxType = "purchase_mbox";
                    }
                    if (typeof adobe.target.getOffers != "function") {
                        mboxDefine(mboxType, mboxType);
                        mboxUpdate(mboxType, "profile.product=" + s.products.split(";")[1]);
                    } else {
                        if (typeof mymBoxes == "undefined") {
                            var mymBoxes = [{index:0, name: mboxType, "profileParameters": {"product": s.products.split(";")[1]}}];
                        } else {
                            mymBoxes.push({index:mymBoxes.length, name: mboxType, "profileParameters": {"product": s.products.split(";")[1]}});
                        }
                    }   
                } else {
                        s.prop16 = (typeof s.prop16 == "undefined") ? "" : s.prop16+":";
                        s.prop16  += "no products defined in purchase mbox";
                }    
            }
            if ((s.events.indexOf("prodView")!=-1)&&(typeof s.products!=="undefined")&&(typeof document.getElementsByTagName('h1')[0]!=="undefined")) {
                var entityId = "entity.id="+s.products.split(";")[1];
                var entityName = "entity.name="+document.getElementsByTagName('h1')[0].innerText;
                var entityCategoryId = "entity.categoryId="+((typeof(s.products)!=="undefined")?s.products.split(";")[0] : s.products.split(",")[0]);
                var URLwork = document.URL.split("?");
                if (typeof URLwork[1] !== "undefined") {
                   URLparams = URLwork[1].split("&"); 
                   for (var i=0; i <URLparams.length; i++) {
                       if (/(tc)|(promo)=/.test(URLparams[i])) {
                           URLparams.splice(i,1);
                       }
                   }
                   URLwork[1] = URLparams.join("&");
                }
                var entityPageURL = "entity.pageURL="+URLwork.join("?");
                var entityManufacturer = "entity.manufacturer="+entityName.split("=")[1].split(" ")[0];
                var entityThumbnailURL = "entity.thumbnailURL="+utag.data["meta.search_image"];
                var entityMessage = "entity.message="+utag.data["meta.annotation"];
                if (typeof adobe.target.getOffers != "function") {
                    mboxDefine("productPage", "productPage");
                    mboxUpdate("productPage", entityId, entityName, entityCategoryId, entityPageURL, entityManufacturer, entityThumbnailURL, entityMessage);
                } else {
                    if (typeof mymBoxes == "undefined") {
                        var mymBoxes = [{index:0, name: "productPage", "parameters": {"entity.id": entityId.split("=")[1], "entity.name": entityName.split("=")[1], "entity.categoryId": entityCategoryId.split("=")[1], "entity.pageURL": entityPageURL.split("=")[1], "entity.manufacturer": entityManufacturer.split("=")[1], "entity.thumbnailURL": entityThumbnailURL.split("=")[1], "entity.message": entityMessage.split("=")[1]}}];
                    } else {
                        mymBoxes.push({index:mymBoxes.length, name: "productPage", "parameters": {"entity.id": entityId.split("=")[1], "entity.name": entityName.split("=")[1], "entity.categoryId": entityCategoryId.split("=")[1], "entity.pageURL": entityPageURL.split("=")[1], "entity.manufacturer": entityManufacturer.split("=")[1], "entity.thumbnailURL": entityThumbnailURL.split("=")[1], "entity.message": entityMessage.split("=")[1]}});
                    }                    
                }    
            }
            if ((s.events.indexOf("purchase")!=-1)&&((typeof(s.products)!=="undefined") && (s.products.length != 0))){
                var adf_sum = 0;
                if ((s.products)!=""){
                    var adf_prods = s.products.split(",");
                    var product_sales = 0;
                    var allProducts = [];
                    var allProductIDs = "";
                    for (var i in adf_prods) {
                        var e17s = adf_prods[i].match(/event1[6|7]=\d+/);
                        if (e17s==null) {product_sales=0;}
                        else {
                           var e16s = e17s[0].match(/\d+/g);
                           product_sales = e16s[1];
                        }     
                        adf_sum += Number(product_sales);
                        if (allProductIDs =="") {
                            allProductIDs = adf_prods[i].split(";")[1];
                        } else {
                            allProductIDs += ","+adf_prods[i].split(";")[1];
                        }               
                    }
                    s.sales_monthly_revenue = adf_sum;
                    var productPurchasedId = "productPurchasedId="+allProductIDs;
                    var orderId = "orderId="+s.purchaseID;
                    var orderTotal = "orderTotal="+adf_sum;
                    if (typeof adobe.target.getOffers != "function") {
                        mboxDefine("orderConfirmPage", "orderConfirmPage");
                        mboxUpdate("orderConfirmPage", productPurchasedId, orderId, orderTotal);
                    } else {
                        if (typeof mymBoxes == "undefined") {
                            var mymBoxes = [{index:0, name: "orderConfirmPage", parameters: {"order.purchasedProductIds":allProductIDs, "order.id": s.purchaseID, "order.total": adf_sum}}];
                        } else {
                            mymBoxes.push({index:mymBoxes.length, name: "orderConfirmPage", parameters: {"order.purchasedProductIds":allProductIDs, "order.id": s.purchaseID, "order.total": adf_sum}});
                        }                    
                    }    
                }
            }
        /*    if ((s.pageName =="Osobni")||(s.pageName =="Podnikatele")) {
                if (typeof jQuery !== "undefined") {
                    var element = $("#homepage [href*='hp:hero']");
                    //if (element.length == 0) {
                    //    var element = $("#homepage [href*='hp:hero:default']");
                    //}
                    if (element.length > 0) {
                        var new_ele = element.attr('href').split("?");
                        if (new_ele.length > 0) {
                            var new_param = new_ele[1].split("&");
                            if (new_param.length > 0) {
                                for (var i = 0; i<new_param.length; i++) {
                                    if (new_param[i].split("=")[0]=="promo") {
                                        var promo_code=new_param[i].split("=")[1]
                                    }
                                } 
                            } else {                            
                                var promo_code = new_ele[1].split("=")[1];
                            }    
                            if (promo_code.length>0){     
                                if ((typeof old_promo === "undefined") || (promo_code.indexOf(old_promo) == -1)) {
                                    clicks = 0;
                                }
                                clicks = Number(clicks) + Number(1);
                            if (typeof adobe.target.getOffers != "function") {
                                mboxDefine("mboxClickTrack", "mboxClickTrack");
                                mboxUpdate("mboxClickTrack","profile.count_view="+clicks,"profile.code="+promo_code);
                                } else {
                                    if (typeof mymBoxes == "undefined") {
                                        var mymBoxes = [{index:0, name: "mboxClickTrack", "profileParameters": {"count_view":clicks, "code": promo_code}}];
                                    } else {
                                        mymBoxes.push({index:mymBoxes.length, name: "mboxClickTrack", "profileParameters": {"count_view":clicks, "code": promo_code}});
                                    }                    
                                }
                            }
                        }                            
                    }
                }
            }*/
            if (typeof mymBoxes != "undefined") {
                adobe.target.getOffers({
                    request: {
                        execute: {
                          mboxes: mymBoxes     
                        }
                    }
                });
            }    
        } catch (err) {
            _errorSections.push('8:'+err.message);
        }

        if (_errorSections && _errorSections.length) {
            var _msg = "s_code:error plugin section" + _errorSections.join(':');
            s.prop16 = (typeof s.prop16 == "undefined") ? "" : s.prop16+":";
            s.prop16 += _msg;
        }


    }
    catch (err) {
      s.prop16 = (typeof s.prop16 == "undefined") ? "" : s.prop16+":";
      s.prop16 += "s_code:error Global plugin section";
    }

  // utility methods used in the context of s passed to doplugins
  function Remove_Event(event_name) {

      if (!Array.prototype.indexOf) {
          Array.prototype.indexOf = function(obj, start) {
              for (var i = (start || 0), j = this.length; i < j; i++) {
                  if (this[i] === obj) {
                      return i;
                  }
              }
              return -1;
          }
      }
      var jh_events = s.split(s.events, ',');
      var i = jh_events.indexOf(event_name);
      if (i != -1) {
          jh_events.splice(i, 1);
          s.events = s.join(jh_events, {delim: ','});
          return true;
      } 
      else
          return false;
  }
}

function isLocalStorageNameSupported() {
    var testKey = 'test';
    try {
        var storage = window.localStorage;
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

function isSessionStorageNameSupported() {
    var testKey = 'test';
    try {
        var storage = window.sessionStorage;
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

//Promo code view tracking
function PromoView(s_in) {
    try {
        var lowIE = (function () {

            var undef,
                v = 3,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');

            while (
                div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                    all[0]
                );

            return v > 4 ? v : undef;

        }());

        var DEBUG_ENABLED = window.location.search.indexOf("promoview_enable_debug") >= 0;

        var dbg = function (input) {
            if (!DEBUG_ENABLED) {
                return;
            }
            if ((typeof(console)!=="undefined") && (typeof(console.log)!=="undefined")){console.log(input);}
        };

        dbg("PromoView called");

        s_in = s_in || s;

        // jednou naplneny seznam -> konec
        if (!s_in) {
            dbg("PromoView: s not defined -> skipping");
            return;
        }
        if ((typeof(tealium_s)!=="undefined") && tealium_s["list1"] && tealium_s["list1"].length){
            dbg("PromoView: s.list1 not empty -> merging to global list");            
            if (typeof tealium_s.list1global === "undefined") {
                tealium_s.list1global = tealium_s.list1;
            } else {
                var list_split = tealium_s.list1.split(",");
                for (var i = 0; i < list_split.length; i++) {
                    if (tealium_s.list1global.indexOf(list_split[i])==-1) {
                        tealium_s.list1global += ","+list_split[i];
                    }
                }
            }
            // s_in.list1="";
        }
        // IE 7/8 bug fix
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (obj, start) {
                for (var i = (start || 0), j = this.length; i < j; i++) {
                    if (this[i] === obj) {
                        return i;
                    }
                }
                return -1;
            }
        }

        // z dojo
        if (lowIE < 9) {
            getComputedStyleIE = function (node) {
                // IE (as of 7) doesn't expose Element like sane browsers
                // currentStyle can be null on IE8!
                return node.nodeType == 1 /* ELEMENT_NODE*/ && node.currentStyle ? node.currentStyle : {};
            };
        } else {
            window.getComputedStyleIE = function (a, b) {
                return getComputedStyle(a, b);
            };
        }

        var promo_params = [];
        var _cleanupURI = function(uri) {
            return decodeURIComponent(uri);
        };

        var _searchObjectsForPromo = function(obj_list, obj_type) {
            var param = false;
            var split_char = "#";
            try {
                for (var i = 0; i < obj_list.length; i++) {

                    switch (obj_type) {
                        case 'img' : param = obj_list[i].src; split_char = "#"; break;
                        case 'link' : param = obj_list[i].href; split_char = "#"; break;
                        case 'cmt' : param = obj_list[i].getAttribute("data-cmt-action"); split_char = "#"; break;
                        case 'target' : param = obj_list[i].content; split_char = "\"";break;
                        default : param = false;
                    }

                    if (typeof param == "string") {
                        param = param.match(/promo=([^&]+)/);
                    }

                    if (!param || param[1] == undefined || typeof param[1] != "string") {
                        continue;
                    }

                    var param_clear = _cleanupURI(param[1].split(split_char)[0]);
                    if (promo_params.indexOf(param_clear) != -1) {
                        continue;
                    }
                    if (document.location.search.indexOf("promo="+param_clear) != -1) {
                        continue;
                    }
                    param_clear = param_clear.split("#")[0]; // remove anchor
                    var param_obj = obj_list[i],
                        is_hidden = false,
                        is_display = false;
                    if ((obj_type != "target")&&!((obj_type == "cmt")&&(/^\/muj/.test(document.location.path)))) {   // skip visibility check for target offer
                        
                        // fix pro Firefox, Operu a IE 9
                        if (param_obj == document) {
                            param_obj = document.body;
                        }

                        var obj_style = window.getComputedStyleIE(param_obj, null);

                        do {
                            is_display = obj_style.display == "none";
                            is_hidden = (obj_style.visibility == "hidden") || (/-\d\d\d\dpx/g.test(obj_style.top));
                            param_obj = param_obj.parentNode;
                            obj_style = window.getComputedStyleIE(param_obj, "");

                            if (param_obj.tagName == 'BODY') {
                                break;
                            }
                        } while (!is_display && !is_hidden);
                    }    
                    if (!is_display && !is_hidden) {
                        dbg("Promoview: href: " + param_clear);

                        var promo_param_URL = "";
                            promo_match = window.location.search.match(/promo=([\w:-]+)/);
                        if (promo_match) {
                            promo_param_URL = _cleanupURI(promo_match[1]);
                        }

                        dbg("Promoview: param_URL: " + promo_param_URL);

                        if (promo_param_URL != param_clear) {
                            promo_params.push(param_clear);
                        }
                    }

                }
            } catch (e) {
               if ((typeof(console)!=="undefined") && (typeof(console.log)!=="undefined")){console.log("PromoView(): ERROR["+obj_type+"]: %o", e);}
            }
        };


        var imgs = document.images;
        dbg("Promoview: images count: " + imgs.length);
        _searchObjectsForPromo(imgs, 'img');

        var hrefs = document.getElementsByTagName('a');
        dbg("Promoview: hrefs count: " + hrefs.length);
        _searchObjectsForPromo(hrefs, 'link');
        var cmtActions = document.getElementsByClassName("jsCmtOption button");
        dbg("Promoview: cmt banners count: " + cmtActions.length);
        _searchObjectsForPromo(cmtActions, 'cmt');
        if ((typeof _AT !== "undefined") &&(_AT.actions)){
            dbg("Promoview: Test and Target count: " + _AT.actions.length);
            _searchObjectsForPromo(_AT.actions, 'target');
        }
        dbg("Promoview: setting list -> " + promo_params.join(","));
        if ((typeof(tealium_s)!=="undefined") && (typeof tealium_s.list1global !== "undefined")) {
            for (var i = 0; i < promo_params.length; i++) {
                if (tealium_s.list1global.indexOf(promo_params[i])==-1){
                    if (typeof s_in.list1 === "undefined") {
                        s_in.list1=promo_params[i];
                    } else {
                        s_in.list1+=","+promo_params[i];
                    }
                } 
            }    
        } else {
            if (promo_params.length>0){
                s_in.list1 = promo_params.join(",");
            }    
        }   
        if ((typeof(tealium_s)!=="undefined") && (typeof s_in.list1 !== "undefined")) {
            if ((typeof s_in.linkTrackVars !== "undefined")&&(s_in.linkTrackVars != "None")) {
                if (s_in.linkTrackVars.indexOf("list1")==-1) {
                   s_in.linkTrackVars += ",list1"; //tealium_s.list1=s_in.list1;
                }
            } else {
               s_in.linkTrackVars = "list1"; 
            }        
        } else {
           if (typeof(tealium_s)!=="undefined") {
               delete tealium_s.list1; 
           }    
        }           
    }
    catch (err) {
        s_in.prop16 = (typeof s_in.prop16 == "undefined") ? "" : s_in.prop16+":";
        s_in.prop16  += "s_code:error Promo View section:"+err.message;    
    }
}
},
function(a,b){
/*
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * 4. PRE-PROCESSOR : sitecatalyst : THE translation layer
 *  
 * extension: 4.preprocessor-translationlayer
 * 
 * scope: all tags (important!)
 */
if (a !== "view") { return true; }

window.utag.extn = window.utag.extn || {};
window.utag.extn.translationlayer = window.utag.extn.translationlayer || {};

// vodafone cz has multiple sites. some are in compliance, some are not.
// aligned suites according to stan, is indicated in the report suite id
// containing the keyword "aligned"
//var aligned = /aligned/.test(b.sc_dynamicAccountList);

window.utag.extn.translationlayer.config = {
  "s_abort" : ["utag.extn.preprocessor.targetinstance.abort"],
  "page_type_404" : ["utag.extn.preprocessor.targetinstance.pageType"],
  "page_name" : ["utag.extn.preprocessor.targetinstance.pageName"],
  "page_channel" : ["utag.extn.preprocessor.targetinstance.channel"],
  "page_hierarchy" : ["utag.extn.preprocessor.targetinstance.hier1"],
  "search_terms" : ["utag.extn.preprocessor.targetinstance.prop1"],
  "search_results" : ["utag.extn.preprocessor.targetinstance.prop2"],
  "search_category" : ["utag.extn.preprocessor.targetinstance.prop3"],
  "search_type" : ["utag.extn.preprocessor.targetinstance.prop4"],
  "page_type" : ["utag.extn.preprocessor.targetinstance.prop5"],
  "page_market" : ["utag.extn.preprocessor.targetinstance.prop6"],
  "visitor_login_status" : ["utag.extn.preprocessor.targetinstance.prop7"],
  "visitor_type" : ["utag.extn.preprocessor.targetinstance.prop8"],
  "visitor_subscription_type" : ["utag.extn.preprocessor.targetinstance.prop9"],
  "visitor_business_type" : ["utag.extn.preprocessor.targetinstance.prop10"],
  "visitor_new_or_repeat" : ["utag.extn.preprocessor.targetinstance.prop11"],
  "page_time_code" : ["utag.extn.preprocessor.targetinstance.prop12"],
  "visitor_days_since_last_visit" : ["utag.extn.preprocessor.targetinstance.prop15"],
  "page_errors" : ["utag.extn.preprocessor.targetinstance.prop16"],
  "page_device_name" : ["utag.extn.preprocessor.targetinstance.prop19"],
  "page_master_tab" : ["utag.extn.preprocessor.targetinstance.prop20"],
  "page_site_section_lvl_2" : ["utag.extn.preprocessor.targetinstance.prop21"],
  "page_site_section_lvl_3" : ["utag.extn.preprocessor.targetinstance.prop22"],
  "page_site_section_lvl_4" : ["utag.extn.preprocessor.targetinstance.prop23"],
  "visitor_cookie_id" : ["utag.extn.preprocessor.targetinstance.prop24"],
  "tealium_utag_version" : ["utag.extn.preprocessor.targetinstance.prop25"],
  "channel_channel_path" : ["utag.extn.preprocessor.targetinstance.prop26"],
  "visitor_visit_number" : ["utag.extn.preprocessor.targetinstance.prop27"],
  "page_folds_seen_available" : ["utag.extn.preprocessor.targetinstance.prop28"],
  "page_url" : ["utag.extn.preprocessor.targetinstance.prop29"],
  "visitor_business_name" : ["utag.extn.preprocessor.targetinstance.prop30"],
  "page_language" : ["utag.extn.preprocessor.targetinstance.prop31"],
  "page_previous_name" : ["utag.extn.preprocessor.targetinstance.prop32"],
  "visitor_title_dob" : ["utag.extn.preprocessor.targetinstance.prop33"],
  "product_compared" : ["utag.extn.preprocessor.targetinstance.prop34"],
  "channel_channel" : ["utag.extn.preprocessor.targetinstance.prop35"],
  "search_terms_stacked" : ["utag.extn.preprocessor.targetinstance.prop36"],
  "page_cookies_size" : ["utag.extn.preprocessor.targetinstance.prop37"],
  "search_term_and_clickthrough_page" : ["utag.extn.preprocessor.targetinstance.prop38"],
  "consents_actual" : ["utag.extn.preprocessor.targetinstance.prop40"],
  "sales_shipping_payment" : ["utag.extn.preprocessor.targetinstance.prop41"],
  "page_scroll_percent" : ["utag.extn.preprocessor.targetinstance.prop42"],
  "sales_shop_product_filter" : ["utag.extn.preprocessor.targetinstance.prop43"],
  "visitor_id_adobe" : ["utag.extn.preprocessor.targetinstance.prop44"],
  "transaction_coupon_code" : ["utag.extn.preprocessor.targetinstance.prop45"],
  "visitor_id_asset_active" : ["utag.extn.preprocessor.targetinstance.prop46"],
  "channel_keyword_path" : ["utag.extn.preprocessor.targetinstance.prop47"],
  "page_virtual" : ["utag.extn.preprocessor.targetinstance.prop49"],
  "page_server" : ["utag.extn.preprocessor.targetinstance.prop50"],
  "page_platform" : ["utag.extn.preprocessor.targetinstance.prop51"],
  "service_worldmanuals_module" : ["utag.extn.preprocessor.targetinstance.prop52"],
  "support_cause_name" : ["utag.extn.preprocessor.targetinstance.prop54"],
  "support_topic_name" : ["utag.extn.preprocessor.targetinstance.prop60"],
  "service_self_service_action_type" : ["utag.extn.preprocessor.targetinstance.prop67"],
  "page_previous_scroll" : ["utag.extn.preprocessor.targetinstance.prop71"],
  "sales_products" : ["utag.extn.preprocessor.targetinstance.products"],
  "sales_products_universal" : ["utag.extn.preprocessor.targetinstance.products_universal"],
  "purchase_id" : ["utag.extn.preprocessor.targetinstance.purchaseID"],
  "visitor_state" : ["utag.extn.preprocessor.targetinstance.state"],
  "visitor_zip" : ["utag.extn.preprocessor.targetinstance.zip"],
  "campaign_id" : ["utag.extn.preprocessor.targetinstance.campaign"],
  "search_terms_evar" : ["utag.extn.preprocessor.targetinstance.eVar1"],
  "tool_name" : ["utag.extn.preprocessor.targetinstance.eVar12"],
  "page_tool_combination" : ["utag.extn.preprocessor.targetinstance.eVar13"],
  "visitor_id_account" : ["utag.extn.preprocessor.targetinstance.eVar16"],
  "campaign_id_history" : ["utag.extn.preprocessor.targetinstance.eVar17"],
  "journey_name" : ["utag.extn.preprocessor.targetinstance.eVar18"],
  "journey_type" : ["utag.extn.preprocessor.targetinstance.eVar19"],
  "form_name" : ["utag.extn.preprocessor.targetinstance.eVar20"],
  "sales_acquisition_or_retention" : ["utag.extn.preprocessor.targetinstance.eVar21"],
  "page_download_name" : ["utag.extn.preprocessor.targetinstance.eVar22"],
  "sales_product_stock_online" : ["utag.extn.preprocessor.targetinstance.eVar25"],
  "sales_product_stock_store" : ["utag.extn.preprocessor.targetinstance.eVar26"],
  "campaign_internal_id" : ["utag.extn.preprocessor.targetinstance.eVar27"],
  "transaction_store_id" : ["utag.extn.preprocessor.targetinstance.eVar28"],
  "sales_shop_product_filter_evar" : ["utag.extn.preprocessor.targetinstance.eVar30"],
  "sales_order_type" : ["utag.extn.preprocessor.targetinstance.eVar31"],
  "sales_topup_number" : ["utag.extn.preprocessor.targetinstance.eVar32"],
  "sales_product_combo" : ["utag.extn.preprocessor.targetinstance.eVar34"],
  "sales_ship_payment_method" : ["utag.extn.preprocessor.targetinstance.eVar35"],
  "campaign_keywords" : ["utag.extn.preprocessor.targetinstance.eVar38"],
  "visitor_registration_type" : ["utag.extn.preprocessor.targetinstance.eVar41"],
  "sales_distance_to_prefered_store" : ["utag.extn.preprocessor.targetinstance.eVar42"],
  "visitor_email_id" : ["utag.extn.preprocessor.targetinstance.eVar43"],
  "chat_agent_name" : ["utag.extn.preprocessor.targetinstance.eVar44"],
  "chat_id" : ["utag.extn.preprocessor.targetinstance.eVar45"],
  "visitor_intent" : ["utag.extn.preprocessor.targetinstance.eVar47"],
  "tool_type" : ["utag.extn.preprocessor.targetinstance.eVar50"],
  "sales_contract_duration" : ["utag.extn.preprocessor.targetinstance.eVar51"],
  "chat_closure_reason" : ["utag.extn.preprocessor.targetinstance.eVar54"],
  "sales_bundle_sku" : ["utag.extn.preprocessor.targetinstance.eVar55"],
  "event_category" : ["utag.extn.preprocessor.targetinstance.eVar56"],
  "campaign_channel_history" : ["utag.extn.preprocessor.targetinstance.eVar57"],
  "product_detail_action" : ["utag.extn.preprocessor.targetinstance.eVar58"],
  "campaign_internal_referrer" : ["utag.extn.preprocessor.targetinstance.eVar59"],
  "page_ab_testing_id" : ["utag.extn.preprocessor.targetinstance.eVar60"],
  "page_article_name" : ["utag.extn.preprocessor.targetinstance.eVar65"],
  //"service_cause_name_evar" : ["utag.extn.preprocessor.targetinstance.eVar66"],
  "video_name" : ["utag.extn.preprocessor.targetinstance.eVar70"],
  "sales_basket_action_detail" : ["utag.extn.preprocessor.targetinstance.eVar71"],
  "survey_rating_segment" : ["utag.extn.preprocessor.targetinstance.eVar74"],
  "survey_id" : ["utag.extn.preprocessor.targetinstance.eVar75"],
  "page_ipap_click" : ["utag.extn.preprocessor.targetinstance.eVar82"],
  "tool_input" : ["utag.extn.preprocessor.targetinstance.eVar90"],
  "campaign_google_paid_details" : ["utag.extn.preprocessor.targetinstance.eVar101"],
  "campaign_kenshoo_kpid" : ["utag.extn.preprocessor.targetinstance.eVar102"],
  "visitor_transaction_id" : ["utag.extn.preprocessor.targetinstance.eVar103"],
  "visitor_login_type" : ["utag.extn.preprocessor.targetinstance.eVar107"],
  "page_form_fields" : ["utag.extn.preprocessor.targetinstance.eVar120"],
  "campaign_cvm_id" : ["utag.extn.preprocessor.targetinstance.eVar127"],
  "tobi_session_id" : ["utag.extn.preprocessor.targetinstance.eVar145"],
  "chat_topic" : ["utag.extn.preprocessor.targetinstance.eVar146"],
  "visitor_id_intent" : ["utag.extn.preprocessor.targetinstance.eVar182"],
  "visitor_employee_id" : ["utag.extn.preprocessor.targetinstance.eVar190"],
  "consents_modified" : ["utag.extn.preprocessor.targetinstance.eVar240"],
  "page_events" : ["utag.extn.preprocessor.targetinstance.events"],
  "survey_trigger_point" : ["utag.extn.preprocessor.targetinstance.survey_trigger_point"],
  "sales_monthly_revenue" : ["utag.extn.preprocessor.targetinstance.sales_monthly_revenue"],
  "sales_currency" : ["utag.extn.preprocessor.targetinstance.currencyCode"],
  // list variables
  "page_banner_impression" : ["utag.extn.preprocessor.targetinstance.list1"],
  "form_error_fields" : ["utag.extn.preprocessor.targetinstance.list2"],
  "survey_responses" : ["utag.extn.preprocessor.targetinstance.list3"]
};

// Capture data layer 
(function(utag) {
  "use strict";

  // http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  /**
   * Turn a dotted JS object reference string into a value.
   * @param key the variable name, e.g. "s.pageName"
   * @return the value of the variable if it exists, or null otherwise
   */
  function scrape(key, base) {
    if (toType(key) !== "string" || key === "") {
      return null;
    }
    var part = "", parts = key.split("."),
      reference = base ? base : window;
    while (part = parts.shift()) {
      // for arrays, return an array of items, each of which is appropriate
      // child of the object in the array
      if (/\[\]$/.test(part) ) {
        part = part.replace(/\[\]$/, "");
        reference = reference[part];
        if (toType(reference) === "array") {
          var array = [];
          for (var j = 0; j < reference.length; j++) {
            if (parts.length > 0) {
              key = parts.join(".");
              array.push(scrape(key, reference[j]) || "");
            } else {
              array.push(reference[j]);
            }
          }
          // don't go any deeper
          return array;
        }
      } else if (reference[part]) {
        // anything that is not an array, just dig into object tree
        reference = reference[part];
      } else {
        return null;
      }
    }
    return reference;
  }
  
  /**
   * This is the main entry point. Call utag.extn.scrape_datalayer.run()
   * to capture the data from the page.
   * @param config the configuration object
   * @param data_object (optional) if you don't want to use utag_data 
   */
  utag.extn.translationlayer.init = function(config, data_object) {
    if (! data_object) {
          utag.data = utag.data || {};
          data_object = utag.data;
    }
    for (var data_layer_key in config) {
     /* // do not overwrite existing data layer values if they are already set
      if (data_object[data_layer_key]) {
        continue;
      } */
      var lookup_keys = config[data_layer_key];
      // if the lookup location is a single key, make it an array
      if (toType(lookup_keys) === "string") {
        lookup_keys = [lookup_keys];
      }
      // if it is not an array of strings, we can't process it
      // this will filter out default properties inherited from Object.prototype
      if (!config.hasOwnProperty(data_layer_key) || toType(lookup_keys) !== "array") {
        continue;
      }
      // loop through the list of keys
      for (var i = 0; i < lookup_keys.length; i++) {
        var lookup_key = lookup_keys[i];
        var lookup_value = scrape(lookup_key);
        if (lookup_value) {
          data_object[data_layer_key] = lookup_value;
        }
      }
    }
    return data_object;
  };
  
})(window.utag);
},
function(a,b){
/*
 * SITECATALYST PLUGINS AND MODULES
 * @author: kevin thomas faurholt - tealium, inc
 *
 * 5. PRE-PROCESSOR : sitecatalyst plugins and modules
 *
 * extension: 5.preprocessor-plugins
 * 
 * scope: all tags (important!)
 */

// Tealium integration start /////////////////////////////////////////
window.utag.extn = window.utag.extn || {};
window.utag.extn.preprocessor = window.utag.extn.preprocessor || {};

var s = window.utag.extn.preprocessor.instance = window.utag.extn.preprocessor.instance || {};

// internal instance properties/methods used by plugins start
s.wd = s.wd || window;

if (!s.wd.s_c_il) {
  s.wd.s_c_il = [];
  s.wd.s_c_in = 0;
}
s._il = s.wd.s_c_il;
s._in = s.wd.s_c_in;
s._il[s._in] = s;
s.wd.s_c_in++;

s.ssl = s.ssl || (s.wd.location.protocol.toLowerCase().indexOf('https') >= 0);
s.d = s.d || document;
s.b = s.b || s.d.body;
s.n = s.n || navigator;
s.u = s.u || navigator.userAgent;
s.u.indexOf = s.u.indexOf || function(what) { return navigator.userAgent.indexOf(what); };

var apn = s.n.appName, v = s.n.appVersion, ie = v.indexOf('MSIE '), o = s.u.indexOf('Opera ');
s.isie = s.isie || (apn == 'Microsoft Internet Explorer');
s.isns = s.isns || (apn == 'Netscape');
s.ns6 = s.ns6 || s.u.indexOf('Netscape6/');
s.isopera = s.isopera || (v.indexOf('Opera') >= 0 || o > 0);
s.ismac = s.ismac || (s.u.indexOf('Mac') >= 0);
s.apv = s.apv || (function() { if (o > 0) { return parseFloat(s.u.substring(o + 6)); } else if (ie > 0) { var i = v.substring(ie + 5), apv = parseInt(i); if (apv > 3) { return parseFloat(i); } return apv; } else if (s.ns6 > 0) { return parseFloat(s.u.substring(s.ns6 + 10)); } else { return parseFloat(v); } }());
s.em = s.em || (function() { var em = 0; if (em.toPrecision) { return 3; } else if (String.fromCharCode) { var i = escape(String.fromCharCode(256)).toUpperCase(); return (i == '%C4%80' ? 2 : (i == '%U0100' ? 1 : 0)); } return em; }());
window.s_jn = window.s_jn || function(a,d) { var x = '', i, j = a.length; if (a && j > 0) { x = a[0]; if (j > 1 ) { if (a.join) x = a.join(d); else for (i = 1; i < j; i ++) x += d + a[i] } } return x};
window.s_sp = window.s_sp || function(x,d) { var a = new Array, i = 0, j; if (x) { if (x.split) a = x.split(d); else if(!d) for (i = 0; i < x.length; i++) a[a.length] = x.substring(i, i+1); else while(i >= 0){ j = x.indexOf(d,i); a[a.length] = x.substring(i, j < 0 ? x.length : j); i = j; if (i >=0) i += d.length } } return a};
s.rep = s.rep || function (x, o, n) { return window.s_jn(window.s_sp(x,o),n); };
s.ape = s.ape || function (x){ var s=this,h='0123456789ABCDEF',f="+~!*()'",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,"%"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};
s.epa = s.epa || function (x){ var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y};
s.num = s.num || function (x){ x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};
s.c_gdf = s.c_gdf || function (t,a){var s=this;if(!s.num(t))return 1;return 0};
s.c_gd = s.c_gd || function (){ var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};
s.pt = s.pt || function (x,d,f,a){ var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};
s.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=c.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};
s.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?c.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};
s.Mb = function() {
    var c = document.location.hostname, b = s.fpCookieDomainPeriods, d;
    b || (b = s.cookieDomainPeriods);
    if (c && !s.Ja && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2,
    b = 2 < b ? b : 2,
    d = c.lastIndexOf("."),
    0 <= d)) {
        for (; 0 <= d && 1 < b; )
            d = c.lastIndexOf(".", d - 1),
            b--;
        s.Ja = 0 < d ? c.substring(d) : c
    }
    return s.Ja
}
;
s.c_r = s.c_r || function(k) {
                var s = this;
                k = s.ape(k);
                var c = ' ' + s.d.cookie
                  , i = c.indexOf(' ' + k + '=')
                  , e = i < 0 ? i : c.indexOf(';', i)
                  , v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, e < 0 ? c.length : e));
                return v != '[[B]]' ? v : ''
            }
            ;
s.c_w = s.c_w || function(c, b, d) {
        var f = s.Mb(), e = s.cookieLifetime, g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date,
        d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = new Date,
        g = d.getYear(),
        d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
        if("number"===typeof d){
            if (d === 0) {
                e = "SESSION";
            } else {
                var h=new Date;
                h.setTime(h.getTime()+24*60*60*1000*d);
                d = h; 
            }    
        }
        return c && "NONE" != e ? (s.d.cookie = s.escape(c) + "=" + s.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : "") + (s.writeSecureCookies ? " secure;samesite=none;" : ""),
        s.c_r(c) == b) : 0
    }; //App Measurement 2.20 cookies procedures
// internal instance properties/methods used by plugins end

// internal instance properties/methods used by stan in doplugins start
s.version = s.version || "H.26.2";

if (s.isns || s.isopera) {
  if (s.apv >= 4) {
    s.browserWidth = s.wd.innerWidth;
    s.browserHeight = s.wd.innerHeight;
  }
}
else if (s.isie) {
  if (s.apv >= 5) {
    s.browserWidth = s.d.documentElement.offsetWidth;
    s.browserHeight = s.d.documentElement.offsetHeight;
  }
}
// internal instance properties/methods used by stan in doplugins end

// Tealium integration end ///////////////////////////////////////////


/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
s.getSInstance = function () {
    if ("undefined" !== typeof window.s_c_il)
    for (var a = 0, b; a < window.s_c_il.length; a++) {
        if (b = window.s_c_il[a], b._c && "s_c" === b._c)
            return b;
    }
    return this;
}
/* Adobe Consulting Plugin: getTimeParting v6.2 */
s.getTimeParting=function(a){
    a=document.documentMode?void 0:a||"Etc/GMT";
    try {
        a=(new Date).toLocaleString("en-US",{timeZone:a, minute:"numeric",hour:"numeric",weekday:"long",day:"numeric",year:"numeric",month:"long"});
    }
    catch (e) { 
        return "caught:"+e+"timeZone:"+a;
    }
    a=/([a-zA-Z]+).*?([a-zA-Z]+).*?([0-9]+).*?([0-9]+)(.*?)([0-9])(.*)/.exec(a);
    if ((typeof a !== "undefined")&&(typeof a[7] !== "undefined")) {
        return"year="+a[4]+" | month="+a[2]+" | date="+a[3]+" | day="+a[1]+" | time="+(a[6]+a[7]);
    } else {
        return "a:"+a;
    }
} 

/* Adobe Consulting Plugin: getNewRepeat v3.0 (Requires AppMeasurement) */
  s.getNewRepeat = function(d) {
    var a = d;
    if ("-v" === a)
        return {
            plugin: "getNewRepeat",
            version: "3.0"
        };
    var d = s.getSInstance();
    "undefined" !== typeof d && (d.contextData.getNewRepeat = "3.0");
    a = a ? a : 30;
    d = "s_nr" + a;
    var k = new Date
      , m = s.c_r(d)
      , n = m.split("-")
      , l = k.getTime();
    k.setTime(l + 864E5 * a);
    if (/i/.test(vfconsents.get("funa"))) {
      if ("" === m || 18E5 > l - n[0] && "New" === n[1])
        return s.c_w(d, l + "-New", k),
	  "New";
      s.c_w(d, l + "-Repeat", k);
      return "Repeat"
    }
  }
;
/* Adobe Consulting Plugin: getValOnce v3.0 (Requires AppMeasurement) */
s.getValOnce = function(vtc, cn, et, ep) {
    var e = vtc
      , k = cn
      , l = et
      , m = ep;
    if (arguments && "-v" === arguments[0])
        return {
            plugin: "getValOnce",
            version: "3.0"
        };
    var c = s.getSInstance();
    "undefined" !== typeof c && (c.contextData.getValOnce = "3.0");
    return e && (k = k || "s_gvo",
    l = l || 0,
    m = "m" === m ? 6E4 : 864E5,
    e !== this.c_r(k)) ? (c = new Date,
    c.setTime(c.getTime() + l * m),
    s.c_w(k, e, 0 === l ? 0 : m),
    e) : ""
}
;

/* Adobe Consulting Plugin: getPreviousValue v3.0 */
s.getPreviousValue = function(v, c) {
    var k = v
      , d = c;
    if ("-v" === k)
        return {
            plugin: "getPreviousValue",
            version: "3.0"
        };
    var a = s.getSInstance();
    "undefined" !== typeof a && (a.contextData.getPreviousValue = "3.0");
    var l;
    d = d || "s_gpv";
    a = new Date;
    a.setTime(a.getTime() + 18E5);
    s.c_r(d) && (l = s.c_r(d));
    k ? s.c_w(d, k, a) : s.c_w(d, l, a);
    return l
}
;

/* Adobe Consulting Plugin: getVisitNum v4.2 */
 s.getVisitNum = function(rp, erp) {
    var a = rp
      , l = erp;
    function m(c) {
        return isNaN(c) ? !1 : (parseFloat(c) | 0) === parseFloat(c)
    }
    function n(c) {
        var b = new Date
          , e = isNaN(c) ? 0 : Math.floor(c);
        b.setHours(23);
        b.setMinutes(59);
        b.setSeconds(59);
        "w" === c && (e = 6 - b.getDay());
        if ("m" === c) {
            e = b.getMonth() + 1;
            var a = b.getFullYear();
            e = (new Date(a ? a : 1970,e ? e : 1,0)).getDate() - b.getDate()
        }
        b.setDate(b.getDate() + e);
        "y" === c && (b.setMonth(11),
        b.setDate(31));
        return b
    }
    if ("-v" === a)
        return {
            plugin: "getVisitNum",
            version: "4.2"
        };
    var f = s.getSInstance();
    "undefined" !== typeof f && (f.contextData.getVisitNum = "4.2");
    a = a ? a : 365;
    l = "undefined" !== typeof l ? !!l : m(a) ? !0 : !1;
    var p = (new Date).getTime();
    f = n(a);
    if (s.c_r("s_vnc" + a))
        var d = s.c_r("s_vnc" + a).split("&vn=")
          , k = d[1];
    if (s.c_r("s_ivc"))
        return k ? (s.c_w("s_ivc", !0, 30),
        k) : "unknown visit number";
    if ("undefined" !== typeof k)
        return k++,
        d = l && m(a) ? p + 864E5 * a : d[0],
        f.setTime(d),
        s.c_w("s_vnc" + a, d + "&vn=" + k, f),
        s.c_w("s_ivc", !0, 30),
        k;
    d = m(a) ? p + 864E5 * a : n(a).getTime();
    if (/i/.test(vfconsents.get("funa"))) {
        s.c_w("s_vnc" + a, d + "&vn=1", f);
        s.c_w("s_ivc", !0, 30);
    }
    return "1"
    }
    ;

/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: getPercentPageViewed v5.0.1 */
s.getPercentPageViewed = function(pid, ch) {
    var n = pid
      , r = ch;
    function p() {
        if (window.ppvID) {
            var a = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
              , b = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
              , d = (window.pageYOffset || window.document.documentElement.scrollTop || window.document.body.scrollTop) + b
              , f = Math.min(Math.round(d / a * 100), 100)
              , l = Math.floor(d / b);
            b = Math.floor(a / b);
            var c = "";
            if (/i/.test(vfconsents.get("funa"))) {
                if (!s.c_r("s_tp") || s.c_r("s_ppv").split(",")[0] !== window.ppvID || s.p_fo(window.ppvID) || 1 == window.ppvChange && s.c_r("s_tp") && a != s.c_r("s_tp")) {
                    (s.c_r("s_ppv").split(",")[0] !== window.ppvID || s.p_fo(window.ppvID + "1")) && s.c_w("s_ips", d);
                    if (s.c_r("s_tp") && s.c_r("s_ppv").split(",")[0] === window.ppvID) {
                        s.c_r("s_tp");
                        c = s.c_r("s_ppv");
                        var h = -1 < c.indexOf(",") ? c.split(",") : [];
                        c = h[0] ? h[0] : "";
                        h = h[3] ? h[3] : "";
                        var q = s.c_r("s_ips");
                        c = c + "," + Math.round(h / a * 100) + "," + Math.round(q / a * 100) + "," + h + "," + l;
                    }
                    s.c_w("s_tp", a);
                } else
                    c = s.c_r("s_ppv");
            }
            var k = c && -1 < c.indexOf(",") ? c.split(",", 6) : [];
            a = 0 < k.length ? k[0] : window.ppvID;
            h = 1 < k.length ? parseInt(k[1]) : f;
            q = 2 < k.length ? parseInt(k[2]) : f;
            var t = 3 < k.length ? parseInt(k[3]) : d
              , u = 4 < k.length ? parseInt(k[4]) : l;
            k = 5 < k.length ? parseInt(k[5]) : b;
            0 < f && (c = a + "," + (f > h ? f : h) + "," + q + "," + (d > t ? d : t) + "," + (l > u ? l : u) + "," + (b > k ? b : k));
            if (/i/.test(vfconsents.get("funa"))) {
                s.c_w("s_ppv", c);
            }
        }
    }
    if ("-v" === n)
        return {
            plugin: "getPercentPageViewed",
            version: "5.0.1"
        };
    var m = s.getSInstance();
    m.contextData.getPercentPageViewed = "5.0.1";
    window.pageName = "undefined" !== typeof m && m.pageName || "";
    var e = s.c_r("s_ppv");
    e = -1 < e.indexOf(",") ? e.split(",") : [];
    n = n ? n : window.pageName ? window.pageName : document.location.href;
    window.ppvChange = "undefined" === typeof r || 1 == r ? !0 : !1;
    if (/i/.test(vfconsents.get("funa"))) {
        "undefined" !== typeof m && m.linkType && "o" === m.linkType || (window.ppvID && window.ppvID === n || (window.ppvID = n,
        s.c_w("s_ppv", ""),
        p()),
        s.p_fo("s_gppvLoad") && window.addEventListener && (window.addEventListener("load", p, !1),
        window.addEventListener("click", p, !1),
        window.addEventListener("scroll", p, !1)),
        this._ppvPreviousPage = e[0] ? e[0] : "",
        this._ppvHighestPercentViewed = e[1] ? e[1] : "",
        this._ppvInitialPercentViewed = e[2] ? e[2] : "",
        this._ppvHighestPixelsSeen = e[3] ? e[3] : "",
        this._ppvFoldsSeen = e[4] ? e[4] : "",
        this._ppvFoldsAvailable = e[5] ? e[5] : "");
    }
}
;
/******************************************** END CODE TO DEPLOY ********************************************/

/* Adobe Consulting Plugin: p_fo (pageFirstOnly) v3.0 (Requires AppMeasurement) */
s.p_fo = function (c){
  if("-v"===c)
    return{plugin:"p_fo",version:"3.0"};
  var a = s.getSInstance();
  "undefined"!==typeof a&&(a.contextData.p_fo="3.0");window.__fo||(window.__fo={});
  if(window.__fo[c])return!1;
  window.__fo[c]={};return!0
};
/******************************************** END CODE TO DEPLOY ********************************************/

/* Adobe Consulting Plugin: getQueryParam v4.0.1  */
s.getQueryParam = function(a, d, f) {
    function n(g, c) {
        c = c.split("?").join("&");
        c = c.split("#").join("&");
        var e = c.indexOf("&");
        if (g && (-1 < e || c.indexOf("=") > e)) {
            e = c.substring(e + 1);
            e = e.split("&");
            for (var h = 0, p = e.length; h < p; h++) {
                var l = e[h].split("=")
                  , q = l[1];
                if (l[0].toLowerCase() === g.toLowerCase())
                    return decodeURIComponent(q || !0)
            }
        }
        return ""
    }
    if ("-v" === a)
        return {
            plugin: "getQueryParam",
            version: "4.0.1"
        };
    var b = s.getSInstance();
    "undefined" !== typeof b && (b.contextData.getQueryParam = "4.0");
    if (a) {
        d = d || "";
        f = (f || "undefined" !== typeof b && b.pageURL || location.href) + "";
        (4 < d.length || -1 < d.indexOf("=")) && f && 4 > f.length && (b = d,
        d = f,
        f = b);
        b = "";
        for (var m = a.split(","), r = m.length, k = 0; k < r; k++)
            a = n(m[k], f),
            "string" === typeof a ? (a = -1 < a.indexOf("#") ? a.substring(0, a.indexOf("#")) : a,
            b += b ? d + a : a) : b = "" === b ? a : b + (d + a);
        return b
    }
}
;

/* Adobe Consulting Plugin: getTimeSinceLastVisit v2.0 */
s.getTimeSinceLastVisit = function() {
    if (arguments && "-v" === arguments[0])
        return {
            plugin: "getTimeSinceLastVisit",
            version: "2.0"
        };
    var h = s.getSInstance();
    "undefined" !== typeof h && (h.contextData.getTimeSinceLastVisit = "2.0");
    window.formatTime = window.formatTime || function(c, b, d) {
        function f(b, d, c, e) {
            if ("string" !== typeof d)
                return !1;
            if ("string" === typeof b)
                b = b.split(c || ",");
            else if ("object" !== typeof b)
                return !1;
            c = 0;
            for (a = b.length; c < a; c++)
                if (1 == e && d === b[c] || d.toLowerCase() === b[c].toLowerCase())
                    return !0;
            return !1
        }
        if (!("undefined" === typeof c || isNaN(c) || 0 > Number(c))) {
            var e = "";
            "string" === typeof b && "d" === b || ("string" !== typeof b || !f("h,m,s", b)) && 86400 <= c ? (b = 86400,
            e = "days",
            d = isNaN(d) ? 1 : b / (d * b)) : "string" === typeof b && "h" === b || ("string" !== typeof b || !f("m,s", b)) && 3600 <= c ? (b = 3600,
            e = "hours",
            d = isNaN(d) ? 4 : b / (d * b)) : "string" === typeof b && "m" === b || ("string" !== typeof b || !f("s", b)) && 60 <= c ? (b = 60,
            e = "minutes",
            d = isNaN(d) ? 2 : b / (d * b)) : (b = 1,
            e = "seconds",
            d = isNaN(d) ? .2 : b / d);
            e = Math.round(c * d / b) / d + " " + e;
            0 === e.indexOf("1 ") && (e = e.substring(0, e.length - 1));
            return e
        }
    }
    ;
    h = new Date;
    var m = h.getTime()
      , n = s.c_r("s_tslv") || 0
      , l = Math.round((m - n) / 1E3);
    h.setTime(m + 63072E6);
    if (/i/.test(vfconsents.get("funa"))) {
        s.c_w("s_tslv", m, h);
    }
    if (/i/.test(vfconsents.get("funa"))) {
        return n ? 1800 < l || s.c_r("s_inv") ? (s.c_r("s_inv") && (l = s.c_r("s_inv")),
        s.c_w("s_inv", l, 1/24/2), // expiration changed to 30 minutes
        "0" !== l ? formatTime(l) : "New Visitor") : "" : (s.c_w("s_inv", "0", 1/24/2),  // expiration changed to 30 minutes
        "New Visitor")
    }
}
;

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/* Adobe Consulting Plugin: rfl (removeFromList) v2.1  */
s.rfl = function(lv, vr, d1, d2, df) {
    var b = lv
      , f = vr
      , e = d1
      , h = d2
      , g = df;
    if ("-v" === b)
        return {
            plugin: "rfl",
            version: "2.1"
        };
    var c = s.getSInstance();
    "undefined" !== typeof c && (c.contextData.rfl = "2.1");
    if (!b || !f)
        return "";
    c = [];
    a = "";
    e = e || ",";
    h = h || e;
    g = g || !1;
    b = b.split(e);
    e = b.length;
    for (var d = 0; d < e; d++)
        -1 < b[d].indexOf(":") && (a = b[d].split(":"),
        a[1] = a[0] + ":" + a[1],
        b[d] = a[0]),
        -1 < b[d].indexOf("=") && (a = b[d].split("="),
        a[1] = a[0] + "=" + a[1],
        b[d] = a[0]),
        b[d] !== f && a ? c.push(a[1]) : b[d] !== f ? c.push(b[d]) : b[d] === f && g && (a ? c.push(a[1]) : c.push(b[d]),
        g = !1),
        a = "";
    return c.join(h)
}
;
/*
 * Plugin Utility: apl v4.0
 */
s.apl = function(lv, va, d1, d2, cc) {
    var b = lv
      , d = va
      , e = d1
      , c = d2
      , g = cc;
    if ("-v" === b)
        return {
            plugin: "apl",
            version: "4.0"
        };
    var h = s.getSInstance();
    "undefined" !== typeof h && (h.contextData.apl = "4.0");
    window.inList = window.inList || function(b, d, c, e) {
        if ("string" !== typeof d)
            return !1;
        if ("string" === typeof b)
            b = b.split(c || ",");
        else if ("object" !== typeof b)
            return !1;
        c = 0;
        for (a = b.length; c < a; c++)
            if (1 == e && d === b[c] || d.toLowerCase() === b[c].toLowerCase())
                return !0;
        return !1
    }
    ;
    if (!b || "string" === typeof b) {
        if ("string" !== typeof d || "" === d)
            return b;
        e = e || ",";
        c = c || e;
        1 == c && (c = e,
        g || (g = 1));
        2 == c && 1 != g && (c = e);
        d = d.split(",");
        h = d.length;
        for (var f = 0; f < h; f++)
            window.inList(b, d[f], e, g) || (b = b ? b + c + d[f] : d[f])
    }
    return b
}
;

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: s.join v1.0 - Joins an array into a string
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");



////////////////////////////////////////////////////////////////////////////////

// MODULES MUST BE LOADED IN GLOBAL SCOPE

// AUDIENCE MANAGEMENT INTEGRATION /////////////////////////////////////////////
// added by corbin spicer - tealium, inc
// adobe aam v2.4.0
/*window['AppMeasurement_Module_AudienceManagement'] = window['AppMeasurement_Module_AudienceManagement'] || function () {
  
  function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
  a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
  "function"!==typeof window.DIL&&(window.DIL=function(e,f){var k=[],g,s;e!==Object(e)&&(e={});var t,m,F,O,A,y,K,G,P,Q,R,B,C,H,z;t=e.partner;m=e.containerNSID;F=!!e.disableDestinationPublishingIframe;O=e.iframeAkamaiHTTPS;A=e.mappings;y=e.uuidCookie;K=!0===e.enableErrorReporting;G=e.visitorService;P=e.declaredId;Q=!0===e.removeFinishedScriptsAndCallbacks;R=!0===e.delayAllUntilWindowLoad;B=!0===e.disableIDSyncs;C="undefined"===typeof e.secureDataCollection||!0===e.secureDataCollection;H=!0===e.useCORSOnly;
  z="boolean"===typeof e.isCoopSafe?e.isCoopSafe:null;var S,T,L,I,U,V,W,X;S=!0===e.disableScriptAttachment;T=!0===e.disableDefaultRequest;L=e.afterResultForDefaultRequest;I=e.dpIframeSrc;U=!0===e.testCORS;V=!0===e.useJSONPOnly;W=e.visitorConstructor;X=!0===e.disableCORS;K&&DIL.errorModule.activate();var $=!0===window._dil_unit_tests;(g=f)&&k.push(g+"");if(!t||"string"!==typeof t)return g="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:g,filename:"dil.js"}),
  Error(g);g="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(m||"number"===typeof m)m=parseInt(m,10),!isNaN(m)&&0<=m&&(g="");g&&(m=0,k.push(g),g="");s=DIL.getDil(t,m);if(s instanceof DIL&&s.api.getPartner()===t&&s.api.getContainerNSID()===m)return s;if(this instanceof DIL)DIL.registerDil(this,t,m);else return new DIL(e,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+t+" and containerNSID = "+m);var u={IS_HTTPS:C||
  "https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC",MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(t)+"_"+m,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP",HAS_JSON_STRINGIFY:window.JSON===Object(window.JSON)&&"function"===typeof window.JSON.stringify},M={stuffed:{}},p={},n={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,
  postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:m+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,
  calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(a){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var b=this,c,d,l,h;if("function"===typeof a&&"function"===typeof a.getInstance){if(G===Object(G)&&(c=G.namespace)&&"string"===typeof c)d=a.getInstance(c,{idSyncContainerID:m});else{this.releaseType="no namespace";this.releaseRequests();return}if(d===Object(d)&&
  d instanceof a&&"function"===typeof d.isAllowed&&"function"===typeof d.getMarketingCloudVisitorID&&"function"===typeof d.getCustomerIDs&&"function"===typeof d.isOptedOut){this.VisitorAPI=a;if(!d.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=d;l=function(a){"VisitorAPI"!==b.releaseType&&(b.mid=a,b.releaseType="VisitorAPI",b.releaseRequests())};h=d.getMarketingCloudVisitorID(l);if("string"===typeof h&&h.length){l(h);return}setTimeout(function(){"VisitorAPI"!==
  b.releaseType&&(b.releaseType="timeout",b.releaseRequests())},this.getLoadTimeout());return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;n.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var a=r.isPopulatedString,b=this.getMarketingCloudVisitorID();a(this.mid)&&this.mid===
  b||(this.mid=b);return a(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(a){if(a===Object(a)){var b="",c=[],d=[],l,h;for(l in a)a.hasOwnProperty(l)&&(d[0]=l,h=a[l],h===Object(h)&&(d[1]=h.id||"",d[2]=h.authState||0,c.push(d),d=[]));if(d=c.length)for(a=0;a<d;a++)b+="&d_cid_ic="+q.encodeAndBuildRequest(c[a],"%01");return b}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,
  this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(a){this.isOptedOut=a;this.isOptedOutCallbackCalled=!0;n.registerRequest()},getLoadTimeout:function(){var a=this.instance;if(a){if("function"===typeof a.getLoadTimeout)return a.getLoadTimeout();if("undefined"!==typeof a.loadTimeout)return a.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},
  setDeclaredId:function(a,b){var c=r.isPopulatedString,d=encodeURIComponent;if(a===Object(a)&&c(b)){var l=a.dpid,h=a.dpuuid,e=null;if(c(l)&&c(h)){e=d(l)+"$"+d(h);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+b+"'";this.declaredIdCombos[e]=!0;this.declaredId[b]={dpid:l,dpuuid:h};return"setDeclaredId: succeeded for type '"+b+"'"}}return"setDeclaredId: failed for type '"+b+"'"},getDeclaredIdQueryString:function(){var a=this.declaredId.request,b=this.declaredId.init,c=
  encodeURIComponent,d="";null!==a?d="&d_dpid="+c(a.dpid)+"&d_dpuuid="+c(a.dpuuid):null!==b&&(d="&d_dpid="+c(b.dpid)+"&d_dpuuid="+c(b.dpuuid));return d}},registerRequest:function(a){var b=this.firingQueue;a===Object(a)&&b.push(a);this.firing||!b.length||R&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,a=b.shift(),a.src=a.src.replace(/demdex.net\/event\?d_nsid=/,
  "demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),r.isPopulatedString(a.corsPostData)&&(a.corsPostData=a.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),D.fireRequest(a),this.firstRequestHasFired||"script"!==a.tag&&"cors"!==a.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(W||window.Visitor)},requestRemoval:function(a){if(!Q)return"removeFinishedScriptsAndCallbacks is not boolean true";var b=this.toRemove,c,d;a===Object(a)&&
  (c=a.script,d=a.callbackName,(c===Object(c)&&"SCRIPT"===c.nodeName||"no script created"===c)&&"string"===typeof d&&d.length&&b.push(a));if(this.readyToRemove&&b.length){d=b.shift();c=d.script;d=d.callbackName;"no script created"!==c?(a=c.src,c.parentNode.removeChild(c)):a=c;window[d]=null;try{delete window[d]}catch(l){}this.removed.push({scriptSrc:a,callbackName:d});DIL.variables.scriptsRemoved.push(a);DIL.variables.callbacksRemoved.push(d);return this.requestRemoval()}return"requestRemoval() processed"},
  getCoopQueryString:function(){var a="";!0===z?a="&d_coop_safe=1":!1===z&&(a="&d_coop_unsafe=1");return a}};s=function(){var a="http://fast.",b="?d_nsid="+m+"#"+encodeURIComponent(document.location.href);if("string"===typeof I&&I.length)return I+b;u.IS_HTTPS&&(a=!0===O?"https://fast.":"https://");return a+t+".demdex.net/dest5.html"+b};var w={THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+t+"_"+m,url:s(),onPagePixels:[],iframeHost:null,getIframeHost:function(a){if("string"===
  typeof a){var b=a.split("/");if(3<=b.length)return b[0]+"//"+b[2];k.push("getIframeHost: url is malformed: "+a);return a}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:u.POST_MESSAGE_ENABLED?null:100,ibsDeleted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,
  attachIframe:function(){function a(){d=document.createElement("iframe");d.sandbox="allow-scripts allow-same-origin";d.title="Adobe ID Syncing iFrame";d.id=c.id;d.style.cssText="display: none; width: 0; height: 0;";d.src=c.url;c.newIframeCreated=!0;b();document.body.appendChild(d)}function b(){q.addListener(d,"load",function(){d.className="aamIframeLoaded";c.iframeHasLoaded=!0;c.requestToProcess()})}var c=this,d=document.getElementById(this.id);d?"IFRAME"!==d.nodeName?(this.id+="_2",this.iframeIdChanged=
  !0,a()):(this.newIframeCreated=!1,"aamIframeLoaded"!==d.className?(this.originalIframeHasLoadedAlready=!1,b()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=d,this.requestToProcess())):a();this.iframe=d},requestToProcess:function(a,b){function c(){d.jsonForComparison.push(a);d.jsonWaiting.push([a,b])}var d=this,l,h;l=n.adms.instance;a===Object(a)&&l===Object(l)&&l.idSyncContainerID===m&&(w.ibsDeleted.push(a.ibs),delete a.ibs);if(a&&!r.isEmptyObject(a))if(u.HAS_JSON_STRINGIFY)if(l=
  JSON.stringify(a.ibs||[]),h=JSON.stringify(a.dests||[]),this.jsonForComparison.length){var e=!1,f,g,k;f=0;for(g=this.jsonForComparison.length;f<g;f++)if(k=this.jsonForComparison[f],l===JSON.stringify(k.ibs||[])&&h===JSON.stringify(k.dests||[])){e=!0;break}e?this.jsonDuplicates.push(a):c()}else c();else c();(this.receivedThirdPartyCookiesNotification||!u.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length&&(l=this.jsonWaiting.shift(),!1===this.newIframeCreated&&delete l[0].ibs,this.process(l[0],
  l[1]),this.requestToProcess());this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){d.messageSendingInterval=u.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},processSyncOnPage:function(a){var b,c,d;if((b=a.ibs)&&b instanceof Array&&(c=b.length))for(a=0;a<c;a++)d=b[a],d.syncOnPage&&this.checkFirstPartyCookie(d,"","syncOnPage")},process:function(a,b){var c=encodeURIComponent,
  d,l,h,e,f,g;b===Object(b)&&(g=q.encodeAndBuildRequest(["",b.dpid||"",b.dpuuid||""],","));if((d=a.dests)&&d instanceof Array&&(l=d.length))for(h=0;h<l;h++)e=d[h],f=[c("dests"),c(e.id||""),c(e.y||""),c(e.c||"")],this.addMessage(f.join("|"));if((d=a.ibs)&&d instanceof Array&&(l=d.length))for(h=0;h<l;h++)e=d[h],f=[c("ibs"),c(e.id||""),c(e.tag||""),q.encodeAndBuildRequest(e.url||[],","),c(e.ttl||""),"",g,e.fireURLSync?"true":"false"],e.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(f.join("|")):
  e.fireURLSync&&this.checkFirstPartyCookie(e,f.join("|")));this.jsonProcessed.push(a)},checkFirstPartyCookie:function(a,b,c){var d=(c="syncOnPage"===c?!0:!1)?u.FIRST_PARTY_SYNCS_ON_PAGE:u.FIRST_PARTY_SYNCS,l=this.getOnPageSyncData(d),h=!1,e=!1,f=Math.ceil((new Date).getTime()/u.MILLIS_PER_DAY);l?(l=l.split("*"),e=this.pruneSyncData(l,a.id,f),h=e.dataPresent,e=e.dataValid,h&&e||this.fireSync(c,a,b,l,d,f)):(l=[],this.fireSync(c,a,b,l,d,f))},getOnPageSyncData:function(a){var b=n.adms.instance;return b&&
  "function"===typeof b.idSyncGetOnPageSyncInfo?b.idSyncGetOnPageSyncInfo():q.getDilCookieField(a)},pruneSyncData:function(a,b,c){var d=!1,l=!1,e,f,g;if(a instanceof Array)for(f=0;f<a.length;f++)e=a[f],g=parseInt(e.split("-")[1],10),e.match("^"+b+"-")?(d=!0,c<g?l=!0:(a.splice(f,1),f--)):c>=g&&(a.splice(f,1),f--);return{dataPresent:d,dataValid:l}},manageSyncsSize:function(a){if(a.join("*").length>this.MAX_SYNCS_LENGTH)for(a.sort(function(a,c){return parseInt(a.split("-")[1],10)-parseInt(c.split("-")[1],
  10)});a.join("*").length>this.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(a,b,c,d,e,h){function f(a,b,d,c){return function(){g.onPagePixels[a]=null;var e=g.getOnPageSyncData(d),l=[];if(e){var e=e.split("*"),h,f,k;h=0;for(f=e.length;h<f;h++)k=e[h],k.match("^"+b.id+"-")||l.push(k)}g.setSyncTrackingData(l,b,d,c)}}var g=this;if(a){if("img"===b.tag){a=b.url;c=u.IS_HTTPS?"https:":"http:";var k,n,v;d=0;for(k=a.length;d<k;d++){n=a[d];v=/^\/\//.test(n);var x=new Image;q.addListener(x,"load",f(this.onPagePixels.length,
  b,e,h));x.src=(v?c:"")+n;this.onPagePixels.push(x)}}}else this.addMessage(c),this.setSyncTrackingData(d,b,e,h)},addMessage:function(a){var b=encodeURIComponent,b=K?b("---destpub-debug---"):b("---destpub---");this.messages.push((u.POST_MESSAGE_ENABLED?"":b)+a)},setSyncTrackingData:function(a,b,c,d){a.push(b.id+"-"+(d+Math.ceil(b.ttl/60/24)));this.manageSyncsSize(a);q.setDilCookieField(c,a.join("*"))},sendMessages:function(){var a=this,b;this.messages.length?u.POST_MESSAGE_ENABLED?(b=encodeURIComponent("---destpub-combined---")+
  this.messages.join("%01"),this.postMessage(b),this.messages=[],this.sendingMessages=!1):(b=this.messages.shift(),this.postMessage(b),setTimeout(function(){a.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(a){DIL.xd.postMessage(a,this.url,this.iframe.contentWindow);this.messagesPosted.push(a)},receiveMessage:function(a){var b=/^---destpub-to-parent---/;"string"===typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===b[0]&&(this.canSetThirdPartyCookies=
  "true"===b[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))}},N={traits:function(a){r.isValidPdata(a)&&(p.sids instanceof Array||(p.sids=[]),q.extendArray(p.sids,a));return this},pixels:function(a){r.isValidPdata(a)&&(p.pdata instanceof Array||(p.pdata=[]),q.extendArray(p.pdata,a));return this},logs:function(a){r.isValidLogdata(a)&&(p.logdata!==Object(p.logdata)&&(p.logdata={}),q.extendObject(p.logdata,a));return this},customQueryParams:function(a){r.isEmptyObject(a)||
  q.extendObject(p,a,n.reservedKeys);return this},signals:function(a,b){var c,d=a;if(!r.isEmptyObject(d)){if(b&&"string"===typeof b)for(c in d={},a)a.hasOwnProperty(c)&&(d[b+c]=a[c]);q.extendObject(p,d,n.reservedKeys)}return this},declaredId:function(a){n.declaredId.setDeclaredId(a,"request");return this},result:function(a){"function"===typeof a&&(p.callback=a);return this},afterResult:function(a){"function"===typeof a&&(p.postCallbackFn=a);return this},useImageRequest:function(){p.useImageRequest=
  !0;return this},clearData:function(){p={};return this},submit:function(){D.submitRequest(p);p={};return this},getPartner:function(){return t},getContainerNSID:function(){return m},getEventLog:function(){return k},getState:function(){var a={},b={};q.extendObject(a,n,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});q.extendObject(b,w,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:e,pendingRequest:p,otherRequestInfo:a,destinationPublishingInfo:b}},idSync:function(a){if(B)return"Error: id syncs have been disabled";
  if(a!==Object(a)||"string"!==typeof a.dpid||!a.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof a.url||!a.url.length)return"Error: config.url is empty";var b=a.url,c=a.minutesToLive,d=encodeURIComponent,e=w,h,b=b.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof c)c=20160;else if(c=parseInt(c,10),isNaN(c)||0>=c)return"Error: config.minutesToLive needs to be a positive number";h=q.encodeAndBuildRequest(["",a.dpid,a.dpuuid||""],",");a=["ibs",d(a.dpid),
  "img",d(b),c,"",h];e.addMessage(a.join("|"));n.firstRequestHasFired&&e.requestToProcess();return"Successfully queued"},aamIdSync:function(a){if(B)return"Error: id syncs have been disabled";if(a!==Object(a)||"string"!==typeof a.dpuuid||!a.dpuuid.length)return"Error: config or config.dpuuid is empty";a.url="//dpm.demdex.net/ibs:dpid="+a.dpid+"&dpuuid="+a.dpuuid;return this.idSync(a)},passData:function(a){if(r.isEmptyObject(a))return"Error: json is empty or not an object";w.ibsDeleted.push(a.ibs);delete a.ibs;
  D.defaultCallback(a);return a},getPlatformParams:function(){return n.platformParams},getEventCallConfigParams:function(){var a=n,b=a.modStatsParams,c=a.platformParams,d;if(!b){b={};for(d in c)c.hasOwnProperty(d)&&!a.nonModStatsParams[d]&&(b[d.replace(/^d_/,"")]=c[d]);!0===z?b.coop_safe=1:!1===z&&(b.coop_unsafe=1);a.modStatsParams=b}return b},setAsCoopSafe:function(){z=!0;return this},setAsCoopUnsafe:function(){z=!1;return this}},D={corsMetadata:function(){var a="none",b=!0;"undefined"!==typeof XMLHttpRequest&&
  XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @ */


/*"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(b=!1));return{corsType:a,corsCookiesEnabled:b}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},
  submitRequest:function(a){n.registerRequest(D.createQueuedRequest(a));return!0},createQueuedRequest:function(a){var b=n,c,d=a.callback,e="img",h;if(!r.isEmptyObject(A)){var f,g,k;for(f in A)A.hasOwnProperty(f)&&(g=A[f],null!=g&&""!==g&&f in a&&!(g in a||g in n.reservedKeys)&&(k=a[f],null!=k&&""!==k&&(a[g]=k)))}r.isValidPdata(a.sids)||(a.sids=[]);r.isValidPdata(a.pdata)||(a.pdata=[]);r.isValidLogdata(a.logdata)||(a.logdata={});a.logdataArray=q.convertObjectToKeyValuePairs(a.logdata,"=",!0);a.logdataArray.push("_ts="+
  (new Date).getTime());"function"!==typeof d&&(d=this.defaultCallback);b.useJSONP=!0!==a.useImageRequest;b.useJSONP&&(e="script",c=b.callbackPrefix+"_"+m+"_"+(new Date).getTime());b=this.makeRequestSrcData(a,c);V&&!H||!(h=this.getCORSInstance())||(e="cors");return{tag:e,src:b.src,corsSrc:b.corsSrc,internalCallbackName:c,callbackFn:d,postCallbackFn:a.postCallbackFn,useImageRequest:!!a.useImageRequest,requestData:a,corsInstance:h,corsPostData:b.corsPostData}},defaultCallback:function(a,b){w.processSyncOnPage(a);
  var c,d,e,h,f,g,k,m,v;if((c=a.stuff)&&c instanceof Array&&(d=c.length))for(e=0;e<d;e++)if((h=c[e])&&h===Object(h)){f=h.cn;g=h.cv;k=h.ttl;if("undefined"===typeof k||""===k)k=Math.floor(q.getMaxCookieExpiresInMinutes()/60/24);m=h.dmn||"."+document.domain.replace(/^www\./,"");v=h.type;f&&(g||"number"===typeof g)&&("var"!==v&&(k=parseInt(k,10))&&!isNaN(k)&&q.setCookie(f,g,1440*k,"/",m,!1),M.stuffed[f]=g)}c=a.uuid;r.isPopulatedString(c)&&!r.isEmptyObject(y)&&(d=y.path,"string"===typeof d&&d.length||(d=
  "/"),e=parseInt(y.days,10),isNaN(e)&&(e=100),q.setCookie(y.name||"aam_did",c,1440*e,d,y.domain||"."+document.domain.replace(/^www\./,""),!0===y.secure));F||n.abortRequests||w.requestToProcess(a,b)},makeRequestSrcData:function(a,b){a.sids=r.removeEmptyArrayValues(a.sids||[]);a.pdata=r.removeEmptyArrayValues(a.pdata||[]);var c=n,d=c.platformParams,e=q.encodeAndBuildRequest(a.sids,","),h=q.encodeAndBuildRequest(a.pdata,","),f=(a.logdataArray||[]).join("&");delete a.logdataArray;var g=u.IS_HTTPS?"https://":
  "http://",k=c.declaredId.getDeclaredIdQueryString(),p=c.adms.instance?c.adms.getCustomerIDsQueryString(c.adms.getCustomerIDs()):"",v;v=[];var x,E,s,Y;for(x in a)if(!(x in c.reservedKeys)&&a.hasOwnProperty(x))if(E=a[x],x=encodeURIComponent(x),E instanceof Array)for(s=0,Y=E.length;s<Y;s++)v.push(x+"="+encodeURIComponent(E[s]));else v.push(x+"="+encodeURIComponent(E));v=v.length?"&"+v.join("&"):"";e="d_nsid="+d.d_nsid+c.getCoopQueryString()+k+p+(e.length?"&d_sid="+e:"")+(h.length?"&d_px="+h:"")+(f.length?
  "&d_ld="+encodeURIComponent(f):"");d="&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst;g=g+t+".demdex.net/event";h=c=g+"?"+e+(c.useJSONP?d+"&d_cb="+(b||""):"")+v;2048<c.length&&(c=c.substring(0,2048).substring(0,c.lastIndexOf("&")));return{corsSrc:g+"?"+(U?"testcors=1&d_nsid="+m+"&":"")+"_ts="+(new Date).getTime(),src:c,originalSrc:h,corsPostData:e+d+v,isDeclaredIdCall:""!==k}},fireRequest:function(a){if("img"===a.tag)this.fireImage(a);else{var b=n.declaredId,b=b.declaredId.request||b.declaredId.init||
  {},b={dpid:b.dpid||"",dpuuid:b.dpuuid||""};"script"===a.tag?this.fireScript(a,b):"cors"===a.tag&&this.fireCORS(a,b)}},fireImage:function(a){var b=n,c,d;b.abortRequests||(b.firing=!0,c=new Image(0,0),b.sent.push(a),c.onload=function(){b.firing=!1;b.fired.push(a);b.num_of_img_responses++;b.registerRequest()},d=function(d){g="imgAbortOrErrorHandler received the event of type "+d.type;k.push(g);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.num_of_img_errors++;b.registerRequest()},c.addEventListener?
  (c.addEventListener("error",d,!1),c.addEventListener("abort",d,!1)):c.attachEvent&&(c.attachEvent("onerror",d),c.attachEvent("onabort",d)),c.src=a.src)},fireScript:function(a,b){var c=this,d=n,e,h,f=a.src,m=a.postCallbackFn,q="function"===typeof m,p=a.internalCallbackName;d.abortRequests||(d.firing=!0,window[p]=function(c){try{c!==Object(c)&&(c={});B&&(w.ibsDeleted.push(c.ibs),delete c.ibs);var e=a.callbackFn;d.firing=!1;d.fired.push(a);d.num_of_jsonp_responses++;e(c,b);q&&m(c,b)}catch(f){f.message=
  "DIL jsonp callback caught error with message "+f.message;g=f.message;k.push(g);f.filename=f.filename||"dil.js";f.partner=t;DIL.errorModule.handleError(f);try{e({error:f.name+"|"+f.message},b),q&&m({error:f.name+"|"+f.message},b)}catch(l){}}finally{d.requestRemoval({script:h,callbackName:p}),d.registerRequest()}},S||H?(d.firing=!1,d.requestRemoval({script:"no script created",callbackName:p})):(h=document.createElement("script"),h.addEventListener&&h.addEventListener("error",function(b){d.requestRemoval({script:h,
  callbackName:p});g="jsonp script tag error listener received the event of type "+b.type+" with src "+f;c.handleScriptError(g,a)},!1),h.type="text/javascript",h.src=f,e=DIL.variables.scriptNodeList[0],e.parentNode.insertBefore(h,e)),d.sent.push(a),d.declaredId.declaredId.request=null)},fireCORS:function(a,b){var c=this,d=n,e=this.corsMetadata.corsType,f=a.corsSrc,m=a.corsInstance,q=a.corsPostData,p=a.postCallbackFn,s="function"===typeof p;if(!d.abortRequests&&!X){d.firing=!0;try{m.open("post",f,!0),
  "XMLHttpRequest"===e&&(m.withCredentials=!0,m.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),m.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var e;try{if(e=JSON.parse(this.responseText),e!==Object(e)){c.handleCORSError(a,b,"Response is not JSON");break a}}catch(f){c.handleCORSError(a,b,"Error parsing response as JSON");break a}B&&(w.ibsDeleted.push(e.ibs),delete e.ibs);try{var h=a.callbackFn;d.firing=!1;d.fired.push(a);d.num_of_cors_responses++;h(e,
  b);s&&p(e,b)}catch(l){l.message="DIL handleCORSResponse caught error with message "+l.message;g=l.message;k.push(g);l.filename=l.filename||"dil.js";l.partner=t;DIL.errorModule.handleError(l);try{h({error:l.name+"|"+l.message},b),s&&p({error:l.name+"|"+l.message},b)}catch(m){}}finally{d.registerRequest()}}}),m.onerror=function(){c.handleCORSError(a,b,"onerror")},m.ontimeout=function(){c.handleCORSError(a,b,"ontimeout")},m.send(q)}catch(r){this.handleCORSError(a,b,"try-catch")}d.sent.push(a);d.declaredId.declaredId.request=
  null}},handleCORSError:function(a,b,c){n.num_of_cors_errors++;n.corsErrorSources.push(c);"ontimeout"===c||H||(a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){n.num_of_jsonp_errors++;this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=n;k.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},r={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},
  isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,e=[],b=0;b<c;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&e.push(d);return e},isPopulatedString:function(a){return"string"===typeof a&&a.length}},q={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,
  b,c){a.attachEvent("on"+b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[],e,f;b||(b="=");for(e in a)a.hasOwnProperty(e)&&(f=a[e],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(e+b+(c?encodeURIComponent(f):f)));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>
  0;if("function"!==typeof b)throw new TypeError;for(var e=Array(d),f=0;f<d;f++)f in c&&(e[f]=b.call(b,c[f],f,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=[],f=0;f<d;f++)if(f in c){var g=c[f];b.call(b,g,f,c)&&e.push(g)}return e}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,e;c=0;for(d=b.length;c<d;c++){for(e=b[c];" "===
  e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,d,e,f){var g=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(g.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===
  Object(a)&&b===Object(b)){for(d in b)!b.hasOwnProperty(d)||!r.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(u.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60},getCookieField:function(a,b){var c=this.getCookie(a),d=decodeURIComponent;if("string"===typeof c){var c=c.split("|"),e,f;e=0;for(f=c.length-1;e<f;e++)if(d(c[e])===b)return d(c[e+1])}return null},getDilCookieField:function(a){return this.getCookieField(u.DIL_COOKIE_NAME,
  a)},setCookieField:function(a,b,c){var d=this.getCookie(a),e=!1,f=encodeURIComponent;b=f(b);c=f(c);if("string"===typeof d){var d=d.split("|"),g,f=0;for(g=d.length-1;f<g;f++)if(d[f]===b){d[f+1]=c;e=!0;break}e||(f=d.length,d[f]=b,d[f+1]=c)}else d=[b,c];this.setCookie(a,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(a,b){return this.setCookieField(u.DIL_COOKIE_NAME,a,b)},getDomain:function(a){!a&&window.location&&(a=window.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a=
  "";else{var b=a.split("."),c=b.length-1,d=c-1;1<c&&2>=b[c].length&&(2===b[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+b[c]+","))&&d--;if(0<d)for(a="";c>=d;)a=b[c]+(a?".":"")+a,c--}return a}};"error"===t&&0===m&&q.addListener(window,"load",function(){DIL.windowLoaded=!0});var Z=!1,J=function(){Z||(Z=!0,n.registerRequest(),aa(),F||n.abortRequests||w.attachIframe(),n.readyToRemove=!0,n.requestRemoval())},aa=function(){F||setTimeout(function(){T||n.firstRequestHasFired||("function"===typeof L?
  N.afterResult(L).submit():N.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};C=document;"error"!==t&&(DIL.windowLoaded?J():"complete"!==C.readyState&&"loaded"!==C.readyState?q.addListener(window,"load",function(){DIL.windowLoaded=!0;J()}):(DIL.windowLoaded=!0,J()));if("error"!==t)try{DIL.xd.receiveMessage(function(a){w.receiveMessage(a.data)},w.getIframeHost(w.url))}catch(ba){}n.declaredId.setDeclaredId(P,"init");n.processVisitorAPI();this.api=N;this.getStuffedVariable=function(a){var b=M.stuffed[a];
  b||"number"===typeof b||(b=q.getCookie(a))||"number"===typeof b||(b="");return b};this.validators=r;this.helpers=q;this.constants=u;this.log=k;$&&(this.pendingRequest=p,this.requestController=n,this.setDestinationPublishingUrl=s,this.destinationPublishing=w,this.requestProcs=D,this.variables=M,this.callWindowLoadFunctions=J)},function(){var e=document,f;null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",
  f,!1);e.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(e){var f;if(e===Object(e))for(f in e)e.hasOwnProperty(f)&&(this[f]=e[f])},DIL.extendStaticPropertiesAndMethods({version:"6.11",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(e){this.windowLoaded="function"===typeof e?!!e():"boolean"===typeof e?e:!0},
  create:function(e){try{return new DIL(e)}catch(f){throw Error("Error in attempt to create DIL instance with DIL.create(): "+f.message);}},registerDil:function(e,f,k){f=f+"$"+k;f in this.dils||(this.dils[f]=e)},getDil:function(e,f){var k;"string"!==typeof e&&(e="");f||(f=0);k=e+"$"+f;return k in this.dils?this.dils[k]:Error("The DIL instance with partner = "+e+" and containerNSID = "+f+" was not found")},dexGetQSVars:function(e,f,k){f=this.getDil(f,k);return f instanceof this?f.getStuffedVariable(e):
  ""},xd:{postMessage:function(e,f,k){var g=1;f&&(window.postMessage?k.postMessage(e,f.replace(/([^:]+:\/\/[^\/]+).*/

/*,"$1")):f&&(k.location=f.replace(/#.*$/,"")+"#"+ +new Date+g++ +"&"+e))},receiveMessage:function(e,f){var k;try{if(window.postMessage)if(e&&(k=function(g){if("string"===typeof f&&g.origin!==f||"[object Function]"===Object.prototype.toString.call(f)&&!1===f(g.origin))return!1;e(g)}),window.addEventListener)window[e?"addEventListener":"removeEventListener"]("message",k,!1);else window[e?
  "attachEvent":"detachEvent"]("onmessage",k)}catch(g){}}}}),DIL.errorModule=function(){var e=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),f={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},k=!1;return{activate:function(){k=!0},handleError:function(g){if(!k)return"DIL error module has not been activated";g!==Object(g)&&
  (g={});var s=g.name?(g.name+"").toLowerCase():"",t=[];g={name:s,filename:g.filename?g.filename+"":"",partner:g.partner?g.partner+"":"no_partner",site:g.site?g.site+"":document.location.href,message:g.message?g.message+"":""};t.push(s in f?f[s]:f.noerrortypedefined);e.api.pixels(t).logs(g).useImageRequest().submit();return"DIL error report sent"},pixelMap:f}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(e,f,k){var g="";f=f||"Error caught in DIL module/submodule: ";e===Object(e)?
  g=f+(e.message||"err has no message"):(g=f+"err is not a valid object",e={});e.message=g;k instanceof DIL&&(e.partner=k.api.getPartner());DIL.errorModule.handleError(e);return this.errorMessage=g}}});  
  
 var module = new AppMeasurement_Module_AudienceManagement (arguments);
  
  module.tealium_version = '2.4.0';
  
  return module;
};

/* Load AudienceManagement Module */
//s.loadModule ('AudienceManagement');

// AUDIENCE MANAGEMENT INTEGRATION /////////////////////////////////////////////
},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'oskarmobil.cz/pece':'native'},{'vodafone.cz/pece/manualy':'translated'},{'vodafone.cz/pece/formular-reklamace/':'translated'},{'vodafone.cz/pece/formular-social/':'translated'},{'vodafone.cz/pece/en/form-social/':'translated'},{'vodafone.cz/pece/formular-kontakt/':'translated'},{'vodafone.cz/pece':'native'},{'vodafone.cz/internet/dostupnost/':'native'},{'pre.vodafone.cz/eshop/kosik':'native'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['site_udl']=c[e][f];m=true};};if(m)break};if(!m)b['site_udl']='translated';   }},
function(a,b){ try{ if(b['meta.noview'].toString().indexOf('true')>-1){b['site_udl']='native'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){try{b['isInIframe']=(window.self !== window.top)?"true":"false"}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){try{b['survey_token']=Math.random().toString();}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[72]=='undefined'){utag.runonce.ext[72]=1;if(1){
if(b['dom.pathname'].toString().toLowerCase().indexOf('/muj/obnova/'.toLowerCase())>-1){
    document.cookie="tobi_password_recovery="+b['tealium_timestamp_epoch']+";path=/;domain="+utag.cfg.domain+";expires="+(function(){var d=new Date();d.setTime(d.getTime()+(24* 36e5)); return d.toGMTString();})()+""+";secure;samesite=none";
    b['cp.tobi_password_recovery']=b['tealium_timestamp_epoch'];
}
// Funkce pro získání hodnoty query parametru
function getSurveyQueryParam(param) {
    if (typeof window.location === 'undefined' || typeof window.location.search !== 'string') return null;
    var surveyParams = new URLSearchParams(window.location.search);
    return surveyParams.get(param);
}
// 1. Pokud URL obsahuje app_version s hodnotou obsahující "mva" a souhlas je funa:i → nastavit app_version do survey_channel
var surveyAppVersion = getSurveyQueryParam('app_version');
if (surveyAppVersion && surveyAppVersion.indexOf('mva') !== -1 && /funa:i/.test(b['cp.vfconsents'])) {
    document.cookie = "survey_channel=" + surveyAppVersion + ";path=/;domain=" + utag.cfg.domain + ";expires=;secure;samesite=none";
    b['cp.survey_channel'] = surveyAppVersion;
    console.log('b.cp.survey_channel nastaveno na ' + surveyAppVersion + ' (app_version obsahuje mva a souhlas je funa:i)');
}
if((/hide_hf=1/.test(document.location.href))&&/funa:i/.test(b['cp.vfconsents'])){
    document.cookie="survey_channel="+'App'+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
    b['cp.survey_channel']='App';
}
if((/hide_hf=0/.test(document.location.href))&&/funa:i/.test(b['cp.vfconsents'])){
    document.cookie="survey_channel="+'Web'+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
    b['cp.survey_channel']='Web';
}
if((typeof b['cp.survey_channel']=='undefined')&&/funa:i/.test(b['cp.vfconsents'])){
    document.cookie="survey_channel="+'Web'+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
    b['cp.survey_channel']='Web';
}
if(/m_debug=1/.test(document.location.href)){
    document.cookie="survey_medallia_debug="+'1'+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
    b['cp.survey_medallia_debug']='1';
}
if(/m_debug=0/.test(document.location.href)){
    document.cookie="survey_medallia_debug="+'0'+";path=/;domain="+utag.cfg.domain+";expires="+";secure;samesite=none";
    b['cp.survey_medallia_debug']='0';
}
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[107]=='undefined'){utag.runonce.ext[107]=1;if((typeof b['cp.tobi_password_recovery']!='undefined'&&b['cp.s_sv_p7'].toString().indexOf('out')>-1)){
if (typeof utag.data['cp.SUBMITTED_DATE'] !== "undefined") {
    var time_since_last_submission = (Date.now()-utag.data['cp.SUBMITTED_DATE']);
} else {
    var time_since_last_submission = 31*60*60*1000;
}
if (time_since_last_submission/1000/60/60>30) {
    if (typeof utag.data['cp.DECLINED_DATE'] !== "undefined") {
        var time_since_last_declining = (Date.now()-utag.data['cp.DECLINED_DATE']);
    } else {
        var time_since_last_declining = 31*60*60*1000;
    }
    if (time_since_last_declining/1000/60/60>30) {
        var time_since_recovery_attempt = (Date.now()-utag.data['cp.tobi_password_recovery']*1000);
        if (time_since_recovery_attempt/1000/60/60>1) {
            utag.data['tobi_password_recovery_unsuccessful'] = b['tobi_password_recovery_unsuccessful'] = "true";
        }    
    }    
}
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[85]=='undefined'){utag.runonce.ext[85]=1;if(b['dom.url']=='https://www.vodafone.cz/'||b['js_page.vfconsents.isFirstPageOfVisit']=='true'){
window._3rd_party_test_step1_loaded = function(){
   var cookieCheck2 = document.createElement('script');
   cookieCheck2.src='https://www.oskarta.cz/cookies-check/step2.js.php';
   document.head.appendChild(cookieCheck2);
};
window._3rd_party_test_step2_loaded = function(cookieSuccess){
   window.thirdPartCookiesSupport = cookieSuccess;
};
var cookieCheck1 = document.createElement('script');
cookieCheck1.src='https://www.oskarta.cz/cookies-check/step1.js.php';
document.head.appendChild(cookieCheck1);
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
let adf_products = utag.data.adf_products = window.adf_products || window.s.products || utag.data.sales_products || b.sales_products;
if ((typeof adf_products !== "undefined")&&(adf_products != "")){
    b.survey_products = adf_products; 
    b.product_name=[];
    b.product_group=[];
    b.product_count=[];
    b.product_revenue=[];
    b.product_price_recurrence_amount=[];
    b.product_price_recurrence_number=[];
    var transaction_total = new Number(0);
    var product_monthly_revenue = new Number(0);
    var split_prods = adf_products.split(",");
    for (var i in split_prods) {
        var split_single_prod = split_prods[i].split(";");
        if (typeof split_single_prod[0] !== "undefined") {
            b.product_group.push(split_single_prod[0]);
        } else {
            b.product_group.push("");
        }  
        if (typeof split_single_prod[1] !== "undefined") {
            b.product_name.push(split_single_prod[1]);
        } else {
            b.product_name.push("");
        }
        if (!!split_single_prod[2]) {
            b.product_count.push(split_single_prod[2]);
        } else {
            b.product_count.push("1");
        }
        if (typeof split_single_prod[3] !== "undefined") {
            b.product_revenue.push(split_single_prod[3]);
            transaction_total += Number(split_single_prod[3]);
        } else {
            b.product_revenue.push(0)
        }
        if ((typeof split_single_prod[4] !== "undefined")&&(split_single_prod[4].indexOf("event") != -1)) {
            var split_events = split_single_prod[4].split("|");
            for (var j in split_events) {
                if (split_events[j].match("event1(6|7).*")) {
                    var split_individual_event = split_events[j].split("=");
                    b.product_price_recurrence_amount.push(split_individual_event[1]);
                    product_monthly_revenue += Number(split_individual_event[1]);
                }
            }
        }
        if ((typeof split_individual_event === "undefined" ) || (split_individual_event === "")) {
            b.product_price_recurrence_amount.push(0); 
        } else {
            split_individual_event = "";
        }   
        if (typeof split_single_prod[5] !== "undefined") {
	  b.product_price_recurrence_number.push(split_single_prod[5].split("=")[1]);
        } else {
            b.product_price_recurrence_number.push("");
        }
    }
    if (transaction_total>0) {
      b.page_events = (typeof b.page_events !== "undefined" ? b.page_events+"," : "") +"event41="+transaction_total.toString();
      b.transaction_total = transaction_total.toString();
    }
    if (product_monthly_revenue>0) {
      b.product_monthly_revenue = product_monthly_revenue.toString();
    }  
} else {
    if ((!(/purchase/.test(b.page_events)))&&(typeof b.purchase_id === "undefined")) {
        if(b.product_name.indexOf("solus-deposit") === -1){   
        if (typeof b.product_price_recurrence_amount !== "undefined") {
            delete b.product_price_recurrence_amount;
        }
        if (typeof b.product_revenue !== "undefined") {
            delete b.product_revenue;
        }
    }}
    var transaction_total = new Number(0);
    if ((typeof b.product_name !== "undefined" )&&(typeof b.sales_products === "undefined")) {
        var products_split = [];
        var products_split_universal = [];
        for (var i = 0; i < b.product_name.length; i++) {
            var single_product = b.product_group[i] + ";";
            if (b.product_name[i] == "") {
                break;
            } else {
                single_product += b.product_name[i];
            }
            if ((typeof b.product_count !== "undefined")&&(typeof b.product_count[i] !== "undefined")) {
                single_product += ";1";
            } else {
                single_product += ";" + b.product_count[i];
            }
            if ((typeof b.product_revenue !== "undefined")&&(typeof b.product_revenue[i] !== "undefined")) {
                transaction_total += Number(b.product_revenue[i]);
                single_product += ";" + b.product_revenue[i];
            } else {
                single_product += ";";
            }
            var single_product_universal = single_product;
            if ((typeof b.product_price_recurrence_amount !== "undefined")&&(/\d/.test(b.product_price_recurrence_amount[i]))) {
                single_product_universal = single_product + ";event108=" + b.product_price_recurrence_amount[i];
                single_product += ";event16=" + b.product_price_recurrence_amount[i];
                if (!/event16($|,)/.test(b.page_events)) {
                    b.page_events = ((typeof b.page_events !== "undefined") ? b.page_events+"," : "") + "event16";
                }
                if ((typeof b.product_price_recurrence_number !== "undefined")&&(/\d/.test(b.product_price_recurrence_number[i]))) {
                    single_product_universal = single_product_universal + ";event215=" + b.product_price_recurrence_amount[i] * b.product_price_recurrence_number[i];
                    single_product += "|event51=" + b.product_price_recurrence_amount[i] * b.product_price_recurrence_number[i];
                    if (!/event51($|,)/.test(b.page_events)) {
                        b.page_events = ((typeof b.page_events !== "undefined") ? b.page_events+"," : "") + "event51";
                    }    
                }                
            }
            if ((typeof b.product_price_recurrence_number !== "undefined")&&(/\d/.test(b.product_price_recurrence_number[i]))) {
                single_product_universal +=  + "|event109=" + b.product_price_recurrence_number[i];
                single_product += ";eVar51=" + b.product_price_recurrence_number[i];
            }
            products_split.push(single_product);
            products_split_universal.push(single_product_universal);
        }
        if (products_split.length > 0) {
            b.survey_products = b.survey_products = adf_products = b.sales_products = products_split.join(",");
            b.sales_products_universal = products_split_universal.join(",");
        }
        if (transaction_total>0) {
            b.page_events = (typeof b.page_events !== "undefined" ? b.page_events+"," : "") +"event41="+transaction_total.toString();
            b.transaction_total = transaction_total.toString();
        }
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){
adf_products = utag.data.adf_products = window.adf_products || window.s.products || utag.data.sales_products;
if ((typeof adf_products !== "undefined")&&(adf_products != "")){
var transaction_value_for_conversion_tags = 0;
var single_products_arr = adf_products.split(",");

for (let product of single_products_arr) {
  let fields = product.split(";");
  // Přičti 4. hodnotu = cena produktu
  if (fields[1].indexOf("security_deposit") === -1){
  if (fields[3]) {
    transaction_value_for_conversion_tags += parseInt(fields[3]) || 0;
  }}

  // Přičti event108, pokud je obsažen jako "event108=X"
  /*
  if (fields[4] && fields[4].startsWith("event108=")) {
    let event108_value = parseInt(fields[4].replace("event108=", "")) || 0;
    transaction_value_for_conversion_tags += event108_value;
  } */
  // event108 nahrazen event16
  
  if (fields[4] && fields[4].startsWith("event16=")) {
    let event16_value = parseInt(fields[4].replace("event16=", "")) || 0;
    transaction_value_for_conversion_tags += event16_value;
  //  transaction_value_for_conversion_tags += 100;
  }
}
 //utag.data.transaction_value_for_conversion_tags = transaction_value_for_conversion_tags;
 b['transaction_value_for_conversion_tags'] = transaction_value_for_conversion_tags;
}
},
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[98]=='undefined'){utag.runonce.ext[98]=1;if((/(vodafone.cz|localhost)/.test(b['dom.domain'])&&b['dom.domain'].toString().toLowerCase().indexOf('onenetsamoobsluha.vodafone.cz'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('myexupc.vodafone.cz'.toLowerCase())<0&&b['dom.domain'].toString().toLowerCase().indexOf('galerie.vodafone.cz'.toLowerCase())<0&&b['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/muj'.toLowerCase())<0&&b['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/tobi'.toLowerCase())<0&&b['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/chatpilot'.toLowerCase())<0&&b['dom.url'].toString().indexOf('/en/')<0&&b['dom.url'].toString().toLowerCase().indexOf('vodafone.cz/muj/en'.toLowerCase())<0&&b['dom.url'].toString().toLowerCase().indexOf('pece/onenet'.toLowerCase())<0)){
function getTOBIConfigData() {
   function resolveEnvironment () {
        var origin  = window.location.origin;
        if (/pre/.test(origin) || (/localhost/.test(origin))) return 'PRE';
        if (/int/.test(origin)) return 'INT';
        if (/sys2/.test(origin)) return 'SYS2';
        if (/stage/.test(origin)) return 'STAGE';
        return 'PROD';
    }
    
    var destination = /www.vodafone.cz/.test(document.location.host) ? "www" : "www-pre";
    fetch('https://'+destination+'.vodafone.cz/tobi/initial-config?channel=Public_Web&lang=cs&pageUrl='+location.origin+location.pathname+"&env="+resolveEnvironment())
    .then(function(response) { response.json()
    .then( function(config) {
    window.oneWindow = [window.oneWindow || {}, {config:config}].reduce(function(r,o) {Object.keys(o).forEach(function(k) {r[k] = o[k]}); return r;},{});
    if (config&&config.topic) {
        utag.data.tobi_started = "started";
    }
    if ((utag.data.tobi_started === "started")||(/tobi\=/.test(document.location.search))) {
        var para = document.createElement('div');
        para.setAttribute('id', 'chat-platform');
        para.setAttribute('data-url',document.location.protocol+'//'+document.location.host);
        para.setAttribute('data-source-prefix', 'tobi');
        para.setAttribute('data-channel', 'PublicWeb');
        para.setAttribute('data-language', /\/en\//.test(window.location.pathname) ? 'en' : 'cs');
        var element = document.getElementById('obsah');
        if(element) {
            element.appendChild(para);
        }
    }
    return window.oneWindow;
    }
    )
    }
    )
}
if (!(/www\.vodafone\.cz/.test(document.location.host))||(/.*vodafone\.cz\/pece\/formular-reklamace\//.test(document.location.href))||(/.*vodafone\.cz\/roaming\//.test(document.location.href))||(/.*vodafone\.cz\/jetovtobe\//.test(document.location.href))) {
    if (!(/.*vodafone.cz\/pece/.test(document.location.href))||(/.*vodafone.cz\/pece\/formular-reklamace\//.test(document.location.href))||(/.*vodafone\.cz\/roaming\//.test(document.location.href))||(/.*vodafone\.cz\/jetovtobe\//.test(document.location.href))) {
       getTOBIConfigData(); 
    }
}
}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){b['visitor_marketing_cloud_id']='D=mid'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[129]=='undefined'){utag.runonce.ext[129]=1;if(typeof b['cp.lmc_ccm']!='undefined'){
if (typeof vfconsents === "object") {
    if (typeof vfconsents.set === "function") {
        if (/"analytics"/.test(b["cp.lmc_ccm"])) {
            vfconsents.set("funa","i");    
        } else {
            vfconsents.set("funa","o");
        }    
        if (/"ad"/.test(b["cp.lmc_ccm"])) {
            vfconsents.set("mktg","i");    
        } else {
            vfconsents.set("mktg","o");
        }  
    }
    if (typeof vfconsents.save === "function") {
        vfconsents.save();
    }    
}
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(typeof b['qp.ehub']!='undefined'){
if (typeof b["qp.ehub"] !== "undefined") {
   var now = new Date();
   var expiration = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30); //30 days expiration
   document.cookie = "visitorTransactionId="+JSON.stringify({"type":"eHub","params":{"visitId":b["qp.ehub"]}})+"; expires=" +expiration.toGMTString()+"; path=/";
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
//hotjar test
if ((typeof b["dom.url"] !== "undefined") && (b["dom.url"] == "https://www.vodafone.cz/pece/")) {
    document.querySelector('div.sc-88c16966-5.dbHetM').addEventListener('click',()=>hj('event','clicked_tab4'));
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (typeof (b["cp.vfconsents"]) !== "undefined") {
    b["visitor_permission_targeting"] = /mktg:i/.test(b["cp.vfconsents"]) ? "granted" : "denied";
    b["visitor_permission_functional"] = /funa:i/.test(b["cp.vfconsents"]) ? "granted" : "denied";
    b["sklik_consent"] = /mktg:i/.test(b["cp.vfconsents"]) ? 1 : 0;
}
} } catch(e){ utag.DB(e) }  },
function(a,b){
// Funkce pro kontrolu obou variant parametru vfconsents=funa:i (dekódované i enkódované)
function hasFunaConsent() {
    var href = (typeof window.location !== 'undefined' && typeof window.location.href === 'string') ? window.location.href : '';
    return (href.indexOf('vfconsents=funa:i') !== -1 || href.indexOf('vfconsents=funa%3Ai') !== -1);
}

// Pokud URL NEobsahuje souhlas funa:i, zobraz banner
if (!hasFunaConsent()) {
    if ((typeof window.vfconsents !== 'undefined') && (typeof window.vfconsents.banner === 'function')) {
        if (utag.cond["72"] && utag.cond["78"]) {
            window.vfconsents.banner();
            //console.log("banner trigger tag reached from extension 1");
            if ((typeof (utag.data["cp.utag-async"]) !== "undefined") && (utag.data["cp.utag-async"].indexOf("dev") != -1)) {
                //console.log("banner trigger tag reached from extension");
            }
        }
    }
}

// Pokud URL obsahuje souhlas funa:i (dekódovaný nebo enkódovaný), nasimuluj odsouhlasení cookies
if (hasFunaConsent()) {
    if (window.vfconsents && window.vfconsents.isInitialized) {
        console.log('Cookies odsouhlasena přes URL');
        vfconsents.set("funa", "i");
        vfconsents.set("mktg", "i");
        vfconsents.set("cvd", "5");
        vfconsents.set("vn", "2");
        vfconsents.save();
    }
}

// Speciální logika pro vodafone.jobs.cz
if ((document.location.host === "vodafone.jobs.cz") && (typeof vfconsents === "object")) {
    if (typeof vfconsents.set === "function") {
        if (/"analytics"/.test(b["cp.lmc_ccm"])) {
            vfconsents.set("funa", "i");
        } else {
            vfconsents.set("funa", "o");
        }
        if (/"ad"/.test(b["cp.lmc_ccm"])) {
            vfconsents.set("mktg", "i");
        } else {
            vfconsents.set("mktg", "o");
        }
    }
    if (typeof vfconsents.save === "function") {
        vfconsents.save();
    }
}
},
function(a,b){ try{ if(1){
// --- extract product_id ---
var product_id = window.location.href
  .split('?')[0]
  .replace('https://www.vodafone.cz/eshop/', '')
  .replace(/\/$/, '');

// --- extract product_price ---
var priceEl = document.querySelector('span.sc-cda2384b-0.iCXsfB.sc-f77fe256-0.cekJpq');
var product_price = priceEl 
  ? priceEl.textContent.replace(/[^\d,\.]/g, '').replace(',', '.') 
  : undefined;

// --- assign to data layer ---
utag.data.meta_product_id = product_id;
utag.data.meta_product_price = product_price;
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(/^WSC/.test(b['page_channel'])){
/*
* 2026-04-01
* This solution removes phone number from URL that is about to be captured via AA
* It is a requirement to do so in cases where URL contains PPI
* More info: https://jira-agile.oskarmobil.cz/browse/DEV-14438
*/

var maskSensitiveSegment = function(segment) {
  if (/^\d{8,12}$/.test(segment)) {
    return '***NUMBER***';
  }
  return segment;
};

var sanitizeUrl = function(url) {
  if (!url) {
    return "";
  }

  var pathPart = url.split('?')[0];

  var cleanPath = pathPart.split('#')[0];

  var segments = cleanPath.split('/');

  var sanitizedSegments = segments.map(function(segment) {
    if (!segment) return segment;
    return maskSensitiveSegment(segment);
  });

  var result = sanitizedSegments.join('/');

  return result;
};

// 🔍 krok 1: zjisti zdroj URL
var sourceUrl =
  (typeof b !== "undefined" && b.page_url) ||
  (typeof s !== "undefined" && s.pageURL) ||
  window.location.href;

// 🧼 krok 2: sanitizace
var sanitized = sanitizeUrl(sourceUrl);

console.log("[step 2] sanitized URL:", sanitized);

// ✍️ krok 3: zápis zpět do data layer
if (typeof b !== "undefined") {
  b.page_url = sanitized;
}

// ✍️ krok 4: zápis do Adobe objektu
if (typeof s !== "undefined") {
  s.pageURL = sanitized;
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/* DEFINITION OF USEFUL SEGMENTS FOR LOGICAL GROUPING OF PAGES */

(function () {

    var url = window.location.href.replace(/\/$/, "");

    var rules = [
        { match: "https://www.vodafone.cz/eshop", value: "ecommerce" },
        { match: "https://www.vodafone.cz/dekujeme", value: "ecommerce" },
        { match: "https://www.vodafone.cz/giga-kombo", value: "giga" },
        { match: "https://www.vodafone.cz/happy", value: "happy" },
        { match: "https://www.vodafone.cz/internet", value: "internet" },
        { match: "https://www.vodafone.cz/podnikatele/internet", value: "internet" },
        { match: "https://www.vodafone.cz/nabidky/bezlimitu-m-vyhodne", value: "nabidky" },
        { match: "https://www.vodafone.cz/nabidky/cashback-samsung", value: "nabidky" },
        { match: "https://www.vodafone.cz/nabidky/telefon-za-korunu", value: "nabidky" },
        { match: "https://www.vodafone.cz/oskarta", value: "prepaid" },
        { match: "https://www.vodafone.cz/predplacene-karty", value: "prepaid" },
        { match: "https://www.vodafone.cz/start", value: "public" },
        { match: "https://www.vodafone.cz/jetovtobe", value: "tarify" },
        { match: "https://www.vodafone.cz/podnikatele/volani/tarify", value: "tarify" },
        { match: "https://www.vodafone.cz/prejdete-k-nam", value: "tarify" },
        { match: "https://www.vodafone.cz/tarify", value: "tarify" },
        { match: "https://www.vodafone.cz/televize", value: "televize" },
        { match: "https://www.vodafone.cz", value: "public" }
    ];

    for (var i = 0; i < rules.length; i++) {

        var match = rules[i].match.replace(/\/$/, "");

        if (url.indexOf(match) === 0) {
            b.vfcz__marketing_page_type_normalizer = rules[i].value;
            break;
        }
    }

})();

    /* DEFINITION OF vfcz__customer_type AND vfcz__lead_type */
    
    var isVBU = 
        (b['dom.pathname'] || '').toLowerCase().indexOf('/podnikatele') > -1 ||
        sessionStorage.getItem('bu') === 'VBU' ||
        (b['dom.pathname'] || '').toLowerCase().indexOf('/onenet-samoobsluha') > -1;
    
    if (isVBU) {
    
        b.vfcz__customer_type = 'VBU';
        b.vfcz__lead_type = 'lead_vbu';
    
    } else {
    
        b.vfcz__customer_type = 'CBU';
        b.vfcz__lead_type = 'lead_cbu';
    
    }
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (
    (
        ((b.page_events || "").indexOf("purchase") > -1) &&
        ((b.sales_products || "").toLowerCase().indexOf("lead") > -1)
    ) ||
    ((b.page_name || "").indexOf("PopupLeadformOpen:Final:Thank you") > -1) // Extra Condition for Giga Kombo
    ||
    ((b.page_name || "").indexOf("overeno-s-cislem") > -1) // Extra Condition to cover: Osobni:Internet:Pevny internet:overeno-s-cislem; Podnikatele:Internet:overeno-s-cislem; Osobni:Internet:Prevod Internetu:overeno-s-cislem 
) {
    b.tealium_event = "lead";

}
if (
    ((b.page_events || "").indexOf("purchase") > -1) &&
    ((b.sales_products || "").toLowerCase().indexOf("lead") > -1) &&
    ((b.vfcz__customer_type || "").indexOf("VBU") > -1)
) {
    if (window.location.href.indexOf('eshop/podnikatele/kosik/') < 0) {
        b.tealium_event_variant = "lead_vbu";
        //disable lead_vbu event in business cart
    }

    gtag('event', 'conversion', {
        send_to: 'AW-783190867/buSmCJ2jq7YBENOWuvUC',
        'page_path': b.vfcz__normalized_pathname,
        'vfcz__customer_type': b.vfcz__customer_type
    });

}
if (
    ((b.page_events || "").indexOf("purchase") > -1) &&
    ((b.sales_products || "").toLowerCase().indexOf("lead") > -1) &&
    ((b.vfcz__customer_type || "").indexOf("CBU") > -1) ||
    (b.page_name || "").indexOf("PopupLeadformOpen:Final:Thank you") > -1 // extra condition for giga kombo
) {
        console.log("Conditions in UID236 passing...");
        
    // excluding condition for s.r.o.    
    if(!(b.page_name || "").toLowerCase().includes("osobni:eshop:kosik:popup-eshop-kosik-osvc")){

        console.log("Conditions in UID236 further passing...");

        console.log("p_name: " + (b.page_name || ""));

        b.tealium_event_variant = "lead_cbu";
    
        gtag('event', 'conversion', {
            send_to: 'AW-783190867/AzaQCIXVsYsBENOWuvUC'
        });
    
        fbq('trackCustom', 'LeadCBU');
        fbq('trackCustom', 'Lead');
}
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
function safeDecode(value) {
  try {
    return decodeURIComponent(value || "");
  } catch (e) {
    return value || "";
  }
}

b.vfcz__normalized_page_name = safeDecode(b.page_name);
b.vfcz__normalized_pathname = safeDecode(window.location.pathname);

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
// Shared Adform helper for engagement tracking.
//
// Usage:
//   window.sendAdformEvent("Engagement - 30s");
//   window.sendAdformEvent("Engagement - Scroll 50%");
//
// Purpose:
//   Provides a reusable wrapper around Adform tracking calls so multiple
//   Tealium extensions can trigger custom engagement touchpoints without
//   duplicating Adform setup logic.
//
// Requirements:
//   - Adform global tag must already be loaded on the page.
//   - Uses Adform PageName tracking with PM ID 1002290.
//
window.sendAdformEvent = function(pageName) {

    if (!window.adf || typeof window.adf.track !== "function") {
        return;
    }

    window.adf = window.adf || {};
    window.adf.Params = window.adf.Params || {};

    window.adf.Order = {
        var99: "UID257",
        sv1: b.vfcz__customer_type,
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
    };

    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = pageName;

    try {
        window.adf.track("1002290", "");
    } catch (e) {
        console.error("Adform error", e);
    }
};

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cp.vfconsents'].toString().indexOf('mktg:i')>-1){
// Shared helper for cross-platform engagement tracking.
// Sends a single engagement event to all configured advertising,
// analytics and attribution platforms.

window.sendEngagementEvent = function(cfg) {
    
/* temporarily disable Google Ads / Bing Ads & META Ads */

    // Google Ads
    if (typeof gtag === "function" && cfg.googleAdsLabel) {
        gtag('event', 'conversion', {
            send_to: 'AW-783190867/' + cfg.googleAdsLabel,
            'page_path': b.vfcz__normalized_pathname,
            'vfcz__customer_type': b.vfcz__customer_type
        });
    }

    // Meta Ads
    
    if (typeof fbq === "function" && cfg.fbEvent) {
        fbq('trackCustom', cfg.fbEvent);
    }

    // Bing Ads
    if (window.uetq && cfg.bingEvent) {
        window.uetq.push('event', cfg.bingEvent, {});
    }

    // Adform Ads
    if (typeof window.sendAdformEvent === "function" && cfg.adformEvent) {
        window.sendAdformEvent(cfg.adformEvent);
    }

    // Tealium Initiator
    if (cfg.tealiumEvent) {
        utag.link({
            tealium_event: cfg.tealiumEvent
        });
    }
};
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
function safeDecode(value) {
  try {
    return decodeURIComponent(value || "");
  } catch (e) {
    return value || "";
  }
}

// var salesProducts = (b.sales_products || "").split(";");
var salesProducts = (b.survey_products || "").split(";");

b.vfcz__normalized_product_name =
  salesProducts.length > 1 ? safeDecode(salesProducts[1]) : "";

/* former solution:
b.vfcz__normalized_product_name_array =
  salesProducts.length > 1 ? [safeDecode(salesProducts[1])] : [];
*/

/* solution for array 
b.vfcz__normalized_product_name_array =
  salesProducts.length
    ? salesProducts.map(p => safeDecode(p))
    : [];
// end
*/
  
b.vfcz__adform_product_price_array = 
  salesProducts.length > 3 ? [safeDecode(salesProducts[3])] : [];

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().indexOf('eshop/kosik/')<0){
var events = b.page_events || "";
var pageName = b.page_name || "";

var hasScAdd = events.indexOf("scAdd") > -1;
var hasScOpen = events.indexOf("scOpen") > -1;
var hasScView = events.indexOf("scView") > -1;
var hasPurchase = events.indexOf("purchase") > -1;
var isFinalPopup = pageName.indexOf("PopupLeadformOpen") > -1;
var isThankYou = pageName.indexOf("Thank") > -1;

if ( ( ( (hasScOpen || hasScView) && !hasPurchase) || isFinalPopup ) && !isThankYou) {

    b.tealium_event = "open_form";
//    b.vfcz__normalized_product_name_array = "test";


function safeDecode(value) {
  try {
    return decodeURIComponent(value || "");
  } catch (e) {
    return value || "";
  }
}

b.vfcz__normalized_product_name_array =
  salesProducts.length > 1 ? [safeDecode(salesProducts[1])] : [];
  
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['vfcz__marketing_page_type_normalizer']=='ecommerce'){
if ((b.page_events || "").indexOf("prodView") > -1) {
	b.tealium_event = "product_detail";

	/* parsování produktového stringu a page_name do jednotlivých proměnných */

        b.vfcz__normalized_product_name_array = [document.querySelector('.sc-fd430257-0.iYegqK')?.textContent?.trim() || ""];
        b.vfcz__adform_product_price_array = [(document.querySelector('.sc-cda2384b-0.iCXsfB.sc-f77fe256-0.cekJpq')?.textContent || "")
            .replace(/\s+/g, "")
            .replace("Kč", "")
            .trim()];
        b.vfcz__normalized_product_id = [(b.survey_products || "").split(";")[1] || ""];

	/* pattern pro uložení produktových informací do session storage - pro add_to_cart fázi */
    
    const product_data = {
        product_name: b.vfcz__normalized_product_name_array[0] || "",
        product_price: b.vfcz__adform_product_price_array[0] || "",
        product_id: b.vfcz__normalized_product_id[0] || ""
    }

    sessionStorage.setItem("pending_atc", JSON.stringify(product_data));
    
	/* volání bing ads */
	// Google Ads
	/*
	if (typeof gtag === "function" && cfg.googleAdsLabel) {
	    gtag('event', 'conversion', {
	        send_to: 'AW-783190867/' + cfg.googleAdsLabel
	    });
	}
	
	// Meta Ads
	
	if (typeof fbq === "function" && cfg.fbEvent) {
	    fbq('trackCustom', cfg.fbEvent);
	}
	*/
	// Bing Ads

}

if ((b.page_events || "").indexOf("scOpen") > -1 ||
	(b.page_events || "").indexOf("scView") > -1) {
	    
	/* FLAG FOR BUSINESS RECOGNITION IN CART */
    /*	
	if (
	    (window.location.href.indexOf("eshop/podnikatele/kosik") >-1 ) ||
	    //(window.location.href.indexOf("eshop/kosik/lead-uspech/") >-1 ) ||
	    (window.location.href.indexOf("eshop/kosik") >-1 )
	    ){
	   
        var entrepreneur = document.querySelector('[aria-labelledby="ENTREPRENEUR-label"]');
        var company = document.querySelector('[aria-labelledby="COMPANY-label"]');
        var endcustomer = document.querySelector('[aria-labelledby="PERSONAL-label"]');
        
        if (entrepreneur?.getAttribute("aria-checked") === "true") {
            
            sessionStorage.setItem("bu", "VBU");
            sessionStorage.setItem("bu_type", "individual");
            
        } 
        if (company?.getAttribute("aria-checked") === "true") {
            
            sessionStorage.setItem("bu", "VBU");
            sessionStorage.setItem("bu_type", "company");
        }
        if (endcustomer?.getAttribute("aria-checked") === "true") {
	        sessionStorage.setItem("bu", "CBU");
            sessionStorage.setItem("bu_type", "end-cust");
	        //sessionStorage.removeItem("bu");
            //sessionStorage.removeItem("bu_type");
	}
	        
    }
    */
	// DISABLED, TRYING A DIFFERENT APPROACH
	/* VISITOR SWITCHED TO CBU CART 
	
	if (window.location.href.indexOf("eshop/kosik") >-1 ) {
	    
    sessionStorage.removeItem("bu");
    sessionStorage.removeItem("bu_type");
	    
	} */
	
	/* CART PAGE: Cart Value */

	const el = document.getElementsByClassName("jwSMBs")[1];

	if (el) {
		b.vfcz__normalized_cart_value =
			el.innerText
			.replace(/\s/g, "") // remove all spaces (incl NBSP)
			.replace("Kč", ""); // remove currency
		b.order_subtotal = b.vfcz__normalized_cart_value; // sales value for adform tag
	}
	sessionStorage.setItem("normalized_cart_value", b.order_subtotal);

	/* CART - LIST OF PRODUCTS IN CART */

	const wrappers = document.querySelectorAll(
		'.CartBundle__CartItemWrapper-sc-b6fff1f2-0.dEnGcQ'
	);

	const productIds = (b.survey_products || "")
		.split(",")
		.map(item => {
			const parts = item.split(";");
			return parts[1] || "";
		})
		.filter(Boolean);

	const products = [];

	wrappers.forEach((wrapper, index) => {

		const names = [
			...new Set(
				Array.from(
					wrapper.querySelectorAll(
						'.sc-cda2384b-0.faXoih.sc-f77fe256-0.chXuLg'
					)
				).map(el => el.textContent.trim())
			)
		];

        const price = (
            wrapper.querySelector('.sc-b46d1aa6-2.qeWWF:not(.sc-b46d1aa6-3)')
            ?.textContent || ""
            )
            .replace(/\s+/g, "")
            .replace("Kč", "")
            .trim();

		if (names.length) {
			products.push({
				product_id: productIds[index] || "",
				name: names[0],
				price
			});
		}
	});

	sessionStorage.setItem("cart_data", JSON.stringify(products));

	/* ................................*/

	b.vfcz__adform_product_price_array = "";
	b.tealium_event = "view_cart";

	b.vfcz__normalized_product_id = products.map(p => p.product_id);
	b.vfcz__normalized_product_name_array = products.map(p => p.name);
	b.vfcz__adform_product_price_array = products.map(p => p.price);

}
if ((b.page_events || "").indexOf("scCheckout") > -1) {
	b.tealium_event = "initiate_checkout";
	b.page_name = "Osobni:eShop:Objednavka"; // fo some reason this was not properly updated in Adform tag!
	const raw = sessionStorage.getItem("cart_data");
	const normalized_cart_value = sessionStorage.getItem("normalized_cart_value");

	const products = raw ? JSON.parse(raw) : null;

	b.vfcz__normalized_product_id = products.map(p => p.product_id);
	b.vfcz__normalized_product_name_array = products.map(p => p.name);
	b.vfcz__adform_product_price_array = products.map(p => p.price);

	b.order_subtotal = normalized_cart_value || "";
	b.vfcz__normalized_cart_value = b.order_subtotal;
}

if ((b.page_events || "").indexOf("purchase") > -1) {
        
    if (window.location.href.toLowerCase().indexOf('/podnikatele/kosik/lead-uspech') > -1 ||
       (window.location.href.toLowerCase().indexOf('eshop/podnikatele/kosik') > -1)) {
        b.tealium_event = "lead";
    } else {
        b.tealium_event = "purchase";
    }
	
	b.page_name = "Osobni:eShop:Objednavka:Dekujeme"; // fo some reason this was not properly updated in Adform tag!
	const raw = sessionStorage.getItem("cart_data");
	const normalized_cart_value = sessionStorage.getItem("normalized_cart_value");

	const products = raw ? JSON.parse(raw) : null;

	b.vfcz__normalized_product_id = products.map(p => p.product_id);
	b.vfcz__normalized_product_name_array = products.map(p => p.name);
	b.vfcz__adform_product_price_array = products.map(p => p.price);

	b.order_subtotal = normalized_cart_value || "";
	b.vfcz__normalized_cart_value = b.order_subtotal;
	/* order type */
	const surveyProducts = (b.survey_products || "").toLowerCase();

    const hasFix = /(^|,)fix;/.test(surveyProducts);
    const hasPostpaid = /(^|,)postpaid;/.test(surveyProducts);
    const hasPrepaid = /(^|,)prepaid;/.test(surveyProducts);
    const hasHandset = /(^|,)handset;/.test(surveyProducts);
    
    b.vfcz__normalized_order_type = [
        hasFix && "fix",
        hasPostpaid && "postpaid",
        hasPrepaid && "prepaid",
        hasHandset && "handset"
    ]
    .filter(Boolean)
    .join("-");
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (
    window.location.href.indexOf("objednavka") > -1 ||
    window.location.href.indexOf("kosik") > -1
) {

    function updateBusinessType() {

        var entrepreneur = document.querySelector('[aria-labelledby="ENTREPRENEUR-label"]');
        var company = document.querySelector('[aria-labelledby="COMPANY-label"]');
        var endcustomer = document.querySelector('[aria-labelledby="PERSONAL-label"]');

        if (entrepreneur?.getAttribute("aria-checked") === "true") {

            sessionStorage.setItem("bu", "VBU");
            sessionStorage.setItem("bu_type", "individual");

        } else if (company?.getAttribute("aria-checked") === "true") {

            sessionStorage.setItem("bu", "VBU");
            sessionStorage.setItem("bu_type", "company");

        } else if (endcustomer?.getAttribute("aria-checked") === "true") {

            sessionStorage.setItem("bu", "CBU");
            sessionStorage.setItem("bu_type", "end-cust");

        }
    }

    // první kontrola po načtení stránky
    setTimeout(updateBusinessType, 500);

    // následné změny
    document.addEventListener("click", function(e) {

        var target = e.target.closest(
            '[aria-labelledby="ENTREPRENEUR-label"],' +
            '[aria-labelledby="COMPANY-label"],' +
            '[aria-labelledby="PERSONAL-label"]'
        );

        if (target) {
            setTimeout(updateBusinessType, 50);
        }

    });

} else {
        sessionStorage.removeItem("bu");
        sessionStorage.removeItem("bu_type");
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['vfcz__customer_type']=='CBU'){
/* it is important to start with specific sub URLs first! */


var path = (window.location.pathname || "").toLowerCase();

var rules = [
    ["/tarify/bezlimitu-black-extra/", 2000],
    ["/giga-kombo/", 1000],
    ["/jetovtobe/", 1000],
    ["/tarify/vodafone-one/", 900],
    ["/nove-tarify-2026/", 800],
    ["/tarify/neomezena-data/", 800],
    ["/tarify/rodinne-tarify/", 750],
    ["/tarify/tarify-pro-seniory/", 600],
    ["/tarify/zvlastni-cenovy-plan/", 600],
    ["/prejdete-k-nam/", 600],
    ["/leto/", 500],
    ["/tarify/tarif-pro-deti/", 500],
    ["/tarify/levne-tarify/", 400],
    ["/nabidky/telefon-za-korunu/", 400],
    ["/internet/", 200],
    ["/televize/", 200],
    ["/podpora-pro-napnuty-rozpocet/", 200],
    ["/predplacene-karty/", 50],
    ["/oskarta/", 50]
];

b.vfcz__lead_value = 647.37;

for (var i = 0; i < rules.length; i++) {
    if (path.startsWith(rules[i][0])) {
        b.vfcz__lead_value = rules[i][1];
        break;
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['vfcz__customer_type']=='VBU'){
/* it is important to start with specific sub URLs first! */


var path = (window.location.pathname || "").toLowerCase();

var rules = [
    ["/podnikatele/volani/tarify/business-neomezeny-elite-5g/", 4500],
    ["/podnikatele/volani/spojte-sluzby/", 2000],
    ["/podnikatele/volani/tarify/business-neomezeny-extra-5g-onenumber/", 1700],
    ["/podnikatele/volani/tarify/business-neomezeny-extra-5g-stream/", 1700],
    ["/podnikatele/volani/tarify/business-neomezeny-maxi-5g/", 1250],
    ["/podnikatele/volani/tarify/business-neomezeny-standard/", 1050],
    ["/podnikatele/spojeni-se-zakazniky/", 1000],
    ["/podnikatele/individualni-nabidka-pro-podnikatele/", 900],
    ["/podnikatele/volani/tarify/business-neomezeny-start/", 850],
    ["/podnikatele/volani/virtualni-pevna-linka/", 700],
    ["/podnikatele/komplexni-reseni/", 700],
    ["/roaming/roaming-pro-firmy/", 500],
    ["/podnikatele/internet-pro-firmy/onenet-data-v-zahranici/", 500],
    ["/podnikatele/internet/", 500],
    ["/podnikatele/volani/pevna-linka/", 400],
    // obecné pravidlo musí být až nakonec
    ["/podnikatele/volani/tarify/", 1200]
];

b.vfcz__lead_value = 1263.33;

for (var i = 0; i < rules.length; i++) {
    if (path.startsWith(rules[i][0])) {
        b.vfcz__lead_value = rules[i][1];
        break;
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){try{b['tealium_utag_version']=(((typeof b['cp.app_version_cookie'] !== "undefined") ? b['cp.app_version_cookie']+"|":"")+utag.cfg.path.replace(/.+utag\/(.+)/, "$1") + utag.cfg.v+((typeof utag.data["cp.s_sv_p46"] !== "undefined") ? ":vid" : ":mid")+((typeof s.props25 !== "undefined")?(":"+s.props25):""))}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b,c,d){
  b._ccity=(typeof b['']!='undefined')?b['']:'';
  b._ccountry=(typeof b['']!='undefined')?b['']:'';
  b._ccurrency=(typeof b['sales_currency']!='undefined')?b['sales_currency']:'';
  b._ccustid=(typeof b['']!='undefined')?b['']:'';
  b._corder=(typeof b['purchase_id']!='undefined')?b['purchase_id']:'';
  b._cpromo=(typeof b['']!='undefined')?b['']:'';
  b._cship=(typeof b['']!='undefined')?b['']:'';
  b._cstate=(typeof b['']!='undefined')?b['']:'';
  b._cstore=(typeof b['transaction_store_id']!='undefined')?b['transaction_store_id']:'web';
  b._csubtotal=(typeof b['sales_monthly_revenue']!='undefined')?b['sales_monthly_revenue']:'';
  b._ctax=(typeof b['']!='undefined')?b['']:'';
  b._ctotal=(typeof b['transaction_total']!='undefined')?b['transaction_total']:'';
  b._ctype=(typeof b['']!='undefined')?b['']:'';
  b._czip=(typeof b['']!='undefined')?b['']:'';
  b._cprod=(typeof b['product_name']!='undefined'&&b['product_name'].length>0)?b['product_name']:[];
  b._cprodname=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];
  b._cbrand=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];
  b._ccat=(typeof b['product_group']!='undefined'&&b['product_group'].length>0)?b['product_group']:[];
  b._ccat2=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];
  b._cquan=(typeof b['product_count']!='undefined'&&b['product_count'].length>0)?b['product_count']:[];
  b._cprice=(typeof b['product_revenue']!='undefined'&&b['product_revenue'].length>0)?b['product_revenue']:[];
  b._csku=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];
  b._cpdisc=(typeof b['']!='undefined'&&b[''].length>0)?b['']:[];
  if(b._cprod.length==0){b._cprod=b._csku.slice()};
  if(b._cprodname.length==0){b._cprodname=b._csku.slice()};
  function tf(a){if(a=='' || isNaN(parseFloat(a))){return a}else{return (parseFloat(a)).toFixed(2)}};
  b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};
},
function(a,b){
if (/event2[89]/.test(b.page_events)) {
  b.transaction_type = "product purchase"; 
  if (/invoice/i.test(b.sales_products)) {
      b.transaction_type = "bill payment";
  }
  if (/topup/i.test(b.sales_products)) {
      b.transaction_type = "topup";
  }
  if (/event29/.test(b.page_events)) {
    b.transaction_status = "successful";
  } else {
    b.transaction_status = "cancelled";
  }  
}
if (typeof b.campaign_google_paid_details != "undefined") {
    b.visitor_id_click_advertising = b.campaign_google_paid_details;
    b.advertising_platform_id = "Google Paid";       
}
if (typeof b.campaign_kenshoo_kpid != "undefined") {
    b.visitor_id_click_advertising = b.campaign_kenshoo_kpid;
    b.advertising_platform_id = "Kenshoo KPID";
}
if (typeof b["qp.ehub"] != "undefined") {
    b.visitor_id_click_advertising = b["qp.ehub"];
    b.advertising_platform_id = "eHub ID";
}
if (typeof utag.data["journey_name"] !== "undefined") {
    utag.data["survey_journey_name"] = utag.data["journey_name"];
} 
if (typeof utag.data["page_events"] !== "undefined") {
    utag.data["survey_events"] = utag.data["page_events"];
}
},
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[127]=='undefined'){utag.runonce.ext[127]=1;if(1){
if (/^c_/.test(b.campaign_id)) {
    if ((/meta/.test(b.campaign_id))||(/facebook/.test(b.campaign_id))||(/twitter/.test(b.campaign_id))||(/linkedin/.test(b.campaign_id))||(/youtube/.test(b.campaign_id))||(/spotify/.test(b.campaign_id))||(/instagram/.test(b.campaign_id))||(/_social_/.test(b.campaign_id))) {
        b.marketing_channel = "Paid Social";
        if (typeof b.campaign_id !== "undefined") {
            b.marketing_channel_value = b.campaign_id;
        } else {
            if ((typeof b["dom.referrer"] !== "undefined")&&(typeof b["dom.referrer"] !== "")) {
                var referrerElements = b["dom.referrer"].split("/");
                if (referrerElements.length > 3) {
                    b.marketing_channel_value = referrerElements[2];
                } else {
                    b.page_error += "marketing_channelsReferrer" + b["dom.referrer"];
                }
            }
        }
    }
}
if (/^p_/.test(b.campaign_id)) {
    //if (/_J_\w_H_/.test(b.campaign_id)) {
        b.marketing_channel = "Paid Search";
        if (typeof b.campaign_id !== "undefined") {
            b.marketing_channel_value = b.campaign_id;
        }
    //}
}
if ((typeof b["dom.referrer"] !== "undefined")&&(typeof b["dom.referrer"] !== "")) {
    if ((/google/.test(b["dom.referrer"]))||(/seznam/.test(b["dom.referrer"]))||(/bing/.test(b["dom.referrer"]))||(/yandex/.test(b["dom.referrer"]))||(/yahoo/.test(b["dom.referrer"]))||(/duckduckgo/.test(b["dom.referrer"]))||(/ecosia/.test(b["dom.referrer"]))) {
        b.marketing_channel = "Natural Search";
        b.marketing_channel_value = b["dom.referrer"].split("/")[2];
    }
}
if ((/^CID/.test(b.campaign_id))||(/^etp/.test(b.campaign_id))||(/^VP_/.test(b.campaign_id))||(/^OFT_/.test(b.campaign_id))||(/^email_/.test(b.campaign_id))||(/^ecenl/.test(b.campaign_id))||(/^ewlm/.test(b.campaign_id))||(/^emb/.test(b.campaign_id))||(/^elmenl/.test(b.campaign_id))||(/^eCVM/.test(b.campaign_id))||(/^eEloqua/.test(b.campaign_id))) {
    b.marketing_channel = "Email";
    b.marketing_channel_value = b.campaign_id;
}
if (/^a_/.test(b.campaign_id)) {
    b.marketing_channel = "Affiliate";
    b.marketing_channel_value = b.campaign_id;
}
if ((/^c_/.test(b.campaign_id))&&!(/CID/.test(b.campaign_id))) {
    if (!(/meta/.test(b.campaign_id))&&!(/facebook/.test(b.campaign_id))&&!(/twitter/.test(b.campaign_id))&&!(/linkedin/.test(b.campaign_id))&&!(/youtube/.test(b.campaign_id))&&!(/spotify/.test(b.campaign_id))&&!(/instagram/.test(b.campaign_id))&&!(/_social_/.test(b.campaign_id))) {
        b.marketing_channel = "Display";
        b.marketing_channel_value = b.campaign_id;
    }
}
if (/^rem/.test(b.campaign_id)) {
    b.marketing_channel = "Remarketing";
    b.marketing_channel_value = b.campaign_id;
}
if ((/facebook.com/.test(b["dom.referrer"]))||(/linkedin.com/.test(b["dom.referrer"]))||(/twitter.com/.test(b["dom.referrer"]))||(/plus.google.com/.test(b["dom.referrer"]))||(/orkut.com/.test(b["dom.referrer"]))||(/friendster.com/.test(b["dom.referrer"]))||(/livejournal.com/.test(b["dom.referrer"]))||(/blogspot.com/.test(b["dom.referrer"]))||(/wordpress.com/.test(b["dom.referrer"]))||(/friendfeed.com/.test(b["dom.referrer"]))||(/myspace.com/.test(b["dom.referrer"]))||(/digg.com/.test(b["dom.referrer"]))||(/reddit.com/.test(b["dom.referrer"]))||(/stumbleupon.com/.test(b["dom.referrer"]))||(/twine.com/.test(b["dom.referrer"]))||(/yelp.com/.test(b["dom.referrer"]))||(/mixx.com/.test(b["dom.referrer"]))||(/delicious.com/.test(b["dom.referrer"]))||(/tumblr.com/.test(b["dom.referrer"]))||(/disqus.com/.test(b["dom.referrer"]))||(/intensedebate.com/.test(b["dom.referrer"]))||(/plurk.com/.test(b["dom.referrer"]))||(/slideshare.net/.test(b["dom.referrer"]))||(/backtype.com/.test(b["dom.referrer"]))||(/netvibes.com/.test(b["dom.referrer"]))||(/mister-wong.com/.test(b["dom.referrer"]))||(/diigo.com/.test(b["dom.referrer"]))||(/flixster.com/.test(b["dom.referrer"]))||(/youtube.com/.test(b["dom.referrer"]))||(/vimeo.com/.test(b["dom.referrer"]))||(/12seconds.tv/.test(b["dom.referrer"]))||(/zoomr.com/.test(b["dom.referrer"]))||(/identi.ca/.test(b["dom.referrer"]))||(/jaiku.com/.test(b["dom.referrer"]))||(/flickr.com/.test(b["dom.referrer"]))||(/imeem.com/.test(b["dom.referrer"]))||(/dailymotion.com/.test(b["dom.referrer"]))||(/photobucket.com/.test(b["dom.referrer"]))||(/fotolog.com/.test(b["dom.referrer"]))||(/smugmug.com/.test(b["dom.referrer"]))||(/classmates.com/.test(b["dom.referrer"]))||(/myyearbook.com/.test(b["dom.referrer"]))||(/mylife.com/.test(b["dom.referrer"]))||(/tagged.com/.test(b["dom.referrer"]))||(/brightkite.com/.test(b["dom.referrer"]))||(/ning.com/.test(b["dom.referrer"]))||(/bebo.com/.test(b["dom.referrer"]))||(/hi5.com/.test(b["dom.referrer"]))||(/yuku.com/.test(b["dom.referrer"]))||(/cafemom.com/.test(b["dom.referrer"]))||(/xanga.com/.test(b["dom.referrer"]))||(/instagram.com/.test(b["dom.referrer"]))) {
    b.marketing_channel = "Social Networks";
    if (typeof b.campaign_id !== "undefined") {
        b.marketing_channel_value = b.campaign_id;
    }
}
/*nahradit FOR cyklem, který bude pracovat s jednotlivými elementy Array*/
if (/^x_/.test(b.campaign_id)) {
    b.marketing_channel = "XML feeds";
    b.marketing_channel_value = b.campaign_id;
}
if (/^b_/.test(b.campaign_id)) {
    b.marketing_channel = "PR articles";
    b.marketing_channel_value = b.campaign_id;
}
if (/sms/.test(b.campaign_internal_id)) {
    b.marketing_channel = "SMS messages";
    b.marketing_channel_value = b.campaign_internal_id;
}
if (/push/.test(b.campaign_internal_id)) {
    b.marketing_channel = "Push messages";
    b.marketing_channel_value = b.campaign_internal_id;
}
if (((/sms/.test(b["dom.referrer"]))||(/esemes/.test(b["dom.referrer"])))&&(!/vodafone.cz/.test(b["dom.referrer"]))) {
    b.marketing_channel = "SMS referrers";
    if (typeof b.campaign_id !== "undefined") {
        b.marketing_channel_value = b.campaign_id;
    }
}
if ((tealium_s.linkInternalFilters.indexOf(b["dom.referrer"].split("/")[2])!==-1)&&(vfconsents.isFirstPageOfVisit)) {
    if (!b["cp.mchannels"]) {
        b.marketing_channel = "Internal";
        if (typeof b.page_name !== "undefined") {
            b.marketing_channel_value = b.page_name;
        }
    }
}
if ((!b["dom.referrer"])&&(vfconsents.isFirstPageOfVisit)) {
    if (!b["cp.mchannels"]) {
        b.marketing_channel = "Direct";
        if (typeof b.page_name !== "undefined") {
            b.marketing_channel_value = b.page_name;
        }
    }    
}
if ((b["dom.referrer"] !== "")&&(/vf-iframes.0g.cz/.test(b["dom.referrer"]))||(/vf-forms.0g.cz/.test(b["dom.referrer"]))||(/3dsecure.csas.cz/.test(b["dom.referrer"]))||(/vf-rodinna-pouta-/.test(b["dom.referrer"]))||(/microsite.0g.cz/.test(b["dom.referrer"]))) {
    b.marketing_channel = "Referring Domains";
    b.marketing_channel_value = b["dom.referrer"].split("/")[2];
}
if (!!b.marketing_channel) {
    var date = new Date();
    var exp = new Date();
    exp.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    tealium_s.c_w("s_mchannels",b.marketing_channel+"-"+b.marketing_channel_value,exp);
}
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[117]=='undefined'){utag.runonce.ext[117]=1;if(1){
if (utag.data.localStorageSupported === "true") {
    if (typeof utag.data["qp.ehub"] !== "undefined") {
        var d = new Date();
        var myJSON = JSON.stringify({"ehub" : utag.data["qp.ehub"], "ts" : d.toUTCString()} ) 
        localStorage.setItem("ehub",myJSON);
        
        b = utag.ut.flatten({va : JSON.parse(a)});
    } else {
        var ehubItem = localStorage.getItem("ehub");
        if(ehubItem && ehubItem!=="") { 
            var myJSON = JSON.parse(ehubItem);
            if (new Date() - new Date(myJSON.ts) > 30*24*3600*1000) {
                localStorage.removeItem("ehub");
            }
        }        
    }    
}   
}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if (utag.data.localStorageSupported === "true") {
    if (typeof utag.data["purchase_id"] !== "undefined") {
        var ehubItem = localStorage.getItem("ehub");
        if(ehubItem && ehubItem!=="") { 
            var myJSON = JSON.parse(ehubItem);
            var orderIdAmount = "&orderId="+utag.data["purchase_id"]
            if (typeof utag.data["product_monthly_revenue"] !== "undefined") {
                orderIdAmount += "&orderAmount="+utag.data["product_monthly_revenue"];
            }
            var userTypeActionCode = "&newCustomer=" + 
                (typeof utag.data.visitor_id_adobe === "undefined" ? "1" : "0") +
                "&actionCode=" + (
                /lead/.test(utag.data.survey_products) ? "lead" :
                /tarif/.test(utag.data.survey_products) ? "sales" :
                /prepaid/.test(utag.data.survey_products) ? "prepaid" : ""
                ); // ternary operator modified to contain check for "prepaid"
            var ehsjs = new Image();
            ehsjs.id = 'ehsjs';
            ehsjs.src = 'https://ehub.cz/system/scripts/sale.php?visitId='+myJSON.ehub+orderIdAmount+userTypeActionCode;
            ehsjs.async = true;
            ehsjs.defer = true;
            document.head.appendChild(ehsjs);       
        }   
    }    
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[153]=='undefined'){utag.runonce.ext[153]=1;if(1){
/**
 * TEALIUM_ENRICHMENT LISTENER & DLE CHECK
 * (ext. scoped After Load Rules)
 * Use case reference: https://cps.confluence.agile.vodafone.com/pages/viewpage.action?spaceKey=DO&title=CDP+-+Adobe+Target+Integration
 * 
 * @requires b['collect_uid']
 */

b['collect_uid'] = '172';

/**
 * Set the constant below to the ID of the Visit Number attribute
 * you have configured on the CDP (as string)
 * 
 * @example '5123'
 */
const DLE_CHECK_ATTRIBUTE_ID = '5360'; // Please update



/***** DON'T CHANGE ANYTHING AFTER THIS LINE! (Unless you know what you're doing) *****/
utag.dle = utag.dle || {};
utag.dle['DLE_CHECK_ATTRIBUTE_ID'] = DLE_CHECK_ATTRIBUTE_ID || utag.DB('CHECK DLE - Missing DLE_CHECK_ATTRIBUTE_ID');
utag.dle['COLLECT_TAG_UID'] = b.collect_uid || utag.DB('CHECK DLE - Missing b.collect_uid');
if (!DLE_CHECK_ATTRIBUTE_ID || !b.collect_uid) return;

// Helper function to remove all polling timeouts
utag.dle.clearAllTimeoutsWithState = function (state) {
    let timeouts = sessionStorage.getItem('dle_timeouts');
    if (timeouts) {
        timeouts.split('|').filter(i => i).forEach(i => clearTimeout(i));
        sessionStorage.removeItem('dle_timeouts');
    }
    if (state) {
        // 1. We update the state of DLE
        utag.dle.state = state;
        // 2. We set the state also in the utag_main cookie for the session
        utag.loader.SC("utag_main", {
            "dleState": state + ";exp-session"
        });
    }
}
// Helper function to store polling timeout ids in sessionStorage
utag.dle.storeTimeout = function (i) {
    let timeouts = sessionStorage.getItem('dle_timeouts') || '';
    sessionStorage.setItem('dle_timeouts', timeouts + '|' + i);
}

utag.dle.checkDLE = utag.dle.checkDLE || function (e) {
    utag.DB('CHECK DLE - Function call v3');
    if (utag && utag.dle && utag.dle.cdp_random_check && utag.sender && utag.sender[utag.dle.COLLECT_TAG_UID]) {
        let data = e.detail; // Getting data from event listener parameter
        if (data && data.current_visit && data.current_visit.metrics && data.current_visit.metrics[utag.dle.DLE_CHECK_ATTRIBUTE_ID] // Random parameter is present in DLE visit metrics
            && (utag.dle.cdp_random_check == data.current_visit.metrics[utag.dle.DLE_CHECK_ATTRIBUTE_ID]) // Random parameter matches
            && !utag.dle.polling_matched) { // Didn't match already
            utag.DB('CHECK DLE - Match');
            // 1. We set a flag to avoid entering in this block again
            utag.dle.polling_matched = true;
            // 2. We clear all the polling timeouts, with 'ready' state
            utag.dle.clearAllTimeoutsWithState('ready');
            // 3. We pass the updated profile to the function triggering the event
            if (typeof (window.tealium_dle_ready) == 'function') {
                window.tealium_dle_ready(data);
            }
        } else {
            if (utag.dle.polling_attempts <= 0) { // We ran over the max number of pollings
                utag.DB('CHECK DLE - Failed');
                // 1. We clear all the polling timeouts, with 'gave up' state
                utag.dle.clearAllTimeoutsWithState('gave up');
                // 2. We pass false to the function triggering the event
                if (typeof (window.tealium_dle_ready) == 'function') {
                    window.tealium_dle_ready(false);
                }
            }
        }
        utag.dle.polling_attempts--;
    }
}

document.addEventListener('tealium_enrichment', utag.dle.checkDLE);
}
}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
// Adobe Target Event Listener 
// https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/functions-overview/atjs-custom-events.html?lang=en
utag.ispCarrierStorage = utag.ispCarrierStorage || function (event) {
  if ((!sessionStorage.getItem("isp") || !sessionStorage.getItem("carrier")) && event) {
    if (event.detail) {
      if (event.detail.responseTokens) {
        if (event.detail.responseTokens[0]["geo.ispName"]) {
          sessionStorage.setItem(
            "isp",
            event.detail.responseTokens[0]["geo.ispName"]
          );
        }
        if (event.detail.responseTokens[0]["geo.mobileCarrier"]) {
          sessionStorage.setItem(
            "carrier",
            event.detail.responseTokens[0]["geo.mobileCarrier"]
          );
        }
      }
    }
  }
};

document.addEventListener("at-request-succeeded", utag.ispCarrierStorage);


// Retrieve items from sessionStorage
if (!!sessionStorage.getItem("isp")) b["ss_isp"] = sessionStorage.getItem("isp");
if (!!sessionStorage.getItem("carrier")) b["ss_carrier"] = sessionStorage.getItem("carrier");

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{utag.runonce = utag.runonce || {};utag.runonce.ext = utag.runonce.ext || {};if(typeof utag.runonce.ext[133]=='undefined'){utag.runonce.ext[133]=1;if(typeof b['visitor_login_type']=='undefined'){
//utag.data.visitor_login_type = b.visitor_login_type = sessionStorage.getItem("visitor_login_type");
}}} catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['consents_actual'].toString().toLowerCase().indexOf('mktg:i'.toLowerCase())>-1){
/** 
 * SEND AUDIENCE IDs TO 3rd PARTIES
 * 
 * Use the following code to dispatch Audience IDs to 3rd parties using Intelligent Polling.
 * Scope the extension to ALR, making sure to check for granted visitor permissions.
 */

// Facebook Ads (leave array empty if you don't want to use Facebook)
const FACEBOOK_PIXEL_ID = ['1668811366724305']; // E.g. ['6876666666662303']
const FACEBOOK_EVENT_NAME = 'TealiumAudiences';

// Google Ads (leave array empty if you don't want to use Google)
const GOOGLE_CONVERSION_ID = ['1510063943']; // See here: https://support.google.com/tagmanager/answer/6106960?hl=en

/***** DON'T CHANGE ANYTHING AFTER THIS LINE! (Unless you know what you're doing) *****/
utag.dispatchAudiences = utag.dispatchAudiences || function (e) {
    let data = e.detail; // Getting data from event listener parameter
    let _cdpAudiencesIds = '';
    if (data && data.audiences) {
        let _cdpAudiences = data.audiences;
        let _cdpAudiencesIdsArray = [];
        Object.keys(_cdpAudiences).forEach(function (_cdpAudience) {
            let res = _cdpAudience.match(/\d+$/g);
            if (res)
                _cdpAudiencesIdsArray.push(res);
        });
        _cdpAudiencesIds = _cdpAudiencesIdsArray.sort().join(",");
    }
    if (_cdpAudiencesIds && sessionStorage.getItem("cdp_cookie_audiences") !== _cdpAudiencesIds) {
        utag.DB("CDP Dispatch Audiences - New audiences");
        sessionStorage.setItem("cdp_cookie_audiences", _cdpAudiencesIds);
    } else if (sessionStorage.getItem("cdp_cookie_audiences") === _cdpAudiencesIds) {
        utag.DB("CDP Dispatch Audiences - Audiences already sent");
        return false;
    } else {
        utag.DB("CDP Dispatch Audiences - No audience data");
        return false;
    }
    // Facebook
    if (_cdpAudiencesIds && FACEBOOK_EVENT_NAME && Array.isArray(FACEBOOK_PIXEL_ID) && FACEBOOK_PIXEL_ID.length > 0) {
        FACEBOOK_PIXEL_ID.forEach((fbId) => {
            utag.DB("CDP Dispatch Audiences - Facebook ID: " + fbId);
            const url = 'https://www.facebook.com/tr/?id=' + fbId + '&ev=TealiumAudiences&cd[cdpAudiences]=,' + _cdpAudiencesIds + ',&noscript=1';
            fetch(url, {
                method: "GET",
                credentials: "include"
            });
        })
    }

    // Google Ads
    if (_cdpAudiencesIds && Array.isArray(GOOGLE_CONVERSION_ID) && GOOGLE_CONVERSION_ID.length > 0) {
        GOOGLE_CONVERSION_ID.forEach((gId) => {
            utag.DB("CDP Dispatch Audiences - Google ID: " + gId);
            const url = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' + gId + '/?value=0&guid=ON&script=0&data=cdp=' + encodeURIComponent(_cdpAudiencesIds);
            fetch(url, {
                method: "GET",
                credentials: "include",
                mode: "no-cors"
            });
        })
    }
}

document.addEventListener('tealium_dle_ready', utag.dispatchAudiences);
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * ADOBE TARGET WRAPPERS (CZ VERSION)
 * 
 * Set of functions that invoke Adobe Target methods directly, without passing through TiQ,
 * because CZ implementation leverages custom s_code.js code.
 * 
 * Consent is enforced separately.
 * 
 * Scoped After Load Rules.
 *  
 */

utag.target = utag.target || {};

/**
 * Triggers a getOffer(s) call
 * @example
 * utag.target.triggerGetOffer('custom-mbox','eeabb283-d99d-0758-fb60-ed1716ba9123', {param: 'a'});
 * @example
 * utag.target.triggerGetOffer('target-global-mbox','eeabb283-d99d-0758-fb60-ed1716ba9123', {param: 'a'});
 * @example
 * utag.target.triggerGetOffer(['custom-mbox-1','custom-mbox-2'],'eeabb283-d99d-0758-fb60-ed1716ba9123', {param: 'a'});
 *  
 * @param {string|string[]} mboxNameOrArray an mbox name (which can be target-global-mbox) or an array of custom mboxes; target-global-mbox has precedence on other mboxes
 * @param {string} atProperty property ID (optional)
 * @param {Object} mboxParamsObj an object containing all the key-value pairs that need to be passed to the mbox(es) as parameters
 */
utag.target.triggerGetOffer = utag.target.triggerGetOffer || function (mboxNameOrArray, atProperty, mboxParamsObj) {
    if (adobe && adobe.target && adobe.target.getOffers && adobe.target.applyOffers) {
        // Sanity check inputs
        if (!Array.isArray(mboxNameOrArray)) mboxNameOrArray = [mboxNameOrArray]; // Make sure mboxNameOrArray is array
        if (typeof atProperty !== 'string') atProperty = ''; // Make sure atProperty is string
        if (typeof mboxParamsObj !== 'object') mboxParamsObj = {}; // Make sure mboxParamsObj is an object
        
        mboxParamsObj.from_target_wrapper = true;

        let adobe_target_request = {
            execute: {},
            property: {
                token: atProperty
            }
        }
        let adobe_target_mboxes = [];

        if (mboxNameOrArray.indexOf('target-global-mbox') > -1) {
            // target-global-mbox wins over other mboxes
            // uses pageLoad and not mboxes array
            adobe_target_request.execute = {
                pageLoad: {
                    parameters: mboxParamsObj
                }
            }
        } else {
            mboxNameOrArray.forEach((mboxName, i) => {
                adobe_target_mboxes.push({
                    index: i,
                    name: mboxName,
                    parameters: mboxParamsObj
                })
            })
            adobe_target_request.execute = {
                mboxes: adobe_target_mboxes
            }
        }
        
        adobe.target.getOffers({
            request: adobe_target_request
        }).then(response => adobe.target.applyOffers({ response: response }))
            .then(() => utag.DB("AT Wrapper Success"))
            .catch(error => utag.DB("AT Wrapper Error") && utag.DB(error));
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * SEND CDP DATA AS TARGET PARAMETERS
 * 
 * Use the following code in an ext. (can be scoped to ALR)
 * to send info from CDP to Target via the client
 * 
 * Replace 'tealium_enrichment' with 'tealium_dle_ready' in the
 * event listener if you are using DLE Intelligent Polling
 * 
 * @requires utag.target.triggerGetOffer
 * @requires utag.ut.isEmpty
 */
const pathNameEquals = [
    "/" // Homepage
    ];

if(pathNameEquals.some(e => e.replace(/\/$/, "") === b["dom.pathname"].replace(/\/$/, ""))) {
    
    utag.target = utag.target || {};

    utag.target.tealiumEnrichmentToTarget = utag.target.tealiumEnrichmentToTarget || function(e) {
        let data = e.detail;
        
        var mboxParams = {};
        if (data) {
            var cdpAudiences = data['audiences'];
            var cdpIds = "";
            if (typeof cdpAudiences !== "undefined") {
                Object.keys(cdpAudiences).forEach(function (cdpAudience) {
                    let res = cdpAudience.match(/_(\d+)$/g);
                    if (res) cdpIds = cdpIds + res + ",";
                });
                var cdpAudiencesIds = cdpIds.replace(/(_|,$)/g, "");
                utag.DB(cdpAudiencesIds + '>>>> Audience ID(s)');
                
                if (cdpAudiencesIds) mboxParams.cdp_audiences_page_same = cdpAudiencesIds;              
                
            }
            
            mboxParams.page_name = b['page_name'];
            
            // AOM
            // mboxParams.aom_tp_code = data['properties'][5251];
            // mboxParams.aom_proposition_message = data['properties'][5424];
            // mboxParams.aom_proposition_link = data['properties'][5426];
            // mboxParams.aom_proposition_button_text = data['properties'][5428];
            
            mboxParams.source = 'cdp_dle';           
            
            if ('function' === typeof utag.target.triggerGetOffer) {
                utag.target.triggerGetOffer("target-global-mbox", undefined, mboxParams);
            }
        }
    }
    document.addEventListener('tealium_dle_ready', utag.target.tealiumEnrichmentToTarget, {
        once: true
    });
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['page_events'].toString().indexOf('scAdd')>-1&&b['dom.pathname'].toString().indexOf('/eshop/')>-1&&b['page_name']!='Osobni:eShop:Objednavka')){
function fireAdformAddToCartFallback() {
    // =========================
    // SESSION STORAGE
    // =========================
    var raw = sessionStorage.getItem("pending_atc");

    if (!raw) {
        return;
    }

    // =========================
    // PARSE STORAGE
    // =========================
    var stored;

    try {
        stored = JSON.parse(raw);
    } catch (e) {
        return;
    }

    // =========================
    // NORMALIZED DATA
    // =========================
    var atc = {
        product_id: stored.product_id || "",
        product_name: stored.product_name || "",
        product_price: stored.product_price || ""
    };

    // =========================
    // CHECK ADF
    // =========================
    if (!window.adf) {
        return;
    }

    if (typeof window.adf.track !== "function") {
        return;
    }

    // =========================
    // INIT
    // =========================
    window.adf = window.adf || {};
    window.adf.Params = window.adf.Params || {};

    // =========================
    // ORDER STRUCTURE
    // =========================
    window.adf.Order = {
        sales: atc.product_price,
        currency: "CZK",
        basketsize: 1,
        country: "CZ",
        gender: "",
        agegroup: "",
        itms: [
            {
                productid: atc.product_id,
                productname: atc.product_name,
                productcount: 1,
                productsales: atc.product_price,
                step: "2"
            }
        ],
        sv1: b.vfcz__customer_type,
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
        var99: "UID234"
    };

    // =========================
    // PARAMS
    // =========================
    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = "add_to_cart";

    // =========================
    // FIRE
    // =========================
    try {

        window.adf.track("1002290", "");

        // optional cleanup
        // sessionStorage.removeItem("pending_atc");

    } catch (e) {
    }
}

fireAdformAddToCartFallback();

//Google Ads Add to Cart event
  gtag('event', 'conversion', {
     'send_to': 'AW-783190867/bWa4CNe23bYZENOWuvUC',
     'currency': 'CZK',
     'page_path': b.vfcz__normalized_pathname,
     'vfcz__customer_type': b.vfcz__customer_type
  });

  window.uetq = window.uetq || [];
  window.uetq.push("event", "add_to_cart", {
    revenue_value: b.transaction_value_for_conversion_tags,
    currency: "CZK"
  });
 
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['dom.pathname'].toString().indexOf('/eshop/')<0){
function fireAdformLeadFallback() { 
 
    var atc = {
    //    product_id: b.product_id || [],
    //    product_name: b.product_name || [],
    //    product_price: b.product_price || "",
    
        product_name: (b.sales_products || "").split(";")[1].trim() || [],
        product_id: (b.sales_products || "").split(";")[1].trim() || [],
        product_price: b.vfcz__lead_value,
        
    };

    // =========================
    // CHECK ADF
    // =========================
    if (!window.adf) {
        return;
    }

    if (typeof window.adf.track !== "function") {
        return;
    }

    // =========================
    // INIT
    // =========================
    window.adf = window.adf || {};
    window.adf.Params = window.adf.Params || {};

    // =========================
    // ORDER STRUCTURE
    // =========================
    window.adf.Order = {
        //sales: atc.product_price,
        currency: "CZK",
        //basketsize: 1,
        //country: "CZ",
        //orderid: "ATC_" + Date.now(),
        //gender: "",
        //agegroup: "",
        itms: [
            {
                productid: atc.product_id || "",
                productname: b.vfcz__normalized_page_name,
                productcount: 1,
                productsales: atc.product_price,
                step: "2",
            }
        ],
        sv1: b.vfcz__customer_type,
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
        var99: "UID279"
    };

    // =========================
    // PARAMS
    // =========================
    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = "add_to_cart";

    // =========================
    // FIRE
    // =========================
    try {

        window.adf.track("1002290", "");

        // optional cleanup
        // sessionStorage.removeItem("pending_atc");

    } catch (e) {
    }
}


(function () {
    document.addEventListener("click", function (e) {
        var link = e.target.closest("a");

        if (!link || !link.href) return;

        if (link.href.includes("kosik/?cart=add")) {
            fireAdformLeadFallback();
        }
    });
})();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['tealium_event_variant']=='lead_cbu'||b['tealium_event_variant']=='lead_vbu'||b['page_name']=='Osobni:Internet:Pevny internet:overeno-s-cislem'||b['page_name']=='Podnikatele:Internet:overeno-s-cislem'||b['page_name']=='Osobni:Internet:Prevod Internetu:overeno-s-cislem'){
function fireAdformLeadFallback(eventTrigger) {

    var atc = {
        product_id: b.product_name || [],
        product_name: b.product_name || [],
        product_price: b.product_price || ""
    };

    console.log("ADF b:", b);

    if (!window.adf) {
        return;
    }

    if (typeof window.adf.track !== "function") {
        return;
    }

    window.adf.Params = window.adf.Params || {};

    window.adf.Order = {
        sales: b.vfcz__lead_value,
        currency: "CZK",
        itms: [
            {
                productid: atc.product_id[0] || "",
                productname: atc.product_name[0] || "",
                productcount: 1,
                step: "2"
            }
        ],
        sv1: b.vfcz__customer_type,
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
        var99: "UID245"
    };

    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = eventTrigger;

    try {
        window.adf.track("1002290", "");
    } catch (e) {
        console.error("ADF ERROR:", e);
    }
}

fireAdformLeadFallback(b.tealium_event_variant);

    if(sessionStorage.getItem('bu') === 'VBU'){
        
        if(window.location.href.includes('eshop/kosik')){
            fireAdformLeadFallback("lead");
            //Google Ads lead event in business cart - s.r.o.
              gtag('event', 'conversion', {
                 'send_to': 'AW-783190867/gEtFCNbY3LYZENOWuvUC',
                 'value': b.vfcz__lead_value,
                 'currency': 'CZK',
                 'page_path': b.vfcz__normalized_pathname,
                 'vfcz__customer_type': 'VBU',
              });
        }
        
        if(window.location.href.includes('eshop/podnikatele/kosik')){
            fireAdformLeadFallback("purchase");
            //Google Ads lead event in business cart - s.r.o.
              gtag('event', 'conversion', {
                 'send_to': 'AW-783190867/2jZhCLfL3LYZENOWuvUC',
                 'value': b.vfcz__lead_value,
                 'currency': 'CZK',
                 'page_path': b.vfcz__normalized_pathname,
                 'vfcz__customer_type': 'VBU',
              });
        }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['tealium_event']=='lead'){
function fireAdformLeadFallback() { 
 
    var atc = {
        product_id: b.product_name || [],
        product_name: b.product_name || [],
        product_price: b.product_price || ""
    };

    // =========================
    // CHECK ADF
    // =========================
    if (!window.adf) {
        return;
    }

    if (typeof window.adf.track !== "function") {
        return;
    }

    // =========================
    // INIT
    // =========================
    window.adf = window.adf || {};
    window.adf.Params = window.adf.Params || {};

    // =========================
    // ORDER STRUCTURE
    // =========================
    window.adf.Order = {
        sales: b.vfcz__lead_value,
        currency: "CZK",
        //basketsize: 1,
        //country: "CZ",
        //orderid: "ATC_" + Date.now(),
        //gender: "",
        //agegroup: "",
        itms: [
            {
                productid: atc.product_id[0] || "",
                productname: atc.product_name[0] || "",
                productcount: 1,
                //productsales: atc.product_price,
                step: "2"
            }
        ],
        sv1: b.vfcz__customer_type,
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
        var99: "UID251"
    };

    // =========================
    // PARAMS
    // =========================
    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = "lead";

    // =========================
    // FIRE
    // =========================
    try {

        window.adf.track("1002290", "");

        // optional cleanup
        // sessionStorage.removeItem("pending_atc");

    } catch (e) {
    }
}

fireAdformLeadFallback();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['cp.vfconsents'].toString().indexOf('mktg:i')>-1){
(function () {

  // -----------------------------
  // STATE INIT
  // -----------------------------
  window.engagementState = window.engagementState || {};

  // -----------------------------
  // TIMER INIT (10s / 30s)
  // -----------------------------
  if (!window.engagementTimersStarted) {
    window.engagementTimersStarted = true;

    setTimeout(function () {
      window.engagementState.tenSec = true;
    }, 10000);

    setTimeout(function () {
      window.engagementState.thirtySec = true;
    }, 30000);
  }

  // -----------------------------
  // DISPATCH LOOP (SAFE SINGLETON)
  // -----------------------------
  if (!window.engagementIntervalStarted) {
    window.engagementIntervalStarted = true;

    var intervalId = setInterval(function () {

      try {

        // safety check: utag existence
        if (typeof window.utag === "undefined" || typeof window.utag.link !== "function") {
//          console.warn("[ENGAGEMENT] utag.link not ready yet");
          return;
        }

        // -----------------------------
        // 10s conversion
        // -----------------------------
        if (window.engagementState.tenSec && !window.engagementState.sent10) {
          window.engagementState.sent10 = true;

//          console.log("[ENGAGEMENT] firing 10s conversion - new");
          
          
          //sending configuration start
          window.sendEngagementEvent({
            //tealiumEvent: "engagement_10_sec_delay",
            googleAdsLabel: "mV7iCJGTha8cENOWuvUC",
            //fbEvent: "QualityVisit_10s",
            bingEvent: "quality_visit_10s",
            adformEvent: "quality_visit_10s"
          });
          //sending configuration end

/*
          window.utag.view({
            tealium_event: "engagement_10_sec_delay",
            engagement_type: "10s"
          });
           gtag('event', 'conversion', {
               'send_to': 'AW-783190867/mV7iCJGTha8cENOWuvUC',
               'value': 1.0,
               'currency': 'USD'
            });
*/
        }

        // -----------------------------
        // 30s conversion
        // -----------------------------
        if (window.engagementState.thirtySec && !window.engagementState.sent30) {
          window.engagementState.sent30 = true;

//          console.log("[ENGAGEMENT] firing 30s conversion");

          
          //sending configuration start
          window.sendEngagementEvent({
            //tealiumEvent: "engagement_30_sec_delay",
            googleAdsLabel: "AjC8CPrnnq8cENOWuvUC",
            //fbEvent: "QualityVisit_30s",
            bingEvent: "quality_visit_30s",
            adformEvent: "quality_visit_30s"
          });
          //sending configuration end
        }

        // -----------------------------
        // auto-stop interval when done
        // -----------------------------
        if (window.engagementState.sent10 && window.engagementState.sent30) {
//          console.log("[ENGAGEMENT] all conversions sent, clearing interval");
          clearInterval(intervalId);
          window.engagementIntervalStarted = false;
        }

      } catch (e) {
//        console.error("[ENGAGEMENT] error in interval:", e);
      }

    }, 1000);
  }
//b.google_conversion_label = google_conversion_label;
})();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['cp.vfconsents'].toString().indexOf('mktg:i')>-1&&b['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase()&&b['vfcz__lead_type'].toString().toLowerCase().indexOf('CBU'.toLowerCase())>-1&&b['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())<0)){
//Google Ads Add to Cart event
  gtag('event', 'conversion', {
     'send_to': 'AW-783190867/dPYwCKj5na8cENOWuvUC',
     'value': b.vfcz__lead_value,
     'currency': 'CZK',
     'page_path': b.vfcz__normalized_pathname,
     'vfcz__customer_type': b.vfcz__customer_type,
  });
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['cp.vfconsents'].toString().indexOf('mktg:i')>-1&&b['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase()&&b['vfcz__lead_type'].toString().toLowerCase().indexOf('VBU'.toLowerCase())>-1&&b['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())<0)){
//Google Ads Add to Cart event
  gtag('event', 'conversion', {
     'send_to': 'AW-783190867/rbP5CLe7na8cENOWuvUC',
     'value': b.vfcz__lead_value,
     'currency': 'CZK',
     'page_path': b.vfcz__normalized_pathname,
     'vfcz__customer_type': b.vfcz__customer_type,
  });
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((b['cp.vfconsents'].toString().indexOf('mktg:i')>-1&&b['page_name'].toString().toLowerCase()=='Osobni:eShop:Objednavka:Dekujeme'.toLowerCase()&&b['vfcz__lead_type'].toString().toLowerCase().indexOf('VBU'.toLowerCase())>-1&&b['survey_products'].toString().toLowerCase().indexOf('lead'.toLowerCase())>-1&&b['page_events'].toString().indexOf('purchase')>-1)){
//Adform "purchase"
function fireAdformAddToCartFallback() {
    // =========================
    // SESSION STORAGE
    // =========================
    var raw = sessionStorage.getItem("pending_atc");

    if (!raw) {
        return;
    }

    // =========================
    // PARSE STORAGE
    // =========================
    var stored;

    try {
        stored = JSON.parse(raw);
    } catch (e) {
        return;
    }

    // =========================
    // NORMALIZED DATA
    // =========================
    var atc = {
        product_id: stored.product_id || "",
        product_name: stored.product_name || "",
        product_price: stored.product_price || ""
    };

    // =========================
    // CHECK ADF
    // =========================
    if (!window.adf) {
        return;
    }

    if (typeof window.adf.track !== "function") {
        return;
    }

    // =========================
    // INIT
    // =========================
    window.adf = window.adf || {};
    window.adf.Params = window.adf.Params || {};

    // =========================
    // ORDER STRUCTURE
    // =========================
    window.adf.Order = {
        sales: "2000",
        currency: "CZK",
        basketsize: 1,
        country: "CZ",
        gender: "",
        agegroup: "",
        itms: [
            {
                productid: atc.product_id,
                productname: atc.product_name,
                productcount: 1,
                productsales: "2000",
                step: "2"
            }
        ],
        sv1: "VBU",
        sv2: b.vfcz__normalized_page_name,
        sv3: b.vfcz__normalized_pathname,
        var99: "UID291"
    };

    // =========================
    // PARAMS
    // =========================
    window.adf.Params.pm = "1002290";
    window.adf.Params.Divider = "|";
    window.adf.Params.PageName = "lead";

    // =========================
    // FIRE
    // =========================
    try {

        window.adf.track("1002290", "");

        // optional cleanup
        // sessionStorage.removeItem("pending_atc");

    } catch (e) {
    }
}

fireAdformAddToCartFallback();

//BING

  window.uetq = window.uetq || [];
  window.uetq.push("event", "lead", {
    revenue_value: "2000",
    currency: "CZK"
  });
 
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
// Based on request by DENTSU Agency
// The goal is to extend the set of tracked touch points in order to create "enagement" signals
// These engagement signals will be used as triggers for soft conversion tracking
(function () {

  var KEY = "page_view_count_session";

  var count = parseInt(sessionStorage.getItem(KEY) || "0", 10);

  count++;

  sessionStorage.setItem(KEY, count);

  if (count === 2) {
      window.sendEngagementEvent({
        tealiumEvent: "engagement_2_pages",
        googleAdsLabel: "ZUDgCJaMn68cENOWuvUC",
        fbEvent: "EngagedSession",
        bingEvent: "engaged_session",
        adformEvent: "engaged_session"
      });
    
  }
})();
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
b['chat_rules_launched'] = 'true';
utag.data['chat_rules_launched'] = 'true';
} } catch(e){ utag.DB(e) }  },
function(a,b){
if ((typeof b.page_banner_impression !== "undefined") && (typeof tealium_s.list1 !== "undefined")) {
  if (b.page_banner_impression == tealium_s.list1 ) {
     tealium_s.list1 = s.list1 = "";
     utag.data.page_banner_impression = "";
  } 
}if ((typeof b.page_form_error_fields !== "undefined") && (typeof tealium_s.list2 !== "undefined")) {
  if (b.page_form_error_fields == tealium_s.list2 ) {
     tealium_s.list2 = s.list2  = "";
     utag.data.page_form_error_fields = "";
  } 
}
if ((typeof b.sales_products !== "undefined") && (typeof tealium_s.products !== "undefined")) {
  if (b.sales_products == tealium_s.products ) {
     utag.data["survey_products"] = b.sales_products; 
     tealium_s.products = ""; 
     s.products = ""; 
     utag.data["sales_products"] = "";
     adf_products = "";
  } 
}
if ((typeof utag.data["page_events"] !== "undefined") && (typeof s.events !== "undefined")) {
  if (utag.data["page_events"] == s.events ) {
   //utag.data["survey_events"] = utag.data["page_events"];
     if (/event14(6|7)/.test(utag.data["page_events"])) {
       utag.data["survey_topic_events"] = utag.data["page_events"];
     } 
     tealium_s.events = ""; 
     s.events = ""; 
     b.page_events = "";
     utag.data["page_events"] = "";
     b.event_name = "";
     utag.data["event_name"] = "";
  } 
}
if ((typeof b.sales_order_id !== "undefined") && (typeof tealium_s.purchaseID !== "undefined")) {
  if (b.sales_order_id == tealium_s.purchaseID ) {
     tealium_s.purchaseID = s.purchaseID = ""; 
  } 
}
if ((typeof b.campaign_id !== "undefined") && (typeof tealium_s.campaign !== "undefined")) {
  if (b.campaign_id == tealium_s.campaign ) {
     tealium_s.campaign = s.campaign = ""; 
  } 
}
if ((typeof b.campaign_id_history !== "undefined") && (typeof tealium_s.eVar17 !== "undefined")) {
  if (b.campaign_id_history == tealium_s.eVar17 ) {
     tealium_s.eVar17 = s.eVar17 = "";
  } 
}
if ((typeof b.journey_name !== "undefined") && (typeof tealium_s.eVar18 !== "undefined")) {
  if (b.journey_name == tealium_s.eVar18 ) {
     tealium_s.eVar18 = s.eVar18 = ""; 
     utag.data["journey_name"] = "";
  } 
}
if ((typeof b.journey_type !== "undefined") && (typeof tealium_s.eVar19 !== "undefined")) {
  if (b.journey_type == tealium_s.eVar19 ) {
     tealium_s.eVar19 = s.eVar19 = ""; 
     utag.data["journey_type"] = "";
  } 
}
if ((typeof b.campaign_internal_id !== "undefined") && (typeof tealium_s.eVar27 !== "undefined")) {
  if (b.campaign_internal_id == tealium_s.eVar27 ) {
     tealium_s.eVar27 = s.eVar27 = ""; 
  } 
}
if ((typeof b.sales_shop_product_filter_evar !== "undefined") && (typeof tealium_s.eVar30 !== "undefined")) {
  if (b.sales_shop_product_filter_evar == tealium_s.eVar30 ) {
     tealium_s.eVar30 = s.eVar30 = ""; 
  } 
}
if ((typeof b.sales_topup_number !== "undefined") && (typeof tealium_s.eVar32 !== "undefined")) {
  if (b.sales_topup_number != tealium_s.eVar32 ) {
     tealium_s.eVar32 = s.eVar32 = ""; 
  } 
}
if ((typeof b.visitor_email_id !== "undefined") && (typeof tealium_s.eVar43 !== "undefined")) {
  if (b.visitor_email_id == tealium_s.eVar43 ) {
     tealium_s.eVar43 = s.eVar43 = ""; 
  } 
}
if ((typeof b.chat_agent_name !== "undefined") && (typeof tealium_s.eVar44 !== "undefined")) {
  if (b.chat_agent_name == tealium_s.eVar44 ) {
     tealium_s.eVar44 = s.eVar44 = ""; 
  } 
}
if ((typeof b.chat_chat_id !== "undefined") && (typeof tealium_s.eVar45 !== "undefined")) {
  if (b.chat_chat_id == tealium_s.eVar45 ) {
     tealium_s.eVar45 = s.eVar45 = ""; 
  } 
}
if ((typeof b.chat_triggering_page !== "undefined") && (typeof tealium_s.eVar47 !== "undefined")) {
  if (b.chat_triggering_page == tealium_s.eVar47 ) {
     tealium_s.eVar47 = s.eVar47 = ""; 
  } 
}
if ((typeof b.chat_closure_reason !== "undefined") && (typeof tealium_s.eVar54 !== "undefined")) {
  if (b.chat_closure_reason == tealium_s.eVar54 ) {
     tealium_s.eVar54 = s.eVar54 = ""; 
  } 
}
if ((typeof b.campaign_channel_history !== "undefined") && (typeof tealium_s.eVar57 !== "undefined")) {
  if (b.campaign_channel_history == tealium_s.eVar57 ) {
     tealium_s.eVar57 = s.eVar57 = ""; 
  } 
}
if ((typeof b.page_ab_testing_id !== "undefined") && (typeof tealium_s.eVar60 !== "undefined")) {
  if (b.page_ab_testing_id == tealium_s.eVar60 ) {
     tealium_s.eVar60 = s.eVar60 = ""; 
  } 
}
if ((typeof b.page_form_fields !== "undefined") && (typeof tealium_s.eVar120 !== "undefined")) {
  if (b.page_form_fields == tealium_s.eVar120 ) {
     tealium_s.eVar120 = s.eVar120 = ""; 
  } 
}
if ((typeof b.campaign_cvm_id !== "undefined") && (typeof tealium_s.eVar127 !== "undefined")) {
  if (b.campaign_cvm_id == tealium_s.eVar127 ) {
     tealium_s.eVar127 = s.eVar127 = ""; 
  } 
}
if ((typeof b.tobi_topic !== "undefined") && (typeof tealium_s.eVar146 !== "undefined")) {
  if (b.tobi_topic == tealium_s.eVar146 ) {
     utag.data["survey_topic"] = tealium_s.eVar146; 
     tealium_s.eVar146 = s.eVar146 = ""; 
  } 
}
if ((typeof b.personalisation_campaign !== "undefined") && (typeof tealium_s.eVar170 !== "undefined")) {
  if (b.personalisation_campaign == tealium_s.eVar170 ) {
     tealium_s.eVar170 = s.eVar170 = ""; 
  } 
}
if ((typeof b.personalisation_experience !== "undefined") && (typeof tealium_s.eVar171 !== "undefined")) {
  if (b.personalisation_experience == tealium_s.eVar171 ) {
     tealium_s.eVar171 = s.eVar171 = ""; 
  } 
}
if ((typeof b.consents_modified !== "undefined") && (typeof tealium_s.eVar240 !== "undefined")) {
  if (b.consents_modified == tealium_s.eVar240 ) {
     tealium_s.eVar240 = s.eVar240 = ""; 
  } 
}
if ((typeof b.search_terms !== "undefined") && (typeof tealium_s.prop1 !== "undefined")) {
  if (b.search_terms == tealium_s.prop1 ) {
     utag.data.search_terms = tealium_s.prop1 = s.prop1 = ""; 
  } 
}
if ((typeof b.search_results !== "undefined") && (typeof tealium_s.prop2 !== "undefined")) {
  if (b.search_results == tealium_s.prop2 ) {
     utag.data.search_results = tealium_s.prop2 = s.prop2 = ""; 
  } 
}
if ((typeof b.search_category !== "undefined") && (typeof tealium_s.prop3 !== "undefined")) {
  if (b.search_category == tealium_s.prop3 ) {
     utag.data.search_category = tealium_s.prop3 = s.prop3 = ""; 
  } 
}
if ((typeof b.search_type !== "undefined") && (typeof tealium_s.prop4 !== "undefined")) {
  if (b.search_type == tealium_s.prop4 ) {
     utag.data.search_type = tealium_s.prop4 = s.prop4 = ""; 
  } 
}
if ((typeof b.page_type !== "undefined") && (typeof tealium_s.prop5 !== "undefined")) {
  if (b.page_type == tealium_s.prop5 ) {
     utag.data.page_type = tealium_s.prop5 = s.prop5 = ""; 
  }
}
if ((typeof b.page_errors !== "undefined") && (typeof tealium_s.prop16 !== "undefined")) {
  if (b.page_errors == tealium_s.prop16 ) {
     utag.data.page_errors = tealium_s.prop16 = s.prop16 = ""; 
  }
}
if ((typeof b.page_folds_seen_available !== "undefined") && (typeof tealium_s.prop28 !== "undefined")) {
  if (b.page_folds_seen_available == tealium_s.prop28 ) {
     utag.data.page_folds_seen_available = tealium_s.prop28 = s.prop28 = ""; 
  } 
}
if ((typeof b.page_scroll_percent !== "undefined") && (typeof tealium_s.prop42 !== "undefined")) {
  if (b.page_scroll_percent == tealium_s.prop42 ) {
     utag.data.page_scroll_percent = tealium_s.prop42 = s.prop42 = ""; 
  } 
}
if ((typeof b.service_article_name !== "undefined") && (typeof tealium_s.eVar65 !== "undefined")) {
  if (b.service_article_name == tealium_s.eVar65 ) {
     utag.data.service_article_name = tealium_s.eVar65 = s.eVar65 = ""; 
  } 
}
if ((typeof b.page_previous_scroll !== "undefined") && (typeof tealium_s.prop71 !== "undefined")) {
  if (b.page_previous_scroll == tealium_s.prop71 ) {
     utag.data.page_previous_scroll = tealium_s.prop71 = s.prop71 = ""; 
  } 
}
if (typeof utag.data.s_abort !== "undefined") {
  delete utag.data.s_abort; 
}
// Universal suite cleaning
if ((typeof b.page_folds_seen_available !== "undefined") && (typeof tealium_s.prop48 !== "undefined")) {
  if (b.page_folds_seen_available == tealium_s.prop48 ) {
     utag.data.page_folds_seen_available = tealium_s.prop48 = s.prop48 = ""; 
  } 
}
if ((typeof b.page_scroll_percent !== "undefined") && (typeof tealium_s.prop18 !== "undefined")) {
  if (b.page_scroll_percent == tealium_s.prop18 ) {
     utag.data.page_scroll_percent = tealium_s.prop18 = s.prop18 = ""; 
  } 
}
},
function(a,b){ try{ if(1){
if (utag.cond[66] === 1) {
    if (('undefined' !== typeof window.analyticsData) && (window.analyticsData.length > 0)) {
        window.analyticsData.shift();
        if (window.analyticsData.length > 0) {
            processFirstAnalyticsCallInStack();
        }    
    }
}    
} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"id":"44","end":0,"blr":1,"alr":0,"bwq":0},{"end":0,"id":"6","blr":1,"alr":0,"bwq":0},{"end":0,"id":"136","blr":1,"alr":0,"bwq":0},{"blr":1,"end":0,"id":"49","alr":0,"bwq":0},{"bwq":0,"alr":0,"end":0,"id":"131","blr":1},{"bwq":0,"alr":0,"id":"25","end":0,"blr":1},{"end":0,"id":"10","blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":0,"end":0,"id":"21","blr":1},{"bwq":0,"alr":0,"blr":1,"end":0,"id":"4"},{"bwq":0,"alr":0,"id":"26","end":0,"blr":1},{"bwq":0,"alr":0,"end":0,"id":"123","blr":1},{"end":0,"blr":1,"id":"50","alr":0,"bwq":0},{"end":0,"id":"67","blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":0,"id":"72","end":0,"blr":1},{"end":0,"id":"107","blr":1,"alr":0,"bwq":0},{"blr":1,"end":0,"id":"85","alr":0,"bwq":0},{"id":"197","end":0,"blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":0,"id":"182","end":0,"blr":1},{"bwq":0,"alr":0,"id":"98","end":0,"blr":1},{"end":0,"blr":1,"id":"90","alr":0,"bwq":0},{"blr":1,"end":0,"id":"129","alr":0,"bwq":0},{"bwq":0,"alr":0,"end":0,"id":"139","blr":1},{"bwq":0,"alr":0,"id":"147","end":0,"blr":1},{"bwq":0,"alr":0,"end":0,"id":"165","blr":1},{"bwq":0,"alr":0,"end":0,"blr":1,"id":"18"},{"bwq":0,"alr":0,"end":0,"id":"192","blr":1},{"bwq":0,"alr":0,"end":0,"id":"205","blr":1},{"bwq":0,"alr":0,"blr":1,"end":0,"id":"243"},{"end":0,"id":"236","blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":0,"end":0,"id":"250","blr":1},{"bwq":0,"alr":0,"id":"257","end":0,"blr":1},{"blr":1,"end":0,"id":"258","alr":0,"bwq":0},{"end":0,"id":"278","blr":1,"alr":0,"bwq":0},{"bwq":0,"alr":0,"id":"241","end":0,"blr":1},{"bwq":0,"alr":0,"id":"231","end":0,"blr":1},{"end":0,"blr":1,"id":"292","alr":0,"bwq":0},{"blr":1,"end":0,"id":"286","alr":0,"bwq":0},{"bwq":0,"alr":0,"end":0,"id":"287","blr":1},{"bwq":0,"alr":1,"id":"31","end":0,"blr":0},{"blr":0,"end":0,"id":"41","alr":1,"bwq":0},{"bwq":0,"alr":1,"end":0,"blr":0,"id":"33"},{"bwq":0,"alr":1,"end":0,"id":"127","blr":0},{"blr":0,"end":0,"id":"117","alr":1,"bwq":0},{"bwq":0,"alr":1,"blr":0,"end":0,"id":"102"},{"bwq":0,"alr":1,"id":"153","end":0,"blr":0},{"bwq":0,"alr":1,"end":0,"id":"161","blr":0},{"bwq":0,"alr":1,"id":"133","end":0,"blr":0},{"end":0,"blr":0,"id":"162","alr":1,"bwq":0},{"end":0,"id":"156","blr":0,"alr":1,"bwq":0},{"end":0,"id":"157","blr":0,"bwq":0,"alr":1},{"bwq":0,"alr":1,"end":0,"id":"234","blr":0},{"bwq":0,"alr":1,"blr":0,"end":0,"id":"279"},{"end":0,"blr":0,"id":"245","alr":1,"bwq":0},{"blr":0,"end":0,"id":"251","alr":1,"bwq":0},{"bwq":0,"alr":1,"end":0,"id":"209","blr":0},{"alr":1,"bwq":0,"end":0,"blr":0,"id":"288"},{"id":"289","end":0,"blr":0,"alr":1,"bwq":0},{"end":0,"id":"291","blr":0,"bwq":0,"alr":1},{"end":1,"id":"215","blr":0,"alr":0,"bwq":0},{"end":1,"blr":0,"id":"68","alr":0,"bwq":0},{"end":1,"blr":0,"id":"1","alr":0,"bwq":0},{"bwq":0,"alr":0,"end":1,"blr":0,"id":"125"}];
if (utag.gdpr) {    var consentEnabled = false;    var preferencesEnabled = false;    var doNotSellEnabled = false;    utag.gdpr.doNotSell = utag.gdpr.doNotSell || {};    utag.gdpr.preferences_prompt = utag.gdpr.preferences_prompt || {};    utag.gdpr.consent_prompt = utag.gdpr.consent_prompt || {};    utag.gdpr.applyConsentState = function () {        var enforcementMode = utag.gdpr.getEnforcementMode();        if (enforcementMode === 'none')            return;        utag.DB('Consent Manager: Applying consent');        try {            var i, lc = utag.loader.cfg, cs = utag.gdpr.getConsentState(), ot = utag.gdpr.omittedTags || {};            if (typeof cs === 'number') {                if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!consentEnabled && preferencesEnabled && enforcementMode === 'opt-in') && (parseInt(cs) === -1 || parseInt(cs) === 0))) {                    utag.DB('Consent Manager: Setting all tags to off');                    for (i in utag.loader.GV(lc)) {                        if (typeof ot[i] === 'undefined') {                            lc[i].load = 0;                        }                    }                }            } else if (((utag.gdpr.consent_prompt.isEnabled || utag.gdpr.preferences_prompt.isEnabled) || (!consentEnabled && preferencesEnabled)) && enforcementMode === 'opt-in') {                utag.DB('Consent Manager: Partial Consent');                for (i in utag.loader.GV(lc)) {                    if (typeof ot[i] === 'undefined') {                        if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct != '1') {                            lc[i].load = 0;                        }                    }                }            }            var btl = utag.gdpr.dns ? utag.gdpr.dns.getBlockedDnsTagLookup() : null;            utag.DB('Consent Manager: Do Not Sell Tags');            if (enforcementMode === 'opt-out' && btl) {                for (i in utag.loader.GV(lc)) {                    if (parseInt(btl[i]) === 1) {                        lc[i].load = 0;                    }                }            }            try {                if (window.tealiumConsentRegister && window.tealiumConsentRegister.currentDecision === null) {                    var cookieValues = utag.gdpr.getCookieValues();                    var hasDnsCookie = typeof cookieValues.dns === 'string';                    var hasConsentCookie = typeof cookieValues.consent === 'string';                    var decisionType = (enforcementMode === 'opt-in' && hasConsentCookie) || (enforcementMode === 'opt-out' && hasDnsCookie) ? 'explicit' : 'implicit';                    var decision = (decisionType === 'implicit' && enforcementMode === 'opt-in') ? [] : utag.gdpr.getSelectedCategories();                    decision.unshift('always_on');                    decision.type = decisionType;                    window.tealiumConsentRegister.addConsentDecision(decision);                }            } catch (e) {                utag.DB(e);            }        } catch (e) {            utag.DB(e);        }    };    utag.gdpr.promptEnabledSetting = function() {        if (!utag.gdpr.dr && (utag.cfg.readywait || utag.cfg.waittimer)) {            utag.gdpr.dr = 1;            return;        }        utag.gdpr.consent_prompt.wasInitiallyEnabled = consentEnabled;        utag.gdpr.preferences_prompt.wasInitiallyEnabled = preferencesEnabled;        utag.gdpr.doNotSell.wasInitiallyEnabled = doNotSellEnabled;        if (consentEnabled === true && !(1)) {            utag.gdpr.consent_prompt.isEnabled = false;        }        if (preferencesEnabled === true && (consentEnabled === true && !(1))) {            utag.gdpr.preferences_prompt.isEnabled = false;        }        if (doNotSellEnabled === true && !(1)) {            utag.gdpr.doNotSell.isEnabled = false;        }        if (preferencesEnabled === true && consentEnabled === false && !(1)) {            utag.gdpr.preferences_prompt.isEnabled = true;        }    };    var splitGdprModules = false;    if (typeof utag.gdpr.getEnforcementMode !== 'function') {        splitGdprModules = true;    }    utag.gdpr.getEnforcementMode = function() {        utag.gdpr.promptEnabledSetting();        var optInModulesAreActive = (utag.gdpr.consent_prompt && utag.gdpr.consent_prompt.isEnabled === true);        var optOutModuleIsActive = (utag.gdpr.doNotSell && utag.gdpr.doNotSell.isEnabled === true);        var optInPreferencesOnly = (!optInModulesAreActive && !utag.gdpr.consent_prompt.wasInitiallyEnabled && utag.gdpr.preferences_prompt.wasInitiallyEnabled && !optOutModuleIsActive) || (splitGdprModules && utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.wasInitiallyEnabled);        var enforcementMode = 'opt-in';        if (optOutModuleIsActive && !optInModulesAreActive)            enforcementMode = 'opt-out';        if (!optOutModuleIsActive && optInPreferencesOnly)            enforcementMode = 'opt-in';        if (!optOutModuleIsActive && !optInModulesAreActive && !optInPreferencesOnly)            enforcementMode = 'none';        return enforcementMode;    };}  utag.loader.initcfg = function(){
    utag.loader.cfg={"179":{load:4,send:(((utag.cond[81])  &&  (utag.cond[56])  &&  (utag.cond[118])  &&  (utag.cond[55])  &&  (utag.cond[70])  &&  (utag.cond[97])  &&  (utag.cond[96]))),v:202408211500,wait:0,tid:7143},"270":{load:((((utag.cond[67])  &&  (utag.cond[144])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202607201127,wait:0,tid:1157},"278":{load:((((utag.cond[67])  &&  (utag.cond[142])) && !(utag.cond[144] || utag.cond[148] || utag.cond[149] || utag.cond[150] || utag.cond[146]))),send:1,v:202606170918,wait:0,tid:1157},"277":{load:((((utag.cond[67])  &&  (utag.cond[159])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202607201127,wait:0,tid:1157},"279":{load:((((utag.cond[67])  &&  (utag.cond[157])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202607201127,wait:0,tid:1157},"280":{load:((((utag.cond[67])  &&  (utag.cond[160])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202608120749,wait:0,tid:1157},"281":{load:((((utag.cond[67])  &&  (utag.cond[161])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202608171406,wait:1,tid:1157},"282":{load:((((utag.cond[67])  &&  (utag.cond[162])) && !(utag.cond[148] || utag.cond[149] || utag.cond[150]))),send:1,v:202608171406,wait:1,tid:1157},"167":{load:(((utag.cond[71])  &&  (utag.cond[66])  &&  (utag.cond[93])  &&  (utag.cond[103])  &&  (utag.cond[4]))),send:1,v:202606151011,wait:1,tid:19063},"103":{load:(utag.cond[81] && utag.cond[118] && utag.cond[55] && utag.cond[80] && utag.cond[127] && utag.cond[70] && utag.cond[56] && utag.cond[67]),send:1,v:202606151308,wait:1,tid:1157},"44":{load:(utag.cond[9] && utag.cond[124] && utag.cond[46]),send:1,v:202108101315,wait:1,tid:20067},"168":{load:(utag.cond[19] && utag.cond[124] && utag.cond[46]),send:1,v:202108101315,wait:1,tid:20067},"140":{load:((((utag.cond[81])  &&  (utag.cond[56])  &&  (utag.cond[118])  &&  (utag.cond[55])  &&  (utag.cond[70])  &&  (utag.cond[97])  &&  (utag.cond[96])  &&  (utag.cond[67])) && !(utag.cond[143]))),send:1,v:202608120928,wait:1,tid:7132},"76":{load:(utag.cond[70] && utag.cond[30]),send:1,v:202109161555,wait:1,tid:20010},"96":{load:(utag.cond[81] && utag.cond[56] && utag.cond[118] && utag.cond[55] && utag.cond[80] && utag.cond[120] && utag.cond[71] && utag.cond[72] && utag.cond[70] && utag.cond[66] && utag.cond[67] && utag.cond[100]),send:1,v:202009251715,wait:1,tid:20010},"154":{load:utag.cond[44],send:1,v:202010291640,wait:1,tid:20010,src:"//cdn.cpex.cz/aam/aam_aam-sasci360-edition.js"},"97":{load:(utag.cond[70] && utag.cond[45] && utag.cond[67]),send:1,v:202608120834,wait:1,tid:20067},"118":{load:(((utag.cond[70])  &&  (utag.cond[61])  &&  (utag.cond[76])  &&  (utag.cond[69])  &&  (utag.cond[68])  &&  (utag.cond[82])  &&  (utag.cond[77])  &&  (utag.cond[89])  &&  (utag.cond[20])  &&  (utag.cond[122]))),send:1,v:202509290545,wait:1,tid:20067},"119":{load:(utag.cond[70] && utag.cond[76] && utag.cond[69] && utag.cond[68] && utag.cond[82] && utag.cond[77] && utag.cond[89] && utag.cond[24]),send:1,v:202509251423,wait:1,tid:20067},"122":{load:(((utag.cond[70])  &&  (utag.cond[76])  &&  (utag.cond[69])  &&  (utag.cond[68])  &&  (utag.cond[82])  &&  (utag.cond[77])  &&  (utag.cond[89])  &&  (utag.cond[23]))),send:1,v:202510080836,wait:1,tid:20067},"123":{load:(utag.cond[70] && utag.cond[76] && utag.cond[69] && utag.cond[68] && utag.cond[82] && utag.cond[77] && utag.cond[89] && utag.cond[25]),send:1,v:202509251423,wait:1,tid:20067},"141":{load:utag.cond[88],send:1,v:202509251423,wait:1,tid:20067},"121":{load:(utag.cond[64] && utag.cond[67]),send:1,v:201805140906,wait:1,tid:20067},"137":{load:(utag.cond[85] && utag.cond[67]),send:1,v:201808290928,wait:1,tid:20078},"133":{load:(utag.cond[83] && utag.cond[67]),send:1,v:201808290928,wait:1,tid:20078},"134":{load:(utag.cond[84] && utag.cond[66] && utag.cond[47]),send:1,v:202002061310,wait:1,tid:8009},"152":{load:(utag.cond[101] && utag.cond[66]),send:1,v:202004091638,wait:1,tid:8009},"142":{load:(utag.cond[91] && utag.cond[90] && utag.cond[95] && utag.cond[71] && utag.cond[72] && utag.cond[66] && utag.cond[92] && utag.cond[112] && utag.cond[67]),send:1,v:202112031223,wait:1,tid:20010},"143":{load:(((utag.cond[91])  &&  (utag.cond[90])  &&  (utag.cond[19])  &&  (utag.cond[71])  &&  (utag.cond[72])  &&  (utag.cond[70])  &&  (utag.cond[66])  &&  (utag.cond[112])  &&  (utag.cond[67])  &&  (utag.cond[92]))),send:1,v:202606241125,wait:1,tid:20010},"151":{load:(((utag.cond[71])  &&  (utag.cond[72])  &&  (utag.cond[66])  &&  (utag.cond[74]))),send:1,v:202512121523,wait:1,tid:20010},"157":{load:(utag.cond[113] && utag.cond[107]),send:1,v:202001131132,wait:1,tid:20103},"161":{load:(utag.cond[81] && utag.cond[56] && utag.cond[118] && utag.cond[55] && utag.cond[80] && utag.cond[108] && utag.cond[70] && utag.cond[67]),send:1,v:202112231402,wait:1,tid:20067},"162":{load:(utag.cond[109] && utag.cond[70] && utag.cond[81] && utag.cond[56] && utag.cond[118] && utag.cond[55] && utag.cond[80] && utag.cond[67] && utag.cond[126] && utag.cond[105]),send:1,v:202603101058,wait:1,tid:20067},"163":{load:((utag.cond[115])),send:1,v:202604161149,wait:1,tid:20067},"164":{load:(utag.cond[119] && utag.cond[102]),send:1,v:202004080909,wait:1,tid:20010},"165":{load:utag.cond[116],send:1,v:202509251423,wait:1,tid:20067},"166":{load:utag.cond[117],send:1,v:202607071456,wait:1,tid:20067},"90":{load:(((utag.cond[52])  &&  (utag.cond[72])  &&  (utag.cond[65])  &&  (utag.cond[35]))),send:1,v:202511141612,wait:1,tid:20010},"116":{load:(((utag.cond[52])  &&  (utag.cond[72])  &&  (utag.cond[62])  &&  (utag.cond[78])  &&  (utag.cond[139]))),send:0,v:202511141612,wait:1,tid:20010},"170":{load:(((utag.cond[81])  &&  (utag.cond[118])  &&  (utag.cond[55])  &&  (utag.cond[72])  &&  (utag.cond[70])  &&  (utag.cond[67])  &&  (utag.cond[21]))),send:1,v:202607121948,wait:1,tid:6037},"172":{load:1,send:1,v:202512121523,wait:1,tid:20064},"182":{load:((utag.cond[67])),send:1,v:202407190909,wait:1,tid:7127},"198":{load:(((utag.cond[70])  &&  (utag.cond[67])  &&  (utag.cond[10]))),send:1,v:202604240838,wait:1,tid:20010},"263":{load:(((utag.cond[70])  &&  (utag.cond[67])  &&  (utag.cond[10]))),send:1,v:202605130842,wait:1,tid:20010},"228":{load:(((utag.cond[66])  &&  (utag.cond[136]))),send:1,v:202502171258,wait:1,tid:20010},"226":{load:(((utag.cond[66])  &&  (utag.cond[47])  &&  (utag.cond[135]))),send:1,v:202501270945,wait:1,tid:8009},"245":{load:(((utag.cond[66])  &&  (utag.cond[67])  &&  (utag.cond[19])  &&  (utag.cond[70])  &&  (utag.cond[73])  &&  (utag.cond[96])  &&  (utag.cond[81])  &&  (utag.cond[56])  &&  (utag.cond[118])  &&  (utag.cond[55]))),send:1,v:202608191051,wait:1,tid:2063},"260":{load:(((utag.cond[67])  &&  (utag.cond[66])  &&  (utag.cond[19])  &&  (utag.cond[96]))),send:1,v:202604240838,wait:1,tid:19140},"261":{load:(((utag.cond[67])  &&  (utag.cond[66])  &&  (utag.cond[19])  &&  (utag.cond[96]))),send:1,v:202604240838,wait:1,tid:19140},"262":{load:(((utag.cond[67])  &&  (utag.cond[66])  &&  (utag.cond[19])  &&  (utag.cond[96]))),send:1,v:202605130832,wait:1,tid:19140}};
utag.loader.cfgsort=["179","270","278","277","279","280","281","282","167","103","44","168","140","76","96","154","97","118","119","122","123","141","121","137","133","134","152","142","143","151","157","161","162","163","164","165","166","90","116","170","172","182","198","263","228","226","245","260","261","262"];
if (utag.gdpr && utag.gdpr.getEnforcementMode() === 'opt-in') {  Object.keys(utag.loader.cfg).forEach(function (tagId) {      if (utag.loader.cfg[tagId].tcat === 16) {          utag.DB('Consent Manager: Removing uncategorized tag from utag.loader.cfg in opt-in mode: ' + tagId);          delete utag.loader.cfg[tagId];          utag.loader.cfgsort = utag.loader.cfgsort.filter(function(id) {              return id !== tagId;          });       }  })}  }
utag.loader.initcfg();
}

  if (typeof utag_cfg_ovrd != 'undefined') { for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i] };

  if (typeof utag_cfg_ovrd != 'undefined') { for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i] };
  utag.loader.PINIT = function (a, b, c) {
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // blr = "before load rules"
      if (utag.handler.RE('view', utag.data, "blr")) {
        utag.handler.LR(utag.data);
      }

    } catch (e) { utag.DB(e) };
    // process 'blocking' tags (tags that need to run first)
    a = this.cfg;
    c = 0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
        a[b].block = 1;
        c = 1;
        this.bq[b] = 1;
      }
    }
    if (c == 1) {
      for (b in this.GV(a)) {
        if (a[b].block) {
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id = b;
          if (a[b].load == 4) a[b].load = 1;
          a[b].cb = function () {
            var d = this.uid;
            utag.loader.cfg[d].cbf = 1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if (c == 0) this.INIT();
  };
  utag.loader.INIT = function (a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");

    utag.rpt.ts['i'] = new Date();

    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a = 0; a < d.length; a++) {
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if (b.block != 1) {
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
          this.f[b.id] = 0;
          utag.loader.LOAD(b.id)
        } else if (b.wait == 1 && utag.loader.rf == 0) {
          utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id] = 2;
        } else if (b.load > 0) {
          utag.DB('utag.loader.INIT: loading ' + b.id);
          this.lq.push(b);
          this.AS(b);
        }
      }
    }

    if (this.wq.length > 0) utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf = 1;
        utag.loader.WQ();
      }
    });
    else if (this.lq.length > 0) utag.loader.rf = 1;
    else if (this.lq.length == 0) utag.loader.END();

    return 1
  };
utag.loader.EV('', 'ready', function(a) {if(utag.loader.efr!=1){utag.loader.efr=1;try{ try{ if(utag.data['cp.vfconsents'].toString().indexOf('mktg:i')>-1){
document.addEventListener("click", function(e) {
  var link = e.target.closest("a");

  if (!link) return;

  if (link.href && link.href.indexOf("apps.apple.com") > -1) {
    utag.link({
      tealium_event: "engagement_ios_app_click",
      page_name: "iOS:HappyAppExit" //works
    });
    
    
    //extra facebook tracking fallback
    fbq('trackCustom', 'AppDownload', {
        //page_path: b.vfcz__normalized_pathname || '',
        //customer_type: b.vfcz__customer_type || '',
        platform: 'iOS'
    });
    console.log("iOS meta click");
    /*
    gtag('event', 'conversion', {
        'send_to': 'AW-783190867/mI2uCN2V4rYZENOWuvUC'
    });*/

          //sending configuration start
          window.sendEngagementEvent({
            tealiumEvent: "engagement_download_app_ios",
            googleAdsLabel: "mI2uCN2V4rYZENOWuvUC",
            fbEvent: "DownloadIOS",
            bingEvent: "download_app_ios",
            adformEvent: "download_app_ios"
          });
          //sending configuration end
  }

  if (link.href && link.href.indexOf("play.google.com") > -1) {
     
    utag.link({
      tealium_event: "engagement_android_app_click",
      page_name: "Android:HappyAppExit"
    });
    
    
    //extra facebook tracking fallback
    fbq('trackCustom', 'AppDownload', {
        //page_path: b.vfcz__normalized_pathname || '',
        //customer_type: b.vfcz__customer_type || '',
        platform: 'android'
    });
    
          //sending configuration start
          window.sendEngagementEvent({
            tealiumEvent: "engagement_download_app_android",
            googleAdsLabel: "p5bjCKn7na8cENOWuvUC",
            fbEvent: "DownloadAndroid",
            bingEvent: "download_app_android",
            adformEvent: "download_app_android"
          });
          //sending configuration end
  }
});

} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{ try{ if(1){
// Based on request by DENTSU Agency
// The goal is to extend the set of tracked touch points in order to create "enagement" signals
// These engagement signals will be used as triggers for soft conversion tracking

(function () {

  var fired = {};
  var lastPath = location.pathname + location.search;

  function resetFired() {
    fired = {
      25: false,
      50: false,
      75: false,
      100: false
    };
    //console.log("[Tealium Scroll] Reset thresholds for new page:", lastPath);
  }

  function getScrollPercent() {
    var scrollTop = window.scrollY || window.pageYOffset;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return 100;

    return (scrollTop / docHeight) * 100;
  }
/*
  function sendEvent(threshold, googleAdsLabel, fbEvent, bingEvent) {
    //console.log("[Tealium Scroll] Triggered:", threshold + "%");

    utag.view({
        tealium_event: "engagement_scroll_" + threshold,
        scroll_depth: threshold
    });
    //Google Ads
    if (typeof gtag === "function") {
      gtag('event', 'conversion', {
        send_to: 'AW-783190867/' + googleAdsLabel,
        value: 1.0,
        currency: 'USD'
      });
    }
    // Meta Ads
    if (typeof fbq === "function"){
        fbq('trackCustom', fbEvent);
    }
    // Microsoft Ads (Bing)
    if (window.uetq && bingEvent) {
        window.uetq.push('event', bingEvent, {
            revenue_value: 1,
            currency: 'CZK'
        });
    }
        // Adform
    sendAdformEvent("scroll_" + threshold);
  } */

  function checkScroll() {
    var percent = getScrollPercent();

    if (percent >= 25 && !fired[25]) {
      fired[25] = true;
      //sending configuration start
      window.sendEngagementEvent({
        //tealiumEvent: "engagement_scroll_25",
        googleAdsLabel: "O9BLCLqzha8cENOWuvUC",
        //fbEvent: "Scroll_25",
        //bingEvent: "scroll_depth_25",
        adformEvent: "scroll_depth_25"
      });
      //sending configuration end
    }

    if (percent >= 50 && !fired[50]) {
      fired[50] = true;
      //former working solution:
      //sendEvent(50, "R9-bCM2Ln68cENOWuvUC", "Scroll_50", "scroll_depth_50");
      
      //sending configuration start
      window.sendEngagementEvent({
        //tealiumEvent: "engagement_scroll_50",
        googleAdsLabel: "R9-bCM2Ln68cENOWuvUC",
        //fbEvent: "Scroll_50",
        //bingEvent: "scroll_depth_50",
        adformEvent: "scroll_depth_50"
      });
      //sending configuration end
    }

    if (percent >= 75 && !fired[75]) {
      fired[75] = true;
      //sending configuration start
      window.sendEngagementEvent({
        //tealiumEvent: "engagement_scroll_75",
        googleAdsLabel: "xQ1ECPrDha8cENOWuvUC",
        //fbEvent: "Scroll_75",
        //bingEvent: "scroll_depth_75",
        adformEvent: "scroll_depth_75"
      });
      //sending configuration end
    }

    // real-world fallback místo přesných 100 %
    if (percent >= 95 && !fired[100]) {
      fired[100] = true;
      //sending configuration start
      window.sendEngagementEvent({
        //tealiumEvent: "engagement_scroll_100",
        googleAdsLabel: "1odrCLyen68cENOWuvUC",
        //fbEvent: "Scroll_100",
        //bingEvent: "scroll_depth_100",
        adformEvent: "scroll_depth_100"
      });
      //sending configuration end
    }
  }

  // throttle přes requestAnimationFrame
  var ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // SPA route change detection
  function checkRouteChange() {
    var currentPath = location.pathname + location.search;
    if (currentPath !== lastPath) {
      //console.log("[Tealium Scroll] Route change detected:", currentPath);
      lastPath = currentPath;
      resetFired();
    }
  }

  // init
  resetFired();

  window.addEventListener("scroll", onScroll);

  // fallback pro SPA
  setInterval(checkRouteChange, 500);

})();
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{
/*
 * PRE-PROCESSOR METHOD
 * @author: kevin thomas faurholt - tealium, inc.
 *
 * 6. PRE-PROCESSOR : pre-processor init method
 *
 * extension: 6.preprocessor-init-method
 *
 * this method is needed to ensure mutated s.props, s.eVars and events are being properly mutated
 * before the translation layer picks them up and assign them to tealium data sources. the method
 * discussed that might work looks like this:
 *
 * 1. Initialise SiteCat plugins in an All Tags extension
 * 2. Set s.usePlugins=true
 * 3. Read props eVars and events from the page
 * 4. Call doPlugins()
 * 5. Set s.usePlugins=false
 * 6. Translate s.props, eVars and events to data layer again
 *
 * scope: dom ready (important)
 */
// Tealium integration start /////////////////////////////////////////
window.utag.extn = window.utag.extn || {};
window.utag.extn.preprocessor = window.utag.extn.preprocessor || {};
window.utag.extn.preprocessor.copy = window.utag.extn.preprocessor.copy || function(src) {

  // clone method borrowed from dojo toolkit
  // http://download.dojotoolkit.org/release-1.10.1/dojo.js.uncompressed.js

  function mixin(dest, source, copyFunc) {

    var name, s, empty = {};

    for (name in source) {

      /* the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
      inherited from Object.prototype.	 For example, if dest has a custom toString() method,
      don't overwrite it with the toString() method that source inherited from Object.prototype */
      s = source[name];

      if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){

        dest[name] = copyFunc ? copyFunc(s) : s;
      }
    }

    return dest;
  }

  function toType(obj) {

    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  var datatype = toType(src);

  /* null, undefined, any non-object, or function */
  if (!src || typeof src !== "object" || datatype === "function") {

    return src;
  }

  /* dom node */
  if (src.nodeType && "cloneNode" in src) {

    return src.cloneNode(true);
  }

  /* date */
  if (datatype === "date") {

    return new Date(src.getTime());
  }

  /* regexp */
  if (datatype === "regexp") {

    return new RegExp(src);
  }

  var r, i, l;

  /* array */
  if (datatype === "array") {

    r = [];

    for (i = 0, l = src.length; i < l; ++i){

      if (i in src){

        r.push(this.copy(src[i]));
      }
    }
  }
  else {
    /* generic objects */
    r = src.constructor ? new src.constructor() : {};
  }

  return mixin(r, src, this.copy);
};
window.utag.extn.preprocessor.init = window.utag.extn.preprocessor.init || function(pageinstance, processorinstance, targetdata) {

  var targetinstance = {}, property;

  for (property in pageinstance) {

    if (pageinstance.hasOwnProperty(property)) {

      if (typeof pageinstance[property] !== "function") {

        // exception objects we do not want to copy from old object
        if (!/^_/.test(property)) {

          targetinstance[property] = this.copy(pageinstance[property]);
        }
      }
    }
  }

  // copy a fresh processor instance onto data for every call to t and tl
  for (property in processorinstance) {

    if (processorinstance.hasOwnProperty(property)) {

      // page instance properties always wins
      if (targetinstance[property] !== undefined) {

        if (property === "contextData") {

          var contextData;

          for (contextData in processorinstance[property]) {

            if (processorinstance[property].hasOwnProperty(contextData)) {

              if (targetinstance[property][contextData] === undefined) {

                targetinstance[property][contextData] = this.copy(processorinstance[property][contextData]);
              }
            }
          }
        }
      }
      else {

        // do not copy, references are fine here
        targetinstance[property] = processorinstance[property];
      }
    }
  }
  if (typeof targetdata !== "undefined") {
      if (typeof targetdata.link_name !== "undefined") {
          targetinstance.linkName = targetdata.link_name;
      }
      if (typeof targetdata.link_type !== "undefined") {
          targetinstance.linkType = targetdata.link_type;
      }
  }    
  targetinstance.usePlugins = true;
  targetinstance.doPlugins.apply(window, [targetinstance]);
  targetinstance.usePlugins = false;

  if ((typeof targetdata !== "undefined")&&(typeof targetdata.link_name !== "undefined")) {
      targetdata = targetdata || {};

      targetdata.contextData = targetdata.contextData || {};

      if (targetinstance.contextData) {

        for (property in targetinstance.contextData) {

          if (targetinstance.contextData.hasOwnProperty(property)) {

            if (targetdata.contextData[property] === undefined) {

              targetdata.contextData[property] = this.copy(targetinstance.contextData[property]);
            }
          }
        }
      }

      targetdata.events = targetinstance.events || "";

      targetdata.linkTrackVars = targetinstance.linkTrackVars || "None";

      targetdata.linkTrackEvents = targetinstance.linkTrackEvents || "None";

      targetdata.linkInternalFilters = targetinstance.linkInternalFilters || "None";
  }
  // update instance for translation
  window.utag.extn.preprocessor.targetinstance = targetinstance;

  // run the translation layer
  var config = window.utag.extn.translationlayer.config;

  return window.utag.extn.translationlayer.init(config, targetdata);

};

// init on dom ready won't work anymore.
//window.utag.data = window.utag.extn.preprocessor.init(window.s, window.utag.extn.preprocessor.instance, window.utag.data);
// Tealium integration end ///////////////////////////////////////////
}catch(e){utag.DB(e)};
try{ try{ if(1){
if (/prodView/.test(utag.data["js_page.s.events"])||/prodView/.test(s.events)) { 
    utag.data.page_type_marketing = "product page";
}
if (/Vyhledavani/.test(utag.data.page_name)||/Vyhledavani/.test(s.pageName)) { 
    utag.data.page_type_marketing = "search page";
}
if (document.location.pathname==="/") { 
    utag.data.page_type_marketing = "home page";
}
if (/(\?|\&)tc=/.test(document.location.href)) { 
    utag.data.page_type_marketing = "landing page";
}
if (/(scAdd|scOpen|scView|scRemove)/.test(utag.data["js_page.s.events"])||/(scAdd|scOpen|scView|scRemove)/.test(s.events)) { 
    utag.data.page_type_marketing = "basket page";
}
if (/scCheckout/.test(utag.data["js_page.s.events"])||/scCheckout/.test(s.events)) { 
    utag.data.page_type_marketing = "checkout page";
}
} } catch(e){ utag.DB(e) }  }catch(e){utag.DB(e)};
try{
if (utag.cond[66] === 1) {
    window.getDataFromGTM = function () {
        var analyticsDataLocal = {};
        if (!dataLayer[1].ecommerce) {
            analyticsDataLocal.pageName="jobs:homepage";
        } else {
            if (dataLayer[1].ecommerce.detail) {
                analyticsDataLocal.pageName="jobs:product detail";
                analyticsDataLocal.products=dataLayer[1].ecommerce.detail.products[0].name;
                analyticsDataLocal.events="prodView";
            }
            if (dataLayer[1].ecommerce.add) {
                analyticsDataLocal.pageName="jobs:product form view";
                analyticsDataLocal.products=dataLayer[1].ecommerce.add.products[0].name;
                analyticsDataLocal.events="scAdd";        
            }
            if (dataLayer[1].ecommerce.purchase) {
                analyticsDataLocal.pageName="jobs:product form sent";
                analyticsDataLocal.products=dataLayer[1].ecommerce.purchase.products[0].name;
                analyticsDataLocal.events="purchase";        
              }
            if ((typeof analyticsDataLocal.products !== "undefined")&&(analyticsDataLocal.products.length>0)){
                analyticsDataLocal.products = "jobs;"+analyticsDataLocal.products.replace(/,/g,"-")+";1;0";
            }
        }
        if (typeof analyticsDataLocal.pageName === "undefined") {
            analyticsDataLocal.pageName = "jobs:other";
        }    
        analyticsDataLocal.channel="jobs";
        window.analyticsData.push(
            {
                type: 't',
                data: analyticsDataLocal
            }
        )
    }            
    if (/vodafone.jobs.cz/.test(window.location.host)) {        
        if ( dataLayer === 'undefined' ) {
            analyticsLoopsCounter = 0;
            var interval =  setInterval(function(){ 
                if ( dataLayer !== 'undefined' ) {
                    getDataFromGTM();
                    processFirstAnalyticsCallInStack();
                    clearInterval(interval);
                } else {
                    if (++analyticsLoopsCounter>10) {
                        clearInterval(interval);
                    }
                }
            }, 500);
        } else {
            getDataFromGTM();
        }
    } 
    if(('undefined' !== typeof utag.data['site_udl']) && utag.data['site_udl'] !=='native'){
        if (('undefined' === typeof window.analyticsData) || (window.analyticsData.length === 0)) {
           /* if ((typeof utag_data["page_name"] === 'undefined')&&
                 (document.location.host === "www.vodafone.cz")&&(document.location.pathname.indexOf("/muj") === 0)&&(document.location.pathname.indexOf("/prihlaseni") === -1)) {
                switch (document.location.pathname) {
                    case "/muj/": 
                       utag_data["page_name"] = "WSC:Prehled";
                       break;
                    case "/muj/en":    
                       utag_data["page_name"] = "WSC:Home";
                       break;
                   default: 
                    var pageNameStart = document.location.pathname.indexOf("/muj/en/") === 0 ? 8 : 5;
                    utag_data["page_name"] = "WSC";
                    var pageNameElements = document.location.pathname.slice(pageNameStart).split("/");
                    for (i=0; i<pageNameElements.length; i++) {
                        if (isNaN(Number(pageNameElements[i]))) {
                            utag_data["page_name"] += ":"+pageNameElements[i];
                            if (/(prijmuti-pozvanky)|(zobrazit-fakturu)|(validace-emailu)/.test(pageNameElements[i])){
                                break;
                            }
                        }    
                    }
                }    
                utag_data["page_channel"] = "WSC";
                utag_data["page_master_tab"] = pageNameStart === 8 ? "EN" : "CZ";
                utag_data["page_master_tab"] += ":"+utag_data["page_name"].split(":")[1];       
            }*/
            if (!/(^\/muj|^\/pece|^\/IntranetProdejeaPece)/.test(document.location.pathname)) {
                var analyticsDataLocal = {};
                if (typeof utag_data["page_name"] !== 'undefined') {
                    analyticsDataLocal["pageName"] = utag_data["page_name"];
                } else {   
                    analyticsDataLocal["pageName"] = "";
                }    
                window.analyticsData.push(
                    {
                        type: 't',
                        data: analyticsDataLocal
                    }
                );    
            }    
        }
    }    
   
    window.processFirstAnalyticsCallInStack = function () {
        if (('undefined' !== typeof window.analyticsData) && (window.analyticsData.length > 0)) {
        /*for (var j in window.analyticsData) {
            if (!window.analyticsData.hasOwnProperty(j)) {
                continue;
            }*/
            var j=0;          
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
            if ((utag_data["site_udl"] === "translated") && (window.analyticsData[j].type[0] === 't')) {
                window.utag.track(window.analyticsData[j].type === 't' ? "view" : "link", dataprocessed);                    
            }    
        }
    }
    processFirstAnalyticsCallInStack();
}
}catch(e){utag.DB(e)};}})

    ; (function (w) {
      var i = 0
      if ((typeof w.utag_events === 'object' && w.utag_events.length > 0)) {
        while (w.utag_events.length) {
          d = w.utag_events.shift();
          (function (d) {
            setTimeout(function () {
              utag.track({
                event: d.d,
                data: d.a,
                cfg: {
                  cb: d.b,
                  uids: d.c
                }
              });
            }, 150 * i);
          })(d);
          i++;
        }
      }
    }(window));

  if (utag.cfg.readywait || utag.cfg.waittimer) {
    utag.loader.EV('', 'ready', function (a) {
      if (utag.loader.rf == 0) {
        utag.loader.rf = 1;
        utag.cfg.readywait = 1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function () { utag.loader.PINIT() }, utag.cfg.waittimer || 1);
      }
    })
  } else {
    utag.loader.PINIT()
  }
}
//~~tv:7143.20240418
//~~tc: Fix checking of gtag
//~~tc: Added event listener for consent updates, updated mapping options.
//~~tc: Added support for Consent Integrations.

//ESLint Configurations
/*global utag*/

/* utag.js version 4.36 or above is required to avoid errors with this tag template */

//tealium universal tag - utag.sender.template ut4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.

try {
  (function (id, loader) {
    var u = {};
    u.ev = { "view" : 1};
    u.initialized = false;

    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.checkForDefaultDecision = function () {
      var dataLayerArray = window.dataLayer || [];

      for (var i = dataLayerArray.length - 1; i >= 0; i--) {
        if (dataLayerArray[i][0] === "consent" && dataLayerArray[i][1] === "default") {
          return true;
        }
      }

      return false;
    };

    u.getPreviousDecision = function () {
      var dataLayerArray = window.dataLayer || [];
      var extraCommands = ["url_passthrough", "ads_data_redaction"];
      var decision = {};

      dataLayerArray.forEach(function (data) {
        if (data[0] === "consent") {
          decision.consent = decision.consent || data[2];
        }

        extraCommands.forEach(function (command) {
          if (data[0] === "set" && data[1] === command) {
            decision[command] = decision[command] || data[2];
          }
        });
      });

      return decision;
    };

    u.isDeepEqual = function (object1, object2) {
      function isObject (object) {
        return object !== null && typeof object === "object";
      }

      var keys1 = Object.keys(object1);
      var keys2 = Object.keys(object2);

      if (keys1.length !== keys2.length) return false;

      for (var i = 0; i < keys1.length; i++) {
        var value1 = object1[keys1[i]];
        var value2 = object2[keys1[i]];

        var areObjects = isObject(value1) && isObject(value2);
        if ((areObjects && !u.isDeepEqual(value1, value2)) || (!areObjects && value1 !== value2)) return false;
      }

      return true;
    }

    u.toBoolean = function (val) {
      val = String(val) || "";
      return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
    };

    // creates an object of mapping overrides for a specific event
    u.mapFunc = function(arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.mapFunc(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.getConsentValue = function(itemConsent) {
      var googleConsentValues = ['granted', 'denied'];
      var googleConsentValuesByKey = googleConsentValues.reduce(function(acc, value) {
        acc[value] = value;
        return acc;
      }, {});

      if (!u.data.tealium_consent || (!utag.gdpr && u.data.tealium_consent)) {
        return googleConsentValues.indexOf(itemConsent) === -1
          ? googleConsentValuesByKey.denied : itemConsent;
      } else if (utag.gdpr && u.data.tealium_consent) {
        var consentState = utag.gdpr.getConsentState();
        if (consentState === 1) {
          return googleConsentValuesByKey.granted;
        }
        if (consentState === -1 || consentState === 0) {
          return googleConsentValuesByKey.denied;
        }

        if (Array.isArray(consentState)) {
          var selectedCategories = utag.gdpr.getSelectedCategories();
          if (googleConsentValues.indexOf(itemConsent) === -1) {
            return selectedCategories.indexOf(itemConsent) === -1
              ? googleConsentValuesByKey.denied : googleConsentValuesByKey.granted;
          }
          return itemConsent;
        }

        return googleConsentValuesByKey.denied;
      }
    };

    u.hasgtagjs = function () {
      var data_layer_name = "dataLayer";
      window[data_layer_name] = window[data_layer_name] || [];
      window.gtagRename = window.gtagRename || "gtag";

      if (
        utag.ut.gtagScriptRequested ||
        (typeof window[window.gtagRename] === "function" && typeof window[data_layer_name] === "object")
      ) {
        return true;
      }

      var i, s = document.getElementsByTagName("script");
      for (i = 0; i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("gtag/js") >= 0 && s[i].id && s[i].id.indexOf("utag") > -1) {
          return true;
        }
      }

      if (typeof window[window.gtagRename] !== "function") {
        window[window.gtagRename] = function () {
          window[data_layer_name].push(arguments);
        };

        var cross_track = u.toBoolean(u.data.cross_domain_flag),
          cross_track_domains = u.data.cross_domains;

        if (cross_track && cross_track_domains !== "") {
          window[window.gtagRename]("set", "linker", {
            domains: cross_track_domains.split(","),
            accept_incoming: true
          });
        }

        window[window.gtagRename]("js", new Date());
      }

      return false;
    };

    // Start Loader Callback
    u.loaderCallback = function () {
      utag.DB('send:179:CALLBACK');
      u.callback();
      utag.DB('send:179:CALLBACK:COMPLETE');
    };
    // End Loader Callback

    u.callback = function () {
      var thisDecision = {
        consent: {
          ad_storage: u.data.ad_storage_consent,
          analytics_storage: u.data.analytics_storage_consent,
          wait_for_update: u.data.wait_for_update,
          ad_user_data: u.data.ad_user_data,
          ad_personalization: u.data.ad_personalization
        },
        url_passthrough: u.data.url_passthrough,
        ads_data_redaction: u.data.ads_data_redaction
      };

      if (!u.checkForDefaultDecision()) {
        u.o("set", "url_passthrough", thisDecision.url_passthrough);
        u.o("set", "ads_data_redaction", thisDecision.ads_data_redaction);
        u.o("consent", "default", thisDecision.consent);
      }

      if (!u.isDeepEqual(u.getPreviousDecision(), thisDecision)) {
        u.o("set", "url_passthrough", thisDecision.url_passthrough);
        u.o("set", "ads_data_redaction", thisDecision.ads_data_redaction);
        u.o("consent", "update", thisDecision.consent);
      }

      u.data.events.forEach(function (eventName) {
        u.sendEvent(eventName);
      });
    };

    u.sendEvent = function (eventName) {
      var eventData = {
        ad_storage: u.data.ad_storage_consent,
        analytics_storage: u.data.analytics_storage_consent,
        wait_for_update: u.data.wait_for_update,
        ad_user_data: u.data.ad_user_data,
        ad_personalization: u.data.ad_personalization,
      };

      utag.ut.merge(eventData, u.data[eventName], 1);
      u.o('consent', eventName, eventData);
    };

      u.map={"visitor_permission_targeting":"ad_personalization,ad_user_data,ad_storage_consent","visitor_permission_functional":"analytics_storage_consent"};
  u.extend=[];


    u.send = function(utag_event, data_layer) {
      if (u.ev[utag_event] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var a, b, c, d, e, f;
        a = utag_event;
        b = data_layer;

        u.data = {
          base_url : "https://www.googletagmanager.com/gtag/js",
          tealium_consent: "false",
          ad_storage_consent : b["google_ad_storage_consent"] || "denied",
          analytics_storage_consent : b["google_analytics_storage_consent"] || "denied",
          ads_data_redaction : b["google_ads_data_redaction"] || "true",
          url_passthrough : b["google_url_passthrough"] || "false",
          wait_for_update : "",
          ad_user_data : b["google_ad_user_data_consent"] || "denied",
          ad_personalization : b["google_ad_personalization_consent"] || "denied",
          custom: {},
          events: []
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        // Start Mapping
        Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key) {
          if (data_layer[mapping_key] !== undefined && data_layer[mapping_key] !== '') {
            var destinations = u.map[mapping_key].split(',');
            destinations.forEach( function(parameter) {
              u.mapFunc(parameter.split('.'), u.data, data_layer[mapping_key]);
            });
          } else {
            var event_destinations = mapping_key.split(':');
            if (
                event_destinations.length === 2 &&
                String(data_layer[event_destinations[0]]) === String(event_destinations[1])
            ) {
              if (u.map[mapping_key]) {
                u.data.events = u.data.events.concat(u.map[mapping_key].split(','));
              }
            }
          }
        });
        utag.DB('send:179:MAPPINGS');
        utag.DB(u.data);
        // End Mapping

        u.data.tealium_consent = u.toBoolean(u.data.tealium_consent);
        u.data.url_passthrough = u.toBoolean(u.data.url_passthrough);
        u.data.ads_data_redaction = u.toBoolean(u.data.ads_data_redaction);
        u.data.wait_for_update = Number(u.data.wait_for_update) || 0;
        u.data.ad_storage_consent = u.getConsentValue(u.data.ad_storage_consent);
        u.data.analytics_storage_consent = u.getConsentValue(u.data.analytics_storage_consent);
        u.data.ad_user_data = u.getConsentValue(u.data.ad_user_data);
        u.data.ad_personalization = u.getConsentValue(u.data.ad_personalization);

        u.scriptrequested = u.hasgtagjs();

        u.o = window[window.gtagRename];

        if (u.initialized) {
          u.callback();
        } else {
          u.initialized = true;

          window.addEventListener("consent_updated", function () {
            utag.view({ tealium_event: "consent_update_for_google_consent_mode" }, null, ["179"]);
          });

          if (!u.hasgtagjs()) {
            u.scriptrequested = true;
            utag.ut.gtagScriptRequested = true;

            u.loader({
              type: "script",
              src: u.data.base_url,
              cb: u.loaderCallback,
              loc: "script",
              id: "utag_179",
              attrs: {}
            });
          } else {
            u.callback();
          }
        }
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("179", "vodafone.cz-main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
(function(){ if(typeof utag!='undefined' && !utag_condload){utag.initcatch=true;for(var i in utag.loader.GV(utag.loader.cfg)){var b=utag.loader.cfg[i];if(b.load!=4){utag.initcatch=false;break};if(b.wait==1){utag.initcatch=false;break}};if(utag.initcatch)utag.handler.INIT();} })();