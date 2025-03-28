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
              <div className="col">
                {" "}
                <div className="card h-100 shadow-sm">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png"
                    className="card-img-top"
                    alt="..."
                  />{" "}
                  <div className="card-body">
                    {" "}
                    <div className="clearfix mb-3">
                      {" "}
                      <span className="float-start badge rounded-pill bg-success">
                        12354.00&euro;
                      </span>{" "}
                      <span className="float-end">
                        <a href="#">Example</a>
                      </span>{" "}
                    </div>{" "}
                    <h5 className="card-title">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quidem eaque ut eveniet aut quis rerum. Asperiores
                      accusamus harum ducimus velit odit ut. Saepe, iste optio
                      laudantium sed aliquam sequi.
                    </h5>{" "}
                    <div className="d-grid gap-2 my-4">
                      {" "}
                      <a href="#" className="btn btn-warning">
                        Check offer
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card h-100 shadow-sm">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
                    className="card-img-top"
                    alt="..."
                  />{" "}
                  <div className="label-top shadow-sm">Asus Rog</div>{" "}
                  <div className="card-body">
                    {" "}
                    <div className="clearfix mb-3">
                      {" "}
                      <span className="float-start badge rounded-pill bg-success">
                        12354.00&euro;
                      </span>{" "}
                      <span className="float-end">
                        <a href="#" className="small text-muted">
                          Reviews
                        </a>
                      </span>{" "}
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
                    <div className="clearfix mb-1">
                      {" "}
                      <span className="float-start">
                        <i className="far fa-question-circle"></i>
                      </span>{" "}
                      <span className="float-end">
                        <i className="fas fa-plus"></i>
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card h-100 shadow-sm">
                  {" "}
                  <img
                    src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png"
                    className="card-img-top"
                    alt="..."
                  />{" "}
                  <div className="label-top shadow-sm">DELL</div>{" "}
                  <div className="card-body">
                    {" "}
                    <div className="clearfix mb-3">
                      {" "}
                      <span className="float-start price-hp">
                        12354.00&euro;
                      </span>{" "}
                      <span className="float-end">
                        <a className="text-muted small" href="#">
                          Reviews
                        </a>
                      </span>{" "}
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
                    <div className="clearfix mb-1">
                      {" "}
                      <span className="float-start">
                        <i className="far fa-question-circle"></i>
                      </span>{" "}
                      <span className="float-end">
                        <i className="fas fa-plus"></i>
                      </span>{" "}
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
