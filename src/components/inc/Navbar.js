import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.class = ''; // Reset body class
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav class={`flex items-center justify-between flex-wrap p-4 border-bottom ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <div class="flex items-center flex-shrink-0 text-xl">
                <Link to="/" class={`font-bold no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`}>TopicNation</Link>
            </div>
            <div class="block lg:hidden">
                {/* You can add a hamburger menu here for mobile */}
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <ul class="lg:flex-grow flex gap-6 justify-end">
                    <li><Link class={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/">Home</Link></li>
                    <li><Link class={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/topics">Topics</Link></li>
                    <li><Link class={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/about">About Us</Link></li>
                    <li><Link class={`no-underline ${theme === 'light' ? 'text-black' : 'text-white'}`} to="/contact">Contact Us</Link></li>
                </ul>
                <button onClick={toggleTheme} class={`ml-4 border border-gray-500 ${theme === 'light' ? 'text-black' : 'text-white'} px-4 py-2 rounded`}>
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;