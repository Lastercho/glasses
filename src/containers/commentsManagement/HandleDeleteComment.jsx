import axios from "axios";

export default function HandleDeleteComment(
  token,
  fetchComments,
  currentPage,
  pageSize
) {
  return async (commentId) => {
    try {
      await axios.delete(`http://localhost:3000/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchComments(currentPage, pageSize);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
}
