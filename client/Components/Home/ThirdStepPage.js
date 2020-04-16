import React from 'react'

const ThirdStepPage = (props) => {
  return (
    <div style={props.style}>
       <div className="slider-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={require("../../Home/images/testimonials-2-men-talking.svg")} alt="alternative"/>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <h2>Testimonials</h2>
                    <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src={require("../../Home/images/testimonial-1.svg")} alt="alternative"/>
                                        <div className="card-body">
                                            <p className="testimonial-text">I just finished my trial period and was so amazed with the support and results that I purchased Evolo right away at the special price.</p>
                                            <p className="testimonial-author">Jude Thorn - Designer</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image"  src={require("../../Home/images/testimonial-2.svg")} alt="alternative"/>
                                        <div className="card-body">
                                            <p className="testimonial-text">Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!</p>
                                            <p className="testimonial-author">Marsha Singer - Developer</p>
                                        </div>
                                    </div>        
                                </div> 
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src={require("../../Home/images/testimonial-3.svg")} alt="alternative"/>
                                        <div className="card-body">
                                            <p className="testimonial-text">Love their services and was so amazed with the support and results that I purchased Evolo for two years in a row. They are awesome.</p>
                                            <p className="testimonial-author">Roy Smith - Marketer</p>
                                        </div>
                                    </div>        
                                </div> 
                               
                            </div> 
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </div>
  )
}
export default ThirdStepPage
