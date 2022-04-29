import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { CreateNote } from './components/CreateNotes';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/firebase-store/auth-google'

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
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/CreateNote' element={<CreateNote />} />
      </Routes>
    : <Routes>
        <Route path='/' element={<Login />} /> 
    </Routes>}
    </BrowserRouter>


  );
}

export default App;
