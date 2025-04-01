import { message } from "antd";

export default async function HandleEditProduct(token, product) {
    const { id, name, description, price, image_url } = product;

    try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ name, description, price, image_url })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to edit product');
        }

        const result = await response.json();
        message.success(result.message || 'Product edited successfully');
    } catch (error) {
        message.error(error.message);
    }
}

