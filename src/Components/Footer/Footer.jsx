import React from 'react'
import dogFooter from '../../assets/image/dogFooter.png'
import dogFooterSmall from '../../assets/image/footerDoogSmall.png'
import footerLogoSmall from '../../assets/image/footerLogoSmall.png'
import logo from '../../assets/image/logo.png'
import sprite from '../../assets/image/sprite.svg'
import classes from './Footer.module.css'

function Footer() {
	return (
		<footer className={classes.footerSection}>
			<div className={classes.section}>
				<div className='section_container'>
					<div className={classes.footerContainer}>
						<div className={classes.logoContainer}>
							<img className={classes.logoMain} src={logo} alt='Logo' />
							<img
								className={classes.logoSmall}
								src={footerLogoSmall}
								alt='Logo'
							/>
							<div className={classes.socialContainerTop}>
								<a href='#' className={classes.link}>
									{' '}
									<svg className={classes.socialIcon}>
										<use href={`${sprite}#icon-instagram`}></use>
									</svg>
								</a>
								<a href='#' className={classes.link}>
									{' '}
									<svg className={classes.socialIcon}>
										<use href={`${sprite}#icon-facebook`}></use>
									</svg>
								</a>
							</div>
						</div>
						<nav className={classes.linkContainer}>
							<a className={classes.menuLink} href=''>
								Less talk{' '}
							</a>
							<a className={classes.menuLink} href=''>
								Services category{' '}
							</a>
							<a className={classes.menuLink} href=''>
								Happy customer{' '}
							</a>
							<a className={classes.menuLink} href=''>
								Contact
							</a>
						</nav>
						<div className={classes.socialContainerBottom}>
							<a href='#' className={classes.link}>
								{' '}
								<svg className={classes.socialIcon}>
									<use href={`${sprite}#icon-instagram`}></use>
								</svg>
							</a>
							<a href='#' className={classes.link}>
								{' '}
								<svg className={classes.socialIcon}>
									<use href={`${sprite}#icon-facebook`}></use>
								</svg>
							</a>
						</div>
						<form className={classes.formContainer}>
							<div>
								<label className={classes.label}></label>
								<input
									className={classes.input}
									type='text'
									placeholder='@ Your email'
								/>
							</div>
							<div>
								<label className={classes.label}> </label>
								<input
									placeholder='Your name'
									className={classes.input}
									type='text'
								/>
							</div>
							<button className={classes.btn}>Contact us</button>
							<div>
								<input type='checkbox' />{' '}
								<span className={classes.text_agree}>
									I agree to the privacy policy
								</span>
							</div>
						</form>
						<img className={classes.photo} src={dogFooter} alt='' />
						<img className={classes.photoSmall} src={dogFooterSmall} alt='' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
