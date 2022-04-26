import logo from './Images/login-imag.png';
import google from './Images/google.png';
import begin from './Images/begin.png';
import './styles/Login.css';
import  loginGoogle from './firebase-store/auth-google'

//import { useNavigate } from 'react-router-dom';
//const navigate = useNavigate;

export default function Login(){
   /* const prueba = () => {
      console.log('me diste click');
    }*/
    return(
        <div className='login'>
            <img src={logo} alt='login' className='loginimg'/>
            <button id='btnLogin' onClick={loginGoogle}><img src={google} alt='Google' id='google'/>Comenzar<img src={begin} alt='flecha' id='comenzar'/></button>
        </div>
    );
}