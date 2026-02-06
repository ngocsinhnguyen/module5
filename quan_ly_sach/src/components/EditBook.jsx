import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as bookService from '../service/bookService';

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({ title: '', quantity: '' });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBook();
    }, [id]);

    const fetchBook = async () => {
        try {
            setLoading(true);
            const response = await bookService.getBookById(id);
            setBook(response);
        } catch (error) {
            console.error('Error fetching book:', error);
            alert('Failed to fetch book data');
            navigate('/');
        } finally {
            setLoading(false);
        }
    };

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
            await bookService.updateBook(id, book);
            alert('Book updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating book:', error);
            alert('Failed to update book');
        }
    };

    if (loading) return <div className="container" style={{ textAlign: 'center' }}>Loading book info...</div>;

    return (
        <div className="container animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>Edit Book</h2>
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
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                    <button type="button" onClick={() => navigate('/')} className="btn btn-ghost btn-block">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBook;
