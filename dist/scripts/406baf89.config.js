// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../scripts/libs",
    plugins: "../scripts/plugins",
    text: "../scripts/plugins/text",

    // Libraries.
    jquery: "../scripts/libs/jquery",
    underscore: "../scripts/libs/underscore",
    backbone: "../scripts/libs/backbone",
    bootstrapjs: "../components/bootstrap.css/js/bootstrap.min",

    // Modules
    grub: "./modules/grub/main"
  },

  shim: {
    // Backbone library depends on underscore and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    bootstrapjs: {
      deps: ['jquery']
    },

    underscore: {
      exports: "_"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"]
  }

});
