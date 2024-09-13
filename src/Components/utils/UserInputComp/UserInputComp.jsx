import React, { useState, useEffect } from 'react'
import BasketAdminUserCheck from '../BasketAdminUserCheck/BasketAdminUserCheck'
import classes from './UserInputComp.module.css'

function UserInputComp({ user }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [country, setCountry] = useState('')
	const [street, setStreet] = useState('')
	const [postcode, setPostcode] = useState('')
	const [isAdmin, setIsAdmin] = useState(false)
	const [basket, setBasket] = useState([])

	console.log(user)
	useEffect(() => {
		setName(user.name)
		setEmail(user.email)
		setCountry(user.country)
		setStreet(user.street)
		setPostcode(user.postcode)
		setIsAdmin(user.isAdmin)
		setBasket(user.basket)
	}, [user])

	const getNameVal = e => {
		setName(e)
	}

	const getEmailVal = e => {
		setEmail(e)
	}

	const getCountryVal = e => {
		setCountry(e)
	}

	const getStreetVal = e => {
		setStreet(e)
	}

	const getPostcodeVal = e => {
		setPostcode(e)
	}

	const getIsAdminVal = e => {
		setIsAdmin(e)
	}

	return (
		<div className={classes.container}>
			<div className={classes.input_container}>
				<label className={classes.label}>Name</label>
				<input
					className={classes.input}
					onChange={e => getNameVal(e.target.value)}
					value={name}
					type='text'
				/>
			</div>
			<div>
				<label className={classes.label}>Email</label>
				<input
					className={classes.input}
					onChange={e => getEmailVal(e.target.value)}
					value={email}
					type='text'
				/>
			</div>
			<div>
				<label className={classes.label}>Country</label>
				<input
					className={classes.input}
					onChange={e => getCountryVal(e.target.value)}
					value={country}
					type='text'
				/>
			</div>
			<div>
				<label className={classes.label}>Street</label>
				<input
					className={classes.input}
					onChange={e => getStreetVal(e.target.value)}
					value={street}
					type='text'
				/>
			</div>
			<div>
				<label className={classes.label}>Postcode</label>
				<input
					className={classes.input}
					onChange={e => getPostcodeVal(e.target.value)}
					value={postcode}
					type='text'
				/>
			</div>
			<div>
				<label className={classes.label}>Is Admin:</label>
				<select
					className={classes.input_selector}
					onChange={e => getIsAdminVal(e.target.value)}
					value={isAdmin}
				>
					<option value={true}>Y</option>
					<option value={false}>N</option>
				</select>
			</div>
			<div className={classes.container_centre}>
				<h4>Basket</h4>
			</div>
			<div className={classes.container_centre}>
				{basket.length > 1 ? (
					<BasketAdminUserCheck basket={basket} />
				) : (
					<p>Basket is empty</p>
				)}
			</div>
			<button>update</button>
			<button>cancel</button>
		</div>
	)
}

export default UserInputComp
