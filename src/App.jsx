import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './components/Login';
import Muro from './components/Muro';
import './components/styles/sweetAlert.css';
import { EditarNota } from './components/EditarNota';
import { CrearNota } from './components/CrearNota';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase-store/inicioGoogle'
import { Error404 } from './components/Error404';

function App() {

const [ isAutenticate, setAutenticate ] = useState(null);

onAuthStateChanged(auth, (user) =>{
  if (user){
    setAutenticate(user);
  }else {
    setAutenticate(null);
  }
})

  return (
    <BrowserRouter>
    {isAutenticate?<Routes>
        <Route path='/' element={<Muro/>} />
        <Route path='/Muro' element={<Muro/>} />
        <Route path='/CrearNota' element={<CrearNota/>} />
        <Route path='/EditarNota/:id' element={<EditarNota/>} />
        <Route path='/*' element={<Error404/>} />
      </Routes>
    : <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/*' element={<Error404/>} />

    </Routes>}
    </BrowserRouter>


  );
}

export default App;
