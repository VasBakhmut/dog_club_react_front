import React, { useContext } from 'react'
import sprite from '../../../assets/image/sprite.svg'
import { ProductContext } from '../../../Context/ProductContext'
import { Context } from '../../../functions'
import ProductsPagination from '../../utils/ProductsPagination/ProductsPagination'
import ProductCart from './ProductCart/ProductCart'
import classes from './Products.module.css'

interface Product {
	id: number
	name: string
	price: number
	specialPrice: number
}

interface ProductContextType {
	currentProducts: Product[]
	changePage: (page: number) => void
	productsItemPerPageLimit: number
	productsPages: number
	currentPage: number
	handleAddClick: (product: Product) => void
	sortProduct: (val: string) => void
	sortVal: string
}

interface ContextType {
	showDrawer: () => void
}

const Products = () => {
	const {
		currentProducts,
		changePage,
		productsItemPerPageLimit,
		productsPages,
		currentPage,
		handleAddClick,
		sortProduct,
		sortVal,
	} = useContext(ProductContext) as ProductContextType

	const { showDrawer } = useContext(Context) as ContextType

	const handleSortClick = (val: string) => {
		sortProduct(val)
	}

	return (
		<div className={classes.wrapper}>
			<div className='section_container'>
				<div className={classes.topContainer}>
					<h2 className={classes.mainText}>Nutrition</h2>
					<div className={classes.sortingContainer}>
						<p className={classes.sortText}>Sorting:</p>
						<button
							onClick={() => handleSortClick('popularity')}
							className={
								sortVal === 'popularity'
									? classes.sortBtn_Active
									: classes.sortBtn
							}
						>
							Popularity
						</button>
						<button
							onClick={() => handleSortClick('cheaper')}
							className={
								sortVal === 'cheaper' ? classes.sortBtn_Active : classes.sortBtn
							}
						>
							Cheaper first
						</button>
						<button
							onClick={() => handleSortClick('expensive')}
							className={
								sortVal === 'expensive'
									? classes.sortBtn_Active
									: classes.sortBtn
							}
						>
							More expensive first
						</button>
						<button
							onClick={() => handleSortClick('name')}
							className={
								sortVal === 'name' ? classes.sortBtn_Active : classes.sortBtn
							}
						>
							By name
						</button>
						<button
							onClick={() => handleSortClick('new')}
							className={
								sortVal === 'new' ? classes.sortBtn_Active : classes.sortBtn
							}
						>
							New ones first
						</button>
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
							handleAddClick={handleAddClick}
						/>
					))}
				</div>

				<ProductsPagination
					productsItemPerPageLimit={productsItemPerPageLimit}
					productsPages={productsPages}
					currentPage={currentPage}
					changePage={changePage}
				/>
			</div>
		</div>
	)
}

export default Products
