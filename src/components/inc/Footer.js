import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='section footer bg-c-light footer-text border-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Site Information</h6>
                        <hr />
                        <p className='footer-text'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Quick Links</h6>
                        <hr />
                        <div className='footer-text'><Link to='/'>Home</Link></div>
                        <div className='footer-text'><Link to='/about'>About</Link></div>
                        <div className='footer-text'><Link to='/contact'>Contact</Link></div>
                        <div className='footer-text'><Link to='/topics'>Topics</Link></div>
                    </div>
                    <div className='col-md-4'>
                        <h6 className='text-2xl text-blue-600'>Contact Information</h6>
                        <hr />
                        <div><p className='footer-text mb-1'>San Fransisco, California, USA</p></div>
                        <div><p className='footer-text mb-1'>+1 1234567890</p></div>
                        <div><p className='footer-text mb-1'>email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer