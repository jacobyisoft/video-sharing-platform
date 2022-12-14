import React from "react";
import CommentItem from "./comment_item";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.videoId);
  }

  render() {
    const commentList = this.props.comments.length ? (
      <div className="comment-list">
        {this.props.comments.map((comment, idx) => {
          return (
            <CommentItem
              key={idx}
              currentUser={this.props.currentUser}
              editComment={this.props.editComment}
              deleteComment={this.props.deleteComment}
              comment={comment}
              fetchChildComments={this.props.fetchChildComments}
            />
          );
        })}
      </div>
    ) : (
      <div></div>
    );
    return commentList;
  }
}

export default CommentList;
