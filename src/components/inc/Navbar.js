import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = ''; // Reset body class
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className={`flex items-center justify-between flex-wrap p-4 border-bottom ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div className="flex items-center flex-shrink-0 text-xl">
                <Link to="/" className={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>TopicNation</Link>
            </div>
            <div className="block lg:hidden">
                {/* You can add a hamburger menu here for mobile */}
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <ul className="lg:flex-grow flex gap-6 justify-end">
                    <li><Link className={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/">Home</Link></li>
                    <li><Link className={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/topics">Topics</Link></li>
                    <li><Link className={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/about">About Us</Link></li>
                    <li><Link className={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/contact">Contact Us</Link></li>
                </ul>
                <button onClick={toggleTheme} className={`ml-4 border border-gray-500 ${theme === 'light' ? 'text-black' : 'text-white'} px-4 py-2 rounded`}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;