import React from 'react'
import classes from './Home.module.css'
import FormComponent from './HomeComponents/FormComponent/FormComponent'
import HappyCustomersComponent from './HomeComponents/HappyCustomersComponent/HappyCustomersComponent'
import HeroSection from './HomeComponents/HeroSection/HeroSection'
import LessTalkSection from './HomeComponents/LessTalkSection/LessTalkSection'
import ServicesComponent from './HomeComponents/ServicesComponent/ServicesComponent'

function Home() {
	return (
		<div className={classes.cnt}>
			<HeroSection />
			<LessTalkSection />
			<ServicesComponent />
			<HappyCustomersComponent />
			<FormComponent />
		</div>
	)
}

export default Home
