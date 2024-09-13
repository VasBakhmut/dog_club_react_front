import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ModalsComponents from '../utils/ModalsComponents/ModalsComponents.tsx'
import Home from '../../Components/Pages/Home/Home'
import Products from '../../Components/Pages/Product/Products'
import CheckOutComp from '../..//Components/utils/CheckOutComp/CheckOutComp'
import AdminComp from '../AdminComps/AdminComp.tsx'
import SortDrawer from '../utils/SortDrawer/SortDrawer.jsx'
import { Drawer } from 'antd'
import Alerts from '../utils/Alerts/Alerts.jsx'
import AdminCompLogin from '../AdminComps/AdminCompLogin/AdminCompLogin.jsx'
import { AuthContext } from '../../Context/AuthContext.js'

function Main({
	isModalOpen,
	isMobMenuOpen,
	handleOk,
	handleCancel,
	handleMobOk,
	handleMobCancel,
}) {
	const [openDrover, setDrover] = useState<boolean>(false)

	const { isAdmin } = useContext(AuthContext)

	const showDrawer = () => {
		setDrover(true)
	}
	const onCloseDrawer = () => {
		setDrover(false)
	}
	return (
		<main>
			<Alerts />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/checkout' element={<CheckOutComp />} />
				<Route
					path='/products'
					element={<Products showDrawer={showDrawer} />}
				/>
				<Route
					path='/admin'
					element={isAdmin ? <AdminComp /> : <AdminCompLogin />}
				/>
			</Routes>
			<ModalsComponents
				isModalOpen={isModalOpen}
				isMobMenuOpen={isMobMenuOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
				handleMobOk={handleMobOk}
				handleMobCancel={handleMobCancel}
			/>
			<Drawer onClose={onCloseDrawer} placement={'bottom'} open={openDrover}>
				<SortDrawer />
			</Drawer>
		</main>
	)
}

export default Main
