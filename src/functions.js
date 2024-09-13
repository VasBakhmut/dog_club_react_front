export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit)
}

export const getPagesArray = totalPages => {
	let result = []
	for (let i = 0; i < totalPages; i++) {
		result.push(i + 1)
	}
	return result // [1, 2, 3, 4, 5, 6]
}

export function getPage(products, currentPage, productLimit) {
	const startIndex = (currentPage - 1) * productLimit
	return products.slice(startIndex, startIndex + productLimit)
}
