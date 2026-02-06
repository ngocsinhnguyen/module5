import axios from 'axios';

const BASE_URL = 'http://localhost:3000/books';

export const getBooks = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const getBookById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const createBook = async (book) => {
    const response = await axios.post(BASE_URL, book);
    return response.data;
};

export const updateBook = async (id, book) => {
    const response = await axios.put(`${BASE_URL}/${id}`, book);
    return response.data;
};

export const deleteBook = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
};
