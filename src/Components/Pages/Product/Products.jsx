import React, { useState, useEffect, useContext } from 'react'
import sprite from '../../../assets/image/sprite.svg'
import { getPage } from '../../../functions.js'
import ProductsPagination from '../../utils/ProductsPagination/ProductsPagination'
import ProductCart from './ProductCart/ProductCart'
import classes from './Products.module.css'
import { getAllProducts } from '../../../fetching.ts'
import { BasketContext } from '../../../Context/BasketContext.js'

const sortingButton = ['Popularity', 'Cheaper', 'Expensive', 'By name', 'New']

function Products({ showDrawer }) {
	const [products, setProducts] = useState([])
	const [sortedProduct, setSortedProduct] = useState([])
	const [currentProducts, setCurrentProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [totalProducts, setTotalProducts] = useState(0)
	const [sortVal, setSortVal] = useState('Popularity')

	const { addProductToBasket } = useContext(BasketContext)

	const productsItemPerPageLimit = 2

	function fetchProduct() {
		getAllProducts().then(res => {
			setProducts(res.data)
			setTotalProducts(res.header['X-Total-Count'])
		})
	}

	const sortProduct = () => {
		let sortedProducts

		if (sortVal === 'Popularity') {
			sortedProducts = products.sort((a, b) => b.rate - a.rate)
		}

		if (sortVal === 'Cheaper') {
			sortedProducts = products.sort(
				(a, b) => +a.specialPrice - +b.specialPrice
			)
		}

		if (sortVal === 'Expensive') {
			sortedProducts = products.sort(
				(a, b) => +b.specialPrice - +a.specialPrice
			)
		}

		if (sortVal === 'By name') {
			sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name))
		}

		if (sortVal === 'New') {
			sortedProducts = products
		}

		setSortedProduct(sortedProducts)
	}

	const getProductsByPage = () => {
		const sliceByPageProduct = getPage(
			sortedProduct,
			currentPage,
			productsItemPerPageLimit
		)
		setCurrentProducts(sliceByPageProduct)
	}

	const changeProductPage = page => {
		setCurrentPage(page)
	}

	useEffect(() => {
		fetchProduct()
	}, [])

	useEffect(() => {
		sortProduct()
		getProductsByPage()
	}, [products, sortedProduct, currentPage, sortVal])

	const handleSortClick = val => {
		setSortVal(val)
	}

	return (
		<div className={classes.wrapper}>
			<div className='section_container'>
				<div className={classes.topContainer}>
					<h2 className={classes.mainText}>Nutrition</h2>
					<div className={classes.sortingContainer}>
						<p className={classes.sortText}>Sorting:</p>
						{sortingButton.map((item, index) => {
							return (
								<button
									key={index}
									onClick={() => handleSortClick(item)}
									className={
										sortVal === item ? classes.sortBtn_Active : classes.sortBtn
									}
								>
									{item}
								</button>
							)
						})}
					</div>
					<button onClick={showDrawer} className={classes.sortingMobBtn}>
						<svg className={classes.sortingMobIcon}>
							<use href={`${sprite}#icon-sortingProduct`}></use>
						</svg>
						<p className={classes.txt}>Popularity</p>
					</button>
				</div>

				<div className={classes.productContainer}>
					{currentProducts?.map((product, index) => (
						<ProductCart
							key={index}
							product={product}
							handleAddClick={addProductToBasket}
						/>
					))}
				</div>

				<ProductsPagination
					productsItemPerPageLimit={productsItemPerPageLimit}
					productsPages={totalProducts}
					currentPage={currentPage}
					handleAddClick={changeProductPage}
				/>
			</div>
		</div>
	)
}

export default Products
