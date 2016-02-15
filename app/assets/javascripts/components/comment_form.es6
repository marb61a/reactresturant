class CommentForm extends React.Component{
    static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }

  constructor() {
    super()
    this.defaultState = { body: '', author: '' };
    this.state = this.defaultState;
  }
  
}

export default CommentForm