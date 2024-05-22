import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useAuth } from "../../contexts/AuthContexts";
import UpdateBook from "./components/UpdateBook";
import { useNavigate } from 'react-router-dom';
import './PrevBook.scss';

const endpoint = 'http://localhost:8000/api';

export default function PrevBook() {
    const { id } = useParams();
    const { user } = useAuth();
    const [book, setBook] = useState({});
    const [onLoan, setOnLoan] = useState(false);
    const [loans, setLoans] = useState([]);
    const [updateState, setUpdateState] = useState(false);
    const [category, setCategory] = useState('');
    const today = new Date().toISOString().slice(0, 10);
    const navigate = useNavigate();

    useEffect(() => {
        getBook();
        if (user) {
            getLoans();
        }
    }, [user]);

    const getBook = async () => {
        try {
            const response = await axios.get(`${endpoint}/books/${id}`);
            const responseCategory = await axios.put(`${endpoint}/categories/${response.data.category_id}`);
            setBook(response.data);
            setCategory(responseCategory.data.name);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    }

    const getLoans = async () => {
        try {
            const response = await axios.get(`${endpoint}/loans/${user?.data.id}`);
            const loansArray = Object.values(response.data);
            setLoans(loansArray);
            const found = loansArray.some(loan => loan.book_id === Number(id) && loan.status === 'prestado');
            setOnLoan(found);
        } catch (error) {
            console.error('Error fetching loans:', error);
        }
    }

    const addLoan = async () => {
        try {
            const resentLoan = loans.some(loan => loan.book_id === Number(id) && loan.user_id === user.data.id);
            if (resentLoan) {
                await axios.put(`${endpoint}/loans/${id}/${user.data.id}`, {
                    loan_date: today,
                    return_date: null,
                    status: 'prestado'
                });
            } else {
                await axios.post(`${endpoint}/loans`, {
                    user_id: user.data.id,
                    book_id: Number(id),
                    loan_date: today,
                    status: 'prestado',
                });
            }
            setOnLoan(true);
            modifyStock(book.stock - 1);
            setBook(prevBook => ({ ...prevBook, stock: prevBook.stock - 1 }));
        } catch (error) {
            console.error('Error adding loan:', error);
        }
    }

    const returnBook = async () => {
        try {
            await axios.put(`${endpoint}/loans/${id}/${user.data.id}`, {
                return_date: today,
                status: 'devuelto'
            });
            modifyStock(book.stock + 1);
            setOnLoan(false);
            setBook(prevBook => ({ ...prevBook, stock: prevBook.stock + 1 }));
        } catch (error) {
            console.error('Error returning book:', error);
        }
    }

    const modifyStock = async (value) => {
        try {
            await axios.put(`${endpoint}/books/${id}`, {
                stock: value,
            });
        } catch (error) {
            console.error('Error modifying stock:', error);
        }
    }

    const borrow = async () => {
        if (user) {
            await addLoan();
        } else {
            navigate('/register')
        }
    }

    const handleUpdateState = () => {
        getBook();
        setUpdateState(!updateState);
    }

    return (
        <div className="prev-book-content">
            <section>
                <img src={book.photo_url} alt="" />
            </section>
            <section>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                <p className="categoria">{category}</p>
                <p>Libros disponibles: {book.stock}</p>
                <div className="buttons">
                    {(!onLoan || !user) && book.stock > 0 && <button onClick={borrow}>PEDÍR</button>}
                    {onLoan && user && book.stock > 0 && <button onClick={returnBook}>DEVOLVER</button>}
                    {user?.data.role === 'admin' && book.stock > 0 && <button onClick={handleUpdateState}>MODIFICAR</button>}
                    {book.stock === 0 && <button>AGOTADO</button>}
                </div>
                <p className="rating">{book.rating} <span><FontAwesomeIcon icon={faStar} /></span></p>
            </section>
            {updateState && <UpdateBook changeMakeUpdate={handleUpdateState} />}
        </div>
    )
}
