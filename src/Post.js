import React, { useState } from 'react';
import Comment from './Comment';

const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText) return;

    const newComment = { text: commentText };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="post">
      {post.image && <img src={post.image} alt="Post visual" />}
      <p>{post.text}</p>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;