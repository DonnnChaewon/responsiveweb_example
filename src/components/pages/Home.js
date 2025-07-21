import React from 'react'
import Topic1 from '../images/slider1.jpeg'
import Topic2 from '../images/slider2.jpeg'
import Topic3 from '../images/slider3.jpeg'
import Topic4 from '../images/slider4.jpeg'
import Vision from '../images/vision.png'
import Mission from '../images/mission.png'
import Value from '../images/value.png'

const Home = () => {
    return (
        <div className='bg-purple-500'>
            <section className="text-white py-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-4">Discover Amazing Topics</h1>
                <h3 className="text-xl">Explore fascinating stories and insights from around the world</h3>
            </section>

            <section className='py-10'>
                <div className='container mx-auto px-4'>
                    <div className='col-md-12 text-center'>
                        <h3 className='text-2xl font-bold text-gray-300'>What is this?</h3>
                        <div className='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-600 via-gray-300 to-cyan-600'></div>
                        <h6 className="text-2xl text-gray-300">This is an example of a responsive website about various topics as long they are relevant to readers. The topics are various and of course, no topic is absurd and cringe. The topics here can be random and can be from anywhere and anytime.</h6>
                    </div>
                </div>
            </section>

            <section className='py-10'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='text-2xl font-bold text-yellow-400'>Vision, mission, and values</h3>
                            <div className='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-purple-600 via-red-500 to-purple-600'></div>
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

            <section className='py-10'>
                <div className='text-center mb-10'>
                    <h3 className='text-2xl font-bold text-white'>Our Topics</h3>
                    <div className='h-1 w-48 my-2.5 mx-auto bg-gradient-to-r from-cyan-400 via-gray-400 to-cyan-400'></div>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='shadow-lg rounded-lg overflow-hidden bg-white'>
                        <img src={Topic1} className='w-full h-auto block object-cover' />
                        <div className='flex flex-col justify-center items-center text-center p-8'>
                            <h6 className='text-xl font-bold mb-2'>The Rock & Vin Diesel</h6>
                            <p className='text-base mb-4'>The Rock and Vin Diesel are actors in the Fast & Furious franchise. Their real names are Dwayne Johnson and Mark Sinclair, respectively.</p>
                            <button className='btn bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-medium px-4 py-2 rounded hover:from-yellow-500 hover:via-lime-500 hover:to-yellow-500'>Read More</button>
                        </div>
                    </div>

                    <div className='shadow-lg rounded-lg overflow-hidden bg-white'>
                        <img src={Topic2} className='w-full h-auto block object-cover' />
                        <div className='flex flex-col justify-center items-center text-center p-8'>
                            <h6 className='text-xl font-bold mb-2'>Cristiano Ronaldo</h6>
                            <p className='text-base mb-4'>Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team.</p>
                            <button className='btn bg-gradient-to-r from-pink-500 via-violet-500 to-pink-500 text-white font-medium px-4 py-2 rounded hover:from-indigo-500 hover:via-red-500 hover:to-indigo-500'>Read More</button>
                        </div>
                    </div>

                    <div className='shadow-lg rounded-lg overflow-hidden bg-white'>
                        <img src={Topic3} className='w-full h-auto block object-cover' />
                        <div className='flex flex-col justify-center items-center text-center p-8'>
                            <h6 className='text-xl font-bold mb-2'>X-Men</h6>
                            <p className='text-base mb-4'>The X-Men is a team from Marvel comics that is known for their mutant abilities. All of the members have mutant abilities that make them different from normal humans.</p>
                            <button className='btn bg-gradient-to-r from-gray-500 via-blue-500 to-gray-500 text-white font-medium px-4 py-2 rounded hover:from-purple-500 hover:via-cyan-400 hover:to-purple-500'>Read More</button>
                        </div>
                    </div>

                    <div className='shadow-lg rounded-lg overflow-hidden bg-white'>
                        <img src={Topic4} className='w-full h-auto block object-cover' />
                        <div className='flex flex-col justify-center items-center text-center p-8'>
                            <h6 className='text-xl font-bold mb-2'>The Hulk</h6>
                            <p className='text-base mb-4'>The Hulk is a character from Marvel comics that is a member of Avengers. His real name is Bruce Banners and he is the strongest member of Avengers.</p>
                            <button className='btn bg-gradient-to-r from-green-500 via-lime-500 to-green-500 text-white font-medium px-4 py-2 rounded hover:from-blue-500 hover:via-green-500 hover:to-blue-500'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home