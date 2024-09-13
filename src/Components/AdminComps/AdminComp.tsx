import React from 'react'
import AdminProductComp from './AdminProduct/AdminProductComp.tsx'
import AdminUsersComp from './AdminUsersComp/AdminUsersComp.jsx'
import classes from './AdminComp.module.css'

function AdminComp() {
	return (
		<div className={classes.container}>
			<h2>Hello admin</h2>

			<AdminProductComp />
			<AdminUsersComp />
		</div>
	)
}

export default AdminComp
