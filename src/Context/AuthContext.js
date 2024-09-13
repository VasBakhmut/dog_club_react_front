import { createContext, useContext, useState, useEffect } from 'react'
import { AlertContext } from '../Context/AlertContext'
import {
	createNewUser,
	loginUser,
	logoutUserFnk,
	checkAuth,
	loginAdmin,
} from '../fetching.ts'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})
	const [isAuth, setIsAuth] = useState(false)
	const [isAdmin, setIsAdmin] = useState(false)

	const { setAlertType, setAlertMessage } = useContext(AlertContext)

	useEffect(() => {
		checkAuth()
			.then(res => {
				console.log(res.data)
				if (res.data.authenticated) {
					setIsAuth(true)
					setUser(res.data.user)
					setIsAdmin(res.data.user.isAdmin)
				} else {
					setIsAuth(false)
				}
			})
			.catch(() => setIsAuth(false))
	}, [])

	const logout = () => {
		logoutUserFnk().then(res => {
			if (res.status === 200) {
				setAlertType('info')
				setAlertMessage('LogOut Success')
				setUser({})
				setIsAuth(false)
			}
		})
	}

	const loginUserFnk = (login, pass) => {
		loginUser(login, pass)
			.then(res => {
				if (!res || !res.data) {
					setAlertType('error')
					setAlertMessage('Login failed. Please try again.')
					return
				}

				if (res.status === 401) {
					setAlertType('error')
					setAlertMessage(`Wrong Login Or Password`)
					return
				}

				const user = res.data.user
				if (user.isAdmin) {
					setAlertType('success')
					setAlertMessage(`Login as Admin ${user.name} Successful`)
					setUser(user)
					setIsAdmin(user.isAdmin)
					setIsAuth(true)
				} else {
					setAlertType('success')
					setAlertMessage(`Login ${user.name} Successful`)
					setUser(user)
					setIsAuth(true)
				}
			})
			.catch(error => {
				console.log('Error during login:', error)
			})
	}

	const registration = user => {
		createNewUser(user).then(res => {
			setAlertType('success')
			setAlertMessage('Registration Successful')
		})
	}

	const authValue = {
		user,
		isAuth,
		logout,
		loginUserFnk,
		setAlertType,
		setAlertMessage,
		registration,
		isAdmin,
	}
	return (
		<AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
	)
}

export { AuthContext, AuthContextProvider }
