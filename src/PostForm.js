import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => setText(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text && !image) return;

    const newPost = {
      text,
      image: image ? URL.createObjectURL(image) : null,
      comments: [],
    };

    addPost(newPost);
    setText('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleTextChange} placeholder="What's on your mind?" />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;