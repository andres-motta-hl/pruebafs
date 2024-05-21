import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Menu from './generalComponents/menu/Menu';
import './App.css';
import LateralMenu from './generalComponents/lateralMenu/LateralMenu';
import Register from './views/register/Register';

function App() {
  const [show, setShow] = useState(false);

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
