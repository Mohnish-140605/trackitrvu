import React, { useState } from "react";
import { createPost, uploadImage } from "../../services/postService";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageKey = image ? await uploadImage(image) : null;
    const newPost = { title, description, imageUrl: imageKey };
    await createPost(newPost);
    alert("Post created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
