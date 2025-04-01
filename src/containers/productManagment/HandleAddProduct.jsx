import axios from 'axios';

export default function handleAddProduct(token, product) {
    return async () => {
        try {
            await axios.post('http://localhost:3000/api/products/create', product, {
                headers: { Authorization: `Bearer ${token}` }
            });
          
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
}
