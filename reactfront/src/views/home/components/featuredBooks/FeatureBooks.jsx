import './FeatureBooks.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export default function FeatureBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${endpoint}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleNavigate = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className='books-content'>
      {books.length > 0 ? (
        books.map(book => (
          <div className='book' key={book.id} onClick={() => handleNavigate(book.id)}>
            <section>
              <img src={book.photo_url} alt="portada" />
            </section>
            <section>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button>Pedír</button>
            </section>
          </div>
        ))
      ) : (
        <div className="no-books">No hay libros disponibles</div>
      )}
    </div>
  );
}
