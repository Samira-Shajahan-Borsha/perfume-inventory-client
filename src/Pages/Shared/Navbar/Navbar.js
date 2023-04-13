import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/Logo/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { RxAvatar } from 'react-icons/rx';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

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

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

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
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {
                        user?.uid ?
                            < div className="dropdown dropdown-end flex">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                                    <div className="w-10 lg:w-12 rounded-full ">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt='profile-pic' />
                                                :
                                                <span className="text-xl">{user?.displayName.charAt(0).toUpperCase()}</span>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-12 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-none w-52">
                                    <li>
                                        <Link>
                                            <img src={user?.photoURL} alt='profile-pic' className='w-8 lg:w-10 rounded-full' />
                                            <span>{user?.displayName}</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings & privacy</Link></li>
                                    <li onClick={handleLogOut}><Link>Log Out</Link></li>
                                </ul>
                            </div>

                            :
                            < Link to='/account' className='flex w-24 items-center'><RxAvatar className='text-2xl mr-1 text-black '></RxAvatar><span>Log In</span></Link>
                    }
                    {/* {
                        user?.uid ?
                            <>
                                {
                                    user?.photoURL ?
                                        < div className="avatar online mr-2">
                                            <div className="w-8 lg:w-12 rounded-full">
                                                <img src={user?.photoURL} alt='profile-pic' />
                                            </div>
                                        </div>
                                        :
                                        <div className="avatar online placeholder mr-2">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-8 lg:w-12">
                                                <span className="text-xl">{user?.displayName.charAt(0).toUpperCase()}</span>
                                            </div>
                                        </div>
                                }
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-ghost normal-case font-semibold"
                                >Log Out</button>
                            </>
                            :
                            < Link to='/account' className='flex w-24 items-center'><RxAvatar className='text-2xl mr-1 text-black '></RxAvatar><span>Log In</span></Link>
                    } */}
                </div>
            </div>
        </div >
    );
};

export default Navbar;