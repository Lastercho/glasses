import { Avatar, Card, Button, Input, Form, Pagination } from "antd";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import FetchComments from "./FetchComments.jsx";
import HandleAddComment from "./HandleAddComment.jsx";
import HandleDeleteComment from "./HandleDeleteComment.jsx";

export default function CommentsSection() {
  const { Meta } = Card;
  const { token, user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [form] = Form.useForm();
  const pageSize = 5;

  useEffect(() => {
    fetchComments(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchComments = FetchComments(setComments, setTotalComments, token, pageSize);

  const handleAddComment = HandleAddComment(user, token, form, fetchComments, setCurrentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const handleDeleteComment = HandleDeleteComment(token, fetchComments, currentPage, pageSize);

  return (
    <div className="testimonial_section layout_padding">
      <div className="container">
        <h1 className="testimonial_text">Comments</h1>
        <p className="ipsum_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <div>
          <section className="container">
            {comments.map(comment => (
              <Card key={comment.id} type="inner" title={comment.username} 
              extra={
              <a href="#" 
              onClick={() => handleDeleteComment(comment.id)}
              style={{display: comment.user_id === user?.id ? '' : 'none'}}
              >Delete</a>              
              }
         
              >
                <Meta className="cardComment"
                  avatar={<Avatar src="/images/oip1.jpg" shape="square" size="large" />}
                  description={comment.content}
                />
              </Card>
            ))}
            <Pagination
              className="paginator"
              current={currentPage}
              total={totalComments}
              pageSize={pageSize}
              onChange={handlePageChange}
              style={{ padding: '2em'}}
            />
          </section>
        </div>

        {token && (
          <div className="add_comment_form">
            <Form form={form} onFinish={handleAddComment} >
              <Form.Item name="content" rules={[{ required: true, message: 'Please enter your comment!' }]}>
                <Input.TextArea rows={4} placeholder="Add your comment here..." />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Add Comment</Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}




