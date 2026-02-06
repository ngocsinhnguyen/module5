import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bookService from '../service/bookService';

const AddBook = () => {
    const [book, setBook] = useState({ title: '', quantity: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!book.title || !book.quantity) {
            alert('Please fill in all fields');
            return;
        }

        if (parseInt(book.quantity) <= 0) {
            alert('Quantity must be greater than 0');
            return;
        }

        try {
            await bookService.createBook(book);
            alert('Book added successfully');
            navigate('/');
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book');
        }
    };

    return (
        <div className="container animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        placeholder="Enter book title"
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={book.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity"
                        min="1"
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button type="submit" className="btn btn-success btn-block">
                        Add
                    </button>
                    <button type="button" onClick={() => navigate('/')} className="btn btn-ghost btn-block">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;
