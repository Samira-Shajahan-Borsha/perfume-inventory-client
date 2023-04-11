import React from 'react';

const Register = () => {
    return (
        < div className="lg:w-1/2 w-full lg:mr-8">
            <h1 className="text-2xl mb-4 font-bold">Register</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered rounded text-sm" required />
            </div>
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
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered rounded text-sm" />
            </div>
            <div className="form-control mt-4 ">
                <button className="btn btn-primary border-0 rounded-none font-normal bg-black hover:bg-yellow-700" >REGISTER</button>
            </div>
        </div>
    );
};

export default Register;