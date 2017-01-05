// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add remove', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.forEach(this.renderQueueEntry, this);
  },

  renderQueueEntry: function(queueEntry) {
    var queueEntryView = new SongQueueEntryView({model: queueEntry});
    return this.$el.append(queueEntryView.render());
  }

});
