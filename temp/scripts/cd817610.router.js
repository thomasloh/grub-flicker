define([
  // Application.
  "app",

  // Modules
  'grub'
],

function(app, Grub) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "view",
    },

    initialize: function() {

      // Init our grub model
      app.grub = new Grub.Model();

      // Init the grub
      app.grub_view = new Grub.View({
        router: this,
        model: app.grub
      });

    },

    // View single grub
    view: function() {

      // Fetch data
      app.grub.fetch({
        post_fetch: function() {
          app.useLayout("main").setView(".app", app.grub_view).render();
        }
      });

      // app.useLayout("main").setView(".app", app.grub_view).render();
    }

  });

  return Router;

});
