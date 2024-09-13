import { createContext, useState, useEffect, useMemo } from 'react'

const BasketContext = createContext()

function BasketProvider({ children }) {
	const [basket, setBasket] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	const basketLabel = basket.length

	const addProductToBasket = product => {
		setBasket(prevBasket => [...prevBasket, product])
	}

	useEffect(() => {
		const total = basket.reduce((acc, item) => {
			return acc + item.specialPrice
		}, 0)

		setTotalPrice(total)
	}, [basket])

	const removeItemFromBasket = id => {
		const removeFromBasket = basket.filter(items => items.id !== id)

		setBasket(removeFromBasket)
	}

	const cartValue = {
		basket,
		basketLabel,
		removeItemFromBasket,
		addProductToBasket,
		totalPrice,
		setBasket,
		setTotalPrice,
	}

	return (
		<BasketContext.Provider value={cartValue}>
			{children}
		</BasketContext.Provider>
	)
}

export { BasketContext, BasketProvider }
