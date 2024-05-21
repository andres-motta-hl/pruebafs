import './FeatureBooks.scss';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

export default function FeatureBooks() {
    const [ books, setBooks] = useState( [] );
    useEffect( ()=>{
        getAllBooks();
    }, [])

    const getAllBooks = async ()=> {
        const response = await axios.get(`${endpoint}/books`);
        setBooks(response.data);
    }

    return (
        <div>
            <pre>
                {JSON.stringify(books, null, 2)}
            </pre>
        </div>
    )
}