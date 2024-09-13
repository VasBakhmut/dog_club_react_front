import React from 'react'
import classes from './StarRate.module.css'

function StarRate({ rating }) {
	const totalStars = 5
	const stars = []

	for (let i = 1; i <= totalStars; i++) {
		stars.push(
			<span key={i} className={i <= rating ? classes.starFilled : classes.star}>
				&#9733;
			</span>
		)
	}
	return <div className={classes.star_rating}>{stars}</div>
}

export default StarRate
