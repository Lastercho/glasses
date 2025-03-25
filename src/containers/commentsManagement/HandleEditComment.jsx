import { message } from "antd";

export default function HandleEditComment (token, fetchComments, currentPage, pageSize)  {
  return async (commentId, content) => {
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        throw new Error('Failed to edit comment');
      }

      message.success('Comment edited successfully');
      fetchComments(currentPage, pageSize);
    } catch (error) {
      message.error(error.message);
    }
  };
};

