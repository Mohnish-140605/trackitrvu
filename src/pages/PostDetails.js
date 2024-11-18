
import React from "react";

const PostDetails = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {post.imageUrl && (
        <img
          src={`https://your-s3-bucket-name.s3.amazonaws.com/${post.imageUrl}`}
          alt={post.title}
          style={styles.image}
        />
      )}
      <p>
        <strong>Posted on:</strong> {new Date(post.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "10px",
  },
};

export default PostDetails;
