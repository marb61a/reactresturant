import AppDispatcher from '/app_dispatcher';
import Constants from '/constants';

class CommentStore extends EventEmitter {

  constructor() {
    super()
    this._comments = []

    AppDispatcher.register((payload) => {
      switch(payload.actionType) {
        case Constants.ADD_COMMENT:
          this.addComment(payload.comment)
          this.emitChange()
          break
        default:
          // NO-OP
      }
    });

 }
