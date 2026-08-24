//~~tv:19140.20250206
//~~tc:Created a new tag Seznam Retargeting

//ESLint Configurations
/*global utag*/

/* utag.js version 4.36 or above is required to avoid errors with this tag template */
window.sznIVA = window.sznIVA || {};
//tealium universal tag - utag.sender.template ut4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
  (function(id, loader) {
    var u = {
      id: id
    };

    utag.o[loader].sender[id] = u;

    u.ev = {
      view: 1,
      link: 1
    };

    u.initialized = false;
    u.scriptrequested = false;

    u.toBoolean = function (val) {
      val = val || "";
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

    u.clearEmptyKeys = function(object) {
      Object.keys(object).forEach(function(key) {
        if (
            object[key] === '' ||
            object[key] === undefined
        ) {
          delete object[key];
        }
      });
      return object;
    };

    // Start Loader Callback
    u.loaderCallback = function () {
      utag.DB('send:262:CALLBACK');
      u.initialized = true;

      window.sznIVA.IS.updateIdentities(u.clearEmptyKeys({
        eid: u.data.eid,
        aid: u.clearEmptyKeys({
            a1: u.data.a1,
            a2: u.data.a2,
            a3: u.data.a3,
            a4: u.data.a4,
            a5: u.data.a5,
        }),
        tid: u.data.tid,
      }));

      if (u.toBoolean(u.data.auto_tracking) && u.data.events.indexOf(u.EVENTS_LIST.retargeting) === -1) {
        u.data.events.push(u.EVENTS_LIST.retargeting);
      }

      u.callback();
      utag.DB('send:262:CALLBACK:COMPLETE');
    };
    // End Loader Callback


    u.callback = function () {
      u.data.events.forEach(function (eventName) {
        u.sendEvent(eventName);
      });
    };

    u.EVENTS_LIST = {
      retargeting: 'retargeting',
      conversion: 'conversion',
    };

    u.sendEvent = function(eventName) {
      switch (eventName) {
        case u.EVENTS_LIST.retargeting: {
          var retargetingConf = {
            rtgId: u.data.rtgId,
            itemId: u.data.itemId,
            category: u.data.category,
            pageType: u.data.pageType,
            rtgUrl: u.data.rtgUrl,
            consent: u.data.consent,
          };
          utag.ut.merge(retargetingConf, u.data[eventName], 1);

          window.rc.retargetingHit(u.clearEmptyKeys(retargetingConf));

          break;
        }
        case u.EVENTS_LIST.conversion: {
          var conversionConf = {
            id: u.data.id,
            value: u.data.value,
            orderId: u.data.orderId,
            zboziType: u.data.zboziType,
            zboziId: u.data.zboziId,
            consent: u.data.consent,
          };
          utag.ut.merge(conversionConf, u.data[eventName], 1);

          window.rc.conversionHit(u.clearEmptyKeys(conversionConf));
          break;
        }
      }
    };


      u.map={"sklik_consent":"consent"};
  u.extend=[];


    u.send = function(utag_event, data_layer) {
      if (!u.ev[utag_event] && u.ev.all === undefined) {
        utag.DB('send:262:EVENT NOT SUPPORTED:COMPLETE');
        return;
      }

      utag.DB('send:262');
      utag.DB(data_layer);

      var a, b, c, d, e, f, g, h, query_params;
      a = utag_event;
      b = data_layer;

      u.data = {
        rtgId: '1685988',
        auto_tracking: 'true',
        qsp_delim: '&',
        kvp_delim: '=',
        base_url: 'https://c.seznam.cz/js/rc.js',
        eid: 'eid',
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        a5: '',
        tid: '',
        itemId: '',
        category: '',
        pageType: '',
        rtgUrl: '',
        id: '',
        value: '',
        orderId: '',
        zboziType: '',
        zboziId: '',
        consent: '',
        custom: {},
        events: []
      };

      // Start tag-scoped extensions
      
      utag.DB('send:262:EXTENSIONS');
      utag.DB(data_layer);
      // End tag-scoped extensions

      query_params = [];

      // Start Mapping
      Object.keys(utag.loader.GV(u.map)).forEach(function (mapping_key) {
        if (data_layer[mapping_key] !== undefined && data_layer[mapping_key] !== "") {
          var destinations = u.map[mapping_key].split(",");
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
      // End Mapping

      // Bring E-Commerce extension values into u.data.
      // Mappings override E-Commerce extension values.

      var eCommerceMapping = [
        { eCommerceData: data_layer._corder, name: 'orderId', isArray: false },
        { eCommerceData: data_layer._ctotal, name: 'value', isArray: false },
        { eCommerceData: data_layer._ctype, name: 'zboziType', isArray: false },
      ];

      eCommerceMapping.forEach(function(dataObject) {
        if (!dataObject.isArray) {
          u.data[dataObject.name] = u.data[dataObject.name] || dataObject.eCommerceData || '';
        } else if (
          u.data[dataObject.name].length  === 0 &&
          dataObject.eCommerceData !== undefined &&
          dataObject.isArray
        ) {
          u.data[dataObject.name] = dataObject.eCommerceData.slice(0);
        }
      });


      // Report if required values are missing and stop tag from firing.
      if (!u.data.rtgId) {
        utag.DB(u.id + ': Tag not fired: Required attribute rtgId not populated');
        return;
      }

      if (u.initialized) {
        u.callback();
      } else {
        if (!u.scriptrequested) {
          u.scriptrequested = true;

          // JavaScript library loader
          utag.ut.loader({
            type: 'script',
            src: u.data.base_url,
            cb:  u.loaderCallback,
            loc: 'script',
            id: 'utag_262',
            attrs: {}
          });
        }
      }
      utag.DB('send:262:COMPLETE');
    };
    utag.o[loader].loader.LOAD(id);
  }('262', 'vodafone.cz-main'));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
