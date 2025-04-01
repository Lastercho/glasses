import "../../css/addProduct.css";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import HandleAddProduct from "./HandleAddProduct";

export default function AddProduct() {
  const { token, id: userId } = useContext(UserContext); // Use `id` as `userId`
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addProduct = HandleAddProduct(token, { ...product, user_id: userId }); // Pass `user_id`
    await addProduct();
    setProduct({ name: "", description: "", price: "", image_url: "" });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Add New Product</h2>
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
