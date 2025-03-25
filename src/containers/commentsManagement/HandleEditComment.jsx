import { message } from "antd";

export default async function HandleEditComment(token, comment) {
  const commentId = comment.id;
  const content = comment.content;

  try {
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to edit comment');
    }

    const result = await response.json();
    message.success(result.message || 'Comment edited successfully');
  } catch (error) {
    message.error(error.message);
  }
}

