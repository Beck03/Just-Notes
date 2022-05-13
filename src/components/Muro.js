import './styles/Muro.css';
import Crear from './Images/Crear.png';
import { Invitacion } from './Invitacion';
import { useNavigate } from 'react-router-dom';
import { Notas } from './Notas';
import { Cabeza } from './Cabeza';



export default function Muro(){
    const navegacion = useNavigate();

   
    const crearN = (e) => {
        e.preventDefault()
        navegacion('/Crearnota')
    }


    return(
        <>
         
            <Cabeza/>
            
           {/* <Invitacion/>*/}
           <section id='contenedor'>
           <Notas/>
           </section>
           
            <button id='crear' onClick={crearN}><img src={Crear} alt='Crear Nota' className='añadir'/></button>

        </>
    );
}