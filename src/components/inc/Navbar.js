import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between flex-wrap p-4 border-b bg-black'>
            <div className="flex items-center flex-shrink-0 text-xl font-bold">
                <img src={Logo} width='40%' height='40%' />
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
                <ul className="lg:flex-grow flex gap-6 justify-end">
                    <li><Link className="text-white no-underline hover:text-cyan-500" to="/">Home</Link></li>
                    <li><Link className="text-white no-underline hover:text-cyan-500" to="/topics">Topics</Link></li>
                    <li><Link className="text-white no-underline hover:text-cyan-500" to="/about">About Us</Link></li>
                    <li><Link className="text-white no-underline hover:text-cyan-500" to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;