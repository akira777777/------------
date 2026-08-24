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

      u.map={"adf_page_name":"page_name","adf_divider":"divider","visitor_subscription_type":"product.sv3","campaign_internal_id":"product.sv4","visitor_id_adform":"product.sv5","visitor_type":"product.sv6","adf_step":"step"};
  u.extend=[function(a,b,c,d,e,f,g){if(b['dom.domain'].toString().toLowerCase().indexOf('.upc.cz'.toLowerCase())<0){d=b['page_name'];if(typeof d=='undefined')return;c=[{'Techforum':'Techforum'},{'Osobni:O Vodafonu:O spolecnosti:Pro media:':'Osobni:O Vodafonu:O spolecnosti:Pro media'},{'WSC:Roaming proposition':'WSC:Roaming proposition'},{'eShop:Kosik:Objednavka:1. Dodaci a platebni udaje':'eShop:Kosik:Objednavka:1. Dodaci a platebni udaje'},{'Osobni:O Vodafonu:Ke stazeni:Osobni a firemni':'Osobni:O Vodafonu:Ke stazeni:Osobni a firemni'},{'Osobni:O Vodafonu:Ke stazeni:Pro media a novinare':'Osobni:O Vodafonu:Ke stazeni:Pro media a novinare'},{'Osobni:O Vodafonu:Dokumenty ke stazeni':'Osobni:O Vodafonu:Dokumenty ke stazeni'},{'Homepage':'Homepage'},{'Osobni:O Vodafonu:Kontakty:Prodejny Vodafone:Seznam prodejen':'Osobni:O Vodafonu:Kontakty:Prodejny Vodafone:Seznam prodejen'},{'Osobni:O Vodafonu:Kontakty:Prodejny Vodafone:Rezervace Vodafone experta':'Osobni:O Vodafonu:Kontakty:Prodejny Vodafone:Rezervace Vodafone experta'},{'Standalone order form':'Standalone order form'},{'WSC:Ucet':'WSC:Ucet'},{'WSC:Nastaveni sluzeb':'WSC:Nastaveni sluzeb'},{'WSC:Utrata a Vyuctovani:Vyuctovani':'WSC:Utrata a Vyuctovani:Vyuctovani'},{'WSC:Utrata a Vyuctovani:Aktualni utrata a cerpani':'WSC:Utrata a Vyuctovani:Aktualni utrata a cerpani'},{'Dotaznik spokojenosti:Dotazni spokojenosti':'Dotaznik spokojenosti:Dotazni spokojenosti'},{'CentrumPece':'CentrumPece'},{'CentrumPeceOneNet':'CentrumPeceOneNet'},{'CentrumPE':'CentrumPece'},{'CentrumPEOneNet':'CentrumPeceOneNet'},{'centrum pece:osobni':'centrum pece:osobni'},{'Centrum péče:osobni':'Centrum péče:osobni'},{'centrum pece:firemni':'centrum pece:firemni'},{'Centrum péče:Firemní':'Centrum péče:Firemní'},{'centrum pece:onenet':'centrum pece:onenet'},{'Centrum péče:OneNet':'Centrum péče:OneNet'},{'Care Centre:Consumer':'Care Centre:Consumer'},{'centrum pece:osobni:manuals':'centrum pece:osobni:manuals'},{'centrum pece:firemni:manuals':'centrum pece:firemni:manuals'},{'Centrum Péče:Nastavení telefonu':'Centrum Péče:Nastavení telefonu'},{'404':'404'},{'cilichili':'cilichili'},{'mCare':'mCare'},{'galery':'galery'},{'ONSC':'ONSC'},{'WSC:My account':'WSC:My account'},{'WSC:My services':'WSC:My services'},{'www.vodafone.cz/muj/zobrazit-fakturu/data':'www.vodafone.cz/muj/zobrazit-fakturu/data'},{'www.vodafone.cz/muj/utrata-a-vyuctovani/historie-vyuctovani-a-plateb':'www.vodafone.cz/muj/utrata-a-vyuctovani/historie-vyuctovani-a-plateb'},{'www.vodafone.cz/muj/utrata-a-vyuctovani/utrata-a-cerpani':'www.vodafone.cz/muj/utrata-a-vyuctovani/utrata-a-cerpani'},{'www.vodafone.cz/muj/obnova':'www.vodafone.cz/muj/obnova'},{'www.vodafone.cz/muj/utrata-a-vyuctovani/vyuctovani':'www.vodafone.cz/muj/utrata-a-vyuctovani/vyuctovani'},{'www.vodafone.cz/muj/en/password/':'www.vodafone.cz/muj/en/password/'},{'https://www.vodafone.cz/muj/obnova/':'https://www.vodafone.cz/muj/obnova/'},{'WSC:chatbot':'WSC:chatbot'},{'MC:chatbot':'MC:chatbot'},{'wsc_':'wsc_'},{'onenetsamoobsluha.vodafone.cz':'onenetsamoobsluha.vodafone.cz'},{'myupc':'myupc'},{'osobni:internet:dostupnost':'osobni:internet:dostupnost'},{'WSC:Personal_Account':'WSC:Personal_Account'},{'iOS:HappyAppExit':'happy-proklik-app-ios'},{'Android:HappyAppExit':'happy-proklik-app-android'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['adf_page_name']=c[e][f];m=true};};if(m)break};if(!m)b['adf_page_name']='DEFAULT';   }},
function(a,b){ try{ if(b['adf_page_name'].toString().indexOf('DEFAULT')>-1){b['adf_page_name']=b['page_name']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
b.adf_page_name = b.adf_page_name || s.pageName || "undefined pageName";
b.adf_page_name=b.adf_page_name.replace(/:/g, "|");
b.adf_page_name=b.adf_page_name.replace(/\//g, "|");
b.adf_page_name=b.adf_page_name.replace(/business\|/, "");
b.adf_page_name=b.adf_page_name.replace(/shop\|/, "");
if (/my\.upc\.cz/.test(document.location.host)) {
    b.adf_page_name="logged out";
    if (!/\/ForgottenPwd/.test(document.location.pathname)) {
        if (!/\/Registration/.test(document.location.pathname)) {
            if (!/\/Logon/.test(document.location.pathname)) {
                if (!(document.location.pathname=="/")) {
                    b.adf_page_name="logged in"; 
                }
            }
        }
    }
} else {
    if (/dostupnyinternet\.cz/.test(document.location.host)) {
       b.adf_page_name="aggregated";
    } else {
        if (/\.upc\.cz/.test(document.location.host)) {
            var adf_page_name_elements =b.adf_page_name.split("|");
            if (adf_page_name_elements.length>0) {
                b.adf_page_name = adf_page_name_elements[0];
            }
            if (adf_page_name_elements.length>1) {    
                b.adf_page_name += "|"+adf_page_name_elements[1]
            }   
        }
    }    
}
if (b.adf_page_name.indexOf("|click") != -1) {
    b.adf_page_name = b.adf_page_name.substring(0, b.adf_page_name.indexOf("|click"));
}
window.adfOrderHolder = window.adfOrderHolder || {};
if ((typeof tealium_s != "undefined") && (tealium_s.marketingCloudVisitorID)){
    window.adfOrderHolder.sv1 = tealium_s.marketingCloudVisitorID;
}
if (b.visitor_subscription_type){
    window.adfOrderHolder.sv3 = b.visitor_subscription_type;
}
if (b.campaign_internal_id){
    window.adfOrderHolder.sv4 = b.campaign_internal_id;
}
if (vfAcr.getAcr){
    window.adfOrderHolder.sv5 = vfAcr.getAcr("pacr2");
}
if (b.visitor_type){
    window.adfOrderHolder.sv6 = b.visitor_type;
}
b.adf_step = 0;
if (b.page_events && (b.page_events.indexOf("prod")!=-1)) {
    b.adf_step = 1;
    b.adf_page_name="www.vodafone.cz|Product page";
}
if ((b.page_events && (b.page_events.indexOf("sc")!=-1))||(s.pageName == "shop/checkout/step1")) {b.adf_step = 2;}
if ((b.page_events && (b.page_events.indexOf("purchase")!=-1))||(s.pageName == "shop/checkout/thankyou")) {b.adf_step = 3;}
if (b.adf_step != 0) {
    if ((document.domain == "online.upc.cz")&&(typeof dataLayer != "undefined")){
        for (var j in dataLayer) {
            if ((dataLayer[j].event == "Purchase")&&(dataLayer[j].transactionProducts.length>0)) {
                break;
            }          
        }
    };
    var adf_purchaseID = s.purchaseID || "";
    var adf_sum = 0;
    var adf_basket = 0;
    if ((typeof(adf_products)==="undefined") || adf_products.length == 0) {
        if ((typeof(window.s.products)!=="undefined") && window.s.products.length != 0) { 
            adf_products = b.adf_products = window.s.products;
        } else {
            if (typeof(b.sales_products)!=="undefined") { 
                adf_products = b.adf_products = b.sales_products;       
            }    
        }
    }
    if ((typeof(adf_products)==="undefined") || adf_products.length == 0) {
            window.s.contextData['error_message']  = "s_code:no Analytics products defined";
    } else {
        if (typeof tealium_s != "undefined") {var prep_sv1 = tealium_s.marketingCloudVisitorID;}
        var adf_prods = adf_products.split(",");
        if (b.adf_step==3) {
            var prep_sv2 = (typeof(b.visitor_customer_id)==="undefined" || b.visitor_customer_id.length ==0) ? "N" : "S";
        }
        if (typeof tealium_s != "undefined") { var prep_sv3 = tealium_s.prop9; }
        var prep_sv4 = b.campaign_internal_id;
        var prep_sv5 = vfAcr.getAcr("pacr2");
        if (typeof tealium_s != "undefined") { var prep_sv6 = tealium_s.prop8; }
        //var prep_sv8 = 0;
        var product_sales = 0;
        var allProducts = [];
        for (var i in adf_prods) {
            if ((typeof dataLayer == "undefined")||(typeof j == "undefined")) {
                var e17s = adf_prods[i].match(/event1[6|7]=\d+/);
                if (e17s==null) {product_sales=0;}
                else {
                   var e16s = e17s[0].match(/\d+/g);
                   product_sales = e16s[1];
                }     
                allProducts.push({
                    pgr: adf_prods[i].split(";")[0],
                    pid: adf_prods[i].split(";")[1]+(typeof b["qp.variant"] !== "undefined"?"-"+b["qp.variant"] : ""),
                    pcnt: adf_prods[i].split(";")[2] || 1,
                    psl: product_sales,
                    step: b.adf_step
                });
                if (adf_prods[i].split(";")[0]=="handset"){prep_sv8 = 1;}
                adf_sum += Number(product_sales);
            } else {
                if (dataLayer[j] && dataLayer[j].transactionProducts && dataLayer[j].transactionProducts[i]) {
                    product_sales = dataLayer[j].transactionProducts[i].price;
                    allProducts.push({
                        pgr: dataLayer[j].transactionProducts[i].category,
                        pid: dataLayer[j].transactionProducts[i].name,
                        pcnt: dataLayer[j].transactionProducts[i].quantity,
                        psl: product_sales,
                        step: b.adf_step
                    });
                    adf_sum += Number(product_sales);                
                }    
            }    
        }
        adf_basket=(dataLayer[j] && dataLayer[j].transactionProducts) ? dataLayer[j].transactionProducts.length : adf_prods.length;
    }

    window.adfOrderHolder = {
        sl: adf_sum,
        bsz: adf_basket,
        id: adf_purchaseID,
        sv1: prep_sv1,
        sv2: prep_sv2,
        sv3: prep_sv3,
        sv4: prep_sv4,
        sv5: prep_sv5,
        sv6: prep_sv6,
        //sv8: prep_sv8,
        itms: allProducts
    };
    b.adfOrderHolder = adfOrderHolder;
}
if ((typeof adf.Params !== "undefined")&&(typeof adf.Params.PageName !== "undefined")&&(adf.Params.PageName!="")){
    var pageNameSplit = adf.Params.PageName.split("|");
    if (pageNameSplit[pageNameSplit.length-2].indexOf("Telefony")!=-1 ) {
        pageNameSplit.splice(pageNameSplit.length-1,1);
    }
    pageNameSplit[pageNameSplit.length-1] = "detail page";
    adf.Params.PageName = pageNameSplit.join("|");
}

} } catch(e){ utag.DB(e) }  },
function(a,b,c,d){ try{ if(1){c=[b['dom.domain'],b['adf_page_name']];b['adf_page_name']=c.join('|')} } catch(e){ utag.DB(e); }  }];


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
                u.data.adform_tracking_object.order[customvar] = u.escape("" + (u.data[prop]));
              } else if (/^product\.(sv|var)/.test(prop)) {
                if ((u.data[prop] instanceof Array) && u.data[prop].length === u.data.product_ids.length) {
                  for (i = 0; i < u.data.product_ids.length; i++) {
                    u.data.adform_tracking_object.order.itms[i][customvar] = u.escape("" + (u.data[prop][i]));
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
            u.loader({"type": "script",  "src": u.data.base_url, "cb": u.callBack, "loc": "script", "id": 'utag_103' });
          }
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("103", "vodafone.cz-main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag

