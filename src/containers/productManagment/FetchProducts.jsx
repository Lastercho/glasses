import axios from "axios";

export default async function FetchProducts(setProducts, token, pageSize, sortOrder = "Newest") {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/products?page=${1}&limit=${pageSize}&sort=${sortOrder}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setProducts(response.data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
