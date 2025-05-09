import React from 'react'
import Slider1 from '../images/slider1.jpeg'
import Slider2 from '../images/slider2.jpeg'
import Slider3 from '../images/slider3.jpeg'
import Slider4 from '../images/slider4.jpeg'

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Slider1} class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p className='text-shadow'>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slider2} class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slider3} class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p className='text-shadow'>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Slider4} class="d-block w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Fourth slide label</h5>
                        <p className='text-shadow'>Some representative placeholder content for the fourth slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider