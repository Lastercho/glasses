import { Avatar, Button, Card, Input, Pagination, Select, Space } from "antd";
import { useContext, useEffect, useState } from "react";
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
  const [pageSize, setPageSize] = useState(5);
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState({});
  const [sortOrder, setSortOrder] = useState("Newest");
  const { TextArea } = Input;

  useEffect(() => {
    fetchComments(currentPage, pageSize, sortOrder);
  }, [currentPage, pageSize, sortOrder]);

  const fetchComments = FetchComments(
    setComments,
    setTotalComments,
    token,
    pageSize,
    sortOrder
  );

  const handleAddComment = HandleAddComment(
    user,
    token,
    comment,
    fetchComments,
    setCurrentPage
  );

  const showEditComment = (comment) => {
    setComment(comment);
    setEditComment(true);
  };

  const handleEditComment = () => {
    HandleEditComment(token, comment).then(() => {
      fetchComments(currentPage, pageSize, sortOrder);
      setEditComment(false);
      setCurrentPage(1);
    });
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
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  return (
    <div className="comments_section layout_padding">
      <div className="container">
        <h1 className="comments_text">Comments</h1>
        <p className="ipsum_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <div>
            <Space className="sorting">
              <h4>Sort the comments by:</h4>
              <Select
                defaultValue="Newest"
                style={{ width: 120 }}
                onChange={handleSortChange}
                options={[
                  { value: "Newest", label: "Newest" },
                  { value: "Oldest", label: "Oldest" },
                ]}
              />
            </Space>
          <section className="container">
            {comments &&
              comments.map((comment) => (
                <Card
                  key={comment.id}
                  type="inner"
                  title={`User: ${comment.username}`}
                  extra={
                    <>
                      <span>
                       Date of comment: {new Date(comment.created_at).toLocaleDateString(
                          "bg-BG"
                        )}
                      </span>
                      <div>
                        <a
                          href="#"
                          onClick={() => showEditComment(comment)}
                          style={{
                            display:
                              comment.user_id === user?.id || user?.id === 1
                                ? ""
                                : "none",
                          }}
                        >
                          EDIT
                        </a>
                        &nbsp; &nbsp; | &nbsp; &nbsp;
                        <a
                          href="#"
                          onClick={() => handleDeleteComment(comment.id)}
                          style={{
                            display:
                              comment.user_id === user?.id || user?.id === 1
                                ? ""
                                : "none",
                          }}
                        >
                          DELETE
                        </a>
                      </div>
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
            <TextArea
              rules={[
                { required: true, message: "Please enter your comment!" },
              ]}
              rows={4}
              placeholder="Add your comment here..."
              onChange={(e) =>
                setComment((prev) => ({ ...prev, content: e.target.value }))
              }
            />

            <Button
              className="comment_bt"
              type="primary"
              htmlType="submit"
              onClick={handleAddComment}
            >
              Add Comment
            </Button>
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

          <TextArea
            rules={[{ required: true, message: "Please enter your comment!" }]}
            rows={4}
            value={comment.content}
            placeholder="Edit your comment here..."
            onChange={(e) =>
              setComment((prev) => ({ ...prev, content: e.target.value }))
            }
          />

          <Button
            className="comment_bt"
            type="primary"
            htmlType="submit"
            onClick={handleEditComment}
          >
            Edit Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
