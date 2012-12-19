define([

  // Backbone
  'backbone'

],

function(Backbone) {

  return Backbone.Model.extend({

    initialize: function(input, opts) {
      // Punchfork random recipe url
      this.url = "http://api.punchfork.com/random_recipe?key=6e771df744aa3cb";
      _.bindAll(this, 'success');

      // Temp
      this.set({
        fbc: 5,
        pf_url: "http://punchfork.com/recipe/Apple-Napoleons-Martha-Stewart",
        published: "2011-07-28T16:10:05.351000",
        rating: 17.335,
        shortcode: "ksYwhE",
        source_img: "http://www.marthastewart.com/sites/files/marthastewart.com/images/content/pub/ms_living/2003Q4/a100217_oct03_aplnpln_l.jpg",
        source_name: "Martha Stewart",
        source_url: "http://www.marthastewart.com/339802/apple-napoleons",
        suc: 0,
        thumb: "http://s3.amazonaws.com/img.punchfork.net/a05d3ef478496329ef31ca0d0dbcf51a_250x250.jpg",
        title: "Apple Napoleons",
        twc: 0
      });
      Backbone.Model.prototype.initialize.apply(this, arguments);
    },

    sync: function(method, model, options) {
      // Store user callback
      this.post_fetch = options.post_fetch;

      // Only for grabbing one recipe [FETCH]
      var params = {
        dataType: 'jsonp',
        jsonp: 'jsonp',
        type: 'GET',
        processData: false,
        url: model.url,
        success: this.success
      }

      return $.ajax(params);

    },

    success: function(data) {
      this.set(data.recipe);
      this.post_fetch();
    }


  });

});