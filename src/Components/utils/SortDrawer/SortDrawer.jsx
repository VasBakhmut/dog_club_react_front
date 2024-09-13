import React, { useState } from 'react'
import classes from './SortDrawer.module.css'

const sortItems = [
	'Popularity',
	'Cheaper first',
	'More expensive first',
	'By name',
	'New ones first',
]
function SortDrawer() {
	const [isActive, setIsActive] = useState('Popularity')

	const getIsActive = item => {
		setIsActive(item)
	}
	return (
		<div className={classes.wrapper}>
			<h3 className={classes.text}>Sorting</h3>
			<ul>
				{sortItems.map((item, index) => {
					return (
						<button
							key={index}
							className={isActive === item ? classes.btnActive : classes.btn}
							onClick={() => getIsActive(item)}
						>
							<span>{item}</span>
							<span className={classes.btn_arrow}>&gt;</span>
						</button>
					)
				})}
			</ul>
		</div>
	)
}

export default SortDrawer
