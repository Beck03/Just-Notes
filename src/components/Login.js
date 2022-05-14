import React from 'react';
import logo from './Images/login-imag.png';
import google from './Images/google.png';
import vamos from './Images/vamos.png';
import './styles/Login.css';
import  { loginGoogle } from './firebase-store/inicioGoogle';



export default function Login(){
    
    return(
        <div className='login'>
            <img src={logo} alt='login' className='loginimg'/>
            <button id='btnLogin' onClick={loginGoogle}><img src={google} alt='Google' id='google'/>Comenzar<img src={vamos} alt='flecha' id='comenzar'/></button>
        </div>
    );
}
