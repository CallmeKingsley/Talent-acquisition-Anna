import React from 'react'
import { Link } from 'react-router-dom'
import MaterialInport from '../materialUI'
import { useStyles } from './Styles/NavBarStyles'
import { useDispatch } from 'react-redux'
import UserAction from '../redux/UserRedux'
import { style } from './Styles/Navbar'
const MaterialUI = MaterialInport()

const NavBar = (prop) => {
  const classes = useStyles()
  // const dispatch = useDispatch()
  // const incrementCounter = useCallback(
  //   () => dispatch(UserAction.logoutAccount),
  //   [dispatch]
  // )
  return (
    <div style={style.navBarHeader}>
      <MaterialUI.AppBar position='static' color='default' elevation={0} className={classes.appBar}>
        <MaterialUI.Toolbar className={classes.toolbar}>
          <MaterialUI.Typography variant='h4' color='inherit' noWrap className={classes.toolbarTitle}>
            <Link className={classes.toolbarTitle} to='/'>
            SMART EMPLOYERS
            </Link>
          </MaterialUI.Typography>
          {prop.restrict === false ? <MarketingNav /> : ''}
          {prop.authenticated === true ? <LogoutNav /> : prop.hideAll === true ? ' ' : <RegistrationNav />}
          {prop.applyNow === true ? <ApplyNow test={prop.onhandle} /> : ''}
        </MaterialUI.Toolbar>
      </MaterialUI.AppBar>
    </div>
  )
}

const MarketingNav = () => {
  return (
    <nav>
      <StringLink name='Feature' />
      <StringLink name='Enterprise' />
      <StringLink name='Support' />
    </nav>
  )
}

const RegistrationNav = () => {
  return (
    <nav>
      <NavButton path='/login' name='Login' />
      <NavButton path='/signUp' name='SignUp' />
    </nav>
  )
}

const ApplyNow = (prop) => {
  const classes = useStyles()
  return (
    <nav>
      <MaterialUI.Button color='primary' variant='outlined' className={classes.link} onClick={prop.test}>
      JOIN NOW
      </MaterialUI.Button>
    </nav>
  )
}

const LogoutNav = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <MaterialUI.Button color='primary' onClick={(() => { dispatch(UserAction.logoutAccount()) })} variant='outlined' className={classes.link}>
      <Link className={classes.toolbarTitle} to='/login'>
     LogOut
      </Link>
    </MaterialUI.Button>
  )
}

const StringLink = (prop) => {
  const classes = useStyles()
  return (
    <Link to='/' variant='button' color='textPrimary' className={classes.link}>
      {prop.name}
    </Link>
  )
}

const NavButton = (prop) => {
  const classes = useStyles()
  return (
    <MaterialUI.Button color='primary' variant='outlined' className={classes.link}>
      <Link className={classes.toolbarTitle} to={prop.path}>
        {prop.name}
      </Link>
    </MaterialUI.Button>
  )
}

export default NavBar
