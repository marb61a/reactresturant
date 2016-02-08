//
var Constants = {
    CHANGE_EVENT: 'change',
    ADD_COMMENT: 'comments.add'
}

var Store = new _.extend({}, EventEmitter.prototype, {
    _comments: [],

  addComment: function(comment) {
    this._comments[comment.id] = comment;
  },

  comments: function() {
    return this._comments;
  },
})