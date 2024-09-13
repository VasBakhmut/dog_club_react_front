import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.css'
import classes from './Header.module.css'

function Navigation() {
	return (
		<>
			<nav className={classes.navContainer}>
				<NavLink className={classes.link} to='/'>
					Home
				</NavLink>
				<NavLink className={classes.link} to='/products'>
					Product
				</NavLink>
				<NavLink className={classes.link} to='/'>
					Happy customer{' '}
				</NavLink>
				<NavLink className={classes.link} to='/'>
					Contact{' '}
				</NavLink>
			</nav>
		</>
	)
}

export default Navigation
