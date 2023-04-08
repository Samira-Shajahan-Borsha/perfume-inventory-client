import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo/3541037.jpg';

const Navbar = () => {

    const menuItem = <>
        <li><Link className='text-black'>Manage Inventory</Link></li>
        <li tabIndex={0}>
            <Link className="justify-between text-black">
                Add Item
            </Link>
        </li>
        <li><Link className='text-black'>My items</Link></li>
    </>

    return (
        <div className="navbar shadow-xl">
            <div className='container mx-auto w-full'>
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl text-black flex items-center">
                        <img className='w-10 h-10' src={logo} alt="" /> <p className='ml-2 font-medium'>Perfume Inventory</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end flex">
                    <Link className="btn">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;