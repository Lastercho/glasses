import "../css/products.css"

export default function ProductSection() {
  return (
    <div className="product_section layout_padding">
      <div className="container">
        <div className="product_text">
          Our <span style={{ color: "#5ca0e9" }}>products</span>
        </div>
        <p className="long_text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <div className="product_section_2">
          <div
            className="container-fluid bg-trasparent my-4 p-3"
            style={{ position: "relative" }}
          >
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
              <div className="col">
                {" "}
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    {" "}
                    <div className="clearfix mb-3">
                      {" "}
                      <span className="float-start badge rounded-pill bg-primary">
                        ASUS Rog
                      </span>{" "}
                      <span className="float-end price-hp">12354.00&euro;</span>{" "}
                    </div>{" "}
                    <h5 className="card-title">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quidem eaque ut eveniet aut quis rerum. Asperiores
                      accusamus harum ducimus velit odit ut. Saepe, iste optio
                      laudantium sed aliquam sequi.
                    </h5>{" "}
                    <div className="text-center my-4">
                      {" "}
                      <a href="#" className="btn btn-warning">
                        Check offer
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}

            </div>{" "}
          </div>{" "}
        </div>
        <div className="see_main">
          <div className="see_bt">
            <a href="#">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
