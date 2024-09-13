import React from 'react'
import classes from './Button.module.css'

function Button({ children, header, ...props }) {
	return (
		<button
			{...props}
			className={header ? classes.btnDeskTop : classes.main_btn}
		>
			{children}
		</button>
	)
}

export default Button
