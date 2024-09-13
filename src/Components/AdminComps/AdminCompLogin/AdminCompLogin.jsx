import React, { useRef, useContext } from 'react'
import classes from './AdminCompLogin.module.css'
import { AlertContext } from '../../../Context/AlertContext.js'
import { AuthContext } from '../../../Context/AuthContext.js'

function AdminCompLogin() {
	const loginVal = useRef('')
	const passVal = useRef('')

	const { setAlertType, setAlertMessage } = useContext(AlertContext)
	const { loginUserFnk } = useContext(AuthContext)

	const handleClickOnLogin = () => {
		if (loginVal.current.value && passVal.current.value) {
			loginUserFnk(loginVal.current.value, passVal.current.value)
			setAlertType('success')
			setAlertMessage('Login Success')
			loginVal.current.value = ''
			passVal.current.value = ''
		} else {
			setAlertType('warning')
			setAlertMessage('Please Fill All Inputs')
		}
	}
	return (
		<div className={classes.container}>
			<h3>Login</h3>
			<div className={classes.input_container}>
				<label className={classes.label}>Login:</label>
				<input className={classes.input} type='text' ref={loginVal} />
				<label className={classes.label}>Password:</label>
				<input className={classes.input} type='password' ref={passVal} />
			</div>
			<button onClick={handleClickOnLogin} className={classes.btn_login}>
				Login
			</button>
		</div>
	)
}

export default AdminCompLogin
