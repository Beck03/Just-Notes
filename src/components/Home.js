import './styles/Home.css';
import justnotes from './Images/justnotes.png';
import close from './Images/close.png';
import plus from './Images/plus.png';
export default function Home(){
    return(
        <div className='home'>
            <img src={justnotes} alt='Just Notes' className='justNotes'/>
            <button id='signOff'><img src={close} alt='Cerrar Sesión' className='close'/></button>
            <button id='createNote'><img src={plus} alt='Crear Nota' className='plus'/></button>

        </div>
    );
}