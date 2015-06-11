$(document).on('ready', function() {
  var echonest = new EchoNest('SNXAFW8HRV2RLZTNW');
});

var NewMusic = {};
NewMusic.App = Ember.Application.create({
  LOG_TRANSITIONS: true
})

NewMusic.App.Router.map(function() {
  this.route('search');
});