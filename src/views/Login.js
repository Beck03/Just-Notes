import logo from './Images/login-imag.png';
import google from './Images/google.png';
import comenzar from './Images/comenzar.png';
import './styles/Login.css';

export default function Login(){
    return(
        <div className='login'>
            <img src={logo} alt='login' className='loginimg'/>
           <button id='btnLogin'><img src={google} alt='Google' id='google'/>Comenzar<img src={comenzar} alt='flecha' id='comenzar'/></button>
        </div>
    );
}