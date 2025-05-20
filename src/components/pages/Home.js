import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
import Topic1 from '../images/slider1.jpeg'
import Topic2 from '../images/slider2.jpeg'
import Topic3 from '../images/slider3.jpeg'
import Topic4 from '../images/slider4.jpeg'

const Home = () => {
    return (
        <div>
            <Slider />

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>What is this?</h3>
                            <div className='underline mx-auto'></div>
                            <p>This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</p>
                        </div>
                    </div>
                </div>
            </section><hr />

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Vision, mission, and values</h3>
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
            </section><hr />

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Topics</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-3'>
                            <div className='card shadow'>
                                <img src={Topic1} className='w-120' />
                                <div className='card-body center-box'>
                                    <h6>The Rock & Vin Diesel</h6>
                                    <p>The Rock and Vin Diesel are actors in the Fast & Furious franchise. Their real names are Dwayne Johnson and Mark Sinclair, respectively.</p>
                                    <Link to='/topics' className='btn btn-link'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card shadow'>
                                <img src={Topic2} className='w-120' />
                                <div className='card-body center-box'>
                                    <h6>Cristiano Ronaldo</h6>
                                    <p>Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team.</p>
                                    <Link to='/topics' className='btn btn-link'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card shadow'>
                                <img src={Topic3} className='w-120' />
                                <div className='card-body center-box'>
                                    <h6>X-Men</h6>
                                    <p>The X-Men is a team from Marvel comics that is known for their mutant abilities. All of the members have mutant abilities that make them different from normal humans.</p>
                                    <Link to='/topics' className='btn btn-link'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card shadow'>
                                <img src={Topic4} className='w-120' />
                                <div className='card-body center-box'>
                                    <h6>The Hulk</h6>
                                    <p>The Hulk is a character from Marvel comics that is a member of Avengers. His real name is Bruce Banners and he is the strongest member of Avengers.</p>
                                    <Link to='/topics' className='btn btn-link'>Read More</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home