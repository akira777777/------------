//~~tv:20064.20250414
//~~tc: Fixed problems with AS tracking with suffixing extension present
//~~tc: Add a check if the sendBeacon call returns a false
//~~tc: Add data filters

//ESLint configurations
/*global utag tealium_enrichment __tcfapi tealiumiabPostMessageHandler*/
/*eslint no-unused-vars: ["error",{"varsIgnorePattern": "^c$"}]*/

/*eslint-disable*/
/* Modified copy of json2.js (no need for parse function)*/
/* https://github.com/douglascrockford/JSON-js */
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+ f(this.getUTCDate())+'T'+ f(this.getUTCHours())+':'+ f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}
}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());
/*eslint-enable*/

//tealium universal tag - utag.sender.20064 ut4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try{
(function (id, loader, u) {
  try {
    u = utag.o[loader].sender[id] = {"id" : id};
  } catch (e) {
    u = utag.sender[id];
  }
  utag.globals = window.utag.globals || {};
  u.toBoolean = function (val) {
    val = String(val) || "";
    return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
  };
  u.ev = {"all":1};


  u.do_enrichment = function(){};



  u.deepCopy = function(input) {
    var key, copy;
    if (typeof input === "object" && input !== null) {
      if (utag.ut.typeOf(input) === "array") {
        copy = [];
      } else {
        copy = {};
      }
      for (key in input) {
        if (typeof input[key] === "object") {
          copy[key] = u.deepCopy(input[key]);
        } else {
          copy[key] = input[key];
        }
      }
    } else {
      copy = input;
    }
    return copy;
  }



  u.get_account_profile = function(s) {
    var p;
    if (u.visitor_service_override || u.tag_config_server.indexOf("tealiumiq.com") === -1) {
      p = [u.tag_config_server.split("//")[1], u.account, u.profile]
    } else if (u.tag_config_server === u.event_url) {
      p = [s.substring(s.indexOf(u.server_domain)).split("/")[1], u.account, u.profile]
    } else {
      p = s.substring(s.indexOf(u.server_domain)).split("/");
    }
    return p;
  };

  function infixParameters (url, params) {
    var updated_url,
      url_parts = url.split("?");

    if (params) {
      // if the URL address doesn't have a `?`
      if (url_parts[1] === undefined) {
        updated_url = url + "?" + params;
      // if the URL address has a `?` but no query parameters
      } else if (url_parts[1] === "") {
        updated_url = url + params;
      // if the URL address has existing query parameters, infix the passed parameters
      } else {
        updated_url = url_parts[0] + "?" + params + "&" + url_parts[1];
      }
    } else {
      updated_url = url;
    }
    return updated_url;
  }

  // Should only call this function when u.tag_config_sampling < 100
  u.is_in_sample_group = function(b) {
    var group = "100";

    // Automatically in sampling group if the sampling value is 100% or not defined at all
    if (u.tag_config_sampling === "" || u.tag_config_sampling === "100") {
      return true;
    }

    // Check or set cookie (cookie should survive across visits)
    if (b["cp.utag_main_dc_group"]) {
      group = b["cp.utag_main_dc_group"];
    } else {
      // group = random number 1..100
      group = Math.floor(Math.random() * 100) + 1;
      // set cookie
      utag.loader.SC("utag_main", {"dc_group": group});
    }

    // Return true if this visitor in sampling group
    if (parseInt(group) <= parseInt(u.tag_config_sampling)) {
      return true;
    } else {
      return false;
    }
  };

  u.get_performance_timing = function(b) {
    var t, timing;
    var data = {};

    function subtract (val1, val2) {
      var difference = 0;
      if ( val1 > val2 ) {
        difference = val1 - val2;
      }
      return difference;
    }

    try {
      // Read existing local storage data and add to data layer
      timing = localStorage.getItem("tealium_timing");
      t = window.performance.timing;
      // Only get this info on the first event for this page
      if (timing !== null && timing !== "{}" && typeof b !== "undefined" && u.performance_timing_count === 0) {
        utag.ut.merge(b, utag.ut.flatten({timing : JSON.parse(timing)}), 1);
      }
    } catch (e) {
      utag.DB(e);
      return;
    }

    // Get current URL timing data into local storage.  Or setTimeout and do recursive call if data not there yet
    u.performance_timing_count++;
    for (var k in t) {
      // Some data might not be ready yet, wait and request again
      // Only try 20 times max
      if ((k.indexOf("dom") === 0 || k.indexOf("load") === 0) && t[k] === 0 && u.performance_timing_count < 20) {
        setTimeout(u.get_performance_timing, 1000);
      }
    }

    // Write current page performance data to local storage for retrieval on next page
    data["domain"] = location.hostname + "";
    data["pathname"] = location.pathname + "";
    data["query_string"] = ("" + location.search).substring(1);
    data["timestamp"] = (new Date()).getTime();
    data["dns"] = subtract(t.domainLookupEnd, t.domainLookupStart);
    data["connect"] = subtract(t.connectEnd, t.connectStart);
    data["response"] = subtract(t.responseEnd, t.responseStart);
    data["dom_loading_to_interactive"] = subtract(t.domInteractive, t.domLoading);
    data["dom_interactive_to_complete"] = subtract(t.domComplete, t.domInteractive);
    data["load"] = subtract(t.loadEventEnd, t.loadEventStart);
    data["time_to_first_byte"] = subtract(t.responseStart, t.connectEnd);
    data["front_end"] = subtract(t.loadEventStart, t.responseEnd);
    data["fetch_to_response"] = subtract(t.responseStart, t.fetchStart);
    data["fetch_to_complete"] = subtract(t.domComplete, t.fetchStart);
    data["fetch_to_interactive"] = subtract(t.domInteractive, t.fetchStart);

    try {
      localStorage.setItem("tealium_timing", JSON.stringify(data));
    } catch (e) {
      utag.DB(e);
    }
  };

  // makes certain any URL passed in starts with a protocol, SSL enforcement is controlled by boolean true/false
  u.validateProtocol = function (address, force_ssl) {
    // does the address begin with `http://` or `https://`?
    if (/^https?:\/\//i.test(address)) {
      if (force_ssl) {
        if (/^http:\/\//i.test(address)) {
          address = address.toLowerCase().replace("http","https");
        }
      }
    } else {
      // does the address begin with `//`?
      if (/^\/\//.test(address)) {
        if (force_ssl) {
          address = "https:" + address;
        } else {
          address = location.protocol + address;
        }
      // the address does not begin with `//`
      } else {
        if (force_ssl) {
          address = "https://" + address;
        } else {
          address = location.protocol + "//" + address;
        }
      }
    }
    return address;
  }

  u.server_domain = "tealiumiq.com";
  u.server_prefix = "";
  u.tag_config_server = "";
  u.tag_config_sampling = "100" || "100";
  // In debug mode, always in sample group
  if (utag.cfg.utagdb) {
    u.tag_config_sampling = "100";
  }
  u.tag_config_region = "eu-central-1" || "default";
  u.region = "";
  u.performance_timing_count = 0;
  u.event_url = '//collect.tealiumiq.com/event';
  u.account = utag.cfg.utid.split("/")[0];
  u.data_source = "187fsg";
  u.profile = "cz-main-cdp" || utag.cfg.utid.split("/")[1];
  u.visitor_service_override = ''; // setting this property will override the domain used in the data layer enrichment call; the rest of the URL will build normally (pathname with the account and profile, query parameters, etc.)
  u.request_increment = 1; // adds an incrementable value to the end of the ids of the script elements generated by each visitor_service_request invocation; WCAG 2.0 compliance
  u.iab_v20_compliance = true;
  u.tc_string = "";
  u.use_sendBeacon = 'true';
  u.use_event_endpoint = 'false';
  u.tealium_cookie_domain = '';
  u.tealium_cookie_expiry ='';
  u.data_enrichment="frequent";
  u.send_udo_variables="true" || true;
  u.send_dom_values="false" || true;
  u.send_cookie_values="false" || true;
  u.send_meta_values="false" || true;
  u.send_query_param_values="false" || true;
  u.send_localstorage_variables="false" || false;
  u.send_sessionstorage_variables="false" || false;
  u.profile_specific_vid = 0;
  u.enrichment_polling = 1;
  u.enrichment_polling_delay = 500;
  u.enrichment_enabled = {};
  u.visitor_id = "";
  u.suppress_v_id_generation = "false" || false;


    u.map={};
  u.extend=[function(a,b){ try{ if(1){
/**
 * CDP PARAMETERS CONFIGURATION
 * Developed by Softlab for Vodafone Czechia
 * 
 */

// Tealium Collect Profile
b['cdp_profile'] = 'cz-main-cdp'; // @TODO replace prod

// Data Source Key
b['cdp_data_source'] = '187fsg'; // @TODO replace prod

// Prevent CDP from firing if missing profile or data source
if(utag.ut.isEmpty(b['cdp_profile']) || utag.ut.isEmpty(b['cdp_data_source'])) return false;
// Set tag parameters
u.data_source = b['tealium_datasource'] = b['cdp_data_source'];
u.profile = b['cdp_profile'];

// DONT REPLACE IF ALREADY REPLACED...
if (!u.tag_config_server.includes(b['cdp_profile'])) {
    u.tag_config_server = u.tag_config_server.replace(b['tealium_profile'], b['cdp_profile']);
    u.server_list.forEach((s,i,a) => { a[i] = s.replace(b['tealium_profile'], b['cdp_profile']) });
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * CDP DEFINE tealium_event
 * Developed by Softlab for Vodafone Czechia
 * 
 */

//----------------------------------------------------------
// Define "tealium_event", giving priority to sales events
//----------------------------------------------------------

let _e = b['event'];

if (!!_e) {
    if (
        _e.indexOf('transaction_complete') > -1 ||
        _e.indexOf('purchase') > -1
    ) {
        b['tealium_event'] = 'transaction_complete';
    } else if (_e.indexOf('transaction_confirm') > -1) {
        b['tealium_event'] = 'transaction_confirm';
    } else if (_e.indexOf('payment') > -1) {
        b['tealium_event'] = 'payment';
    } else if (_e.indexOf('checkout_step1') > -1) {
        b['tealium_event'] = 'checkout_step1';
    } else if (_e.indexOf('checkout_step2') > -1) {
        b['tealium_event'] = 'checkout_step2';
    } else if (_e.indexOf('checkout_step3') > -1) {
        b['tealium_event'] = 'checkout_step3';
    } else if (_e.indexOf('checkout_step4') > -1) {
        b['tealium_event'] = 'checkout_step4';
    } else if (_e.indexOf('checkout_start') > -1 || _e.indexOf('checkout') > -1) {
        b['tealium_event'] = 'checkout_start';
    } else if (_e.indexOf('cart_open') > -1) {
        b['tealium_event'] = 'cart_open';
    } else if (_e.indexOf('cart_view') > -1) {
        b['tealium_event'] = 'cart_view';
    } else if (_e.indexOf('cart_add') > -1) {
        b['tealium_event'] = 'cart_add';
    } else if (_e.indexOf('cart_remove') > -1) {
        b['tealium_event'] = 'cart_remove';
    } else if (
        _e.indexOf('product_view') > -1 ||
        _e.indexOf('product_multi_view') > -1 ||
        _e.indexOf('prodView') > -1
    ) {
        b['tealium_event'] = 'product_view';
    } else if (_e.indexOf('page_error') > -1) {
        b['tealium_event'] = 'page_error';
    } else if (_e.indexOf('order_tracking_tool_start') > -1) {
        b['tealium_event'] = 'order_tracking_tool_start';
    } else if (_e.indexOf('coverage_tool_start') > -1) {
        b['tealium_event'] = 'coverage_tool_start';
    } else if (_e.indexOf('coverage_tool_success') > -1) {
        b['tealium_event'] = 'coverage_tool_success';
    } else if (_e.indexOf('download_start') > -1) {
        b['tealium_event'] = 'download_start';
    } else if (_e.indexOf('download_end') > -1) {
        b['tealium_event'] = 'download_end';
    } else if (_e.indexOf('search_apply') > -1) {
        b['tealium_event'] = 'search_apply';
    } else if (_e.indexOf('search') > -1) {
        b['tealium_event'] = 'search';
    } else if (_e.indexOf('journey_start') > -1) {
        b['tealium_event'] = 'journey_start';
    } else if (_e.indexOf('journey_end') > -1) {
        b['tealium_event'] = 'journey_end';
    } else if (_e.indexOf('survey_start') > -1) {
        b['tealium_event'] = 'survey_start';
    } else if (_e.indexOf('survey_end') > -1) {
        b['tealium_event'] = 'survey_end';
    } else if (b['ut.event'].indexOf('link') > -1 || _e.indexOf('link') > -1) {
        b['tealium_event'] = 'link';
    } /*else if (
        _e.indexOf('link') > -1 &&
        b['tealium_event'] === 'link' &&
        b['link_name'].includes('Cookie Consent Preference')
    ) {
        b['tealium_event'] = 'cookie_preference';
    }*/ else if (_e.indexOf('page_view') > -1 || b['ut.event'].indexOf('view') > -1) {
        b['tealium_event'] = 'page_view';
    }
} else if (
    b['tealium_event'] === 'view' ||
    a === 'view' ||
    b['ut.event'].indexOf('view') > -1
) {
    b['tealium_event'] = 'page_view';
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * CDP CONSENT NORMALIZER
 * Developed by Softlab for Vodafone Czechia
 * 
 * Move from the current setup to Group's standard
 */

let _bKeys = Object.keys(b);
// Exclude strictly_necessary and ATT, while considering all possible other custom permission levels that are not empty
const _optionalPermissions = _bKeys.filter(e => e.indexOf('visitor_permission') === 0 && e.indexOf('strictly_necessary') === -1 && e.indexOf('_att') === -1 && !utag.ut.isEmpty(b[e]));

// Go through the permissions and delete them 
_optionalPermissions.forEach(permissionKey => { delete b[permissionKey]; })

/**
 * Use the b.consents_actual attribute to retreive existing permissions
 */
let _consents = '';
if(!utag.ut.isEmpty(b['consents_actual'])) {
    _consents = b['consents_actual'];
}
// Maybe consents_actual is empty
else if(typeof vfconsents === 'object') {
    Object.keys(vfconsents.getAll()).map((e) => {_consents+=e+':'+vfconsents.get(e)+'|'})
}


if (!utag.ut.isEmpty(_consents)) {
    let _consArr = _consents.split('|');
    let _consObj = {};
    _consArr.forEach(e => { _consObj[e.split(':')[0]] = e.split(':')[1]; }) // Build a key-value object of permissions
    b['visitor_permission_functional'] = (_consObj['funa'] === 'i') ? 'granted' : 'denied';
    b['visitor_permission_performance'] = (_consObj['funa'] === 'i') ? 'granted' : 'denied';
    b['visitor_permission_targeting'] = (_consObj['mktg'] === 'i') ? 'granted' : 'denied';
    // Non UDL variables for user-based consent
    if (!utag.ut.isEmpty(_consObj['ind4'])) { // Personal identification
        b['visitor_customer_permission_persid'] = (_consObj['ind4'] === 'i') ? 'granted' : 'denied';
    }
    if (!utag.ut.isEmpty(_consObj['trf4'])) { // Traffic
        b['visitor_customer_permission_traffic'] = (_consObj['trf4'] === 'i') ? 'granted' : 'denied';
    }
    if (!utag.ut.isEmpty(_consObj['loc4'])) { // Location
        b['visitor_customer_permission_location'] = (_consObj['loc4'] === 'i') ? 'granted' : 'denied';
    }
    if (!utag.ut.isEmpty(_consObj['thr4'])) { // 3rd parties
        b['visitor_customer_permission_thirdparty'] = (_consObj['thr4'] === 'i') ? 'granted' : 'denied';
    }
}

// Always make sure to have default values for strictly_necessary & missing permissions
b['visitor_permission_strictly_necessary'] = 'granted';
if (utag.ut.isEmpty(b['visitor_permission_functional'])) b['visitor_permission_functional'] = 'denied';
if (utag.ut.isEmpty(b['visitor_permission_performance'])) b['visitor_permission_performance'] = 'denied';
if (utag.ut.isEmpty(b['visitor_permission_targeting'])) b['visitor_permission_targeting'] = 'denied'
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * POLLING CONFIGURATION
 * (ext. scoped to the Collect Tag)
 * Use case reference: https://cps.confluence.agile.vodafone.com/pages/viewpage.action?spaceKey=DO&title=CDP+-+Adobe+Target+Integration
 */

/**
 * Set the number of times polling should run after initial run; suggested a max of 3
 * This can be set higher, but usually if Visitor Profile is not in sync after 3 attempts
 * then it won't be also for higher values.
 */
const DLE_POLLING_ATTEMPTS = 4;

/**
 * Set the delay (msec) between one call and the next; you should keep it as 750
 * Decreasing the value below 750ms will lower the chances of a sync happening!
 */
const DLE_POLLING_DELAY_MS = 2100;

/**
 * Set the delay (msec) before the first call
 */
const DLE_POLLING_PRE_DELAY_MS = 1500;

/***** DON'T CHANGE ANYTHING AFTER THIS LINE! (Unless you know what you're doing) *****/
utag.DB("DLE POLLING - Init");
u.enrichment_polling = DLE_POLLING_ATTEMPTS;
u.enrichment_polling_delay = DLE_POLLING_DELAY_MS;
u.enrichment_polling_pre_delay = DLE_POLLING_PRE_DELAY_MS;
utag.dle = utag.dle || {};

// Handle consent: only do Intelligent Polling if at least one optional consent is present
const _hasOptionalPermissions = Object.keys(b).filter(e => e.indexOf('visitor_permission') === 0 && e.indexOf('strictly_necessary') === -1 && e.indexOf('_att') === -1).some(e => b[e] === 'granted');
if (!_hasOptionalPermissions) {
    utag.DB("DLE POLLING - Not consented");
    if (utag && utag.dle && utag.dle.clearAllTimeoutsWithState) { utag.dle.clearAllTimeoutsWithState('unconsented'); }
    return;
}

utag.dle.state = 'pending';
utag.dle.polling_attempts = DLE_POLLING_ATTEMPTS;
utag.dle.cdp_random_check = Math.random();
b.cdp_random_check = utag.dle.cdp_random_check;
b.as_random_check = b.cdp_random_check; // Added
utag.DB("DLE POLLING - Random check " + b.cdp_random_check);

// Redefining the content of the u.do_enrichment function
u.do_enrichment = function (server, enrichment_polling, enrichment_polling_delay) {
    // utag.js 4.27 or later is required
    if (typeof utag.ut.loader != "undefined") {
        let counter = 0;
        utag.dle = utag.dle || {};
        utag.dle.polling_matched = false;
        let fetchVisitorService = function () {
            counter++;
            utag.DB('DLE POLLING INTERVAL - ' + counter + ' of ' + enrichment_polling);
            if (counter < enrichment_polling) {
                u.visitor_service_request((new Date).getTime(), server);
                utag.dle.storeTimeout(setTimeout(function () {
                    fetchVisitorService();
                }, enrichment_polling_delay + (u.enrichment_polling_pre_delay || 1)));
            } else {
                // 1. We clear all the polling timeouts, with 'gave up' state
                utag.dle.clearAllTimeoutsWithState('gave up');
            }
        }
        utag.dle.storeTimeout(setTimeout(function () {
            fetchVisitorService();
        }, enrichment_polling_delay + 1));    
    }
};
} } catch(e){ utag.DB(e) }  },
function(a,b){/*
CryptoJS v4.0.0
https://github.com/brix/crypto-js
Copyright (c) 2009-2013 Jeff Mott.
Copyright (c) 2013-2016 Evan Vosberg.
https://github.com/brix/crypto-js/blob/master/LICENSE
*/
utag.ut.sha256=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);!function(r){var t=utag.ut.sha256,e=t.lib,a=e.WordArray,n=e.Hasher,s=t.algo,o=[],i=[];!function(){function t(t){for(var e=r.sqrt(t),a=2;a<=e;a++)if(!(t%a))return!1;return!0}function e(r){return 4294967296*(r-(0|r))|0}for(var a=2,n=0;n<64;)t(a)&&(n<8&&(o[n]=e(r.pow(a,.5))),i[n]=e(r.pow(a,1/3)),n++),a++}();var h=[],c=s.SHA256=n.extend({_doReset:function(){this._hash=new a.init(o.slice(0))},_doProcessBlock:function(r,t){for(var e=this._hash.words,a=e[0],n=e[1],s=e[2],o=e[3],c=e[4],l=e[5],u=e[6],f=e[7],_=0;_<64;_++){if(_<16)h[_]=0|r[t+_];else{var v=h[_-15],d=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,H=h[_-2],g=(H<<15|H>>>17)^(H<<13|H>>>19)^H>>>10;h[_]=d+h[_-7]+g+h[_-16]}var p=a&n^a&s^n&s,w=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),y=f+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&l^~c&u)+i[_]+h[_];f=u,u=l,l=c,c=o+y|0,o=s,s=n,n=a,a=y+(w+p)|0}e[0]=e[0]+a|0,e[1]=e[1]+n|0,e[2]=e[2]+s|0,e[3]=e[3]+o|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+u|0,e[7]=e[7]+f|0},_doFinalize:function(){var t=this._data,e=t.words,a=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=r.floor(a/4294967296),e[15+(n+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var r=n.clone.call(this);return r._hash=this._hash.clone(),r}});t.SHA256=n._createHelper(c),t.HmacSHA256=n._createHmacHelper(c)}(Math);try { if (typeof b['dummy_sha256'] != 'undefined' && b['dummy_sha256'] != '') {b['dummy_sha256']=utag.ut.sha256.SHA256(b['dummy_sha256']).toString();} }catch(e){}}
,
function(a,b){ try{ if(1){
/*
NOTE - YOU NEED TO MAKE A SMALL CUSTOMISATION TO THE COLLECT TAG UNTIL CSI-1193 IS IMPLEMENTED - SEARCH FOR CSI-1193 BELOW FOR DETAILS
 *  Authors     : mark.reddin@tealium.com
 *  Scope       : Tealium Collect Tag
 *  Condition   : n/a
 *  Description : "Visitor Switching" - Adds AudienceStream support for multiple Visitor ID values on a single device being tracked separately in AS.
 *   Version 2.0 - addition of DLE and TAPID option
 *  -When a new key is provided, and if the value is different than the previous value seen on this device, generate a new VID for CDH creating a new profile
 *  -If a key was previously provided, reuse the previously associated VID
 *  -key/combination and associated VID stored in local storage for reuse, with cookie backup if ls not available
 More details here and setup instructions here - https://community.tealiumiq.com/t5/Team-Knowledge-Base/Visitor-Switching-with-TAPID-parameters/ta-p/37600
 *  -
 */

/*
provide the name of the switching key, for example "customer_id"
*/
var switchingKeyName = "visitor_id_adobe";

// Tealium CDP profile
b.tealium_cdp_profile = b.tealium_cdp_profile || b.cdp_profile || b.tealium_profile;

var useTAPID = 'no';
/*
do you want to use the TAPID cookie?
If yes, the extension will pass the override parameter when switching happens
If you change the above to "no", then the extension will pass the delete TAPID parameter on every collect tag call
It passes the delete parameter, rather than the skip parameter, as this should mean you don't need to worry about other tags that also use the TAPID cookie - those will also be affected in the correct way by the TAPID cookie deletion
*/

/*
optional, but recommended as a backup to the cookie that remembers the previous login
especially to cater for cross-domain tracking
provide the attribute ID of a Visitor String in AS where you will store the most recent value of the incoming event string tealium_switch_key_salt_sha
suggest you call this attribute "Most Recent Switching Key Salt SHA [str]"
with notes "Stores the most recent value of the switching key, from the iQ switching extension, salted and SHAd, so that the switching extension as well as the 1st party cookie to remember a previous login, can also look at the visitor profile in local storage to see if it needs to switch"
this is so that the extension can look at the visitor profile in local storage from DLE and see if the previous DLE was for a different stitched visitor
this is a backup to the 1st party cookie and is for example for cases where the user is being tracked across domain
*/
var swtichingASSaltShaAttrID = '5362';

var switchingKeyValue;
/*
you now need to write code that stores the value of the switching key from the current data layer 
for this event into the switchingKeyValue variable
the switching key is normally the same as the value you are going to stitch on (i.e. set the Visitor ID attribute to)
put in as many conditions as you need to ensure that the user is logged in and you are happy that the value of the switching/stiching key is valid
for example, checking that the user is logged in and that the customer id is 6 or more digits
but you will need to adapt this for your setup
if (b.is_logged_in && /\d{6+}/.test(b.customer_id)) {
  switchingKeyValue = b.customer_id;
}
*/

if(b.visitor_id_adobe) switchingKeyValue = b[switchingKeyName];

/*
The default collect tag sends the first DLE Visitor Service request immediately after the outgoing event
This is pointlessly quick, so I have raised https://tealium.atlassian.net/browse/CSI-1193
We also provide for a way for the sequence of requests to be stopped if we know visitor service is up to date, by setting the u.enrichTimeoutPointer so we can call clearTimeout on it later
We need to slow the first VS request down to allow at least for the TAPID cookie response to be received from the Collect tag before sending the VS request
Also secondarily to allow time for AS to process the event
You can tune this if you wish, but if you are using all the region-specific endpoints, and if you have your CDH set up to a nearby region, 1500 should be good
The switching code below also sets this to a minimum of 1000 when a switch happens, to ensure the TAPID is set correctly
In any case, you need to make a small customisation to the collect tag until CSI-1193 is implemented
u.do_enrichment = function (server, enrichment_polling, enrichment_polling_delay) {
    // utag.js 4.27 or later is required
    if (typeof utag.ut.loader != "undefined") {
        // additional attempts for visitor enrichment
        var counter = 0;
        var fetchVisitorService = function () {
            counter++;
            if (counter < enrichment_polling) {
                u.visitor_service_request((new Date).getTime(), server);
                u.enrichTimeoutPointer = setTimeout(function () {
                    fetchVisitorService();
                }, enrichment_polling_delay + (u.enrichment_polling_pre_delay || 1));
            }
        };
        u.enrichTimeoutPointer = setTimeout(function () {
            fetchVisitorService();
        }, enrichment_polling_delay + 1);
    }
}
                        
*/
u.enrichment_polling_pre_delay = 1500;

/* leave the code below this point alone */
/************************************************/

// Generate new visitor ID
window.utag.visitorSwitching = window.utag.visitorSwitching || {
  v: function () {
    var pad = function (a, b, c, d) {
      a = "" + (a - 0).toString(16);
      d = "";
      if (b > a.length) {
        for (c = 0; c < b - a.length; c++) {
          d += "0";
        }
      }
      return "" + d + a;
    };
    var d = new Date().getTime();
    var a = pad(d, 12);
    var b = "" + Math.random();
    a += pad(b.substring(2, b.length), 16);
    try {
      a += pad(navigator.plugins.length ? navigator.plugins.length : 0, 2);
      a += pad(navigator.userAgent.length, 3);
      a += pad(document.URL.length, 4);
      a += pad(navigator.appVersion.length, 3);
      a += pad(
        screen.width +
        screen.height +
        parseInt(screen.colorDepth ? screen.colorDepth : screen.pixelDepth),
        5
      );
    } catch (e) {
      utag.DB(e);
      a += "12345";
    }
    return a;
  },
  storeInUtagMainCookie: function (b, name, value, storeSession) {
    var sess = storeSession ? ";exp-session" : "";
    var c = {};
    c[name] = value + sess;
    utag.loader.SC("utag_main", c);
    b["cp.utag_main_" + name] = value;
  },
  getFromUtagMainCookie: function (b, name, lowerCase) {
    var rv = b["cp.utag_main_" + name];
    if (rv && lowerCase) {
      rv = rv.toLowerCase();
    }
    return rv;
  },
  deleteFromUtagMainCookie: function (b, name) {
    var c = {};
    c[name] = "";
    utag.loader.SC("utag_main", c, "d'");
    delete b["cp.utag_main_" + name];
  },
  lsTest: function () {
    var test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  },

  //localStorage get Function with fallback to utag_main cookie on b object if ls is not supported
  getFromStorage: function (b, key) {
    if (this.lsTest()) {
      return localStorage.getItem(key);
    } else {
      return this.getFromUtagMainCookie(b, key, false);
    }
  },
  putInStorage: function (b, key, value) {
    if (this.lsTest()) {
      localStorage.setItem(key, value);
    } else {
      this.storeInUtagMainCookie(b, key, value, false);
    }
  },
};

var s = window.utag.visitorSwitching;

// UtagMain utils

// Define Constants
var LAST_LOGGED_ID = "last_logged_in_" + switchingKeyName;
var CHANGED_AS_ID = "changed_as_id";
var V_ID = "v_id";
var COOKIESYNCRAN = "dcsyncran";

//if not using TAPID, pass the delete parameter in every call
if (useTAPID == 'no') {
  //we use delete rather than skip because it also should solve for other tags that would use the TAPID
  //without us requring that the user changes the tag template for those tags
  b.tealium_delete_3rd_party_vid_cookies = 'true';
}

//salt and hash the id because we are going to want to store it in a cookie to detect a different user logging in and we don't want to store the id
//utag.ut.sha256.SHA256 is only available if you have a dummy crypto SHA256 extension running before this extension - just encrypt a dummy iQ variable.
//you don't need to set that variable to a value
//use the account, profile and switching key name concatenated as the salt.
//As well as being a unique salt, it also means that if the collect tag is sent to a different visitor profile in the future, 
//it won't try to pull out existing primary visitor ids from local storage, as these would conflict in AS
if (switchingKeyValue) {
  var shaSalt = b.tealium_account + '/' + b.tealium_profile + '/' + b.tealium_cdp_profile + '/' + switchingKeyName + '/';
  b.tealium_switch_key_salt_sha = utag.ut.sha256
    .SHA256(shaSalt + switchingKeyValue)
    .toString();
}

//look at local storage to see if a previous value for tealium_switch_key_salt_sha was stored in the visitor profile using attribute ID swtichingASSaltShaAttrID specified above
var previousASSaltShaAttrID;
if (swtichingASSaltShaAttrID) {
  try {
    var st = JSON.parse(localStorage.getItem('tealium_va_' + b.tealium_account + '_' + b.tealium_cdp_profile));
    previousASSaltShaAttrID = st.properties[swtichingASSaltShaAttrID];
  }
  catch (e) { }
}

if (
  b.tealium_switch_key_salt_sha &&
  ((s.getFromUtagMainCookie(b, LAST_LOGGED_ID, true) &&
    b.tealium_switch_key_salt_sha !== s.getFromUtagMainCookie(b, LAST_LOGGED_ID, true)) ||
  (previousASSaltShaAttrID && b.tealium_switch_key_salt_sha !== previousASSaltShaAttrID))
) {
  //if logged in user has changed compared to cookie or local storage, then generate a new visitor id and store it in separate cookie
  var key = "tealium_vi_id_" + b.tealium_switch_key_salt_sha;
  var vi = "";
  if (s.getFromStorage(b, key)) {
    vi = s.getFromStorage(b, key);
  } else {
    vi = s.v();
  }
  //store the anonymous visitor id in a cookie so that even if a user is not logged in, it tracks using the most recent visitor id
  s.storeInUtagMainCookie(b, CHANGED_AS_ID, vi, false);
  //this is a key parameter - see https://tealium.atlassian.net/wiki/spaces/ENGSD/pages/2621767773/Managing+TAPID
  //it changes the TAPID cookie to the value we specifiy here
  if (useTAPID == 'yes') {
    b.tealium_override_tapid = vi;
  }

  /* we used to adjust DLE polling params when a switch has just happened
  u.enrichment_polling = 4; u.enrichment_polling_delay = 3000; u.enrichment_polling_pre_delay = 1000;
  however, in version 2, we are instead relying on intelligent polling, so we always keep DLE up to date
  */

  //delete the existing local storage entries to ensure even if DLE above does not run, the previous visitor is not left behind in local storage
  try {
    localStorage.removeItem('tealium_va');
    localStorage.removeItem('tealium_va_' + b.tealium_account + '_' + b.tealium_profile);
  } catch (e) {
  }

  //also delete the cookie for the cookie sync tag for this session to say it can run again if needed
  //note that this may not make it run again if the user we are switching to already has a Google GID because the normal load rule for the Google Cookie Sync is
  //that the user also doesn't have a Google GID from DLE
  //finally, note that the google cookie sync tag uses event stream persistence, so even if the cookie sync itself doesn't run on the switch, the next user
  //will get a value for Google GID from google_gid being persisted in the TCS event stream persistence cookie
  s.deleteFromUtagMainCookie(b, COOKIESYNCRAN);
}

//track using the last known logged in user vid
//for collect tag and /event endpoint, tealium_visitor_id will take priority over anything else apart from TAPID
//for identifying the visitor in AS
if (s.getFromUtagMainCookie(b, CHANGED_AS_ID, false)) {
  b.tealium_visitor_id = s.getFromUtagMainCookie(b, CHANGED_AS_ID, false);
  b.as_changed_as_id = "true";
} else {
  b.tealium_visitor_id = s.getFromUtagMainCookie(b, V_ID, false);
  b.as_changed_as_id = "false";
}

//now remember the logged in user by mpn for next time
if (b.tealium_switch_key_salt_sha) {
  s.storeInUtagMainCookie(b, LAST_LOGGED_ID, b.tealium_switch_key_salt_sha, false);
  //to avoid proliferation of visitor ids if the user continually swtiches (which they will under certain scenarios), we also cache the
  //visitor id in local storage (or the utag_main cookie, if the browser doesn't allow local storage) with the tealium_switch_key_salt_sha as the key
  //local storage is sub-domain specific, but this still enables us to avoid generating a brand new visitor id every time the user switches
  var key = "tealium_vi_id_" + b.tealium_switch_key_salt_sha;
  s.putInStorage(b, key, b.tealium_visitor_id);
}

/*
 * make DLE use the correct visitor id in its request URL
 */
u.visitor_id = b.tealium_visitor_id;


} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['visitor_permission_targeting'].toString().toLowerCase()=='granted'.toLowerCase()){
// Execute only not in app

utag.ut.tealium_setAdformId = function () {
    if (Adform._uid) {
        utag.loader.SC("utag_main", {
            "adform": Adform._uid + ";exp-90d"
        });
        utag.track("adform_cookie_sync", {
                "adform_uid": Adform._uid
            },
            {
                uids: [172] // Tag UID
            }
        );
    }
}
if(!utag.loader.RC('utag_main')['adform']) {
  utag.ut.loader({
      id: "tealium_getAdformId",
      src: "//track.adform.net/Serving/Cookie/?adfaction=getjs;adfcookname=uid",
      cb: utag.ut.tealium_setAdformId
  });
} else {
    b['adform_uid'] = utag.loader.RC('utag_main')['adform'];
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(b['visitor_permission_targeting'].toString().toLowerCase()=='granted'.toLowerCase()){
// Execute only not in app

if(b && b["cp._fbp"])
{
    b.facebook_id_cookie = b["cp._fbp"]
}

if(b && b["cp._fbc"])
{
    b.facebook_id_click = b["cp._fbc"]
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
//if sales_products is present and product_name is not- in the data layer
if(!utag.ut.isEmpty(b.sales_products) && utag.ut.isEmpty(b.product_name)){
   // Initialize arrays to collect values
   b.product_group = [];
   b.product_name = [];
   b.product_count = [];
   b.product_revenue = [];
   b.product_price_recurrence_amount = [];
   //Split by comma and the poulate the arrays
   b.sales_products.split(',').forEach(item => {
     const parts = item.split(';');

     b.product_group.push(parts[0] ? parts[0].toLowerCase() : '');
     b.product_name.push(parts[1] ||'');
     b.product_count.push(parts[2] && parts[2].trim() !== '' ? parts[2] : '1');
     b.product_revenue.push(parts[3] && parts[3].trim() !== '' ? parts[3] : '0');
     b.product_price_recurrence_amount.push(parts[4] && parts[4].trim() !== '' ? parts[4] : '0');
   });
  
}

//Merge product_revenue and product_price_recurrence_amount into product_total_revenue by summing both values
if(!utag.ut.isEmpty(b.product_revenue) && !utag.ut.isEmpty(b.product_price_recurrence_amount)){
    b.product_total_revenue = b.product_revenue.map((rev, index) => {
      const recurrence = b.product_price_recurrence_amount[index] || '0';
      return (parseFloat(rev) + parseFloat(recurrence)).toString();
    });
}else if(!utag.ut.isEmpty(b.product_revenue) && utag.ut.isEmpty(b.product_price_recurrence_amount)){
    b.product_total_revenue = b.product_revenue;
}
else if(!utag.ut.isEmpty(b.product_price_recurrence_amount) && utag.ut.isEmpty(b.product_revenue)){
    b.product_total_revenue = b.product_price_recurrence_amount;
}

//calculate total number of items

if (Array.isArray(b.product_count) && !utag.ut.isEmpty(b.product_count)) {
  num = 0;
  for (var i = 0; i < b.product_count.length; i++) {
    num += parseInt(b.product_count[i]);
  }
  b['total_product_count']= parseInt(num);
}
//calculate total value
b.total_revenue = 0;
if(!utag.ut.isEmpty(b.product_count) && !utag.ut.isEmpty(b.product_total_revenue) && b.product_total_revenue.length == b.product_count.length){
    for (let i = 0; i < b.product_total_revenue.length; i++) {
        try{
            b.total_revenue += Number(b.product_total_revenue[i]) * Number(b.product_count[i]);
        }catch(err){
            utag.DB("Error in calclulating total revenue");
        }
    }
}


} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
// Taken from group-lib-template as of 2023-01-26

/**
 * CDP - SEND CONSENT
 * 
 * This extension (scoped as LAST on the CDP tag) is meant to act as gatekeeper for the data that are sent to the CDP.
 * 
 * Use the constant to include all the UDO variables you use as source for CDP Visitor IDs.
 * 
 * What it does:
 * - Checks if at least one optional permission level is 'granted' (thus excluding strictly_necessary and att)
 * - If no, deletes all the data from the payload except the visitor IDs, the permissions variable and the trace_id
 * 
 * The CDP tag should be omitted from Tealium Consent Manager.
 */

/**
 * Edit the constant below to contain all the UDO elements that you have configured as source for Visitor IDs on the CDP
 */
const VISITOR_IDS_ARRAY = ['visitor_id_tms', 'tealium_visitor_id', 'visitor_id_adobe'];

/***** DON'T CHANGE ANYTHING AFTER THIS LINE! (Unless you know what you're doing) *****/

const TECHNICAL_UDOS_TO_KEEP = ['cp.trace_id', 'cdp_data_source', 'visitor_permission_update_date', 'tealium_consent_categories'];

// Add the timestamp from vfconsents to be used by the CDP on web
if(!utag.ut.isEmpty(vfconsents)) b['visitor_permission_update_date'] = vfconsents.getAll()['cdd'];

// Backup of default Tealium's consent categories and removal of the inflexible one
// https://community.tealiumiq.com/t5/Customer-Data-Hub/Server-Side-Consent-Management/ta-p/37668#toc-hId-1506224953
if (!utag.ut.isEmpty(b['consent_categories'])) {
    b['tealium_consent_categories'] = b['consent_categories'];
    delete b['consent_categories'];
}

let _bKeys = Object.keys(b);
// Exclude strictly_necessary and ATT, while considering all possible other custom permission levels
const _optionalPermissions = _bKeys.filter(e => e.indexOf('visitor_permission') === 0 && e.indexOf('strictly_necessary') === -1 && e.indexOf('_att') === -1);

if (!_optionalPermissions.some(e => b[e] === 'granted')) {
    // Stop sending data to CDP after first hit for session
    if (sessionStorage.getItem('consentSync')) return false;
    _bKeys.forEach((element) => {
        if (element.indexOf('visitor_permission_') !== 0 && TECHNICAL_UDOS_TO_KEEP.indexOf(element) === -1 && VISITOR_IDS_ARRAY.indexOf(element) === -1) {
            delete b[element];
        }

    })
    b['tealium_event'] = 'visitor_permission_update';

    // If only strict necessary, we don't want 3rd party cookies
    // https://community.tealiumiq.com/t5/Early-Access-Documentation/Tealium-Collect-HTTP-API-V3-Early-Access/ta-p/37925#toc-hId--476224964
    b['tealium_delete_3rd_party_vid_cookies'] = true;

    utag.DB('CDP SEND CONSENT: send payload with only essential data elements');
    utag.DB(b);
    sessionStorage.setItem('consentSync', 'true')
} else {
    if (sessionStorage.getItem('consentSync')) sessionStorage.removeItem('consentSync')
}

} } catch(e){ utag.DB(e) }  }];


  u.send = function(a,b) {
    var c, d, i;
    if(u.ev[a] || typeof u.ev["all"] !== "undefined"){
      //Don't fire for tag bridge event "remote_api"
      if (a === "remote_api") {
        utag.DB("Remote API event suppressed.");
        return;
      }

      if (a === 'update_consent_cookie') {
        utag.DB('Update Consent Cookie event supressed.');
        return;
      }

      if (!u.toBoolean(u.suppress_v_id_generation)) {
        u.visitor_id = u.visitor_id || b.tealium_visitor_id || b["cp.utag_main_v_id"];
        if (!u.visitor_id) {
          var consentCookies = utag.gdpr && typeof utag.gdpr.getCookieValues === 'function' && utag.gdpr.getCookieValues();
          var consentCookieId = consentCookies && consentCookies.id;
          u.visitor_id =  consentCookieId || utag.ut.vi((new Date()).getTime());
          utag.loader.SC("utag_main", { v_id: u.visitor_id });
        }
        b["cp.utag_main_v_id"] = u.visitor_id;
        b["ut.visitor_id"] = u.visitor_id;
        b["tealium_visitor_id"] = u.visitor_id;
      }

      // Start tag-scoped extensions
      for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
      utag.DB("send:172:EXTENSIONS");
      utag.DB(b);
      // End tag-scoped extensions

      c = [];


      // Start Mapping
      Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key) {
        if (b[mapping_key] !== undefined && b[mapping_key] !== '') {
          var destinations = u.map[mapping_key].split(',');
          destinations.forEach(function(parameter) {
            u[parameter] = b[mapping_key];
          });
        }
      });

      utag.DB("send:172:MAPPINGS");
      utag.DB(u);
      // End Mapping

      u.use_sendBeacon = u.toBoolean(u.use_sendBeacon);
      u.use_event_endpoint = u.toBoolean(u.use_event_endpoint);
      // data filters
      u.send_udo_variables = u.toBoolean(u.send_udo_variables);
      u.send_cookie_values = u.toBoolean(u.send_cookie_values);
      u.send_dom_values = u.toBoolean(u.send_dom_values);
      u.send_meta_values = u.toBoolean(u.send_meta_values);
      u.send_query_param_values = u.toBoolean(u.send_query_param_values);
      u.send_localstorage_variables = u.toBoolean(u.send_localstorage_variables);
      u.send_sessionstorage_variables = u.toBoolean(u.send_sessionstorage_variables);
      u.suppress_v_id_generation = u.toBoolean(u.suppress_v_id_generation);

      // Handle VPC custom-collect.tealiumiq.com data collection endpoint
      if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
        u.server_prefix = u.tag_config_server.split("collect." + u.server_domain)[0];
        if (u.tag_config_server.indexOf("/i.gif") < 0 ) {
          u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
        }
      }

      // Auto-build the endpoint for Tealium Collect
      if (u.tag_config_server === "") {
        if (u.use_event_endpoint) {
          u.tag_config_server = u.event_url;
        } else if (u.tag_config_region === "default") {
          u.tag_config_server = "https://" + [u.server_prefix + "collect." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
        } else {
          u.tag_config_server = "https://" + [u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain, u.account, u.profile, "2", "i.gif"].join("/");
        }
      }

      // build endpoint if it contains "-collect-"
      if (u.tag_config_server.indexOf("-collect-") > -1) {
        u.server_prefix = u.tag_config_server.split("collect-")[0];
      }

      // For those who fill out collect.tealiumiq.com and then choose a specific region
      if (u.tag_config_region !== "default" && u.tag_config_server.indexOf(u.server_prefix + "collect." + u.server_domain) > 0) {
        u.tag_config_server = u.tag_config_server.replace(u.server_prefix + "collect." + u.server_domain, u.server_prefix + "collect-" + u.tag_config_region + "." + u.server_domain);
        u.region = u.tag_config_region;
      }

      // remove query string delimiter from server address
      var q = u.tag_config_server.indexOf("?");
      if (q>0 && (q+1)==u.tag_config_server.length) {
        // utag.DB("DataCloud config error. Trailing ? in URL")
        u.tag_config_server = u.tag_config_server.replace("?","");
      }

      u.server_list = u.tag_config_server.split("|");

      if(u.tealium_cookie_domain){
          b.tealium_cookie_domain = u.tealium_cookie_domain;
      }
      if(u.tealium_cookie_expiry){
          b.tealium_cookie_expiry = parseInt(u.tealium_cookie_expiry);
      }
      //this is a fallback check for IAB compliance; if IAB does not apply, then this tag will execute normally
      if (u.iab_v20_compliance === true || u.iab_v20_compliance === "true") {
        // if the tcfapi is available, collect the TC string
        if (typeof __tcfapi === "function") {
          __tcfapi("getTCData", 2, function(tcData, success) {
            if (success) {
              u.tc_string = "gdpr=";
              if (tcData.gdprApplies === true) {
                u.tc_string += "1";
              } else if (tcData.gdprApplies === false) {
                u.tc_string += "0";
              } else {
                u.tc_string += String(tcData.gdprApplies);
              }
              u.tc_string += "&gdpr_consent=" + tcData.tcString;
              execute_send();
            }
          });
        // otherwise check to see if Tealium is executing in an iframe, and if so, check to see if the tcfapi is located in an ancestor frame
        } else {
          // start at current frame's window
          var frame = window;
          // if we locate the CMP iframe we will reference it with this
          var cmpFrame;
          // map of calls
          var cmpCallbacks = {};
          // traverse through any parent frames to look for the tcfapi indicator iframe
          while(frame) {
            try {
              if (frame.frames["__tcfapiLocator"]) {
                cmpFrame = frame;
                break;
              }
            } catch(error) {
              utag.DB(error);
            }
            if (frame === window.top) {
              break;
            }
            frame = frame.parent;
          }

          // attempted to traverse through the iframe's ancestors, but did not find the tcfapi indicator frame, continuing execution as normal
          if (!cmpFrame) {
            execute_send();
          // found tcfapi indicator iframe, will now attempt communication between parent frame and current iframe to fetch the TC string
          } else {
            /**
            * Set up a __tcfapi proxy method to do the postMessage and map the callback.
            * From the caller's perspective, this function behaves identically to the
            * CMP API's __tcfapi call
            */
            window.__tcfapi = function(cmd, version, callback, arg) {
              var callId = String(Math.random());
              var msg = {
                __tcfapiCall: {
                  command: cmd,
                  parameter: arg,
                  version: version,
                  callId: callId
                }
              };
              // map the callback for lookup on response
              cmpCallbacks[callId] = callback;
              cmpFrame.postMessage(msg, "*");
            };

            window.tealiumiabPostMessageHandler = function(event) {
              // when we get the return message, call the mapped callback
              var json = {};

              try {
                json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
              } catch (error) {
                utag.DB(error);
              }
              var payload = json.__tcfapiReturn;
              if (payload) {
                // messages we care about will have a payload
                if (typeof cmpCallbacks[payload.callId] === "function") {
                  // call the mapped callback and then remove the reference
                  cmpCallbacks[payload.callId](payload.returnValue, payload.success);
                  cmpCallbacks[payload.callId] = null;
                }
              }
            };

            window.addEventListener("message", tealiumiabPostMessageHandler, false);

            __tcfapi("getTCData", 2, function(tcData, success) {
              if (success) {
                u.tc_string = "gdpr=";
                if (tcData.gdprApplies === true) {
                  u.tc_string += "1";
                } else if (tcData.gdprApplies === false) {
                  u.tc_string += "0";
                } else {
                  u.tc_string += String(tcData.gdprApplies);
                }
                u.tc_string += "&gdpr_consent=" + tcData.tcString;
                execute_send();
              }
            });
          }
        }
      } else {
        execute_send();
      }

      // eslint-disable-next-line no-inner-declarations
      function execute_send() {
        // Set data source
        if (u.data_source) {
          b.tealium_datasource = u.data_source;
        }

        u.make_enrichment_request = false;


        // If not in our sampling group, then exit (do not fire tag)
        if (!u.is_in_sample_group(b)) {
          return false;
        }
        u.get_performance_timing(b);

        for (i = 0; i < u.server_list.length; i++) {

          // if the server endpoints are not specifically configured for HTTP, then default to HTTPS
          if (u.server_list[i].toLowerCase().indexOf("http") === -1) {
            u.server_list[i] = u.validateProtocol(u.server_list[i], true);
          }

          if (u.enrichment_enabled[i] !== false) {
            u.enrichment_enabled[u.server_list[i]] = true;
          }
        }

        // For multiple server locations, need unique vid values for each
        if (u.server_list.length > 1) {
          u.profile_specific_vid = 1;
        }
        u.data = utag.datacloud || {};

        u.data["loader.cfg"] = {};
        for (d in utag.loader.GV(utag.loader.cfg)){
          if (utag.loader.cfg[d].load && utag.loader.cfg[d].send){
            utag.loader.cfg[d].executed = 1;
          } else {
            utag.loader.cfg[d].executed = 0;
          }
          u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);
        }

        //u.data.cfg=utag.cfg;
        u.data.data = b;
        /* Re-encode items in "qp." params */
        for (d in u.data.data) {
          if ((d+'').indexOf("qp.") === 0) {
            u.data.data[d] = encodeURIComponent(u.data.data[d]);
          } else if ((d+'').indexOf("va.") === 0) {
            /* Remove visitor attributes */
            delete u.data.data[d];
          }
        }
        /* Visit Number and Event Count -- event count starts over with each visit */
        if (!b["cp.utag_main_dc_event"]) {
          b["cp.utag_main_dc_visit"] = (1 + (b["cp.utag_main_dc_visit"] ? parseInt(b["cp.utag_main_dc_visit"]) : 0)) + "";
        }
        b["cp.utag_main_dc_event"] = (1 + (b["cp.utag_main_dc_event"] ? parseInt(b["cp.utag_main_dc_event"]) : 0)) + "";
        utag.loader.SC("utag_main", {"dc_visit" : b["cp.utag_main_dc_visit"], "dc_event" : b["cp.utag_main_dc_event"] + ";exp-session"});

        /* Update global data layer for Visitor Attribute check */
        utag.data["cp.utag_main_dc_visit"] = b["cp.utag_main_dc_visit"];
        utag.data["cp.utag_main_dc_event"] = b["cp.utag_main_dc_event"];

        var dt = new Date();
        /* Send browser info */
        u.data.browser = {};
        try {
          u.data.browser["height"] = window.innerHeight || document.body.clientHeight;
          u.data.browser["width"] = window.innerWidth || document.body.clientWidth;
          u.data.browser["screen_height"] = screen.height;
          u.data.browser["screen_width"] = screen.width;
          u.data.browser["timezone_offset"] = dt.getTimezoneOffset();
        } catch (e) {
          utag.DB(e);
        }

        u.data["event"] = a + '';
        u.data["post_time"] = dt.getTime();

        /* Audience Stream Data Layer Enrichment */
        if (u.data_enrichment === "frequent" || u.data_enrichment === "infrequent") {

          u.visit_num = b["cp.utag_main_dc_visit"];

          if (parseInt(u.visit_num) > 1 && b["cp.utag_main_dc_event"] === "1") {
            u.enrichment_polling = 2;
          }

          try {
            u.va_update = parseInt(localStorage.getItem("tealium_va_update") || 0);
          } catch (e) {
            utag.DB(e);
          }

          u.visitor_id = u.visitor_id || b.tealium_visitor_id || b["cp.utag_main_v_id"];
          if (u.data_enrichment === "frequent" ||
            (u.data_enrichment === "infrequent" && parseInt(u.visit_num) > 1 && parseInt(b["cp.utag_main_dc_event"]) <= 5 && u.visit_num !== u.va_update)) {
            u.make_enrichment_request = true;
          // } else if (b._corder) {
          //   u.make_enrichment_request = true;
          //   u.enrichment_polling = 3;
          //   u.enrichment_polling_delay = 4000;
          }


          u.visitor_service_request = function (t, server) {
            var s, p = u.get_account_profile(server);

            if (u.visitor_service_override) {
              s = u.validateProtocol(u.visitor_service_override, true);
            } else {
              s = u.validateProtocol(u.server_prefix, true) + "visitor-service" + (u.region ? "-" + u.region : "").replace( /[^-A-Za-z0-9+_.]/g, "" ) + "." + u.server_domain;
            }

            (function(p){
              // declare multiple functions with dynamic local storage key -- multiple enrichments in same domain
              var prefix = "tealium_va";
              var key = "_" + p[1] + "_" + p[2];

              utag.ut["writeva"+p[2]] = function(o) {
                utag.DB("Visitor Attributes: " + prefix + key);
                utag.DB(o);
                var str = JSON.stringify(o);
                if (str !== "{}" && str !== ""){
                  try {
                    localStorage.setItem("tealium_va_update", utag.data["cp.utag_main_dc_visit"]);
                    // for utag.js v4.38 or earlier
                    localStorage.setItem( prefix, str);
                    // dynamic location in localstorage (utag.js 4.39 or later)
                    localStorage.setItem( prefix + key, str);
                  } catch (e) {
                    utag.DB(e);
                  }

                  if (typeof tealium_enrichment === "function") {
                    tealium_enrichment(o, prefix + key);
                  }
                }
              };
            }(p.slice(0)));

            var vid = b.tealium_override_tapid || b.tealium_visitor_id || b['cp.utag_main_v_id'] || u.visitor_id;
            if( u.profile_specific_vid === 1 ){
              vid += p[2];
            }
            var srcUrl = s + '/' + p[1] + '/' + p[2] + '/' + vid.replace(/[\?\&]callback=.*/g, '') + '?callback=utag.ut%5B%22writeva' + p[2] + '%22%5D&rnd=' + t;
            if (b.tealium_cookie_domain){
              srcUrl = srcUrl + '&tealium_cookie_domain=' + b.tealium_cookie_domain
              if(b.tealium_cookie_expiry){
                srcUrl = srcUrl   + '&tealium_cookie_expiry=' + b.tealium_cookie_expiry
              }
            }
            utag.ut.loader({
              id: 'tealium_visitor_service_172'+p[2]+'_'+u.request_increment++,
              src: srcUrl
            });
          };

          u.do_enrichment = (u.do_enrichment && u.do_enrichment.toString().match(/\{([\s\S]*)\}/m)[1].trim() !== '') ? u.do_enrichment : function(server, enrichment_polling, enrichment_polling_delay) {
            // utag.js 4.27 or later is required
            if (typeof utag.ut.loader!="undefined") {
              // additional attempts for visitor enrichment
              for (i = 0; i < enrichment_polling; i++) {
                setTimeout(function(){u.visitor_service_request((new Date).getTime(), server);}, i * enrichment_polling_delay + 1);
              }
            }
          };
        }
        var json_string,
          regExpReplace = new RegExp(u.visitor_id, "g");

        // some tags need to report data upstream so it's captured in UDH; the following block looks in the utag.globals object for a nested object with the same key as the current event's tealium_random value and captures its key/value pairs
        if (b.tealium_random && typeof utag.globals[b.tealium_random] === "object") {
          for (var downstream_param in utag.globals[b.tealium_random]) {
            u.data.data[downstream_param] = u.deepCopy(utag.globals[b.tealium_random][downstream_param]);
          }
        }

        function getSendData(useEventData, server) {
          var dataStringify = u.data;
          var filterObject = u.data.data
          if (useEventData) {
            dataStringify = u.data.data;
            filterObject = u.data.data;
            u.data.data.tealium_profile = u.profile;
          }

          Object.keys(filterObject).forEach(dataKey => {
            if (['cp.trace_id', 'tealium_account', 'tealium_profile'].indexOf(dataKey) !== -1) {
              return;
            }
            if (dataKey.indexOf('cp.') === 0) {
                !u.send_cookie_values && delete filterObject[dataKey];
                return;
            }
            if (dataKey.indexOf('meta.') === 0) {
              !u.send_meta_values && delete filterObject[dataKey];
              return;
            }
            if (dataKey.indexOf('qp.') === 0) {
              !u.send_query_param_values && delete filterObject[dataKey];
              return;
            }
            if (dataKey.indexOf('ls.') === 0) {
              !u.send_localstorage_variables && delete filterObject[dataKey];
              return;
            }
            if (dataKey.indexOf('ss.') === 0) {
              !u.send_sessionstorage_variables && delete filterObject[dataKey];
              return;
            }
            if (dataKey.indexOf('dom.') === 0) {
              !u.send_dom_values && delete filterObject[dataKey];
              return;
            }
            if (
              dataKey.indexOf('dom.') !== 0 &&
              dataKey.indexOf('ss.') !== 0 &&
              dataKey.indexOf('ls.') !== 0 &&
              dataKey.indexOf('qp.') !== 0 &&
              dataKey.indexOf('meta.') !== 0 &&
              dataKey.indexOf('cp.') !== 0
            ) {
              !u.send_udo_variables && delete filterObject[dataKey];
              return;
            }
          });

          json_string = JSON.stringify(dataStringify);

          // u.profile_specific_vid is only set to 1 when multiple server endpoints are configured
          // u.visitor_id is only set if the enrichment frequency is "frequent" or "infrequent"
          // this replaces the normal visitor ID with a profile-specific visitor ID for each endpoint so that visitor IDs are not shared across multiple endpoints
          if (u.profile_specific_vid === 1 && u.visitor_id) {
            json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
          }
          if (useEventData) {
            return json_string;
          }

          var formData = new FormData();
          formData.append("data", json_string);
          return formData;
        }

        function postData(server_index, enrichment_polling, enrichment_polling_delay, useEventData) {

          if (server_index+1 > u.server_list.length) {
            return;
          }
          var xhr = new XMLHttpRequest();
          var server = u.validateProtocol(u.server_list[server_index], true);
          var data = getSendData(useEventData, server);

          // Use sendBeacon, if available, to send the request data
          // unless region has not been obtained yet or have not been provided by the configuration
          // when region will get obtained switch to sendBeacon because it is not necessary to process the response again
          // If region is not obtained yet or have not been provided use XHR which allows processing of the response
          // and will obtain the information for leveraging the Tealium CDN regions
          u.region = utag.loader.RC("utag_main")["dc_region"] || u.region || "";
          if (typeof navigator.sendBeacon === 'function' && u.region !== "" && u.use_sendBeacon) {
            u.server_list.forEach(function(serverItem) {
              var beaconSent = navigator.sendBeacon(infixParameters(serverItem, u.tc_string), data);
              if (!beaconSent) {
                xhr.open("post", infixParameters(serverItem, u.tc_string), true);
                xhr.withCredentials = true;
                xhr.send(data);
              }
              if (u.make_enrichment_request && u.enrichment_enabled[serverItem]) {
                u.do_enrichment(serverItem, enrichment_polling, enrichment_polling_delay);
              }
            });
            utag.DB("Data sent using sendBeacon");
            return;
          }
          xhr.addEventListener("readystatechange", function() {
            if (xhr.readyState === 3) {
              try {
                u.region = xhr.getResponseHeader("X-Region") || u.region || "";
              } catch(res_error) {
                utag.DB(res_error);
                u.region = u.region || "";
              }

              if (u.region)utag.loader.SC("utag_main", {"dc_region": u.region + ";exp-session"});
              utag.DB("dc_region:" + u.region);
            } else if (xhr.readyState === 4) {
              // do secondary call for multiple server locations
              postData(server_index + 1, enrichment_polling, enrichment_polling_delay, useEventData);
              if (u.make_enrichment_request && u.enrichment_enabled[server]) {
                u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
              }
            }
          });

          // if a custom endpoint is listed without a protocol, this will force that endpoint to use HTTPS
          if (u.server_list[server_index].toLowerCase().indexOf("http") !== 0) {
            u.server_list[server_index] = u.validateProtocol(u.server_list[server_index], true);
          }
          var serverUrl = infixParameters(u.server_list[server_index], u.tc_string);
          xhr.open("post", serverUrl, true);
          xhr.withCredentials = true;

          xhr.send(data);
        }

        if (
          u.use_event_endpoint &&
          (u.tag_config_server === u.event_url || u.tag_config_region !== "default") &&
          window.FormData
        ) {
          postData(0, u.enrichment_polling, u.enrichment_polling_delay, true);
        } else if (window.FormData) {
          // modern browsers
          // eslint-disable-next-line no-inner-declarations
          postData(0, u.enrichment_polling, u.enrichment_polling_delay, false);
        } else {
          // fallback (old browsers)
          for (i = 0; i < u.server_list.length; i++) {
            (function(i, enrichment_polling, enrichment_polling_delay) {
              var server = u.server_list[i];
              setTimeout( function(){
                json_string = JSON.stringify(u.data);
                if (u.profile_specific_vid == 1 && u.visitor_id) {
                  json_string = json_string.replace(regExpReplace, u.visitor_id + u.get_account_profile(server)[2]);
                }
                var img = new Image();
                img.src = server + "?" + (u.tc_string ? u.tc_string + "&" : "") + "data="+encodeURIComponent(json_string);
                if ( u.make_enrichment_request && u.enrichment_enabled[server] ) {
                  u.do_enrichment(server, enrichment_polling, enrichment_polling_delay);
                }
              }, i*700 );
            }(i, u.enrichment_polling, u.enrichment_polling_delay));
          }
        }
      }
    }
  };
  try{utag.o[loader].loader.LOAD(id);}catch(e){utag.loader.LOAD(id);}
})("172","vodafone.cz-main");
}catch(e){utag.DB(e);}
//end tealium universal tag
