// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    this.model.on('add remove', function() {
      this.render();
    }, this);
  },

  template: _.template('<div value="<%- url %>"> <%- title %> <%- artist %> </div>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
