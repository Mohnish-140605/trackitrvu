import React from "react";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      {post.imageUrl && (
        <img
          src={`https://your-s3-bucket-name.s3.amazonaws.com/${post.imageUrl}`}
          alt={post.title}
          style={styles.image}
        />
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginTop: "10px",
  },
};

export default PostCard;
