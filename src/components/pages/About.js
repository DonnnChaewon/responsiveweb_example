import React from 'react'

const About = () => {
    return (
        <div>
            <section className='py-4 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>About Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>Home / About Us</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-c-light border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Our Site</h5>
                    <div className='underline'></div>
                    <p>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                </div>
            </section>

            {/* Vision, mission, and values */}
            <section className='section bg-c-light'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Vision, mission, and values</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>Our Vision</h6>
                            <p>Our vision is to make a responsive website that can load a lot of topics.</p>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>Our Mission</h6>
                            <p>Our mission is to make readers impressed about our topics. They can request us to make what topic in the 'Contact Us' menu.</p>
                        </div>
                        <div className='col-md-4 text-center'>
                            <h6>Our Values</h6>
                            <p>We value hardwork, honest, dilligency, and of course, your comments about our topics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About