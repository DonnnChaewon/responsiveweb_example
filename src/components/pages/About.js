import React from 'react'

const About = () => {
    return (
        <div>
            <section className='section border-bottom'>
                <div className='container text-center'>
                    <h3 className='text-2xl font-bold text-blue-600'>Our Site</h3>
                    <div className='underline mx-auto'></div>
                    <p>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                </div>
            </section>

            {/* Vision, mission, and values */}
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='text-2xl font-bold text-blue-600'>Vision, mission, and values</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='col-md-4 border border-1'>
                            <div className='center-box'>
                                <h6>Our Vision</h6>
                                <p>Our vision is to make a responsive website that can load a lot of topics. The website, of course, is user friendly and can be accessed easily.</p>
                            </div>
                        </div>
                        <div className='col-md-4 border border-1'>
                            <div className='center-box'>
                                <h6>Our Mission</h6>
                                <p>Our mission is to make readers impressed about our topics. They can request us to make what topic in the 'Contact Us' menu.</p>
                            </div>
                        </div>
                        <div className='col-md-4 border border-1'>
                            <div className='center-box'>
                                <h6>Our Values</h6>
                                <p>We value hardwork, honest, dilligency, and of course, your comments about our topics. Regardless your comments are good or bad, those comments that build us to become a better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About