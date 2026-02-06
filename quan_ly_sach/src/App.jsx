import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
