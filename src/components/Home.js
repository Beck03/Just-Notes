import './styles/Home.css';
import justnotes from './Images/justnotes.png';
import close from './Images/close.png';
import plus from './Images/plus.png';
import { exit } from './firebase-store/sign-out.js'
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();

    const signOff = async () => {
        await exit()
        navigate('/')
    }
    return(
        <div className='home'>
            <img src={justnotes} alt='Just Notes' className='justNotes'/>
            <button id='signoff' onClick={signOff}><img src={close} alt='Cerrar Sesión' className='close'/></button>
            <button id='createNote'><img src={plus} alt='Crear Nota' className='plus'/></button>

        </div>
    );
}