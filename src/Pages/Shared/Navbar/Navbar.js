import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.png';
import { RxAvatar } from 'react-icons/rx';

const Navbar = () => {

    const activeRoute = ({ isActive }) => isActive ? "text-yellow-700 underline decoration-yellow-700 decoration-2 underline-offset-4" : "text-black hover:underline decoration-2 underline-offset-4";


    const menuItem = <>
        <li><NavLink to='/manage/inventory' className={activeRoute}>Manage Inventory</NavLink></li>
        <li tabIndex={0}>
            <NavLink to='/add/item' className={activeRoute}>
                Add Item
            </NavLink>
        </li>
        <li><NavLink to='/my/items' className={activeRoute}>My Items</NavLink></li>
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
                        <img className='w-52 lg:w-72' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 w-80 justify-evenly">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end flex">
                    <Link to='/login' className='flex w-24 items-center'><RxAvatar className='text-2xl mr-1 text-black '></RxAvatar><span>Log In</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;