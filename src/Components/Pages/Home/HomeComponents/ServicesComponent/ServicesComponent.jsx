import React from 'react'
import sprite from '../../../../../assets/image/sprite.svg'
import classes from './ServicesComponent.module.css'

function ServicesComponent() {
	return (
		<section className={classes.sectionContainer}>
			<div className='section_container'>
				<h2 className={classes.mainText}>Services category </h2>
				<div className={classes.card_container}>
					<div className={classes.card1}>
						<svg className={classes.socialIcon}>
							<use href={`${sprite}#icon-service1`}></use>
						</svg>
						<h3 className={classes.card_text}>Grooming</h3>
					</div>
					<div className={classes.card2}>
						<svg className={classes.socialIcon}>
							<use href={`${sprite}#icon-service2`}></use>
						</svg>
						<h3 className={classes.card_text}>Nutrition</h3>
					</div>
					<div className={classes.card3}>
						<svg className={classes.socialIcon}>
							<use href={`${sprite}#icon-service3`}></use>
						</svg>
						<h3 className={classes.card_text}>Training</h3>
					</div>
					<div className={classes.card4}>
						<svg className={classes.socialIcon}>
							<use href={`${sprite}#icon-service4`}></use>
						</svg>
						<h3 className={classes.card_text}>Bathing</h3>
					</div>
					<div className={classes.link_container}>
						<a className={classes.link} href='#'>
							more services &rarr;
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServicesComponent
