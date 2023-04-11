import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const Account = () => {

    const [toggleButton, setToggleButton] = useState(true);

    return (
        <div>
            <div className='bg-black h-44'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-semibold text-white py-8 text-center'>My account</h1>
                <p className='text-center text-white'><span className='hover:underline'><Link to='/'>Home</Link></span> / My account</p>
            </div>
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
                            <Login></Login>
                            :
                            <Register></Register>
                    }
                </div>
            </div>
        </div >
    );
};

export default Account;


