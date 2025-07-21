import React from 'react'
import Vision from '../images/vision.png'
import Mission from '../images/mission.png'
import Value from '../images/value.png'

const About = () => {
    return (
        <div className='bg-purple-600'>
            <section className='py-10'>
                <div className='container mx-auto px-4 text-center'>
                    <h3 className='text-2xl text-center font-bold text-pink-400'>Our Site</h3>
                    <div className='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-600 via-white-500 to-cyan-600'></div>
                    <h6 className='text-2xl text-violet-300'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</h6>
                </div>
            </section>

            {/* Vision, mission, and values */}
            <section className='py-10'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='text-2xl font-bold text-yellow-400'>Vision, mission, and values</h3>
                            <div className='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-pink-500'></div>
                        </div>
                        <div className='col-md-12 card shadow-lg border border-1 mb-5'>
                            <div className='flex flex-col justify-center items-center text-center h-full p-5'>
                                <img src={Vision} width='10%' height='10%' />
                                <br />
                                <h6>Our Vision</h6>
                                <p className='text-base'>Our vision is to make a responsive website that can load a lot of topics. The website, of course, is user friendly and can be accessed easily.</p>
                            </div>
                        </div>
                        <div className='col-md-12 card shadow-lg border border-1 mb-5'>
                            <div className='flex flex-col justify-center items-center text-center h-full p-5'>
                                <img src={Mission} width='10%' height='10%' />
                                <br />
                                <h6>Our Mission</h6>
                                <p className='text-base'>Our mission is to make readers impressed about our topics. They can request us to make what topic in the 'Contact Us' menu.</p>
                            </div>
                        </div>
                        <div className='col-md-12 card shadow-lg border border-1'>
                            <div className='flex flex-col justify-center items-center text-center h-full p-5'>
                                <img src={Value} width='10%' height='10%' />
                                <br />
                                <h6>Our Values</h6>
                                <p className='text-base'>We value hardwork, honest, dilligency, and of course, your comments about our topics. Regardless your comments are good or bad, those comments that build us to become a better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About