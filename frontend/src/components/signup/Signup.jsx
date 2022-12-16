import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from "./Signup.module.css";


const Signup = () => {
    const [inputTextName, setInputTextName] = useState('');
    const [inputTextMName, setInputTextMName] = useState('');
    const [inputTextLName, setInputTextLName] = useState('');
    const [inputTextEmail, setInputTextEmail] = useState('');
    const [inputTextPassword, setInputTextPassword] = useState('');

    const handleInputChangeName = (e) => {
        const text = e.target.value;
        setInputTextName(text);
        console.log(inputTextName);
    }
    const handleInputChangeMName = (e) => {
        const text = e.target.value;
        setInputTextMName(text);
        console.log(inputTextMName);
    }
    const handleInputChangeLName = (e) => {
        const text = e.target.value;
        setInputTextLName(text);
        console.log(inputTextLName);
    }
    const handleInputChangeEmail = (e) => {
        const text = e.target.value;
        setInputTextEmail(text);
        console.log(inputTextEmail);
    }
    const handleInputChangePassword = (e) => {
        const text = e.target.value;
        setInputTextPassword(text);
        console.log(inputTextPassword);
    }

    const saveData = () => {
        localStorage.setItem('name', inputTextName);
        localStorage.setItem('mname', inputTextMName);
        localStorage.setItem('lname', inputTextLName);
        localStorage.setItem('email', inputTextEmail);
        localStorage.setItem('password', inputTextPassword);
        alert("Cuenta creada");
    }

    return (
        <div className={css.mainContainerSignup}>
            <div className={css.signupContainer}>
                <div className={css.logoTitle}>
                    <h1>Crea una cuenta</h1>
                </div>
                <form action='/Login' method='GET' className={css.formContainer}>
                    <label>Nombre: <span>*</span></label>
                    <input type="text" name='name' onChange={handleInputChangeName} required />

                    <label>Segundo nombre:</label>
                    <input type="text" name='m-name' onChange={handleInputChangeMName} />

                    <label>Apellidos: <span>*</span></label>
                    <input type="text" name='l-name' onChange={handleInputChangeLName} required />

                    <label>Correo: <span>*</span></label>
                    <input type="text" name='email' onChange={handleInputChangeEmail} required />

                    <label>Contraseña: <span>*</span></label>
                    <input type="password" name='password' onChange={handleInputChangePassword} required />
                    <input type="submit" onClick={saveData} value="Registarse" />
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/Login">Ingresar</Link></p>
            </div>
        </div>
    )
}

export default Signup