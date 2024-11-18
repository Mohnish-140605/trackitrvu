import { API } from "@aws-amplify/api";
import { Storage } from "@aws-amplify/storage";

// Create a New Post
export const createPost = async (post) => {
  try {
    const result = await API.post("postsApi", "/posts", { body: post });
    console.log("Post created:", result);
    return result;
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

// Fetch Posts
export const fetchPosts = async () => {
  try {
    const posts = await API.get("postsApi", "/posts");
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// Upload Image to S3
export const uploadImage = async (file) => {
  try {
    const fileName = `${Date.now()}-${file.name}`;
    const result = await Storage.put(fileName, file, { contentType: file.type });
    console.log("Image uploaded:", result);
    return result.key;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
