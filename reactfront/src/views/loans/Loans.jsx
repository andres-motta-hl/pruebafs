import React, { useEffect, useState } from "react";
import axios from "axios";
import './Loans.scss';
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

export default function Loans() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getLoans();
    }
  }, [user]);

  const getLoans = async () => {
    try {
      const response = await axios.get(`${endpoint}/loans/${user.data.id}`);
      const loans = response.data.filter(loan => loan.status === 'prestado');
      getBooks(loans);
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  const getBooks = async (loans) => {
    try {
      const bookPromises = loans.map(loan =>
        axios.get(`${endpoint}/books/${loan.book_id}`)
      );
      const responses = await Promise.all(bookPromises);
      const books = responses.map(response => response.data);
      setBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleNavigate = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="content-loans">
      {books.length > 0 ? (
        books.map(book => (
          <div className='book' key={book.id} onClick={() => handleNavigate(book.id)}>
            <section>
              <img src={book.photo_url} alt="portada" />
            </section>
            <section>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button>Devolver</button>
            </section>
          </div>
        ))
      ) : (
        <div className="withoutLoans">No tienes libros aún</div>
      )}
    </div>
  );
}
