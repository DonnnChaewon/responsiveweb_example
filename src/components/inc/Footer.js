import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='section footer bg-dark text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6>Site Information</h6>
                        <hr />
                        <p className='text-white'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                    </div>
                    <div className='col-md-4'>
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to='/'>Home</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div><Link to='/contact'>Contact</Link></div>
                        <div><Link to='/topics'>Topics</Link></div>
                    </div>
                    <div className='col-md-4'>
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className='text-white mb-1'>San Fransisco, California, USA</p></div>
                        <div><p className='text-white mb-1'>+1 1234567890</p></div>
                        <div><p className='text-white mb-1'>email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer