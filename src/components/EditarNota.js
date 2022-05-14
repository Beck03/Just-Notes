import React from 'react';
import './styles/CrearNota.css';
import atras from './Images/atras.png';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from './firebase-store/llaves'
import { auth } from './firebase-store/inicioGoogle';
import { useEffect, useState } from 'react';

export function EditarNota(){

    const volver = (e) => {
        e.preventDefault()
        navegacion('/')
    }

    const navegacion = useNavigate();
    const {id} = useParams();

    const inicio = {
        titulo: '',
        nota:''
        }
    const [valor, actualizarValor] = useState(inicio);

    
    const documentos = async (id) =>{
        const docRef = doc(db, 'users', auth.currentUser.uid, 'notas', id);
        const docSnap = await getDoc(docRef);
        actualizarValor(docSnap.data());
    }
    
    useEffect(()=> {
        documentos(id);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

   const EditarUnaNota = async (id) => {
    const coleccionDeReferencia = doc(db, 'users', auth.currentUser.uid, 'notas', id);
        await updateDoc((coleccionDeReferencia), valor)
        navegacion('/')
   }
    

    return(
        <div className='CrearNota'>
          <button id='btnVolver' onClick={volver}>
              <img src={atras} alt='Volver' className='volver'/>
          </button>
     

        <div>
           <label className='labelTitulo'>Título</label>
           <input type='text' id='titulo' placeholder="Opcional" name='titulo' value={valor.titulo} 
           onChange ={ (event) =>  {actualizarValor({ ...valor, titulo: event.target.value })}} />
           <label className='labelNota'>Tu nota</label>
           <textarea type='text' id='nota' name='nota' value={valor.nota} 
           onChange = { (event) =>  {actualizarValor({ ...valor, nota: event.target.value })}}/> 
               <button id='btnEditar' onClick={ () =>{EditarUnaNota(id)}} >Actualizar</button>
        </div>
           
        </div>
    );
}