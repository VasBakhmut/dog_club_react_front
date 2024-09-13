import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import photo1 from '../../../../../assets/image/image 1.jpg'
import photo2 from '../../../../../assets/image/image 3.jpg'
import photo3 from '../../../../../assets/image/image 4.jpg'
import sprite from '../../../../../assets/image/sprite.svg'
import CustomerCard from '../../../../utils/CustomerCard/CustomerCard'
import './HappyCustomersComponent.module.css'
import classes from './HappyCustomersComponent.module.css'

import './HappyCustomersComponent.module.css'

function SampleNextArrow(props) {
	const { onClick } = props
	return (
		<button
			className={classes.sliderArrowRgtBtn}
			type='button'
			onClick={onClick}
		>
			<svg className={classes.sliderArrowRgt}>
				<use href={`${sprite}#icon-ArrowSlider`}></use>
			</svg>
		</button>
	)
}

function SamplePrevArrow(props) {
	const { onClick } = props
	return (
		<button
			onClick={onClick}
			className={classes.sliderArrowLftBtn}
			type='button'
		>
			<svg className={classes.sliderArrowLft}>
				<use href={`${sprite}#icon-ArrowSlider`}></use>
			</svg>
		</button>
	)
}

function HappyCustomersComponent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		centerMode: true,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<section className={classes.happyCustomerSection}>
			<div className='section_container'>
				<h2 className={classes.mainText}>Happy customer</h2>
				<div className={classes.sliderCont}>
					<Slider {...settings}>
						<div>
							<CustomerCard
								imageSrc={photo1}
								texth3='Christin & Tom'
								text='Love the overall workout experience!'
								rate='5/5'
							/>
						</div>
						<div>
							<CustomerCard
								imageSrc={photo2}
								texth3='Anna & Tobby'
								text='Amazing Products & Delivery on time.'
								rate='3/5'
							/>
						</div>
						<div>
							<CustomerCard
								imageSrc={photo3}
								texth3='Sindy & Kitch'
								text='Great job with the trainer!'
								rate='5/5'
							/>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	)
}

export default HappyCustomersComponent
