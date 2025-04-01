import axios from 'axios';

export default async function FetchProducts(setProducts, setTotalProducts, token, pageSize) {
  console.log(pageSize)
  try {
  const response = await axios.get(`http://localhost:3000/api/products?page=${1}&limit=${pageSize}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  setProducts(response.data.products);
  setTotalProducts(response.data.totalProducts);
} catch (error) {
      console.error('Error fetching products:', error);
    }
    return 
  };
    