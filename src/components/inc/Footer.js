import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section class='py-10 footer footer-text border-top'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-4'>
                        <h6 class='text-2xl text-blue-600'>Site Information</h6>
                        <hr />
                        <p class='text-base'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                    </div>
                    <div class='col-md-4'>
                        <h6 class='text-2xl text-blue-600'>Quick Links</h6>
                        <hr />
                        <p class='text-base mb-1'><Link to='/' class='no-underline'>Home</Link></p>
                        <p class='text-base mb-1'><Link to='/about' class='no-underline'>About</Link></p>
                        <p class='text-base mb-1'><Link to='/contact' class='no-underline'>Contact</Link></p>
                        <p class='text-base mb-1'><Link to='/topics' class='no-underline'>Topics</Link></p>
                    </div>
                    <div class='col-md-4'>
                        <h6 class='text-2xl text-blue-600'>Contact Information</h6>
                        <hr />
                        <p class='text-base mb-1'>San Fransisco, California, USA</p>
                        <p class='text-base mb-1'>+1 1234567890</p>
                        <p class='text-base mb-1'>email@domain.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer