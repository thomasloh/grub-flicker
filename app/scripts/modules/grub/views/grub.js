define([

  // Backbone
  'backbone'

],

function(Backbone, grub_template) {

  return Backbone.View.extend({
    template: 'grub/grub',
    tagName: 'div',
    className: 'grub',
    initialize: function(options) {
      options || (options = {})
      this.router = options.router;
      this.model = options.model;
      _.bindAll(this);
      $('body').keyup(this.e_next);
    },

    serialize: function() {
      return this.model.toJSON();
    },

    afterRender: function() {
      setTimeout(function() {
        this.$('img').removeClass('super-blur');

        this.$('.mini-shade').tooltip({
          title: 'or press -> on your keyboard'
        })

      }, 1000);

    },

    e_next: function(e) {
      if (e.which === 39) {
        this.router.view();
      };
    }

  });


});