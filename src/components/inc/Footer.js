import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='py-10 footer footer-text border-top bg-black'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Site Information</h6>
                        <hr className='border-white' />
                        <p className='text-white text-base'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Quick Links</h6>
                        <hr className='border-white' />
                        <p className='text-base mb-1'><Link to='/' className='text-white no-underline hover:underline'>Home</Link></p>
                        <p className='text-base mb-1'><Link to='/about' className='text-white no-underline hover:underline'>About</Link></p>
                        <p className='text-base mb-1'><Link to='/contact' className='text-white no-underline hover:underline'>Contact</Link></p>
                        <p className='text-base mb-1'><Link to='/topics' className='text-white no-underline hover:underline'>Topics</Link></p>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Contact Information</h6>
                        <hr className='border-white' />
                        <p className='text-white text-base mb-1'>San Fransisco, California, USA</p>
                        <p className='text-white text-base mb-1'>+1 1234567890</p>
                        <p className='text-white text-base mb-1'>email@domain.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer