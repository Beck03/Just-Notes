import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './components/Login';
import Muro from './components/Muro';
import './components/styles/sweetAlert.css';
import { EditarNota } from './components/EditarNota';
import { CrearNota } from './components/CrearNota';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase-store/inicioGoogle'

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

      </Routes>
    : <Routes>
        <Route path='/' element={<Login />} /> 
    </Routes>}
    </BrowserRouter>


  );
}

export default App;
