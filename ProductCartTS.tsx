import React, { useState } from 'react'

enum Country {
	USA = 'USA',
	Ukraine = 'UKRAINE',
}
interface ProductCartTSProps {
	name: string
	price: number
	city: string | number
	country: Country
	street?: string[] //необов'язковий
	getAddress: () => string | undefined
	changeAddress: (street: string) => void
}

interface User {
	name: string
	age: number
	isActive: boolean
}

let user: User = {
	name: 'Alice',
	age: 25,
	isActive: true,
}

const getAddress = () => {
	// some functional
	return 'street'
}
let defaultStreet = ''

const changeAddress = (street: string) => {
	street.trim()
	defaultStreet = street
}
const changeNum = (num: number) => {
	num.toFixed(2)
}

const str = '5'

changeNum(+str)

function ProductCart({
	name,
	country,
	city,
	price,
}: ProductCartTSProps): JSX.Element {
	const [imageSrc, setImageSrc] = useState('')
	const [arr, setArr] = useState<Array<string>>([''])
	const [arr1, setArr1] = useState<number[]>([2])
	const [objArr, setObjArr] = useState<object[]>([])
	const [obj, setObj] = useState<object[]>([{}])
	const [str, setStr] = useState<string | number>('')

	return <>Hello</>
}

export default ProductCart
