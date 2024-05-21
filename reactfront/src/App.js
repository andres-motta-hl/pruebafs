import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Menu from './generalComponents/menu/Menu';
import './App.css';
import LateralMenu from './generalComponents/lateralMenu/LateralMenu';
import Register from './views/register/Register';
import { useAuth } from './contexts/AuthContexts';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

function App() {
  const [show, setShow] = useState(false);
  const {user, setUser} = useAuth();

  const userResponse = async ()=> {
    const token = document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

    if (token) {
      const response = await axios.get(`${endpoint}/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    }else{
      setUser(null);
    }
  }

  useEffect( () => {
    userResponse();
  }, []);


  return (
    <BrowserRouter>
      <div>
          <Menu changeLateralMenuShow={()=>setShow(!show)}/>
          { show && <LateralMenu changeLateralMenuShow={()=>setShow(!show)}/>}
          <div className='limiter'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
