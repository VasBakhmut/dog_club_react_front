import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import { BasketContext } from '../../../Context/BasketContext'
import classes from './CheckOutComp.module.css'
import { updateUserBasket } from '../../../fetching.ts'

function CheckOutComp() {
	const { totalPrice, basket, setBasket, setTotalPrice } =
		useContext(BasketContext)
	const { user } = useContext(AuthContext)

	const details = [
		{ Value: 'Name: ', item: user.name },
		{ Value: 'Street: ', item: user.street },
		{ Value: 'Postcode: ', item: user.postcode },
		{ Value: 'Country: ', item: user.country },
		{ Value: 'Email: ', item: user.email },
		,
	]

	useEffect(() => {
		console.log(user)
		console.log(basket)
	}, [user, basket])

	const purchaseFnk = () => {
		const updatedUser = { ...user, basket: [...user.basket, ...basket] }
		console.log(updatedUser)
		updateUserBasket(user._id, updatedUser).then(res => {
			if (res.status === 200) {
				setBasket([])
				setTotalPrice(0)
			} else {
				console.log('Error in res. purchaseFnk')
			}
		})
	}

	return (
		<>
			<h2 className={classes.mainTax}>Shopping Cart</h2>
			<div className={classes.container}>
				<div className={classes.details_container}>
					<div>
						<h4>Shipping details</h4>
						{user &&
							details.map((detail, index) => {
								return (
									<p key={index} className={classes.details_text}>
										{detail.Value}
										{detail.item}
									</p>
								)
							})}

						<button className={classes.editDetails_btn}>
							Enter/Edit Details
						</button>
					</div>
					<div className={classes.payment_container}>
						<h4 className={classes.text}>Payment details</h4>
						<label className={classes.input_label} htmlFor=''>
							NAME ON CARD
						</label>
						<input className={classes.input} type='text' />
						<label className={classes.input_label} htmlFor=''>
							CARD NUMBER
						</label>
						<input className={classes.input} type='text' />
						<div>
							<label className={classes.input_label} htmlFor=''>
								VALID
							</label>
							<input className={classes.input} type='text' />
							<label className={classes.input_label} htmlFor=''>
								CVC
							</label>
							<input className={classes.input} type='text' />
						</div>
					</div>

					<button className={classes.prch_btn} onClick={() => purchaseFnk()}>
						purchase
					</button>
				</div>
				<div className={classes.product_container}>
					<h4>Your order</h4>
					<ul>
						{basket?.map((itemProduct, index) => {
							return (
								<li key={index}>
									<p>{itemProduct.name}</p>
									<p>$ {itemProduct.specialPrice}</p>
								</li>
							)
						})}
					</ul>
					<div className={classes.totalCnt}>
						<p>Subtotal :</p>
						<span>${totalPrice} AUD</span>
					</div>
					<div className={classes.totalCnt}>
						<p>Shipping :</p>
						<span>$0 AUD</span>
					</div>
					<div className={classes.totalCnt}>
						<p>Total :</p>
						<span>${totalPrice} AUD</span>
					</div>
					<button className={classes.giftCodeBtn}>ADD GIFT CODE</button>
				</div>
			</div>
		</>
	)
}

export default CheckOutComp
