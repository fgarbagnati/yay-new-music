NewMusic.App.SearchController = Ember.Controller.extend({
  query: '',
  echonest: new EchoNest('SNXAFW8HRV2RLZTNW'),
  action: {
    search: function() {
      var artistName = this.get('query');
      console.log(artistName)
      // var searchArtist = this.getArtist(artistName);

      // console.log(serachArtist);
    }
  },

  // getArtist: function(artistName) {
  //   return this.echonest.artist(artistName);
  // },

  // getSimilarArtists: function(artistName) {
  //   var echonest = new EchoNest('SNXAFW8HRV2RLZTNW');
  //   echonest.artist(artistName).similar(function(similarCollection) {
  //     console.log(similarCollection.data.artists);
  //   });
  // }
});