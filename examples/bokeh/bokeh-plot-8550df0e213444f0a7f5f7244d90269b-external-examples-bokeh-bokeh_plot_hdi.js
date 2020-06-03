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
    
      
      
    
      var element = document.getElementById("04175cd7-1256-4da8-b22d-e1e316810248");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '04175cd7-1256-4da8-b22d-e1e316810248' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;7d86919b-1708-47d8-8407-4dc4da1d3b2c&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60788&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60789&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60790&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60792&quot;}},&quot;id&quot;:&quot;60791&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60761&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60789&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60772&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60754&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60756&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60759&quot;},{&quot;id&quot;:&quot;60763&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60760&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60786&quot;},{&quot;id&quot;:&quot;60791&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60794&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60774&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60748&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60752&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60750&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60754&quot;}},&quot;id&quot;:&quot;60747&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60752&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60788&quot;}},&quot;id&quot;:&quot;60792&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60790&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60798&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60761&quot;}},&quot;id&quot;:&quot;60760&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60796&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60757&quot;}},&quot;id&quot;:&quot;60756&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60750&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60760&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60763&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60799&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60756&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60759&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60757&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60800&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60784&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60794&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;t2PHYHWcAsDJcpTLyIMCwOyQLqFvUgLAEK/IdhYhAsA0zWJMve8BwFjr/CFkvgHAfAmX9wqNAcCfJzHNsVsBwMNFy6JYKgHA52NleP/4AMAKgv9NpscAwC6gmSNNlgDAUr4z+fNkAMB23M3OmjMAwJr6Z6RBAgDAejEE9NCh/7/CbTifHj//vwqqbEps3P6/Ueag9bl5/r+YItWgBxf+v+BeCUxVtP2/KJs996JR/b9v13Gi8O78v7YTpk0+jPy//k/a+Isp/L9GjA6k2cb7v43IQk8nZPu/1AR3+nQB+78cQaulwp76v2R931AQPPq/q7kT/F3Z+b/y9Uenq3b5vzoyfFL5E/m/gm6w/Uax+L/JquSolE74vxDnGFTi6/e/WCNN/y+J97+gX4GqfSb3v+ebtVXLw/a/LtjpABlh9r92FB6sZv71v75QUle0m/W/BY2GAgI59b9MybqtT9b0v5QF71idc/S/3EEjBOsQ9L8jflevOK7zv2q6i1qGS/O/sva/BdTo8r/6MvSwIYbyv0FvKFxvI/K/iKtcB73A8b/Q55CyCl7xvxgkxV1Y+/C/X2D5CKaY8L+mnC208zXwv9yxw76Cpu+/bCosFR7h7r/6opRruRvuv4gb/cFUVu2/GJRlGPCQ7L+oDM5ui8vrvzaFNsUmBuu/xP2eG8JA6r9UdgdyXXvpv+Tub8j4tei/cmfYHpTw578A4EB1Lyvnv5BYqcvKZea/INERImag5b+uSXp4AdvkvzzC4s6cFeS/zDpLJThQ479cs7N704riv+orHNJuxeG/eKSEKAoA4b8IHe1+pTrgvzArq6qB6t6/TBx8V7hf3b9oDU0E79Tbv4j+HbElStq/qO/uXVy/2L/E4L8KkzTXv+DRkLfJqdW/AMNhZAAf1L8gtDIRN5TSvzilA75tCdG/sCyp1Uj9zr/wDksvtufLvzDx7Igj0si/cNOO4pC8xb+gtTA8/qbCv8AvpSvXIr+/QPTo3rH3uL+guCySjMyyv0D64IrOQqm/gAbR4gfZmb8AiAH+KsdSv4DVEIMigJc/AOIA21sWqD+ArDw6UzayPwDo+IZ4Ybg/oCO1052Mvj+QrziQ4VvCP1DNljZ0ccU/EOv03AaHyD/QCFODmZzLP6AmsSksss4/MKIHaN/j0D8QsTa7qG7SP/i/ZQ5y+dM/2M6UYTuE1T+43cO0BA/XP5js8gfOmdg/ePshW5ck2j9gClGuYK/bP0AZgAEqOt0/ICivVPPE3j+EG+9T3ifgP/Sihv1C7eA/ZCoep6ey4T/UsbVQDHjiP0Q5TfpwPeM/uMDko9UC5D8oSHxNOsjkP5jPE/eejeU/DFeroANT5j983kJKaBjnP+xl2vPM3ec/XO1xnTGj6D/MdAlHlmjpP0D8oPD6Leo/sIM4ml/z6j8gC9BDxLjrP5SSZ+0ofuw/BBr/lo1D7T90oZZA8gjuP+QoLupWzu4/VLDFk7uT7z/km64ekCzwP5xfenNCj/A/VCNGyPTx8D8O5xEdp1TxP8aq3XFZt/E/fm6pxgsa8j82MnUbvnzyP+71QHBw3/I/qLkMxSJC8z9gfdgZ1aTzPxhBpG6HB/Q/0gRwwzlq9D+KyDsY7Mz0P0KMB22eL/U/+k/TwVCS9T+yE58WA/X1P2zXamu1V/Y/JJs2wGe69j/cXgIVGh33P5YizmnMf/c/TuaZvn7i9z8GqmUTMUX4P75tMWjjp/g/djH9vJUK+T8w9cgRSG35P+i4lGb6z/k/oHxgu6wy+j9aQCwQX5X6PxIE+GQR+Po/ysfDucNa+z+Ci48Odr37PzpPW2MoIPw/8hInuNqC/D+u1vIMjeX8P2aavmE/SP0/Hl6KtvGq/T/WIVYLpA3+P47lIWBWcP4/RqnttAjT/j/+bLkJuzX/P7YwhV5tmP8/bvRQsx/7/z8VXA4E6S4AQPE9dC5CYABAzR/aWJuRAECpAUCD9MIAQIXjpa1N9ABAYcUL2KYlAUA9p3ECAFcBQBuJ1yxZiAFA92o9V7K5AUDTTKOBC+sBQK8uCaxkHAJAixBv1r1NAkBn8tQAF38CQEPUOitwsAJAH7agVcnhAkD7lwaAIhMDQNl5bKp7RANAtVvS1NR1A0CRPTj/LacDQJE9OP8tpwNAtVvS1NR1A0DZeWyqe0QDQPuXBoAiEwNAH7agVcnhAkBD1DorcLACQGfy1AAXfwJAixBv1r1NAkCvLgmsZBwCQNNMo4EL6wFA92o9V7K5AUAbidcsWYgBQD2ncQIAVwFAYcUL2KYlAUCF46WtTfQAQKkBQIP0wgBAzR/aWJuRAEDxPXQuQmAAQBVcDgTpLgBAbvRQsx/7/z+2MIVebZj/P/5suQm7Nf8/RqnttAjT/j+O5SFgVnD+P9YhVgukDf4/Hl6KtvGq/T9mmr5hP0j9P67W8gyN5fw/8hInuNqC/D86T1tjKCD8P4KLjw52vfs/ysfDucNa+z8SBPhkEfj6P1pALBBflfo/oHxgu6wy+j/ouJRm+s/5PzD1yBFIbfk/djH9vJUK+T++bTFo46f4PwaqZRMxRfg/TuaZvn7i9z+WIs5pzH/3P9xeAhUaHfc/JJs2wGe69j9s12prtVf2P7ITnxYD9fU/+k/TwVCS9T9CjAdtni/1P4rIOxjszPQ/0gRwwzlq9D8YQaRuhwf0P2B92BnVpPM/qLkMxSJC8z/u9UBwcN/yPzYydRu+fPI/fm6pxgsa8j/Gqt1xWbfxPw7nER2nVPE/VCNGyPTx8D+cX3pzQo/wP+Sbrh6QLPA/VLDFk7uT7z/kKC7qVs7uP3ShlkDyCO4/BBr/lo1D7T+UkmftKH7sPyAL0EPEuOs/sIM4ml/z6j9A/KDw+i3qP8x0CUeWaOk/XO1xnTGj6D/sZdrzzN3nP3zeQkpoGOc/DFeroANT5j+YzxP3no3lPyhIfE06yOQ/uMDko9UC5D9EOU36cD3jP9SxtVAMeOI/ZCoep6ey4T/0oob9Qu3gP4Qb71PeJ+A/ICivVPPE3j9AGYABKjrdP2AKUa5gr9s/ePshW5ck2j+Y7PIHzpnYP7jdw7QED9c/2M6UYTuE1T/4v2UOcvnTPxCxNruobtI/MKIHaN/j0D+gJrEpLLLOP9AIU4OZnMs/EOv03AaHyD9QzZY2dHHFP5CvOJDhW8I/oCO1052Mvj8A6PiGeGG4P4CsPDpTNrI/AOIA21sWqD+A1RCDIoCXPwCIAf4qx1K/gAbR4gfZmb9A+uCKzkKpv6C4LJKMzLK/QPTo3rH3uL/AL6Ur1yK/v6C1MDz+psK/cNOO4pC8xb8w8eyII9LIv/AOSy+258u/sCyp1Uj9zr84pQO+bQnRvyC0MhE3lNK/AMNhZAAf1L/g0ZC3yanVv8TgvwqTNNe/qO/uXVy/2L+I/h2xJUrav2gNTQTv1Nu/TBx8V7hf3b8wK6uqgerevwgd7X6lOuC/eKSEKAoA4b/qKxzSbsXhv1yzs3vTiuK/zDpLJThQ4788wuLOnBXkv65JengB2+S/INERImag5b+QWKnLymXmvwDgQHUvK+e/cmfYHpTw57/k7m/I+LXov1R2B3Jde+m/xP2eG8JA6r82hTbFJgbrv6gMzm6Ly+u/GJRlGPCQ7L+IG/3BVFbtv/qilGu5G+6/bCosFR7h7r/cscO+gqbvv6acLbTzNfC/X2D5CKaY8L8YJMVdWPvwv9DnkLIKXvG/iKtcB73A8b9BbyhcbyPyv/oy9LAhhvK/sva/BdTo8r9quotahkvzvyN+V684rvO/3EEjBOsQ9L+UBe9YnXP0v0zJuq1P1vS/BY2GAgI59b++UFJXtJv1v3YUHqxm/vW/LtjpABlh9r/nm7VVy8P2v6Bfgap9Jve/WCNN/y+J978Q5xhU4uv3v8mq5KiUTvi/gm6w/Uax+L86MnxS+RP5v/L1R6erdvm/q7kT/F3Z+b9kfd9QEDz6vxxBq6XCnvq/1AR3+nQB+7+NyEJPJ2T7v0aMDqTZxvu//k/a+Isp/L+2E6ZNPoz8v2/XcaLw7vy/KJs996JR/b/gXglMVbT9v5gi1aAHF/6/Ueag9bl5/r8KqmxKbNz+v8JtOJ8eP/+/ejEE9NCh/7+a+mekQQIAwHbczc6aMwDAUr4z+fNkAMAuoJkjTZYAwAqC/02mxwDA52NleP/4AMDDRcuiWCoBwJ8nMc2xWwHAfAmX9wqNAcBY6/whZL4BwDTNYky97wHAEK/IdhYhAsDskC6hb1ICwMlylMvIgwLAt2PHYHWcAsA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60800&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60799&quot;}},&quot;id&quot;:&quot;60783&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60773&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60748&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60765&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60785&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60771&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60764&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60772&quot;}},&quot;id&quot;:&quot;60766&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60796&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60764&quot;},{&quot;id&quot;:&quot;60765&quot;},{&quot;id&quot;:&quot;60766&quot;},{&quot;id&quot;:&quot;60767&quot;},{&quot;id&quot;:&quot;60768&quot;},{&quot;id&quot;:&quot;60769&quot;},{&quot;id&quot;:&quot;60770&quot;},{&quot;id&quot;:&quot;60771&quot;}]},&quot;id&quot;:&quot;60774&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60769&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60773&quot;}},&quot;id&quot;:&quot;60768&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60767&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60770&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60801&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60798&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60802&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60783&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60784&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60785&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60787&quot;}},&quot;id&quot;:&quot;60786&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;pVT69SG1AsAC7kgGzY7/v6+MdNkTR/2/pJz2Wmnx+L+9PXm1afz3v7scoQnNePa/zWF0en5m9r9TtMN6UNP1v6rmMSCzRPW/8RSc2m899b/oxKlYzav0vy//0R0LbPS//BvwU5qk878/RTjuZLnxv7m5SpF+o/G/OvQSsmJ08b8ufmvlh1zxv5kprRQP8PC/0BM+HdOh7r/YIwqN2x7uv4breI3T5Oy/ILUm2FFz7L9k2/rjWGHrvxuv2nwKTuu/cj7m3yUQ678sJ1TQx9rpv6chxJQIjem/S5fQFZaP5b9TI/qYRH7lv1WGOHouNuO/qjyVW3H34r9Q7dW0bH/iv8cVch6uzt6//XJhq1vB3b/W0juGUYbdv9mzNiG529i/FoHOLrBE1785nudr5ULXv1wspLO/1NW/JeWPOMWG1b9H8EzCGnrVv9z6Dl3ZONW/MthJjhC+1L/C3k/jJPnTv5PIE1s5g9O/2PSWVqXa0L858jA6X9HIv3Dm+NYSl8e/lpIeO4uDxb/ITwx4urLDv6ajVxHlLru/k8bf81bWsr8WSBxWehWcv1ZrcNhfw5G/hbFMXFDTh7/vyoP69DKOP+altw85BrY/JVu2huQquj+A163KAFDAP0XHxXYfD8c/wFolImEyyT8OrXach2/KPwCTlg7GG8w/UIYzH3zFzT8jixRhQUXQP+PqrwL7G9E/l7xMl+sB0j9Xbe4xYMPTP7c6MlD08NQ/6Lbic4EX1j/tHA3ZzF/WPzqrxgUQPtc/LvfBVzmd2j83v6ZVrwbbP0MnC2GoBdw/cRriFtXQ3z9e0XnFggDgP4dbDIdBfuE/lnV5Dv9/4T89paHj6mjiP2MoTszhauI/eMrRXWzD4j8odS/1BfXiP0WVZq16RuM/smh+rvpm4z9wurcmdITmP3Azsc2P8+g/NV+kf1n26D/hjyhwkDXtP8x70obQZvA/mjPhSQdw8D9eqg9Y7fnxP5FdSCJi1/Q/9tMuWwNE9T9KrUP1ZgT2P7xraF8sIfc/d6Zlt8be+D9/SDuLIBkBQBMWbxRhRwFAkT04/y2nA0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;tlYLFLyV6j//iNt8mTjwP6i5RRN2XPE/rrGEUkuH8z8iYUMlywH0P6JxL3uZw/Q/Gs/FwsDM9D/WJZ7CVxb1P6sM52+mXfU/iPWxEkhh9T+MHatTGar1P2gAF3H6yfU/AvIH1rIt9j9g3eOITSP3PySjWrdALvc/44X2ps5F9z/pQEoNvFH3PzRrqXX4h/c/DHuwOItX+D8Kd70cSXj4Px7FoRzLxvg/uFL2iSvj+D8nSQHHqSf5PzlUyWB9LPk/ZHAGiPY7+T819uoLTon5P5b3ztq9nPk/LdqLehqc+j8rd8HZbqD6P2vecWF0Mvs/1rAaqSNC+z+shMrSJGD7P0e9MTwqJvw/oNGTitRH/D+lhTjPNU/8P4Up2duI5Pw/3S8m+mkX/T85DINSoxf9P3R6iwloRf0/WwPuWCdP/T/3YbanvFD9P6QgXtTkWP0/+sQ27j1o/T8oBJZj24D9P+6GndSYj/0/ZSEtVavk/T/c8FwM6nL+P5lxkNKOhv4/1xZOTMen/j8EO39Y1MT+P+NCddeIJv8/ywFhSE1p/z9wx1ML1cf/PykfT0B53P8/TrOjryzo/z/lQX16GQ8AQJjePuQYWABAbdkakqtoAEC8blUGgIIAQDoutvt4uABA1ioRCZPJAEBoteM8fNMAQJi0dDDe4ABAMpz54CvuAECySBEWVAQBQK7+KrC/EQFAyct0uR4gAUDV5h4DNjwBQKsjA0UPTwFAbis+F3hhAUDP0ZDN/GUBQLRqXADhcwFAcx98ldOpAUDza1r1arABQHSyEIZawAFApyFuUQ39AUAsOq9YEAACQHGL4TDILwJAsy7P4f8vAkCoNHRcHU0CQAzFiTlcTQJATzm6i21YAkCl7qW+oF4CQKnSrFXPaAJAFs3PVd9sAkBO99aEjtACQG4mtvlxHgNA54v0L8seA0D8EQUOsqYDQPOetCG0GQRA5kx40gEcBECY6gNWe34EQGQXkojYNQVA/rTL1gBRBUBS61C9GYEFQO8a2hdLyAVAnmnZrbE3BkBApJ1FkIwIQAqLN4qwowhAyB6c/5bTCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60802&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60801&quot;}},&quot;id&quot;:&quot;60788&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60783&quot;}},&quot;id&quot;:&quot;60787&quot;,&quot;type&quot;:&quot;CDSView&quot;}],&quot;root_ids&quot;:[&quot;60747&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"7d86919b-1708-47d8-8407-4dc4da1d3b2c","root_ids":["60747"],"roots":{"60747":"04175cd7-1256-4da8-b22d-e1e316810248"}}];
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