import { Alert } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import classes from './Alerts.module.css'

function Alerts() {
	const { alertType, alertMessage, setAlertType, setAlertMessage } =
		useContext(AuthContext)
	const [success, setSuccess] = useState(false)
	const [info, setInfo] = useState(false)
	const [warning, setWarning] = useState(false)
	const [error, setError] = useState(false)

	const showWarning = () => {
		if (alertType === 'success') {
			setSuccess(true)
			setTimeout(() => {
				setSuccess(false)
				setAlertType('')
				setAlertMessage('')
			}, 3000)
		}

		if (alertType === 'info') {
			setInfo(true)
			setTimeout(() => {
				setInfo(false)
				setAlertType('')
				setAlertMessage('')
			}, 3000)
		}

		if (alertType === 'warning') {
			setWarning(true)
			setTimeout(() => {
				setWarning(false)
				setAlertType('')
				setAlertMessage('')
			}, 3000)
		}

		if (alertType === 'error') {
			setError(true)
			setTimeout(() => {
				setError(false)
			}, 3000)
		}
	}

	useEffect(() => {
		showWarning()
	}, [alertType])

	return (
		<>
			{success && (
				<Alert
					className={classes.main}
					message='Success'
					description={alertMessage}
					type='success'
					showIcon
				/>
			)}

			{info && (
				<Alert
					className={classes.main}
					message='Informational Notes'
					description={alertMessage}
					type='info'
					showIcon
				/>
			)}

			{warning && (
				<Alert
					className={classes.main}
					message='Warning'
					description={alertMessage}
					type='warning'
					showIcon
					closable
				/>
			)}

			{error && (
				<Alert
					className={classes.main}
					message='Error'
					description={alertMessage}
					type='error'
					showIcon
				/>
			)}
		</>
	)
}

export default Alerts
