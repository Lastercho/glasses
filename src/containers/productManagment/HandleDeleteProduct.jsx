import axios from "axios";

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
      fetchProducts(pageSize);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
}
