import React, { useState } from 'react'
import MobMenu from '../MobMenu/MobMenu'
import ModalComp from '../Modal/ModalComp'
import { Modal } from 'antd'

function ModalsComponents({
	isModalOpen,
	isMobMenuOpen,
	handleOk,
	handleCancel,
	handleMobOk,
	handleMobCancel,
}) {
	return (
		<>
			<Modal
				open={isModalOpen}
				onOk={handleOk}
				width='100%'
				footer={false}
				onCancel={handleCancel}
				className='custom_modal'
			>
				<ModalComp />
			</Modal>
			<Modal
				open={isMobMenuOpen}
				onOk={handleMobOk}
				width='100%'
				height='100%'
				footer={false}
				onCancel={handleMobCancel}
				className='custom_mob_modal'
				rootClassName='custom_mob_modal_root'
			>
				<MobMenu handleMobCancel={handleMobCancel} />
			</Modal>
		</>
	)
}

export default ModalsComponents
