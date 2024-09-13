import { Pagination } from 'antd'
import React from 'react'
import classes from './ProductsPagination.module.css'

function ProductsPagination({
	productsItemPerPageLimit,
	productsPages,
	currentPage,
	handleAddClick,
}) {
	return (
		<div className={classes.paginationContainer}>
			<Pagination
				pageSize={productsItemPerPageLimit}
				total={productsPages}
				current={currentPage}
				onChange={page => handleAddClick(page)}
			/>
		</div>
	)
}

export default ProductsPagination
