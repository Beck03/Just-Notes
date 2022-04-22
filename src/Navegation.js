import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
function Navegation() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/muro" element={<div>Holiwi soy un muro</div>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default Navegation;
