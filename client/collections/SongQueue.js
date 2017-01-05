// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }); 

    this.on('ended', function(event) {
      var first = this.at(0);
      this.remove(first);

      if (this.length > 0) {
        this.playFirst();
      }
    });
    
    this.on('dequeue', function(event) {
      this.remove(event.cid);
    });    
  },

  playFirst: function() {
    this.at(0).play();
  },

});