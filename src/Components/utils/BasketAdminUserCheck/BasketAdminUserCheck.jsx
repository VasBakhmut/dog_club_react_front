import React from 'react'

function BasketAdminUserCheck({ basket }) {
	return (
		<div>
			<h3>Orders</h3>
			{basket?.map(product => {
				return (
					<>
						<p>{product.name}</p>
					</>
				)
			})}
		</div>
	)
}

export default BasketAdminUserCheck
