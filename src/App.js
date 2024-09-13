import React from 'react'
import { AuthContextProvider } from './Context/AuthContext'

import { AlertContextProvider } from './Context/AlertContext'
import { BasketProvider } from './Context/BasketContext.js'
import WrapperComponent from './Components/WrapperComponent.tsx'

import './App.css'

function App() {
	return (
		<AlertContextProvider>
			<AuthContextProvider>
				<BasketProvider>
					<WrapperComponent />
				</BasketProvider>
			</AuthContextProvider>
		</AlertContextProvider>
	)
}

export default App
