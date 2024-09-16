import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <h1>Post Page</h1>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default App;