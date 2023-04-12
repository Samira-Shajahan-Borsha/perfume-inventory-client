import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { AuthContext } from '../../Contexts/AuthProvider';
import { BiErrorCircle } from 'react-icons/bi';
import { toast } from 'react-hot-toast';

const Account = () => {

    const { createUser } = useContext(AuthContext);

    const [toggleButton, setToggleButton] = useState(true);

    const [passwordChange, setPasswordChange] = useState('');

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });

    const RegistrationErrorMessage = error?.nameError || error?.emailError || error?.passwordError || error?.confirmPasswordError;

    const loginErrorMessage = error?.emailError || error?.passwordError;

    const handleRegister = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        if (password !== confirmPassword) {
            setError({ ...error, confirmPasswordError: 'Failed registration. The confirm password should be matched with the given password.' });
        }

        else {
            setError({ ...error, confirmPasswordError: "" });
            createUser(email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    user.displayName = name;
                    console.log(user.displayName);
                    toast.success('Registered successfully. Please log in.');
                    setPasswordChange('');
                    setError({ ...error, emailError: '' });
                    form.reset();
                })
                .catch(error => {
                    const errorMessage = error.message;
                    if (errorMessage.includes('auth/email-already-in-use')) {
                        setError({ ...error, emailError: 'An account is already registered with your email address. Please try with different email.' });
                    }
                })
        }
    }

    const handleLogin = event => {
        event.preventDefault();

        
    }

    //registration and login form input field validation

    const handleNameBlur = (nameInput) => {
        if (nameInput === '') {
            setError({ ...error, nameError: 'Username is required' });
        }
        else {
            setUserInfo({ ...userInfo, name: nameInput });
            setError({ ...error, nameError: '' });
        }
    }

    const handleEmailBlur = emailInput => {

        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (emailInput === '') {
            setError({ ...error, emailError: 'Email address is required.' });
        }
        else if (!regex.test(emailInput)) {
            setError({ ...error, emailError: 'Please provide a valid email address.' });
        }
        else {
            setUserInfo({ ...userInfo, email: emailInput })
            setError({ ...error, emailError: '' });
        }
    }

    const registrationHandlePasswordBlur = passwordInput => {
        if (passwordInput === '') {
            setError({ ...error, passwordError: 'Please enter an account password.' });
            setPasswordChange('');
        }
    }

    const loginHandlePasswordBlur = passwordInput => {
        if (passwordInput === '') {
            setError({ ...error, passwordError: 'The password field is empty' });
        }
        else {
            setUserInfo({ ...userInfo, password: passwordInput });
            setError({ ...error, passwordError: '' });
        }
    }

    const handlePasswordChange = passwordInput => {
        if (passwordInput.length < 6) {
            setPasswordChange('Very weak - Please enter a stronger password.');
            setError({ ...error, passwordError: 'Your pasword should be 6 characters long or more.', confirmPasswordError: '' });
            setUserInfo({ ...userInfo, password: '' });
        }
        else if (passwordInput.length <= 8) {
            setPasswordChange('Medium');
            setError({ ...error, passwordError: '', confirmPasswordError: '' });
            setUserInfo({ ...userInfo, password: passwordInput });
        }
        else if (passwordInput.length > 10) {
            setPasswordChange('Strong');
            setError({ ...error, passwordError: '', confirmPasswordError: '' });
            setUserInfo({ ...userInfo, password: passwordInput });
        }
    }


    const handleConfirmPasswordBlur = confirmPasswordInput => {
        if (confirmPasswordInput === '') {
            setError({ ...error, confirmPasswordError: 'You need to confirm your password.' });
        }
        else {
            setError({ ...error, confirmPasswordError: '' });
            setUserInfo({ ...userInfo, confirmPassword: confirmPasswordInput });
        }
    }

    return (
        <div>
            <div className='bg-black h-44'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-semibold text-white py-8 text-center'>My account</h1>
                <p className='text-center text-white'><span className='hover:underline'><Link to='/'>Home</Link></span> / My account</p>
            </div>
            {
                !toggleButton && RegistrationErrorMessage &&
                <div className="alert alert-warning bg-yellow-700 rounded-none text-white text-sm shadow-lg w-5/6 mx-auto mt-10">
                    <div>
                        <BiErrorCircle className='text-lg mr-2 font-bold'></BiErrorCircle>
                        <span>Error: {RegistrationErrorMessage}</span>
                    </div>
                </div>
            }
            {
                toggleButton && loginErrorMessage &&
                <div className="alert alert-warning bg-yellow-700 rounded-none text-white text-sm shadow-lg w-5/6 mx-auto mt-10">
                    <div>
                        <BiErrorCircle className='text-lg mr-2 font-bold'></BiErrorCircle>
                        <span>Error: {loginErrorMessage}</span>
                    </div>
                </div>
            }
            <div className="hero py-9">
                <div className="hero-content px-4 lg:px-28 flex-col items-start justify-evenly lg:flex-row-reverse">
                    <div className="text-center lg:w-1/2 lg:text-left flex flex-col items-center ">
                        <h1 className="text-2xl font-bold">REGISTER</h1>
                        <p className="py-6 text-sm text-center leading-6">Registering for this site allows you to access the manage inventory. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to manage the perfume inventory.</p>
                        <button className="btn btn-active btn-ghost font-normal rounded-none"
                            onClick={() => setToggleButton(!toggleButton)}
                        >
                            {
                                toggleButton ? 'REGISTER' : 'LOGIN'
                            }
                        </button>
                    </div>
                    {
                        toggleButton ?
                            <Login
                                handleLogin={handleLogin}
                                handleEmailBlur={handleEmailBlur}
                                loginHandlePasswordBlur={loginHandlePasswordBlur}
                            ></Login>
                            :
                            <Register
                                handleRegister={handleRegister}
                                handleNameBlur={handleNameBlur}
                                handleEmailBlur={handleEmailBlur}
                                registrationHandlePasswordBlur={registrationHandlePasswordBlur}
                                handlePasswordChange={handlePasswordChange}
                                passwordChange={passwordChange}
                                handleConfirmPasswordBlur={handleConfirmPasswordBlur}
                            ></Register>
                    }
                </div>
            </div>
        </div >
    );
};

export default Account;