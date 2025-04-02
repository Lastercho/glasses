import axios from "axios";

export default function FetchComments(
  setComments,
  setTotalComments,
  token,
  pageSize
) {
  return async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/comments?page=${page}&limit=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(response.data.comments);
      setTotalComments(response.data.totalComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
}
