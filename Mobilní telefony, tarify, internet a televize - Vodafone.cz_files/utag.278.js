//~~tv:1157.20160302
//~~tc: Updated call to adf.track and added support for the order param
//~~tc: Updated base_url and template structure
//~~tc: Update tag url

var adf = adf || {};

//tealium universal tag - utag.sender.1157 ut4.0.202608191051, Copyright 2026 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1};
    u.initialized = false;
    u.scriptrequested = false;
    u.queue = [];
    u.escape = window.encodeURIComponent || window.escape;

      u.map={"vfcz__customer_type":"order.sv1","va.current_visit.properties.5481":"order.sv2","vfcz__adform_product_name":"product_names","_sm_278_4":"currency","vfcz__adform_product_price":"product_prices","_sm_278_6":"order.var99","vfcz__normalized_pathname":"order.sv3","_sm_278_8":"product_ids","_sm_278_9":"tracking_point_id"};
  u.extend=[function(a,b){
try{b['_sm_278_4']="CZK";}catch(e){utag.DB(e);}
try{b['_sm_278_6']="UID278";}catch(e){utag.DB(e);}
try{b['_sm_278_8']="0";}catch(e){utag.DB(e);}
try{b['_sm_278_9']="page_view";}catch(e){utag.DB(e);}
}];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f,
            prop, //for iterating the "u" object,
            i, //numeric iterator
            customvar; //keyname for custom variables (var, sv, svn etc.)

        u.data = {
          "base_url" : "//track.adform.net/serving/scripts/trackpoint/",
          "campaignid" : "1002290",
          "tracking_point_id" : "",
          "page_name" : "",
          "divider" : "|",
          "adform_tracking_object" : {},
          // E-Commerce Vars
          "step" : "",
          "agegroup" : "",
          "order_id" : "",
          "order_subtotal" : "",
          "currency" : "",
          "country" : "",
          "product_ids": [],
          "product_names": [],
          "product_skus": [],
          "product_brands": [],
          "product_categories": [],
          "product_quantities": [],
          "product_prices": [],
          "product_discount": [],
          "product_unit_prices": [],
          "product_subcategories": []
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};
        // End tag-scoped extensions

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        // End Mapping

        /****************************************************/
        /******************  SET VARS HERE  *****************/
        /****************************************************/
        u.data.adform_tracking_object.pm = u.escape(u.data.campaignid);
        u.data.adform_tracking_object.Divider = u.escape(u.data.divider);

        //either page name or tracking point ID can be used, but Adform prefers page name
        //should be mapped using a lookup table for different page types
        if (u.data.tracking_point_id) {
          u.data.adform_tracking_object.id = u.escape(u.data.tracking_point_id);
        } else if (u.data.page_name) {
          u.data.adform_tracking_object.PageName = u.escape(u.data.page_name);
        }

        //localise e-commerce vars here. all can be overridden by individual mappings
        u.data.order_id = u.escape(u.data.order_id || b._corder || "");
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || b._ctotal || "";
        u.data.currency = u.data.currency || b._ccurrency || "";
        u.data.country = u.data.country || b._ccountry || "";
        if (u.data.product_ids.length === 0 &&  b._cprod !== undefined) { u.data.product_ids = b._cprod.slice(0); }
        if (u.data.product_names.length === 0 &&  b._cprodname !== undefined) { u.data.product_names = b._cprodname.slice(0); }
        if (u.data.product_categories.length === 0 &&  b._ccat !== undefined) { u.data.product_categories = b._ccat.slice(0); }
        if (u.data.product_quantities.length === 0 &&  b._cquan !== undefined) { u.data.product_quantities = b._cquan.slice(0); }
        if (u.data.product_prices.length === 0 &&  b._cprice !== undefined) { u.data.product_prices = b._cprice.slice(0); }
        if (u.data.product_unit_prices.length === 0 && b._cprice !== undefined) { u.data.product_unit_prices = b._cprice.slice(0); }
        if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) { u.data.product_discount = b._cpdisc.slice(0); }
        if (u.data.product_subcategories.length === 0 && b._ccat2 !== undefined) { u.data.product_subcategories = b._ccat2.slice(0); }
        u.data.step = u.data.step || (b._corder ? "3" : "1"); //step defaults to 3 if not specified, and there is an order ID
	if (typeof adfOrderHolder !== "undefined") {u.data.adform_tracking_object.order=adfOrderHolder;}
        //Order object gets created regardless of whether we have an order ID or not.
        //"step" is what determines product view, basket, or conversion
        if (u.data.product_ids.length > 0) {
          u.data.adform_tracking_object.order = {};
          u.data.adform_tracking_object.order.sales = u.data.order_subtotal || "";
          u.data.adform_tracking_object.order.currency = u.data.currency || "";
          u.data.adform_tracking_object.order.basketsize = u.data.product_ids.length || 1;
          u.data.adform_tracking_object.order.country = u.data.country || "";
          u.data.adform_tracking_object.order.orderid = u.data.order_id || "";
          u.data.adform_tracking_object.order.gender = u.escape(u.data.gender || "");
          u.data.adform_tracking_object.order.agegroup = u.data.agegroup || "";
          u.data.adform_tracking_object.order.itms = [];

          for (i = 0; i < u.data.product_ids.length; i++) {
            var product = {}; //initialise product
            product.categoryname = u.escape(u.data.product_categories[i] || "");
            product.productid = u.data.product_ids[i];
            product.productname = u.escape(u.data.product_names[i] || "");
            product.productcount = u.escape(u.data.product_quantities[i] || "");
            product.productsales = u.data.product_prices[i] || "";
            product.step = u.data.step; //step 3 is the checkout page, 2 is basket, and 1 is product view
            u.data.adform_tracking_object.order.itms.push(product);
          }

          for (prop in u.data) {
            if (u.data.hasOwnProperty(prop)) {
              customvar = prop.split(".")[1]; //take the 2nd part of the custom var name, ignoring "order." or "product."
              if (/^order\.(sv|var)/.test(prop)) {
                //possible options are "var" for custom data, "sv" for custom strings or "svn" for custom numerical values
                //everything is sent as a string, so no need to
                //u.data.adform_tracking_object.order[customvar] = u.escape("" + (u.data[prop]));
                u.data.adform_tracking_object.order[customvar] = "" + (u.data[prop]);
              } else if (/^product\.(sv|var)/.test(prop)) {
                if ((u.data[prop] instanceof Array) && u.data[prop].length === u.data.product_ids.length) {
                  for (i = 0; i < u.data.product_ids.length; i++) {
                    //u.data.adform_tracking_object.order.itms[i][customvar] = u.escape("" + (u.data[prop][i]));
                    u.data.adform_tracking_object.order.itms[i][customvar] = "" + (u.data[prop][i]);
                  }
                }
              }
            }
          }
        } //end of e-commerce data

        // Start Loader Callback
        u.loader_cb = function (a,b,c) {
          var adform_param;
          u.initialized = true;
          adf.Params = adf.Params || {};
          for (adform_param in u.data.adform_tracking_object) {
            if (adform_param.toLowerCase() == "order") {
              adf.Order = u.data.adform_tracking_object[adform_param];
            } else if (u.data.adform_tracking_object.hasOwnProperty(adform_param)) {
              adf.Params[adform_param] = u.data.adform_tracking_object[adform_param];
            }
          }
          if (u.data.campaignid !== "") {
            adf.track(u.data.campaignid, u.data.tracking_point_id);
          }
        };
        // End Loader Callback

        u.callBack = function () {
          var data = {};
          while (data = u.queue.shift()) {
            u.data = data.data;
            u.loader_cb(data.a,data.b,data.c);
          }
        };

        /****************************************************/
        /*************** LOAD ADFORM LIBRARY ****************/
        /****************************************************/
        if (u.initialized) {
          u.loader_cb(a,b,c);
        } else {
          u.queue.push({"data" : u.data, "a" : a, "b" : b, "c": c});
          if (!u.scriptrequested) {
            u.scriptrequested = true;
            u.loader({"type": "script",  "src": u.data.base_url, "cb": u.callBack, "loc": "script", "id": 'utag_278' });
          }
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("278", "vodafone.cz-main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

