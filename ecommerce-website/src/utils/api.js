import axios from 'axios';

const API_BASE_URL = 'https://api.yourstore.com'; // Replace with your actual API base URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};