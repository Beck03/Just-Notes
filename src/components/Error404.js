import React from 'react';
import error from './Images/error404.png';
import './styles/error404.css';
import { useNavigate } from 'react-router-dom';


export function Error404 (){

    const navegacion = useNavigate();

    const Cerrar = () => {
       navegacion('/')
    }

    return (
        <section className='error'>
            <div className='textoError'>
                <h2 className='Ooops'>Uuups...</h2>
                <h4 className='Pagina'>Página no encontrada</h4>
                <p className='mensaje'>La página que buscas no existe<br/> o 
                    se produjo un error, vuelve a la<br/> página de inicio.</p>
            </div>
            <img src={error} alt='Notas al aire' className='errorImg'/>
            <button id='btnVolverError' onClick={Cerrar}>Volver</button>
            </section>
    );
}