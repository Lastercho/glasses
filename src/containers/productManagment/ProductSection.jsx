import "../../css/products.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

import HandleDeleteProduct from "./HandleDeleteProduct";
import HandleEditProduct from "./HandleEditProduct";
import FetchProducts from "./FetchProducts";
import { Button } from "antd";

export default function ProductSection() {
  const { token, user } = useContext(UserContext);

  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [editProduct, setEditProduct] = useState(false);
  const [product, setProduct] = useState({});
  const [details, setDetails] = useState(false);

  useEffect(() => {
    details;
  }, [details]);


  const fetchProducts = FetchProducts(
    setProducts,
    setTotalProducts,
    token,
    pageSize
  );

  const showEditProduct = (product) => {
    setProduct(product);
    setEditProduct(true);
  };

  const handleEditProduct = () => {
    HandleEditProduct(token, product).then(() => {
      fetchProducts(pageSize);
      setEditProduct(false);
    });
  };

  const handleDetailsProduct = (product) => {
    setProduct(product);
    setDetails(true);
    setPageSize(6);
  };

  const handleDeleteProduct = HandleDeleteProduct(
    token,
    fetchProducts,
    pageSize
  );

  const handlePageSizeChange = () => {
    setPageSize(pageSize + 6);
  };

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
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image_url}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-primary">
                          {product.name}
                        </span>
                        <h5 className="card-title">{product.description}</h5>
                        <div className="details">
                          <span className="float-end price-hp">
                            {product.price}&euro;
                          </span>
                          <div className="buttons-row">
                            <button
                              className="btn btn-warning"
                              onClick={() => handleDetailsProduct(product)}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <Button
              className="comment_bt"
              type="primary"
              htmlType="submit"
              onClick={handlePageSizeChange}
            >
              See More
            </Button>
          </div>
        </div>
        {1 === user?.id && (
          <Button
            className="comment_bt"
            type="primary"
            htmlType="submit"
            href="/addproduct"
          >
            Add Product
          </Button>
        )}
      </div>
      {details && (
        <section className="detail_section">
          <header className="close-header">
            <h2>Edit Comment</h2>
            <button onClick={() => setDetails(false)}>X</button>
          </header>

          <img
            src={product.image_url}
            className="card-img-top"
            alt={product.name}
          />
          {/* <div className="card-body"> */}
          {/* <div className="clearfix mb-3"> */}
          <span className="float-start badge rounded-pill bg-primary">
            {product.name}
          </span>
          <h5 className="card-title">{product.description}</h5>
          <div className="details">
            <span className="float-end price-hp">{product.price}&euro;</span>
            {/* </div> */}
          </div>
          {/* </div> */}
          {product.user_id === user?.id && (
            <div className="buttons-row">
              <button
                className="btn btn-warning"
                onClick={() => handleEditProduct(product)}
              >
                Edit
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
