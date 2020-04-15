import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoRedux from '../Redux/TodoRedux'
import NavBar from '../Components/Navbar'
import Home from '../Components/Home'
class HomeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div>
        <NavBar authenticated />
        <h1>Home</h1>
        <Home applicants = {this.props.applicants}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  applicants: state.applications.applicants
})
const mapDispatchToProps = dispatch => ({
  addTodo: item => dispatch(TodoRedux.addTodo(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
