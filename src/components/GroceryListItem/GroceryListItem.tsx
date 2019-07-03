import React, { FunctionComponent } from 'react'
import { Item } from '../../models/item'

interface Props {
  item: Item,
  onDelete: (item: Item) => void
}

const GroceryListItem: FunctionComponent<Props> = ({ item, onDelete }) => {
  const onClick = () => {
    onDelete(item)
  }

  return (
    <li>
      {item.name} <button onClick={onClick}>X</button>
    </li>
  )
}

export default GroceryListItem