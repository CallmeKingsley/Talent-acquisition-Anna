import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoRedux from '../Redux/TodoRedux'
import Footer from '../Components/Footer'
import App from './App'

class RootContainer extends Component {
  render () {
    return (
      <div>
        <App />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
