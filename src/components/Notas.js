import './styles/notas.css';
import Swal from 'sweetalert2';
import Eliminar from './Images/Eliminar.png';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, QuerySnapshot, doc, deleteDoc} from 'firebase/firestore';
import { db } from './firebase-store/llaves'
import { auth } from './firebase-store/inicioGoogle';
import { useNavigate } from 'react-router-dom';


export function Notas (){

    const navegacion = useNavigate();

    const [ listaDeNotas, colocarListaDeNotas] = useState([]);
  
    const colocarNota = async () => {
        onSnapshot(collection( db, 'users', auth.currentUser.uid, 'notas'), (QuerySnapshot) => {
            const notas = []
            QuerySnapshot.forEach(doc =>{
                notas.push({ ...doc.data(), id: doc.id})
            })
            colocarListaDeNotas(notas)
          
        })
    }
    useEffect(()=> {
        colocarNota()
    },[])

   

       // const borrarNota = (id) => deleteDoc(doc(db, 'recetas', id));
      const eliminarNota =  (id) =>{
           
            console.log('Proximamente voy a eliminar')

            Swal.fire({
                text: '¿Estás seguro de eliminarla?',
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                backdrop: ` rgba(0, 0, 0, 0.70)`,
            
            }).then(async(result) => {
                if (result.isConfirmed) {
                    console.log('Ya elimine')
               await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'notas',id))
                }
            })
       
    }


    return(
    <>
         {listaDeNotas.map((notas) => (
        <div className="notas" key={notas.id}>
           <div className="titulo"  >
               <h3 onClick={() => navegacion(`/EditarNota/${notas.id}`)}>{notas.titulo || 'Nota'}</h3>
               <button className='Eliminar' onClick={() => {eliminarNota(notas.id)}}><img src={Eliminar} alt='Eliminar Nota' className='imgEliminar'/></button>
            </div>
           <div className="nota" onClick={() => navegacion(`/EditarNota/${notas.id}`)}>{notas.nota}</div>
           <div className="fecha"><h5>{notas.fechaICadena}</h5></div>
        </div>
      ))}
    </>
      
 );

    
}