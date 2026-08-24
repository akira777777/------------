//~~tv:7127.20240528
//~~tc: Add vid checking
//~~tc: removing support for IAB version 1.1

// ESLint configurations
/*global utag __tcfapi tealiumiabPostMessageHandler*/

//tealium universal tag - utag.sender.7127 ut4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    /* utag.js version 4.26 or above is required to avoid errors with this loader function */
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {"view" : 1};

      u.map={"_sm_182_1":"tealium_delete_3rd_party_vid_cookies","cp.trace_id":"tealium_trace_id"};
  u.extend=[function(a,b){
try{b['_sm_182_1']=true;}catch(e){utag.DB(e);}
},
function(a,b){ try{ if(1){
//the tealium_vid parameter for the cookie sync tag is normally read from cp.utag_main_vid
//however, if the visitor has been switched, then the switching extension will have written cookie cp.utag_main_changed_as_id
//if this is present, then substitute that in the cp.utag_main_vid data layer for just this tag

if (b['cp.utag_main_changed_as_id']){
    b['cp.utag_main_v_id'] = b['cp.utag_main_changed_as_id'];
}

// Avoid multiple cookie_sync calls
let matchedcookies = sessionStorage.getItem('cdp_matchedcookies') || '';
if(matchedcookies && matchedcookies.indexOf(b['cp.utag_main_v_id']) > -1) return false;
else sessionStorage.setItem('cdp_matchedcookies', matchedcookies + '|' + b['cp.utag_main_v_id']);


} } catch(e){ utag.DB(e) }  }];


    u.getVID = function (data_layer) {
      return data_layer["cp.utag_main_v_id"] || data_layer["tealium_visitor_id"] || data_layer["ut.visitor_id"];
    };

    u.checkVID = function (data_layer, oncePerSession) {
      var vid = u.getVID(data_layer);

      if (!vid) {
        utag.DB(u.id + ": Tag not fired: Visitor ID is undefined");
        return false;
      }

      if (oncePerSession) {
        if (utag.loader.RC("utag_main")["tag_session_182"]) {
          utag.DB(u.id + ": Tag not fired: Same session is detected");
          return false;
        } else {
          utag.loader.SC("utag_main", { "tag_session_182": "1;exp-session" });
        }
      }

      return true;
    };

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        if (!u.checkVID(b, true)) return;

        utag.DB("send:182");
        utag.DB(b);

        var c, d, e, f, key;

        u.data = {
          qsp_delim: "&",
          kvp_delim: "=",
          base_url: "//cm.g.doubleclick.net/pixel?",
          google_nid: "tealium_dmp",
          tealium_selector: "",
          tealium_trace_id: "",
          tealium_account: "vodafone",
          tealium_profile: "cz-main-cdp",
          custom: {},
          iab_v20_compliance: true,
          tc_string: ""
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        utag.DB("send:182:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = b[d];
              } else {
                u.data.custom[e[f]] = b[d];
              }
            }
          }
        }
        utag.DB("send:182:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        //this is a fallback check for IAB compliance; if IAB does not apply, then this tag will execute normally
        if (u.data.iab_v20_compliance === true || u.data.iab_v20_compliance === "true") {
          // if the tcfapi is available, collect the TC string
          if (typeof __tcfapi === "function") {
            __tcfapi("getTCData", 2, function(tcData, success) {
              if (success) {
                u.data.tc_string += "gdpr=";
                if (tcData.gdprApplies === true) {
                  u.data.tc_string += "1";
                } else if (tcData.gdprApplies === false) {
                  u.data.tc_string += "0";
                } else {
                  u.data.tc_string += String(tcData.gdprApplies);
                }
                u.data.tc_string += "&gdpr_consent=" + tcData.tcString;
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
                  u.data.tc_string += "gdpr=";
                  if (tcData.gdprApplies === true) {
                    u.data.tc_string += "1";
                  } else if (tcData.gdprApplies === false) {
                    u.data.tc_string += "0";
                  } else {
                    u.data.tc_string += String(tcData.gdprApplies);
                  }
                  u.data.tc_string += "&gdpr_consent=" + tcData.tcString;
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
          // Set Tealium Account / Profile
          u.data.tealium_account = u.data.tealium_account || utag.cfg.utid.split("/")[0];
          u.data.tealium_profile = u.data.tealium_profile || utag.cfg.utid.split("/")[1];


          c.push("tealium_cookie_sync" + u.data.kvp_delim + "true");
          c.push("google_nid" + u.data.kvp_delim + u.data.google_nid);
          c.push("google_cm");

          c.push("tealium_vid" + u.data.kvp_delim + u.getVID(b));
          c.push("tealium_account" + u.data.kvp_delim + u.data.tealium_account);
          c.push("tealium_profile" + u.data.kvp_delim + u.data.tealium_profile);
          if (u.data.tealium_selector) {
            c.push("tealium_selector" + u.data.kvp_delim + u.data.tealium_selector);
          }
          if (u.data.tealium_trace_id) {
            c.push("tealium_trace_id" + u.data.kvp_delim + u.data.tealium_trace_id);
          }

          // handles custom mappings
          if (!utag.ut.isEmptyObject(u.data.custom))
            for (key in u.data.custom) {
              if (u.data.custom.hasOwnProperty(key)) {
                c.push(key + u.data.kvp_delim + u.data.custom[key]);
              }
          }

          if (u.data.tc_string) {
            u.data.base_url += u.data.tc_string + "&" + c.join(u.data.qsp_delim);
          } else {
            u.data.base_url += c.join(u.data.qsp_delim);
          }

          u.loader({
            "type" : "img",
            "src" : u.data.base_url
          });

          utag.DB("send:182:COMPLETE");
        }

      }
    };
    utag.o[loader].loader.LOAD(id);
  }("182", "vodafone.cz-main"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
