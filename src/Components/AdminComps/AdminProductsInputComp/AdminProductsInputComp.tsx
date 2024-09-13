import React, { useEffect, useRef, useState } from 'react'
import { createNewProduct, updateProduct } from '../../../fetching.ts'
import classes from './AdminProductsInputComp.module.css'

interface AdminProductsInputCompProps {
	productFetch: () => void
	productForUpdate: productForUpdateProp | null
	setProductForUpdate: (product: productForUpdateProp | null) => void
}

interface productForUpdateProp {
	_id: string
	name: string
	price: number
	specialPrice: number
	rate: number
	vendorCode: string
	qty: number
	image: string
}

function AdminProductsInputComp({
	productFetch,
	productForUpdate,
	setProductForUpdate,
}: AdminProductsInputCompProps) {
	const nameVal = useRef<HTMLTextAreaElement | null>(null)
	const vendorVal = useRef<HTMLInputElement | null>(null)
	const priceVal = useRef<HTMLInputElement | null>(null)
	const specialPriceVal = useRef<HTMLInputElement | null>(null)
	const qtyVal = useRef<HTMLInputElement | null>(null)
	const rateVal = useRef<HTMLSelectElement | null>(null)
	const imgVal = useRef<HTMLSelectElement | null>(null)

	const handleAddProduct = async () => {
		if (
			nameVal.current &&
			vendorVal.current &&
			priceVal.current &&
			specialPriceVal.current &&
			qtyVal.current &&
			rateVal.current &&
			imgVal.current
		) {
			const newProduct = {
				name: nameVal.current.value,
				qty: Number(qtyVal.current.value),
				vendorCode: vendorVal.current.value,
				price: Number(priceVal.current.value),
				specialPrice: Number(specialPriceVal.current.value),
				rate: Number(rateVal.current.value),
				image: imgVal.current.value,
			}
			await createNewProduct(newProduct)
			resetForm()
			productFetch()
		}
	}

	const handleUpdateProduct = async () => {
		const updatedProduct = {
			...productForUpdate,
			name: nameVal.current?.value,
			vendorCode: vendorVal.current?.value,
			price: Number(priceVal.current?.value),
			specialPrice: Number(specialPriceVal.current?.value),
			qty: Number(qtyVal.current?.value),
			rate: Number(rateVal.current?.value),
			image: imgVal.current?.value,
		}
		// @ts-ignore
		await updateProduct(updatedProduct._id, updatedProduct)

		setProductForUpdate(null)
		resetForm()
		productFetch()
	}

	const resetForm = () => {
		if (nameVal.current) nameVal.current.value = ''
		if (vendorVal.current) vendorVal.current.value = ''
		if (priceVal.current) priceVal.current.value = '0'
		if (specialPriceVal.current) specialPriceVal.current.value = '0'
		if (qtyVal.current) qtyVal.current.value = '0'
		if (rateVal.current) rateVal.current.value = '3'
		if (imgVal.current) imgVal.current.value = 'productPerp'
	}

	useEffect(() => {
		if (productForUpdate && productForUpdate._id) {
			if (nameVal.current) nameVal.current.value = productForUpdate.name
			if (vendorVal.current)
				vendorVal.current.value = productForUpdate.vendorCode
			if (priceVal.current)
				priceVal.current.value = productForUpdate.price.toString()
			if (specialPriceVal.current)
				specialPriceVal.current.value = productForUpdate.specialPrice.toString()
			if (qtyVal.current) qtyVal.current.value = productForUpdate.qty.toString()
			if (rateVal.current)
				rateVal.current.value = productForUpdate.rate.toString()
			if (imgVal.current) imgVal.current.value = productForUpdate.image
		}
	}, [productForUpdate])

	return (
		<div>
			<h2>
				{productForUpdate && productForUpdate._id
					? 'Update Product'
					: 'Add Product'}
			</h2>
			<div className={classes.form_container}>
				<div className={classes.input_container}>
					<label className={classes.label}>Name</label>
					<textarea ref={nameVal} className={classes.input_name} />
				</div>
				<div className={classes.input_container}>
					<label className={classes.label}>VendorCode</label>
					<input ref={vendorVal} className={classes.input} type='text' />
					<label className={classes.label}>Price</label>
					<input ref={priceVal} className={classes.input} type='number' />
					<label className={classes.label}>SpecialPrice</label>
					<input
						ref={specialPriceVal}
						className={classes.input}
						type='number'
					/>
				</div>

				<div className={classes.input_container}>
					<label className={classes.label}>Qty</label>
					<input ref={qtyVal} className={classes.input} type='number' />
					<label className={classes.label}>Rate</label>
					<select ref={rateVal} className={classes.input}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
					<label className={classes.label}>Image</label>
					<select ref={imgVal} className={classes.input}>
						<option value='productPerp'>productPerp</option>
						<option value='productGreen'>productGreen</option>
						<option value='productBroune'>productBroune</option>
					</select>
				</div>
				{productForUpdate && productForUpdate._id ? (
					<button className={classes.btn} onClick={handleUpdateProduct}>
						Update Product
					</button>
				) : (
					<button className={classes.btn} onClick={handleAddProduct}>
						Add Product
					</button>
				)}
			</div>
		</div>
	)
}

export default AdminProductsInputComp
