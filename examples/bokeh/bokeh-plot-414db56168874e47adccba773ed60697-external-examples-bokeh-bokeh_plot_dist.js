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
    
      
      
    
      var element = document.getElementById("3da895e9-19f7-46ca-8e86-1a042ce42da2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3da895e9-19f7-46ca-8e86-1a042ce42da2' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;afcd4af5-eea6-45c3-bd16-028a37cb4475&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59347&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59282&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59268&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59260&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59341&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59291&quot;}},&quot;id&quot;:&quot;59290&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59263&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59266&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59320&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59325&quot;}]},&quot;id&quot;:&quot;59324&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59259&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59262&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59326&quot;}},&quot;id&quot;:&quot;59330&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59290&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59293&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59326&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59327&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59328&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59330&quot;}},&quot;id&quot;:&quot;59329&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59259&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59262&quot;},{&quot;id&quot;:&quot;59266&quot;},{&quot;id&quot;:&quot;59324&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59263&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59315&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59318&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59274&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59251&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59255&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59253&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59257&quot;}},&quot;id&quot;:&quot;59250&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59298&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59304&quot;}},&quot;id&quot;:&quot;59300&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59271&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59302&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59286&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59313&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59343&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59344&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59273&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59345&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59312&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59313&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59314&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59316&quot;}},&quot;id&quot;:&quot;59315&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59291&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59301&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59298&quot;},{&quot;id&quot;:&quot;59299&quot;},{&quot;id&quot;:&quot;59300&quot;},{&quot;id&quot;:&quot;59301&quot;},{&quot;id&quot;:&quot;59302&quot;},{&quot;id&quot;:&quot;59303&quot;}]},&quot;id&quot;:&quot;59305&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59348&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59347&quot;}},&quot;id&quot;:&quot;59326&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59250&quot;},{&quot;id&quot;:&quot;59281&quot;}]},&quot;id&quot;:&quot;59331&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59288&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59312&quot;}},&quot;id&quot;:&quot;59316&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59299&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59267&quot;},{&quot;id&quot;:&quot;59268&quot;},{&quot;id&quot;:&quot;59269&quot;},{&quot;id&quot;:&quot;59270&quot;},{&quot;id&quot;:&quot;59271&quot;},{&quot;id&quot;:&quot;59272&quot;}]},&quot;id&quot;:&quot;59274&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59290&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59293&quot;},{&quot;id&quot;:&quot;59297&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59294&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59329&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59335&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59305&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59282&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59286&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59284&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59288&quot;}},&quot;id&quot;:&quot;59281&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59315&quot;}]},&quot;id&quot;:&quot;59325&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59304&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59294&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59297&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59328&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59320&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59260&quot;}},&quot;id&quot;:&quot;59259&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59335&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59284&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59270&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59257&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59272&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59255&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59318&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59322&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59267&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59303&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59251&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59253&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59327&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59343&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59295&quot;}},&quot;id&quot;:&quot;59294&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59348&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59264&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;nMQgsHJokT/sUbgeheuxP9v5fmq8dMM/lkOLbOf7yT+mm8QgsHLIPxsv3SQGgcU/ObTIdr6fuj956SYxCKysP1pkO99PjZc/+n5qvHSTiD/8qfHSTWJwPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[11]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59345&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59344&quot;}},&quot;id&quot;:&quot;59312&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59295&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59273&quot;}},&quot;id&quot;:&quot;59269&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59314&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59341&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59322&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59264&quot;}},&quot;id&quot;:&quot;59263&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;59331&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"afcd4af5-eea6-45c3-bd16-028a37cb4475","root_ids":["59331"],"roots":{"59331":"3da895e9-19f7-46ca-8e86-1a042ce42da2"}}];
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