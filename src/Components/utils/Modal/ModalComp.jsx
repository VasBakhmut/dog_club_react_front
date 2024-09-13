import React from 'react'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'
import classes from './ModalComp.module.css'

function ModalComp() {
	return (
		<div className={classes.container}>
			<h2 className={classes.mainText}>
				Our experts will take care of your friend
			</h2>
			<p className={classes.pText}>Fill out the form so we can contact you!</p>
			<form className={classes.form_container}>
				<FormInput
					inputId='name'
					icon='icon-persone'
					label='Your name'
					labelFor='name'
				/>
				<FormInput
					inputId='pet'
					icon='icon-dog'
					label='Pet name'
					labelFor='pet'
				/>
				<FormInput
					inputId='phone'
					icon='icon-phone'
					label='Your phone'
					labelFor='phone'
				/>
				<FormInput
					inputId='email'
					icon='icon-email'
					label='Your email'
					labelFor='email'
				/>
				<Button style={{ alignSelf: 'center' }} children={'Contact us'} />
			</form>

			<div>
				<input className={classes.checkInput} type='checkbox' />
				<span>I agree to the privacy policy</span>
			</div>
		</div>
	)
}

export default ModalComp
