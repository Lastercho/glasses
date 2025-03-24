import axios from 'axios';

export default function handleAddComment(user, token, form, fetchComments, setCurrentPage) {
    return async (values) => {
      try {
        await axios.post('http://localhost:3000/api/comments/create', {
          userId: user.id,
          content: values.content
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        form.resetFields();
        const response = await axios.get('http://localhost:3000/api/comments?limit=5');
        const totalComments = response.data.totalComments;
        const lastPage = Math.ceil(totalComments / 5);
        setCurrentPage(lastPage);
        fetchComments(lastPage);
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };
}
