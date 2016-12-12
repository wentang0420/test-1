// Generated by CoffeeScript 1.6.3
(function() {
  requirejs.config({
    baseUrl: 'js',
    paths: {
      jquery: "lib/jquery-1.9.1.min",
      d3: 'lib/d3.v3.min',
      sylvester: "lib/sylvester-loader",
      backbone: "lib/backbone-min",
      underscore: "lib/underscore-min",
      processing: "lib/processing-1.4.1.min",
      vector: "lib/vector",
      zepto: "lib/zepto.min",
      modernizr: "lib/modernizr",
      paper: "lib/paper",
      tween: "lib/Tween",
      "state-machine": "lib/state-machine.min",
      pubsub: "lib/pubsub",
      facebook: '//connect.facebook.net/fr_FR/all.js#xfbml=1'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      d3: {
        exports: 'd3'
      },
      processing: {
        exports: 'Processing'
      },
      vector: {
        exports: 'Vector'
      },
      zepto: {
        exports: 'Zepto'
      },
      modernizr: {
        exports: 'Modernizr'
      },
      paper: {
        exports: 'paper'
      },
      tween: {
        exports: 'TWEEN'
      },
      facebook: {
        exports: 'FB'
      }
    }
  });

  require([(typeof window !== "undefined" && window !== null ? window.mainScript : void 0) || "application"]);

}).call(this);
