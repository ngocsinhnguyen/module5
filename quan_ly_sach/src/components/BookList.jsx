import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as bookService from '../service/bookService';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await bookService.getBooks();
            setBooks(response);
        } catch (error) {
            console.error('Error fetching books:', error);
            alert('Failed to fetch books');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await bookService.deleteBook(id);
                alert('Delete successful');
                // Filter out the deleted book from state to avoid extra API call for demo purposes
                // although in real app we might re-fetch or rely on the mock API behavior.
                // The mock API won't actually delete it from their DB.
                setBooks(books.filter(book => book.id !== id));
            } catch (error) {
                console.error('Error deleting book:', error);
                alert('Delete failed');
            }
        }
    };

    return (
        <div className="container animate-fade-in">
            <div className="header">
                <h1>Library</h1>
                <Link to="/add" className="btn btn-success">
                    Add a new Book
                </Link>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading books...</div>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.id}>
                                    <td style={{ fontWeight: 500 }}>{book.title}</td>
                                    <td>{book.quantity || 10}</td>
                                    <td>
                                        <Link to={`/edit/${book.id}`} className="btn btn-primary btn-sm" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', marginRight: '0.5rem' }}>
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            className="btn btn-danger btn-sm"
                                            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {books.length === 0 && (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No books found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookList;
