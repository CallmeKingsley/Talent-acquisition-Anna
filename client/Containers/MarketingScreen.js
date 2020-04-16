import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApplicantRedux,{ApplicantSelector} from '../redux/ApplicantRedux'
import NavBar from '../Components/Navbar'
import ApplicationModel from '../Components/ApplicationForm'
import HomePage from '../Components/Home/HomePage'
import FirstStep from '../Components/Home/firstStepPage'
import SecondStep from '../Components/Home/SecondStepPage'
import ThirdStep from '../Components/Home/ThirdStepPage'
import BusinessPage from '../Components/Home/BussinesPage'
import VideoPage from '../Components/Home/VideoPage'
import {style } from '../Components/Styles/MarketingScreenStyle'
class MarketingScreen extends Component {
  constructor (props) {
    super(props)
      this.state = {
        isOpen: false,
        FirstName: '',
        MiddleName: '',
        LastName: '',
        Email:'',
        PhoneNumber:'',
        State:'',
        PreferedJob:'',
        Resume:'',
        Avaliablity:''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.handleOpen = this.handleOpen.bind(this)
      this.handleApplNowBtn = this.handleApplNowBtn.bind(this)
  }

  componentWillMount(){
    console.log('marketing')

    //xconsole.log(()=>{ApplicantSelector.allAppplicants()})
  }

 handleClose =()=>{
  this.setState({
    isOpen: false
  })
  }

handleChange = input => e =>{  
    this.setState({ [input]: e.target.value})
}

 handleOpen =()=>{
  this.setState({
    isOpen: true
  })
}

handleApplNowBtn(){
  this.setState({
    isOpen: true
  })
}

handleSubmit(){
console.log(this.state)
const Application = {
  FirstName: this.state.FirstName,
  MiddleName: this.state.MiddleName,
  LastName: this.state.LastName,
  Email: this.state.Email,
  PhoneNumber: this.state.PhoneNumber,
  State: this.state.State,
  PreferedJob: this.state.PreferedJob,
  Resume: this.state.Resume,
  Avaliablity: this.state.Avaliablity
}
this.props.createApplication(Application)
event.preventDefault();
}
  render () {
    return (
      <div>
        <NavBar restrict={false} hideAll applyNow applyNow onhandle ={this.handleApplNowBtn}/>
        <HomePage style ={style.Pages}/>
        <BusinessPage /> 
        <FirstStep/>
        <SecondStep/>
        <ThirdStep/>
        <VideoPage />
        <ApplicationModel isOpen ={this.state.isOpen} handleClose ={this.handleClose} handleChange ={this.handleChange} handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.todo.firstName
})
const mapDispatchToProps = dispatch => ({
  createApplication: info => dispatch(ApplicantRedux.createApplication(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(MarketingScreen)


