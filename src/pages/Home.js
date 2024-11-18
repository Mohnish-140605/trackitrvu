import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";
import PostCard from "../components/Posts/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Lost & Found Items</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
