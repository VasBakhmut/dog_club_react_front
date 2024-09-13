import React, { useEffect, useState } from 'react'
import Button from '../../../utils/Button/Button'
import StarRate from '../../../utils/StarRate/StarRate'
import classes from './ProductCart.module.css'

function ProductCart({ product, handleAddClick }) {
	const loadImage = async imageName => {
		const image = await import(
			`../../../../assets/image/products/${imageName}.png`
		)
		return image.default
	}

	const [imageSrc, setImageSrc] = useState('')

	useEffect(() => {
		loadImage(product.image).then(setImageSrc)
	}, [])

	return (
		<div className={classes.cart_container}>
			<img className={classes.cart_img} src={imageSrc} alt='' />

			<div className={classes.cart_vendorRateContainer}>
				<p className={classes.cart_vendorText}>
					Vendor code: {product.vendorCode}
				</p>

				<StarRate rating={product.rate} />
			</div>
			<h3 className={classes.cart_mainText}>{product.name}</h3>
			<div className={classes.cart_priceContainer}>
				<span className={classes.cart_specialPrice}>
					{product.specialPrice}.00$
				</span>
				<span className={classes.cart_price}>{product.price}$</span>
			</div>
			<button
				className={classes.btn_add}
				onClick={() => handleAddClick(product)}
			>
				Add to cart
			</button>
			<Button children={'Buy'} />
		</div>
	)
}

export default ProductCart
