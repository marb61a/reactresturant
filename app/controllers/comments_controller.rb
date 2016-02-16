class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
  end

  def comment_params
    params.require(:comment).permit(:body, :author)
  end
  
end