import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../../../fetching.ts'
import UserInputComp from '../../utils/UserInputComp/UserInputComp.jsx'
import classes from './AdminUsersComp.module.css'

function AdminUsersComp() {
	const [users, setUsers] = useState([])
	const [userForUpdate, setUserForUpdate] = useState({})

	useEffect(() => {
		getAllUsers().then(res => {
			setUsers(res.data)
		})
	}, [])

	const updateUserBasket = user => {
		console.log(user)
		setUserForUpdate(user)
	}
	return (
		<div className={classes.users_container}>
			<h3>Users</h3>
			<table className={classes.users_table}>
				<thead>
					<tr>
						<th className={classes.users_table_head}>ID</th>
						<th className={classes.users_table_head}>Name</th>
						<th className={classes.users_table_head}>Email</th>
						<th className={classes.users_table_head}>Country</th>
						<th className={classes.users_table_head}>Street</th>
						<th className={classes.users_table_head}>Postcode</th>
						<th className={classes.users_table_head}>isAdmin</th>
						<th className={classes.users_table_head}>Basket</th>
					</tr>
				</thead>
				{users?.map(user => {
					return (
						<tbody key={user._id}>
							<tr className={classes.users_tbody}>
								<td className={classes.users_id}>{user._id}</td>
								<td className={classes.users_name}>{user.name}</td>
								<td className={classes.users_email}>{user.email}</td>
								<td className={classes.users_country}>{user.country}</td>
								<td className={classes.users_street}>{user.street}</td>
								<td className={classes.users_postcode}>{user.postcode}</td>
								<td className={classes.users_country}>
									{user.isAdmin ? <p>Y</p> : <p>N</p>}
								</td>

								<td className={classes.users_basket}>
									<button
										className={
											user.basket.length > 1 ? classes.yes_btn : classes.no_btn
										}
									>
										basket
									</button>
								</td>

								<td className={classes.users_basket}>
									<button
										className={classes.update_btn}
										onClick={() => updateUserBasket(user)}
									>
										update
									</button>
								</td>
								<td className={classes.users_basket}>
									<button className={classes.del_btn}>delete</button>
								</td>
							</tr>
						</tbody>
					)
				})}
			</table>
			{userForUpdate._id && <UserInputComp user={userForUpdate} />}

			{/* <UserInputComp /> */}
		</div>
	)
}

export default AdminUsersComp
