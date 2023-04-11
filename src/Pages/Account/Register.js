import React from 'react';

const Register = ({ handleRegister, handleNameBlur, handleEmailBlur, handlePasswordBlur, handlePasswordChange, passwordChange }) => {

    console.log(passwordChange);

    const alertClassName = passwordChange.includes('Very weak') ? 'bg-yellow-700' : 'bg-green-700';

    return (

        < div className="lg:w-1/2 w-full lg:mr-8">
            <h1 className="text-2xl mb-4 font-bold">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input onBlur={event => handleNameBlur(event.target.value)} type="text" name='username' placeholder="Name" className="input input-bordered rounded text-sm" required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input onBlur={event => handleEmailBlur(event.target.value)} type="email" name='email' placeholder="Email" className="input input-bordered rounded text-sm" required />
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={event => handlePasswordChange(event.target.value)} onBlur={event => handlePasswordBlur(event.target.value)} type="password" name='password' placeholder="Password" className="input input-bordered rounded text-sm" />
                    {
                        <div className={`alert alert-warning rounded-none text-white text-sm shadow-lg w-full mx-auto mt-3 ${alertClassName}`}>
                            {passwordChange}
                        </div>
                    }
                </div>
                <div className="form-control mt-3">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered rounded text-sm" />
                </div>
                <div className="form-control mt-4">
                    <button type='submit' className="btn btn-primary border-0 rounded-none font-normal bg-black hover:bg-yellow-700" >REGISTER</button>
                </div>
            </form>
        </div>
    );
};

export default Register;