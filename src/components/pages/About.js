import React from 'react'

const About = () => {
    return (
        <div>
            <section class='py-10 border-bottom bg-gradient-to-r from-red-600 via-gray-500 to-red-600'>
                <div class='container text-center'>
                    <h3 class='text-2xl font-bold text-pink-400'>Our Site</h3>
                    <div class='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-600 via-white-500 to-cyan-600'></div>
                    <p class='text-base'>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                </div>
            </section>

            {/* Vision, mission, and values */}
            <section class='py-10 bg-gradient-to-r from-blue-900 via-cyan-600 to-blue-900'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-12 mb-4 text-center'>
                            <h3 class='text-2xl font-bold text-yellow-400'>Vision, mission, and values</h3>
                            <div class='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-purple-600 via-red-500 to-purple-600'></div>
                        </div>
                        <div class='col-md-12 card shadow border border-1 mb-5'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Vision</h6>
                                <p class='text-base'>Our vision is to make a responsive website that can load a lot of topics. The website, of course, is user friendly and can be accessed easily.</p>
                            </div>
                        </div>
                        <div class='col-md-12 card shadow border border-1 mb-5'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Mission</h6>
                                <p class='text-base'>Our mission is to make readers impressed about our topics. They can request us to make what topic in the 'Contact Us' menu.</p>
                            </div>
                        </div>
                        <div class='col-md-12 card shadow border border-1'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Values</h6>
                                <p class='text-base'>We value hardwork, honest, dilligency, and of course, your comments about our topics. Regardless your comments are good or bad, those comments that build us to become a better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About