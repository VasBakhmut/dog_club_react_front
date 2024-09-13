import React from 'react'
import sprite from '../../../assets/image/sprite.svg'
import classes from './CustomerCard.module.css'

function CustomerCard({ imageSrc, texth3, text, rate, ...props }) {
	return (
		<div {...props} className={classes.card}>
			<img className={classes.image} src={imageSrc} alt='' />
			<div className={classes.card_text_container}>
				<h3 className={classes.text_container_texth3}>{texth3}</h3>
				<p className={classes.text_container_text}>{text}</p>
				<div className={classes.icon_container}>
					<div className={classes.icon_container_bone}>
						<svg className={classes.icon}>
							<use
								href={`${sprite}#icon-bone`}
								xlinkHref={`${sprite}#icon-bone`}
							></use>
						</svg>
						<svg className={classes.icon}>
							<use
								href={`${sprite}#icon-bone`}
								xlinkHref={`${sprite}#icon-bone`}
							></use>
						</svg>
						<svg className={classes.icon}>
							<use
								href={`${sprite}#icon-bone`}
								xlinkHref={`${sprite}#icon-bone`}
							></use>
						</svg>
						<svg className={classes.icon}>
							<use
								href={`${sprite}#icon-bone`}
								xlinkHref={`${sprite}#icon-bone`}
							></use>
						</svg>
						<svg className={classes.icon}>
							<use
								href={`${sprite}#icon-bone`}
								xlinkHref={`${sprite}#icon-bone`}
							></use>
						</svg>
					</div>
					<span className={classes.text_container_rate}>{rate}</span>
				</div>
			</div>
		</div>
	)
}

export default CustomerCard
