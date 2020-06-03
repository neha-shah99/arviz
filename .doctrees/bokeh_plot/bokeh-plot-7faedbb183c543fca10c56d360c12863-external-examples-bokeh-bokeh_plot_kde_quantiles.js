(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("96d6c6ff-89e3-40b1-9aeb-5e89bd172768");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '96d6c6ff-89e3-40b1-9aeb-5e89bd172768' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;6907d2e4-c74c-49f8-a588-550adf67a179&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[268]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/d7E4W/G6P793sThb8bo/Iao1lD/zuj+1jWFAQfy6P+js8owyHrs/XNMO7QRJuz8v2WbQsI+7P9Xss01H6bs/7SaQcCVbvD8FObXYsu28PxUuwyRCrb0/RSrkTHSKvj+zO+m6boK/P5PRT5qqSMA/EIVbKdrTwD/wb9QzxGLBPw5fA4ic8sE/fFNZ9/qEwj9OmCJxMRHDP1+ej+KGnMM/fQwojp4gxD+OE7Vqjp/EP++nEirDFMU/s9mVBGyGxT/t66+lT/HFPw8Ta4YyVsY/JeXp0xu3xj8tioOCrxDHP4UFggM1Ysc/KtCcKremxz+ppHxxyd/HPxmPT70lD8g/zBD+WeE1yD/KXn8j103IP4f7rG04X8g/qbXCM4dhyD8Q8NGdAl3IP8iwW2NkVsg/ZcrpUdRVyD/sYeOmAFXIP+i91jS2Xsg/oP9kTah3yD/wCEmni63IP6055LvD78g/gmWPMFdEyT8G1NuP5anJPzs70dzVIso/rHpNV6epyj9D6RyTATjLP5PqTPHm1Ms/1C033Q5mzD9yuD1baPDMP0jSsPW3dc0/F0e52ODnzT/Y1U6ZWFjOP7Jbwn6Jwc4/evtdmJIozz/RpFKj/YPPPziLRyxk8s8/1NBSDZsy0D95asjgj37QP81BEPD32NA/HlySYPZJ0T/fJ5UCYdPRP7dO+JW/eNI/A5rIops10z9h5caCswrUP8I35B0g89Q/JeSFj+Dr1T+FfvJWA+7WP9GxF+be99c/Y0PTYcMF2T9PmBZIcgPaP2UobVBz9No/2A12CQPV2z/gOGh/D57cP7TMPGVoT90/Y7HTrIjq3T9thPbypm7ePyhDs0j2394/BdHMo1JB3z9vTyIRa5vfP6SgDGMW898/UMDAA2Ik4D9pxUzP+lLgP0Tnvj58ieA/9Hs1yDrF4D/N7/F+8wvhP/oWPnzEYOE/KaDJQwLD4T+SYbUWlTPiP84Ourg6seI/zUOjw4I64z8fhyrSUdLjP6rDBTChc+Q/EoUAIj0c5T/vTtUJZMvlP2VTmuiOfuY/jefvnnkx5z9gDVNVYujnPxKvWehspOg/6d5o0EBh6T++NwaEiRzqP5p5YXE+1eo//8d6Z/uR6z9eyARQuFPsP6SdVgxTH+0/mOI3RyDv7T+g/DIttMnuPxY9Y3Q2sO8/qAvMqhZP8D/CSfcR0cvwP8C6+D4HTvE/5yH+JGPT8T9jy7U4XVzyP8QzVPwf5/I/eaR1Y+xz8z8BNOA3QgH0P/maxEdDi/Q/qYDzfMES9T//k4y2CJH1P0zfU9F3DfY/0R/Pu+yB9j/QkHo0ee/2P3mb2GTRVPc/bDZ5iZm09z+PucOsSgv4P3T0Ppp8Xfg/OaER8pao+D98FzznpPD4Pw4zsTxaNPk/IUSfIot0+T8k1vUoLrr5PwnZqtuB/Pk/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[268]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61755&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61754&quot;}},&quot;id&quot;:&quot;61737&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61696&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61712&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61739&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61709&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61732&quot;}},&quot;id&quot;:&quot;61736&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61732&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61733&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61734&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61736&quot;}},&quot;id&quot;:&quot;61735&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61704&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61699&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61702&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61738&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;61760&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;61761&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61711&quot;}},&quot;id&quot;:&quot;61705&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61686&quot;},0,0]]},&quot;id&quot;:&quot;61759&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61750&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61710&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61737&quot;}},&quot;id&quot;:&quot;61741&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61751&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61695&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61698&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61737&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61738&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61739&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61741&quot;}},&quot;id&quot;:&quot;61740&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61733&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61712&quot;}},&quot;id&quot;:&quot;61707&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61747&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61700&quot;}},&quot;id&quot;:&quot;61699&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61687&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61703&quot;},{&quot;id&quot;:&quot;61704&quot;},{&quot;id&quot;:&quot;61705&quot;},{&quot;id&quot;:&quot;61706&quot;},{&quot;id&quot;:&quot;61707&quot;},{&quot;id&quot;:&quot;61708&quot;},{&quot;id&quot;:&quot;61709&quot;},{&quot;id&quot;:&quot;61710&quot;}]},&quot;id&quot;:&quot;61713&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61713&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61703&quot;},{&quot;id&quot;:&quot;61704&quot;},{&quot;id&quot;:&quot;61705&quot;},{&quot;id&quot;:&quot;61706&quot;},{&quot;id&quot;:&quot;61707&quot;},{&quot;id&quot;:&quot;61708&quot;},{&quot;id&quot;:&quot;61709&quot;},{&quot;id&quot;:&quot;61710&quot;}]},&quot;id&quot;:&quot;61760&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61691&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;61743&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61752&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61693&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61753&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61748&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61723&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;61761&quot;},{&quot;id&quot;:&quot;61759&quot;}]},&quot;id&quot;:&quot;61762&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61747&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;bekSp/1AMj8SBPa6k4JvP3vVhOCDXn4/dlTH8d59hj8vPkzze8yNP/STaHqMjZI/0Qgr+9o0lj+ufe17KdyZP4ryr/x3g50/szO5PmOVoD8hbhp/CmmiP5Coe7+xPKQ//uLc/1gQpj9sHT5AAOSnP9tXn4Cnt6k/21efgKe3qT/bV5+Ap7epP2wdPkAA5Kc//uLc/1gQpj+QqHu/sTykPyFuGn8KaaI/szO5PmOVoD+K8q/8d4OdP6597Xsp3Jk/0Qgr+9o0lj/0k2h6jI2SPy8+TPN7zI0/dlTH8d59hj971YTgg15+PxIE9rqTgm8/bekSp/1AMj9t6RKn/UAyPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[32]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs5mtm3VDEECzma2bdUMQQASv2vIskRBAoFxL7dfgEEAFdKCHETERQFk4s2OFgBFA7j7xXRXOEUDcvbA+GRgSQHuJArxEXRJALNmG+5SdEkAEBBYZgdYSQHeZFPQhBxNAwv6cAGouE0AgIAFdaksTQFm04GmeXBNACHa5QEdiE0AAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[32]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61749&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61748&quot;}},&quot;id&quot;:&quot;61722&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61724&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;61745&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61696&quot;}},&quot;id&quot;:&quot;61695&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61689&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61728&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61695&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61698&quot;},{&quot;id&quot;:&quot;61702&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61699&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;61725&quot;},{&quot;id&quot;:&quot;61730&quot;},{&quot;id&quot;:&quot;61735&quot;},{&quot;id&quot;:&quot;61740&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;61743&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61713&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61687&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61691&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61689&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61693&quot;}},&quot;id&quot;:&quot;61686&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61708&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61711&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61722&quot;}},&quot;id&quot;:&quot;61726&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61722&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61723&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61724&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61726&quot;}},&quot;id&quot;:&quot;61725&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61754&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;SZIAwU6Lqz+3zGEB9l6tPyUHw0GdMq8/ySASQSKDsD8AvkLh9WyxPzdbc4HJVrI/b/ijIZ1Asz+mldTBcCq0P90yBWJEFLU/FNA1Ahj+tT9LbWai6+e2P4IKl0K/0bc/uafH4pK7uD/xRPiCZqW5PyjiKCM6j7o/X39Zww15uz+WHIpj4WK8P825ugO1TL0/BFfro4g2vj879BtEXCC/Pzv0G0RcIL8/O/QbRFwgvz8EV+ujiDa+P825ugO1TL0/lhyKY+FivD9ff1nDDXm7PyjiKCM6j7o/8UT4gmaluT+5p8fikru4P4IKl0K/0bc/S21mouvntj8U0DUCGP61P90yBWJEFLU/ppXUwXAqtD9v+KMhnUCzPzdbc4HJVrI/AL5C4fVssT/JIBJBIoOwPyUHw0GdMq8/t8xhAfZerT9JkgDBTourP0mSAMFOi6s/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[42]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL5KEjm+1wlAvkoSOb7XCUBaTy3IShAKQCApxshIQwpAga1jC8BvCkDTj8rZKpwKQDt4td7cxgpAqCxWo+f1CkC8swTJGigLQDUHGmfBXwtAO3ictz2eC0C8QspAcuULQPJUx6rENAxAlsd4HP2MDEAlpeJpSO4MQDlq56ufWg1AbTHUNzTPDUAMY79gcUoOQJlOWK9jzw5A/neRTxpcD0Au4D2lEu4PQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[42]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61751&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61750&quot;}},&quot;id&quot;:&quot;61727&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;uUgm8hcFwD9Vlz7CAXrAP/HlVpLr7sA/jDRvYtVjwT8og4cyv9jBP8PRnwKpTcI/XyC40pLCwj/7btCifDfDP5a96HJmrMM/MgwBQ1AhxD/NWhkTOpbEP2mpMeMjC8U/BPhJsw2AxT+gRmKD9/TFPzyVelPhacY/1+OSI8vexj9zMqvztFPHPw6Bw8OeyMc/qs/bk4g9yD9FHvRjcrLIP+FsDDRcJ8k/fbskBEacyT8YCj3ULxHKP7RYVaQZhso/T6dtdAP7yj/r9YVE7W/LP4ZEnhTX5Ms/IpO25MBZzD+94c60qs7MP1kw54SUQ80/9X7/VH64zT/1fv9UfrjNP/V+/1R+uM0/WTDnhJRDzT+94c60qs7MPyKTtuTAWcw/hkSeFNfkyz/r9YVE7W/LP0+nbXQD+8o/tFhVpBmGyj8YCj3ULxHKP327JARGnMk/4WwMNFwnyT9FHvRjcrLIP6rP25OIPcg/DoHDw57Ixz9zMqvztFPHP9fjkiPL3sY/PJV6U+Fpxj+gRmKD9/TFPwT4SbMNgMU/aakx4yMLxT/NWhkTOpbEPzIMAUNQIcQ/lr3ocmaswz/7btCifDfDP18guNKSwsI/w9GfAqlNwj8og4cyv9jBP4w0b2LVY8E/8eVWkuvuwD9Vlz7CAXrAP7lIJvIXBcA/uUgm8hcFwD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[64]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHhNS4gkD6P0eE1LiCQPo/SKMwHZOL+j8yaqtVv9r6P/sx63QfMvs/fNhjJlqO+z86nG1qvfj7Px+7zHbPbPw/mRvpOO3v/D9CB5fJ7oD9P+woP9FsIv4/lJG1YXTR/j8CcorEiJP/PzOCCCK/MwBAFpYBejmoAEDkoesmJCQBQBM7r80EqQFAbgg1jmA2AkDn36PCqcsCQFAzO2eqZgNAxU/p2gAFBECutiIqO6cEQKdrNanxRwVAHrQxv63mBUAqh4en1X8GQLdyinkdEAdAXFJ0VN+YB0D01o0W2RYIQF2jkn07iAhAPxFcq5nvCEAwlOxzWEgJQPgzG18GlQlAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[64]}},&quot;selected&quot;:{&quot;id&quot;:&quot;61753&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;61752&quot;}},&quot;id&quot;:&quot;61732&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61745&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61755&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61729&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61749&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61734&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61727&quot;}},&quot;id&quot;:&quot;61731&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61700&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61727&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61728&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61729&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;61731&quot;}},&quot;id&quot;:&quot;61730&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61706&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61703&quot;,&quot;type&quot;:&quot;ResetTool&quot;}],&quot;root_ids&quot;:[&quot;61762&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"6907d2e4-c74c-49f8-a588-550adf67a179","root_ids":["61762"],"roots":{"61762":"96d6c6ff-89e3-40b1-9aeb-5e89bd172768"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();