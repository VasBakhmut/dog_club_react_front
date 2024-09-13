import React from 'react'
import dogTwo from '../../../../../assets/image/dogform1.png'
import dogOne from '../../../../../assets/image/dogform2.png'
import '../../../../../assets/image/sprite.svg'
import FormInput from '../../../../utils/FormInput/FormInput'
import classes from '../FormComponent/FormComponent.module.css'

function FormComponent() {
	return (
		<section className={classes.formSection}>
			<img className={classes.imgOne} src={dogOne} alt='' />
			<div className='section_container'>
				<div className={classes.container}>
					<h2 className={classes.mainText}>
						Our experts will take care of your friend
					</h2>
					<p className={classes.text}>
						Fill out the form so we can contact you!
					</p>

					<form className={classes.form_container}>
						<FormInput
							inputId='name'
							icon='icon-persone'
							label='Your name'
							labelFor='name'
							inputBkg='white'
						/>
						<FormInput
							inputId='pet'
							icon='icon-dog'
							label='Pet name'
							labelFor='pet'
							inputBkg='white'
						/>
						<FormInput
							inputId='phone'
							icon='icon-phone'
							label='Your phone'
							labelFor='phone'
							inputBkg='white'
						/>
						<FormInput
							inputId='email'
							icon='icon-email'
							label='Your email'
							labelFor='email'
							inputBkg='white'
						/>
						<button className={classes.btn}>Contact us</button>
					</form>
					<div>
						<input type='checkbox' />{' '}
						<span className={classes.text_agree}>
							I agree to the privacy policy
						</span>
					</div>
				</div>
			</div>
			<img className={classes.imgTwo} src={dogTwo} alt='' />
		</section>
	)
}

export default FormComponent
