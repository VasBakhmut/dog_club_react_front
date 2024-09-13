import React, { useContext, useState } from 'react'
import logo from '../../assets/image/logo.png'
import sprite from '../../assets/image/sprite.svg'
import { AuthContext } from '../../Context/AuthContext'
import { BasketContext } from '../../Context/BasketContext'
import BasketComp from '../utils/Basket/BasketComp'
import Button from '../utils/Button/Button'
import LoginRegComp from '../utils/LoginRegComp/LoginRegComp'
import classes from './Header.module.css'
import Navigation from './Navigation'
import { Badge } from 'antd'

function Header({ showModal, showMobModal }) {
	const [basketOpn, setBasketOpn] = useState(false)
	const [logFormOpn, setLogFormOpn] = useState(false)
	const { basketLabel } = useContext(BasketContext)
	const { user, isAuth, logout } = useContext(AuthContext)

	const openCloseBasket = () => {
		setBasketOpn(prevState => !prevState)
	}

	const openCloseReg = () => {
		setLogFormOpn(prevState => !prevState)
	}

	return (
		<header className={classes.header_container}>
			<div className='section_container'>
				<div className={classes.header_container}>
					<img src={logo} className={classes.logo} alt='logo' />
					<Navigation />

					<div className={classes.busket_container}>
						<button className={classes.busket_Btn}>
							<svg className={classes.icon_basket}>
								<use href={`${sprite}#icon-basketMob`}></use>
							</svg>
						</button>

						<Badge count={basketLabel} onClick={openCloseBasket}>
							<a href='#' className={classes.link}>
								<svg className={classes.icon_basket}>
									<use href={`${sprite}#icon-basket`}></use>
								</svg>
							</a>
						</Badge>
						{basketOpn && <BasketComp setBasketOpn={setBasketOpn} />}
						<Button
							className={classes.btnDeskTop}
							children={'Contact us'}
							onClick={showModal}
							header={true}
						/>
						<button onClick={showMobModal} className={classes.mobMenuBtn}>
							<svg className={classes.mobMenuIcon}>
								<use href={`${sprite}#icon-VectorMenuMob`}></use>
							</svg>
						</button>
					</div>
					{isAuth && (
						<div className={classes.userAuthCont}>
							<span>{user.name}</span>
							<button className={classes.userAuthBtn} onClick={logout}>
								Logout
							</button>
						</div>
					)}
					{!isAuth && (
						<div className={classes.userAuthCont}>
							<button onClick={openCloseReg} className={classes.userAuthBtn}>
								MyAccount
							</button>
						</div>
					)}
					{logFormOpn && <LoginRegComp setLogFormOpn={setLogFormOpn} />}
				</div>
			</div>
		</header>
	)
}

export default Header
