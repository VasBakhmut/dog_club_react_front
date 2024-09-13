import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BasketContext } from '../../../Context/BasketContext'
import classes from './BasketComp.module.css'

function BasketComp({ setBasketOpn }) {
	const { basket, removeItemFromBasket, totalPrice } = useContext(BasketContext)

	const navigate = useNavigate()

	const navToCheckout = () => {
		navigate('/checkout')
		setBasketOpn(false)
	}

	return (
		<>
			<ul className={classes.container}>
				{basket?.map((item, index) => {
					return (
						<li key={index} className={classes.item_container}>
							<h5 className={classes.item_name}>{item.name}</h5>
							<p>${item.specialPrice}</p>
							<button
								onClick={() => removeItemFromBasket(item.id)}
								className={classes.remove_btn}
							>
								remove
							</button>
						</li>
					)
				})}
				<div className={classes.checkout_container}>
					<p>total:${totalPrice}</p>
					<button className={classes.checkout_btn} onClick={navToCheckout}>
						checkout
					</button>
				</div>
			</ul>
		</>
	)
}

export default BasketComp
