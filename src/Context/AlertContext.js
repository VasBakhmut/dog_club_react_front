import { useState, createContext, useEffect } from 'react'
import { Alert } from 'antd'
import '../App.css'

const AlertContext = createContext()

function AlertContextProvider({ children }) {
	const [success, setSuccess] = useState(false)
	const [info, setInfo] = useState(false)
	const [warning, setWarning] = useState(false)
	const [error, setError] = useState(false)
	const [alertType, setAlertType] = useState('')
	const [alertMessage, setAlertMessage] = useState('')

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

	const alertValue = { setAlertType, setAlertMessage }

	return (
		<AlertContext.Provider value={alertValue}>
			{children}

			{success && (
				<Alert
					className='mainAlert'
					message='Success'
					description={alertMessage}
					type='success'
					showIcon
				/>
			)}

			{info && (
				<Alert
					className='mainAlert'
					message='Informational Notes'
					description={alertMessage}
					type='info'
					showIcon
				/>
			)}

			{warning && (
				<Alert
					className='mainAlert'
					message='Warning'
					description={alertMessage}
					type='warning'
					showIcon
					closable
				/>
			)}

			{error && (
				<Alert
					className='mainAlert'
					message='Error'
					description={alertMessage}
					type='error'
					showIcon
				/>
			)}
		</AlertContext.Provider>
	)
}

export { AlertContext, AlertContextProvider }
