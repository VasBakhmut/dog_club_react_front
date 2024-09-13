import axios from 'axios'

export const createNewProduct = async (product: object) => {
	try {
		const response = await axios.post('http://localhost:3001/products', product)
		return response.data
	} catch (error) {
		console.log('Fetching Create Product', error)
	}
}

export const getAllProducts = async () => {
	try {
		const response = await axios.get('http://localhost:3001/products')
		return response.data
	} catch (error) {
		console.log('Fetching  Product', error)
	}
}

export const deleteProducts = async (id: string) => {
	try {
		const response = await axios.delete(`http://localhost:3001/products/${id}`)
		return response.data
	} catch (error) {
		console.log('Delete  Product', error)
	}
}

export const createNewUser = async (user: object) => {
	try {
		const response = await axios.post('http://localhost:3001/user', user)
		return response.data
	} catch (error) {
		if (error.code === 11000) {
			console.log('Login must be unique. Duplicate login detected.')
		} else {
			console.log('Fetching Create User', error)
		}
	}
}

export const updateProduct = async (id: string, product: object) => {
	try {
		const response = await axios.put(
			`http://localhost:3001/products/${id}`,
			product
		)
		return response.data
	} catch (error) {
		console.log('Fetching update  Product', error)
	}
}

export const loginUser = async (login, pass) => {
	try {
		const response = await axios.post(
			'http://localhost:3001/user/login',
			{ login, pass },
			{ withCredentials: true }
		)
		return response
	} catch (error) {
		if (error.response && error.response.status === 401) {
			console.log('Unauthorized: Wrong Login or Password')
			return error.response
		}
		console.log('Fetching login User', error)
	}
}

export const logoutUserFnk = async () => {
	try {
		const response = await axios.post(
			'http://localhost:3001/user/logout',
			{},
			{
				withCredentials: true, // ADD cookies on req
			}
		)
		return response
	} catch (error) {
		console.log('Fetching logout User', error)
	}
}

export const checkAuth = async () => {
	try {
		const response = await axios.get('http://localhost:3001/user/check-auth', {
			withCredentials: true, // // ADD cookies on req
		})
		return response
	} catch (error) {
		console.log('Fetching check-auth User', error)
	}
}

export const updateUserBasket = async (id: string, user: object) => {
	try {
		console.log(id)
		console.log(user)
		const response = await axios.put(`http://localhost:3001/user/${id}`, user, {
			withCredentials: true, // ADD cookies on req
		})
		return response
	} catch (error) {
		console.log('Fetching updateUserBasket User', error)
	}
}

export const getAllUsers = async () => {
	try {
		const response = await axios.get('http://localhost:3001/user', {
			withCredentials: true, // ADD cookies on req
		})
		return response.data
	} catch (error) {
		console.log('Fetching  Product', error)
	}
}
