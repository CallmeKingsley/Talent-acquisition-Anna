import React from 'react'

const SecondStepPage = (props) => {
  return (
    <div style={props.style}>
      <div className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-container">
                        <img className="img-fluid" src={require("../../Home/images/details-2-office-team-work.svg")} alt="alternative"/>
                    </div>
                </div> 
                <div className="col-lg-6">
                    <div className="text-container">
                        <h2>Search For Optimization Wherever Is Possible</h2>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">Basically we'll teach you step by step what you need to do</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">In order to develop your company and reach new heights</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-check"></i>
                                <div className="media-body">Everyone will be pleased from stakeholders to employees</div>
                            </li>
                        </ul>
                        <a className="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">LIGHTBOX</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </div>
  )
}
export default SecondStepPage
