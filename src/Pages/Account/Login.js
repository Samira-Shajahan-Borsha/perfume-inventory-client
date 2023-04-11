import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        < div className="lg:w-1/2 w-full lg:mr-8">
            <h1 className="text-2xl mb-4 font-bold">LOGIN</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email Address</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered rounded text-sm" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered rounded text-sm" />
                <label className="label">
                    <Link to='' className="label-text-alt link link-hover"><span className='hover:text-yellow-700'>Forgot password?</span></Link>
                </label>
            </div>
            <div className="form-control mt-2 ">
                <button className="btn btn-primary border-0 rounded-none font-normal bg-black hover:bg-yellow-700" >Log In</button>
            </div>
        </div>
    );
};

export default Login;