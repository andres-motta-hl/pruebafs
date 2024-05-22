import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './UpdateBook.scss';

const endpoint = 'http://localhost:8000/api';

export default function UpdateBook({ changeMakeUpdate }) {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { handleSubmit } = useForm();

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        try {
            const response = await axios.get(`${endpoint}/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedBook = { ...book, [name]: value };
        setBook(updatedBook);
    };

    const submit = handleSubmit(async (data) => {
        try {
            await axios.put(`${endpoint}/books/${id}`, {
                title: book.title,
                author: book.author,
                rating: book.rating,
                description: book.description
            });
            changeMakeUpdate();
        } catch (error) {
            console.error('Error updating book:', error);
        }
    });

    return ReactDOM.createPortal(
        <div>
            <div className='form-content'>
                <div className='close-content' onClick={changeMakeUpdate}>
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <form onSubmit={submit} className='form-register'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={book.title} onChange={handleChange} />

                    <label htmlFor='author'>Author</label>
                    <input type='text' name='author' value={book.author} onChange={handleChange} />

                    <label htmlFor='rating'>Rating</label>
                    <input type='text' name='rating' value={book.rating} onChange={handleChange} />

                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' value={book.description} onChange={handleChange} />

                    <button type='submit'>Modificar</button>
                </form>
            </div>
            <div className='form-shadow'></div>
        </div>,
        document.body
    );
}
