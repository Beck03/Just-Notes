import './styles/CrearNota.css';
import atras from './Images/atras.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { db } from './firebase-store/llaves'
import { auth } from './firebase-store/inicioGoogle';
import { addDoc, collection } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

export function CrearNota(){

    const navegacion = useNavigate();
    
    const volver = (e) => {
        e.preventDefault()
        navegacion('/Muro')
    }
    const [ titulo, colocarTitulo] = useState("");
    const [ nota, colocarNota] = useState("");
    const coleccionDeReferencia = collection( db, 'users', auth.currentUser.uid, 'notas')
    const fecha = serverTimestamp();
    const fechaI = new Date();
    const fechaICadena = `${fechaI.getDate()}/${fechaI.getMonth() + 1}/${fechaI.getFullYear()}`;
    const CrearUnaNota = async(e) => {
       e.preventDefault()
    await addDoc(coleccionDeReferencia, {
        titulo,
        nota,
        fechaICadena,
        fecha,
    })
    navegacion('/')
   }
    
    return(
        <div className='CrearNota'>
          <button id='btnVolver' onClick={volver}>
              <img src={atras} alt='Volver' className='volver'/>
          </button>
     

        <form>
           <label className='labelTitulo'>Título</label>
           <input type='text' id='titulo' placeholder="Opcional" 
           onChange={(event) => {
                colocarTitulo(event.target.value);
            }}
              />
           <label className='labelNota'>Tu nota</label>
           <textarea type='text' id='nota'onChange={(event) => {
                colocarNota(event.target.value);
            }} /> 
               <button id='btnCrear' onClick={CrearUnaNota} >Guardar</button>
        </form>
           
        </div>
    );
}