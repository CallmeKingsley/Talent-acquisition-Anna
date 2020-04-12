import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoRedux from '../Redux/TodoRedux'
import NavBar from '../Components/Navbar'
import ApplicationModel from '../Components/ApplicationForm'
class MarketingScreen extends Component {
  constructor (props) {
    super(props)
      this.state = {
      isOpen: false

      }
      this.handleClose = this.handleClose.bind(this)
      this.handleOpen = this.handleOpen.bind(this)
      this.handleApplNowBtn = this.handleApplNowBtn.bind(this)
  }

 handleClose =()=>{
  this.setState({
    isOpen: false
  })
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
  render () {
    return (
      <div>
        <NavBar restrict={false} hideAll applyNow applyNow onhandle ={this.handleApplNowBtn}/>
        <h1>Marketing Screen</h1>
        <button type='button' onClick={this.handleOpen}>
        Open Modal
        </button>
        <ApplicationModel isOpen ={this.state.isOpen} handleClose ={this.handleClose}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userName: state.todo.firstName
})
const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(TodoRedux.addTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(MarketingScreen)


