import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './FindBooks.scss';

const endpoint = 'http://localhost:8000/api';

export default function FindBooks() {
    const [books, setBooks] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const response = await axios.get(`${endpoint}/books`);
                const allBooks = response.data;

                const categories = {
                    'Ficción': 1,
                    'Psicología': 2,
                    'Novelas': 3,
                    'Infantiles': 4,
                    'Literatura': 5,
                    'Educación': 6,
                    'Auto ayuda': 7,
                    'Geografía': 8,
                    'Ciencia': 9,
                };

                const categoryValue = categories[id];

                const filteredBooks = categoryValue
                    ? allBooks.filter(book => book.category_id === categoryValue)
                    : allBooks.filter(book => normalizeString(book.title).includes(normalizeString(id)));

                setBooks(filteredBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        getAllBooks();
    }, [id]);

    const navigateToBook = (bookId) => {
        navigate(`/book/${bookId}`);
    };

    const normalizeString = (str) => {
        return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
    };

    return (
        <div className="content-loans">
            {books.length > 0 ? (
                books.map(book => (
                    <div className='book' key={book.id} onClick={() => navigateToBook(book.id)}>
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
                <div className="withoutLoans">Aún no tienes libros nuestros</div>
            )}
        </div>
    );
}
