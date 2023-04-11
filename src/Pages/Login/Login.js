import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
                        <button className="btn btn-active btn-ghost font-normal rounded-none">REGISTER</button>
                    </div>
                    <div className="lg:w-1/2 w-full lg:mr-8">
                        <h1 className="text-2xl mb-4 font-bold">LOGIN</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered rounded" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered rounded" />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover"><span className='hover:text-yellow-700'>Forgot password?</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-2 ">
                            <button className="btn btn-primary border-0 rounded-none bg-black hover:bg-yellow-700" >Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;