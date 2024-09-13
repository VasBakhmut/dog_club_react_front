import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main/Main.tsx'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function WrapperComponent() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isMobMenuOpen, setIsMobMenuOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}
	const handleOk = () => {
		setIsModalOpen(false)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	const showMobModal = () => {
		setIsMobMenuOpen(true)
	}

	const handleMobOk = () => {
		setIsMobMenuOpen(false)
	}

	const handleMobCancel = () => {
		setIsMobMenuOpen(false)
	}
	return (
		<>
			<Router>
				<Header showModal={showModal} showMobModal={showMobModal} />
				<Main
					isModalOpen={isModalOpen}
					isMobMenuOpen={isMobMenuOpen}
					handleOk={handleOk}
					handleCancel={handleCancel}
					handleMobOk={handleMobOk}
					handleMobCancel={handleMobCancel}
				/>
				<Footer />
			</Router>
		</>
	)
}

export default WrapperComponent
