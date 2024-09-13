import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import { AlertContext } from '../../../Context/AlertContext'
import classes from './LoginRegComp.module.css'

function LoginRegComp({ setLogFormOpn }) {
	const { loginFnk, registration, loginUserFnk } = useContext(AuthContext)
	const { setAlertType, setAlertMessage } = useContext(AlertContext)
	const [login, setLogin] = useState('')
	const [pass, setPass] = useState('')
	const [nameVal, setNameVal] = useState('')
	const [emailVal, setEmailVal] = useState('')
	const [streetVal, setStreetVal] = useState('')
	const [postcodeVal, setPostcodeVal] = useState('')
	const [countryVal, setCountryVal] = useState('')
	const [isAdmin, setIsAdmin] = useState(false)
	const [adminPass, setAdminPass] = useState('admin')
	const [adminPassVal, setAdminPassVal] = useState('')

	const getAdminPassValue = e => {
		setAdminPassVal(e)
	}
	const getLogValue = e => {
		setLogin(e)
	}

	const getPassValue = e => {
		setPass(e)
	}

	const getNameValue = e => {
		setNameVal(e)
	}
	const getEmailValue = e => {
		setEmailVal(e)
	}

	const getStreetValue = e => {
		setStreetVal(e)
	}

	const getPostcodeValue = e => {
		setPostcodeVal(e)
	}

	const getCountryValue = e => {
		setCountryVal(e)
	}

	const getAdminValue = e => {
		setIsAdmin(e)
	}

	const loginHandle = () => {
		loginUserFnk(login, pass)
		setLogin('')
		setPass('')
		setLogFormOpn(false)
	}

	// const loginHandle = () => {
	// 	loginFnk(login, pass)
	// 	setLogin('')
	// 	setPass('')
	// 	setLogFormOpn(false)
	// }

	const handleRegistration = () => {
		if (!nameVal || !emailVal || !streetVal || !postcodeVal || !countryVal) {
			setAlertType('error')
			setAlertMessage('fill all inputs')
			return
		}
		if (isAdmin && adminPassVal !== adminPass) {
			setAlertType('error')
			setAlertMessage('Admin Password is Wrong')
			return
		}

		const regUser = {
			login: login,
			name: nameVal,
			email: emailVal,
			pass: pass,
			street: streetVal,
			postcode: postcodeVal,
			country: countryVal,
			basket: [],
			isAdmin: isAdmin,
		}
		registration(regUser)

		setLogin('')
		setPass('')
		setNameVal('')
		setEmailVal('')
		setStreetVal('')
		setPostcodeVal('')
		setCountryVal('')
		setLogFormOpn(false)
		setAdminPassVal('')
	}

	return (
		<div className={classes.container}>
			<h4>Login/Registration</h4>
			<div className={classes.inputs_container}>
				<label className={classes.label} htmlFor=''>
					Login*
				</label>
				<input
					onChange={e => getLogValue(e.target.value)}
					value={login}
					required
					className={classes.input}
					type='text'
				/>
				<label className={classes.label} htmlFor=''>
					password*
				</label>
				<input
					onChange={e => getPassValue(e.target.value)}
					value={pass}
					required
					className={classes.input}
					type='text'
				/>
				<label className={classes.label}>Name</label>
				<input
					className={classes.input}
					onChange={e => getNameValue(e.target.value)}
					type='text'
					value={nameVal}
				/>
				<label className={classes.label}>Email</label>
				<input
					className={classes.input}
					onChange={e => getEmailValue(e.target.value)}
					type='text'
					value={emailVal}
				/>
				<label className={classes.label}>Street</label>
				<input
					className={classes.input}
					onChange={e => getStreetValue(e.target.value)}
					type='text'
					value={streetVal}
				/>
				<label className={classes.label}>Postcode</label>
				<input
					className={classes.input}
					value={postcodeVal}
					onChange={e => getPostcodeValue(e.target.value)}
					type='text'
				/>
				<label className={classes.label}>Country</label>
				<input
					className={classes.input}
					onChange={e => getCountryValue(e.target.value)}
					value={countryVal}
					type='text'
				/>
				<label className={classes.label}>isAdmin</label>
				<input
					className={classes.input}
					onChange={e => getAdminValue(e.target.checked)}
					value={isAdmin}
					type='checkbox'
				/>
				{isAdmin && (
					<>
						<label className={classes.label}>Please Enter Admin pass</label>
						<input
							className={classes.input}
							onChange={e => getAdminPassValue(e.target.value)}
							value={adminPassVal}
							type='text'
						/>
					</>
				)}
			</div>
			<button onClick={() => loginHandle()} className={classes.btn}>
				Login
			</button>
			<button className={classes.btn} onClick={handleRegistration}>
				Registration
			</button>
		</div>
	)
}

export default LoginRegComp
