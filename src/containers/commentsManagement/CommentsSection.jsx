import {
  Space,
  Select,
  Avatar,
  Card,
  Button,
  Input,
  Form,
  Pagination,
} from "antd";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import FetchComments from "./FetchComments.jsx";
import HandleAddComment from "./HandleAddComment.jsx";
import HandleDeleteComment from "./HandleDeleteComment.jsx";
import HandleEditComment from "./HandleEditComment.jsx";

export default function CommentsSection() {
  const { Meta } = Card;
  const { token, user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [form] = Form.useForm();
  const [pageSize, setPageSize] = useState(5);
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState({});

  
  useEffect(() => {    
    fetchComments(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchComments = FetchComments(
    setComments,
    setTotalComments,
    token,
    pageSize
  );

  const handleAddComment = HandleAddComment(
    user,
    token,
    form,
    fetchComments,
    setCurrentPage
  );

  const showEditComment = (comment) => {
    setComment(comment);
    console.log(comment)
    console.log(comment.content);
    setEditComment(true);
  };

  const handleEditComment = () => {
    HandleEditComment(token, comment);
  };

  const handleDeleteComment = HandleDeleteComment(
    token,
    fetchComments,
    currentPage,
    pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

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
            {comments && comments.map((comment) => (
              <Card
                key={comment.id}
                type="inner"
                title={comment.username}
                extra={
                  <>
                    <a
                      href="#"
                      onClick={() =>
                        showEditComment(comment)
                      }
                      style={{
                        display: comment.user_id === user?.id ? "" : "none",
                      }}
                    >
                      EDIT
                    </a>
                    &nbsp; &nbsp; | &nbsp; &nbsp;
                    <a
                      href="#"
                      onClick={() => handleDeleteComment(comment.id)}
                      style={{
                        display: comment.user_id === user?.id ? "" : "none",
                      }}
                    >
                      DELETE
                    </a>
                  </>
                }
              >
                <Meta
                  className="cardComment"
                  avatar={
                    <Avatar
                      src="/images/oip1.jpg"
                      shape="square"
                      size="large"
                    />
                  }
                  description={comment.content}
                />
              </Card>
            ))}
            <div className="paginator">
              <Pagination
                current={currentPage}
                total={totalComments}
                pageSize={pageSize}
                onChange={handlePageChange}
                style={{ padding: "2em" }}
              />
              <Space wrap>
                <Select
                  defaultValue="5"
                  style={{ width: 120 }}
                  onChange={handlePageSizeChange}
                  options={[
                    { value: "5", label: "5" },
                    { value: "10", label: "10" },
                    { value: "20", label: "20" },
                    { value: "50", label: "50" },
                  ]}
                />
              </Space>
            </div>
          </section>
        </div>
        {token && (
          <div className="add_comment_form">
            <Form form={form} onFinish={handleAddComment}>
              <Form.Item
                name="content"
                rules={[
                  { required: true, message: "Please enter your comment!" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Add your comment here..."
                />
              </Form.Item>
              <Form.Item>
                <Button className="comment_bt" type="primary" htmlType="submit">
                  Add Comment
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
      <div
        className="edit_comment_form"
        style={{ display: editComment ? "block" : "none" }}
      >
        <div>
          <header className="close-header">
            <h2>Edit Comment</h2>
            <button onClick={() => setEditComment(false)}>X</button>
          </header>
          <Form
            form={form}
            onFinish={handleEditComment}
            initialValues={{ content: comment.content }}
          >
            <Form.Item
              name="content"
              rules={[
                { required: true, message: "Please enter your comment!" },
              ]}
            >
              <Input.TextArea
                rows={4}
                onChange={(e) =>
                  setComment((prev) => ({ ...prev, content: e.target.value }))
                }
              />
            </Form.Item>
            <Form.Item>
              <Button className="comment_bt" type="primary" htmlType="submit">
                Edit Comment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
