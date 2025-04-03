import "../../css/addProduct.css";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import HandleAddProduct from "./HandleAddProduct";
import HandleEditProduct from "./HandleEditProduct";

export default function AddOrEditProduct() {
  const { token, id: userId } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const editedProduct = location.state?.product || {};
  const [product, setProduct] = useState({
    name: editedProduct.name || "",
    description: editedProduct.description || "",
    price: editedProduct.price || "",
    image_url: editedProduct.image_url || "",
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    navigate('/products')
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editedProduct.id) {
      await HandleEditProduct(token, {
        ...product,
        id: editedProduct.id,
        user_id: editedProduct.user_id,
      });
    } else {
      const addProduct = HandleAddProduct(token, {
        ...product,
        user_id: userId,
      });
      await addProduct();
    }
    setProduct({ name: "", description: "", price: "", image_url: "" });
    navigate('/products')
  };

  return (
    <div className="register-container">
      <div className="register-card">
        
        <header className="close-header">
        <h2 className="register-title">
          {editedProduct.id ? "Edit Product" : "Add New Product"}
        </h2>
            <button onClick={handleClose}>X</button>
          </header>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description:</label>
            <textarea
              className="form-input"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Price:</label>
            <input
              className="form-input"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image URL:</label>
            <input
              className="form-input"
              type="url"
              name="image_url"
              value={product.image_url}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            <span className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {editedProduct.id ? "Edit Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
