import React from 'react'

const FirstStepPage = (props) => {
  return (
    <div style={props.style}>
    
    <div className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Design And Plan Your Business Growth Steps</h2>
                        <p>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</p>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">LIGHTBOX</a>
                    </div> 
                </div> 
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={require("../../Home/images/details-1-office-worker.svg")} alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
  </div>
  )
}
export default FirstStepPage
