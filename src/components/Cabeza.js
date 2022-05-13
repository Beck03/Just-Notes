import './styles/cabeza.css';
import justnotes from './Images/justnotes.png';
import cerrarSesion from './Images/cerrarSesion.png';
import { salir } from './firebase-store/Cerrar-Sesion.js'
import { useNavigate } from 'react-router-dom';


export function Cabeza (){

    const navegacion = useNavigate();

    const Cerrar = async () => {
        await salir()
        navegacion('/')
    }
    return (
        <div className='cabeza'>
            <img src={justnotes} alt='Just Notes' className='justNotes'/>
            <button id='Cerrar' onClick={Cerrar}><img src={cerrarSesion} alt='Cerrar Sesión' className='cerrar'/></button>
            </div>
    );
}