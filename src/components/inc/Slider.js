import React from 'react'
import Slider1 from '../images/slider1.jpeg'
import Slider2 from '../images/slider2.jpeg'
import Slider3 from '../images/slider3.jpeg'
import Slider4 from '../images/slider4.jpeg'

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide border-bottom">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='text-shadow'>First slider</h3>
                        <h6 className='text-shadow'>The Rock & Vin Diesel</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='text-shadow'>Second slider</h3>
                        <h6 className='text-shadow'>Cristiano Ronaldo</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slider3} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='text-shadow'>Third slider</h3>
                        <h6 className='text-shadow'>X-Men</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slider4} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h3 className='text-shadow'>Fourth slider</h3>
                        <h6 className='text-shadow'>The Hulk</h6>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider