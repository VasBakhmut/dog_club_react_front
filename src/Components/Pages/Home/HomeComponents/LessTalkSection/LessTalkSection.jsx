import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import lessDogSect from '../../../../../assets/image/dog2.png'
import sprite from '../../../../../assets/image/sprite.svg'
import Button from '../../../../utils/Button/Button'
import classes from './LessTalkSection.module.css'

function LessTalkSection() {
	const [videoIsOpen, setVideoIsOpen] = useState(false)
	const navigate = useNavigate()

	const openVideo = () => {
		setVideoIsOpen(true)
	}

	const closeVideo = () => {
		setVideoIsOpen(false)
		console.log('Hello')
		console.log(videoIsOpen)
	}

	const clickOnBtn = () => {
		navigate('/products')
	}

	return (
		<section className={classes.sectionContainer}>
			<div className='section_container'>
				<div className={classes.container}>
					<div className={classes.photo_container}>
						<img className={classes.photo} src={lessDogSect} alt='' />
					</div>
					<div className={classes.video_container}>
						<button onClick={openVideo} className={classes.videoClick}>
							<svg className={classes.icon_container}>
								<use href={`${sprite}#icon-video`}></use>
							</svg>

							<p className={classes.icon_container_text}>Learn more</p>
						</button>
						{videoIsOpen && (
							<div className={classes.videoFrame_container}>
								<iframe
									className={classes.videoFrame}
									src='https://www.youtube.com/embed/Tn3lZE0rRBs'
									title='YouTube video'
								></iframe>
								<button
									onClick={closeVideo}
									className={classes.videoFrame_closeButton}
								>
									Close Video
								</button>
							</div>
						)}
					</div>
					<div className={classes.text_container}>
						<h2 className={classes.mainText}>Less talk and more walk</h2>
						<p className={classes.text_container_text}>
							Sometimes our career, lifestyle, or routines can make it difficult
							to provide your pet with the recommended amount of exercise that
							they need. Which is why, it’s okay to use an extra hand in walking
							dogs so they are in perfect shape, mentally and physically.
						</p>
						<Button onClick={clickOnBtn} children={'Explore More'} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default LessTalkSection
