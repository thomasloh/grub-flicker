define([

  // app
  "app",

  // Grub model
  './modules/grub/models/grub',

  // Grub controller
  './modules/grub/views/grub'

],

function(app, GrubModel, GrubView) {

  var Grub = app.module();

  Grub.Model = GrubModel;
  Grub.View = GrubView;

  return Grub;

});