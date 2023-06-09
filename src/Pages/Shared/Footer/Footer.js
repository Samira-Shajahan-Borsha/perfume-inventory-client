import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div>
            <footer className="footer p-10 text-base-content justify-items-center grid grid-cols-2 lg:grid-cols-4">
                <div>
                    <span className="uppercase font-semibold text-black">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="uppercase font-semibold text-black">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="uppercase font-semibold text-black">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="uppercase font-semibold text-black">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://twitter.com/' target="_blank"><BsTwitter className='w-6 h-6 text-black'></BsTwitter></Link>
                        <Link to='https://www.youtube.com/' target="_blank"><BsYoutube className='w-6 h-6 text-black'></BsYoutube></Link>
                        <Link to='https://www.facebook.com/' target="_blank"><FaFacebookF className='w-6 h-6 text-black'></FaFacebookF></Link>
                    </div>
                </div>
            </footer>
            <div className='bg-black py-5'>
                <p className='text-center text-white text-sm lg:text-base'>&copy; {date} PERFUME INVENTORY. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;