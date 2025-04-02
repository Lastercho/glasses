import axios from "axios";
import { message } from "antd";

export default function HandleDeleteProduct(
  token,
  fetchProducts,
  pageSize
) {
  return async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      message.success( "Product deleted successfully");
      fetchProducts(pageSize);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
}
