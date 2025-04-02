import axios from "axios";
import { message } from "antd";

export default function handleAddComment(
  user,
  token,
  comment,
  fetchComments,
  setCurrentPage
) {
  return async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/comments/create",
        {
          userId: user.id,
          content: comment.content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      message.success("Comment added successfully");
      setCurrentPage(1); // Reset to the first page
      fetchComments(1); // Refresh comments
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
}
