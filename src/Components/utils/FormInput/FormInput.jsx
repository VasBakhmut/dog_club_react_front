import React, { useState } from 'react'
import sprite from '../../../assets/image/sprite.svg'
import classes from './FormInput.jsx.module.css'

function FormInput({ inputId, icon, label, labelFor, inputBkg, ...props }) {
	const [isFocused, setIsFocused] = useState(false)
	const [hasText, setHasText] = useState(false)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = e => {
		if (!e.target.value) {
			setIsFocused(false)
		}
	}
	const handleChange = e => {
		setHasText(!!e.target.value)
	}

	return (
		<div {...props} className={classes.inputContainer}>
			<input
				className={inputBkg ? classes.input : classes.inputYel}
				type='text'
				id={inputId}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
			/>
			<label
				htmlFor={labelFor}
				className={`${classes.label} ${
					isFocused || hasText ? classes.labelFocused : ''
				}`}
			>
				<svg width='27' height='27'>
					<use href={`${sprite}#${icon}`}></use>
				</svg>
				{label}
			</label>
		</div>
	)
}

export default FormInput
