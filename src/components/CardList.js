import React from 'react'
import Card from './Card'

const CardList = ({robotList})=> {
	return (
		<div>
			{robotList.map(r => <Card key={r.id} robot={r} />)}
		</div>
		)
}

export default CardList