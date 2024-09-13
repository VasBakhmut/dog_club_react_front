import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/image/logo.png'
import sprite from '../../../assets/image/sprite.svg'

import classes from './MobMenu.module.css'

function MobMenu({ handleMobCancel }) {
	return (
		<div className={classes.container}>
			<img src={logo} className={classes.logo} alt='logo' />
			<nav className={classes.navContainer}>
				<NavLink onClick={handleMobCancel} className={classes.link} to='/'>
					Less talk{' '}
				</NavLink>
				<NavLink className={classes.link} onClick={handleMobCancel} to='/'>
					Services category
				</NavLink>
				<NavLink onClick={handleMobCancel} className={classes.link} to='/'>
					Happy customer{' '}
				</NavLink>
				<NavLink onClick={handleMobCancel} className={classes.link} to='/'>
					Contact{' '}
				</NavLink>
			</nav>
			<div className={classes.socialContainerTop}>
				<a href='#' className={classes.link}>
					<svg className={classes.socialIcon}>
						<use href={`${sprite}#icon-instagram-mob`}></use>
					</svg>
				</a>
				<a href='#' className={classes.link}>
					{' '}
					<svg className={classes.socialIcon}>
						<use href={`${sprite}#icon-facebook-mob`}></use>
					</svg>
				</a>
			</div>
		</div>
	)
}

export default MobMenu
