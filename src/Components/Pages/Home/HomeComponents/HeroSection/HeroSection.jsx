import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroDog from '../../../../../assets/image/dog1.png'
import Button from '../../../../utils/Button/Button'
import classes from './HeroSection.module.css'

function HeroSection() {
	const navigate = useNavigate()

	const clickOnBtn = () => {
		navigate('/products')
	}
	return (
		<section className={classes.section_container}>
			<div className='section_container'>
				<div className={classes.container}>
					<div className={classes.text_container}>
						<h1 className={classes.mainText}>
							Taking care for your Smart Dog!
						</h1>
						<p className={classes.paragraph}>
							Human–canine bonding is the relationship between dogs and humans
						</p>
						<Button onClick={clickOnBtn} children={'Explore More'} />
					</div>
					<div className={classes.imageContainer}>
						<img src={heroDog} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
