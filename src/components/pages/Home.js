import React from 'react'
import { Link } from 'react-router-dom'
import Topic1 from '../images/slider1.jpeg'
import Topic2 from '../images/slider2.jpeg'
import Topic3 from '../images/slider3.jpeg'
import Topic4 from '../images/slider4.jpeg'

const Home = () => {
    return (
        <div>
            <section class="bg-gradient-to-r from-indigo-900 to-red-900 text-white py-10 flex flex-col items-center justify-center text-center">
                <h1 class="text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-4">Discover Amazing Topics</h1>
                <h3 class="text-xl">Explore fascinating stories and insights from around the world</h3>
            </section>

            <section class='py-10 bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-12 text-center'>
                            <h3 class='text-2xl font-bold text-gray-300'>What is this?</h3>
                            <div class='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-600 via-gray-400 to-cyan-600'></div>
                            <h6 class="text-gray-300">This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section class='py-10 bg-gradient-to-r from-cyan-400 via-gray-500 to-blue-600'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-12 mb-4 text-center'>
                            <h3 class='text-2xl font-bold text-yellow-400'>Vision, mission, and values</h3>
                            <div class='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-purple-600 via-red-500 to-purple-600'></div>
                        </div>
                        <div class='col-md-12 card shadow-lg border border-1 mb-5'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Vision</h6>
                                <p class='text-base'>Our vision is to make a responsive website that can load a lot of topics. The website, of course, is user friendly and can be accessed easily.</p>
                            </div>
                        </div>
                        <div class='col-md-12 card shadow-lg border border-1 mb-5'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Mission</h6>
                                <p class='text-base'>Our mission is to make readers impressed about our topics. They can request us to make what topic in the 'Contact Us' menu.</p>
                            </div>
                        </div>
                        <div class='col-md-12 card shadow-lg border border-1'>
                            <div class='flex flex-col justify-center items-center text-center h-full p-5'>
                                <h6>Our Values</h6>
                                <p class='text-base'>We value hardwork, honest, dilligency, and of course, your comments about our topics. Regardless your comments are good or bad, those comments that build us to become a better people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class='py-10 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-12 mb-4 text-center'>
                            <h3 class='text-2xl font-bold text-white'>Our Topics</h3>
                            <div class='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-400 via-gray-400 to-cyan-400'></div>
                        </div>

                        <div class='col-md-12 mb-5'>
                            <div class='card shadow-lg border border-1'>
                                <img src={Topic1} class='w-120' />
                                <div class='card-body flex flex-col justify-center items-center text-center h-full p-5'>
                                    <h6>The Rock & Vin Diesel</h6>
                                    <p class='text-base'>The Rock and Vin Diesel are actors in the Fast & Furious franchise. Their real names are Dwayne Johnson and Mark Sinclair, respectively.</p>
                                    <Link to='/topics' class='btn btn-link bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white text-decoration-none'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-12 mb-5'>
                            <div class='card shadow-lg border border-1'>
                                <img src={Topic2} class='w-120' />
                                <div class='card-body flex flex-col justify-center items-center text-center h-full p-5'>
                                    <h6>Cristiano Ronaldo</h6>
                                    <p class='text-base'>Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team.</p>
                                    <Link to='/topics' class='btn btn-link bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 text-white text-decoration-none'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-12 mb-5'>
                            <div class='card shadow-lg border border-1'>
                                <img src={Topic3} class='w-120' />
                                <div class='card-body flex flex-col justify-center items-center text-center h-full p-5'>
                                    <h6>X-Men</h6>
                                    <p class='text-base'>The X-Men is a team from Marvel comics that is known for their mutant abilities. All of the members have mutant abilities that make them different from normal humans.</p>
                                    <Link to='/topics' class='btn btn-link bg-gradient-to-r from-blue-500 via-gray-500 to-blue-500 text-white text-decoration-none'>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div class='col-md-12'>
                            <div class='card shadow-lg border border-1'>
                                <img src={Topic4} class='w-120' />
                                <div class='card-body flex flex-col justify-center items-center text-center h-full p-5'>
                                    <h6>The Hulk</h6>
                                    <p class='text-base'>The Hulk is a character from Marvel comics that is a member of Avengers. His real name is Bruce Banners and he is the strongest member of Avengers.</p>
                                    <Link to='/topics' class='btn btn-link bg-gradient-to-r from-green-500 via-lime-500 to-green-500 text-white text-decoration-none'>Read More</Link>
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