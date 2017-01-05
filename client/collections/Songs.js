// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        data.results.forEach(function(value) {
          context.add(value);
        });
        context.trigger('songsAdded');
      },
      error: function(data) {
        return;
      },
    });
  }

});