import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between flex-wrap p-4 border-b bg-black text-white border-white'>
            <div className="flex items-center flex-shrink-0 text-xl font-bold">
                <Link to="/" className="text-white no-underline">TopicNation</Link>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
                <ul className="lg:flex-grow flex gap-6 justify-end">
                    <li><Link className="text-white no-underline hover:underline" to="/">Home</Link></li>
                    <li><Link className="text-white no-underline hover:underline" to="/topics">Topics</Link></li>
                    <li><Link className="text-white no-underline hover:underline" to="/about">About Us</Link></li>
                    <li><Link className="text-white no-underline hover:underline" to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;