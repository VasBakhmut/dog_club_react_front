import React, { useState, useEffect } from 'react'
import { getAllProducts, deleteProducts } from '../../../fetching.ts'
import classes from './AdminProductComp.module.css'
// @ts-ignore
import productBroune from '../../../assets/image/products/productBroune.png'
// @ts-ignore
import productGreen from '../../../assets/image/products/productGreen.png'
// @ts-ignore
import productPerp from '../../../assets/image/products/productPerp.png'
import AdminProductsInputComp from '../AdminProductsInputComp/AdminProductsInputComp.tsx'

const imgSrc = (img: string): string => {
	switch (img) {
		case 'productPerp':
			return productPerp
		case 'productGreen':
			return productGreen
		case 'productBroune':
			return productBroune
		default:
			return 'no photo'
	}
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

interface Product {
	_id: string
	name: string
	price: number
	specialPrice: number
	rate: number
	vendorCode: string
	qty: number
	image: string
}

function AdminProductComp() {
	const [products, setProducts] = useState<Product[]>([])
	const [productForUpdate, setProductForUpdate] =
		useState<productForUpdateProp | null>(null)

	const productFetch = () => {
		getAllProducts().then(res => {
			setProducts(res.data)
		})
	}

	const deleteProduct = async (id: string) => {
		await deleteProducts(id)
		productFetch()
	}

	useEffect(() => {
		productFetch()
	}, [])

	const handleClickUpdate = (product: Product) => {
		setProductForUpdate(product)
	}

	return (
		<div>
			<h3>Product</h3>
			{products?.map(product => {
				const productDetails = [
					{ label: 'Name', value: product.name },
					{ label: 'Price', value: `${product.price}$` },
					{ label: 'SpecialPrice', value: `${product.specialPrice}$` },
					{ label: 'Rate', value: product.rate },
					{ label: 'vendorCode', value: product.vendorCode },
					{ label: 'Qty', value: product.qty },
				]

				return (
					<div key={product._id} className={classes.container}>
						<img
							src={imgSrc(product.image)}
							className={classes.img}
							alt={product.name}
						/>
						{productDetails?.map((detail, index) => {
							return (
								<span key={index} className={classes.name_span_text}>
									<span className={classes.name_span}>{detail.label}:</span>
									{detail.value}
								</span>
							)
						})}
						<div className={classes.btn_container}>
							<button
								className={classes.btn}
								onClick={() => handleClickUpdate(product)}
							>
								update
							</button>
							<button
								className={classes.btnDlt}
								onClick={() => deleteProduct(product._id)}
							>
								Delete
							</button>
						</div>
					</div>
				)
			})}
			<AdminProductsInputComp
				productFetch={productFetch}
				productForUpdate={productForUpdate}
				setProductForUpdate={setProductForUpdate}
			/>
		</div>
	)
}

export default AdminProductComp
