import { Avatar, Card } from "antd";

export default function CommentsSection() {
  const { Meta } = Card;
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
            <Card  type="inner" title="User name" extra={<a href="#">More</a>}>
              <Meta className="cardComment"
                avatar={<Avatar src="/public/images/oip1.jpg" shape="square" size="large" />}
                // title="Card title"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
                extra={<a href="#">More</a>}
              />
            </Card>
          </section>
        </div>

        <div className="see_main">
          <div className="see_bt">
            <a href="#">Add Comment</a>
          </div>
        </div>
      </div>
    </div>
  );
}
