import React, { FunctionComponent } from 'react'
import { Item } from '../../models/item'
import GroceryListItem from '../GroceryListItem/GroceryListItem'

interface Props {
  items: Item[],
  onDelete: (item: Item) => void
}

const ItemsList: FunctionComponent<Props> = ({ items, onDelete }) => (
  <ul>
    {
      items.map((item, i) => (
        <GroceryListItem key={i} item={item} onDelete={onDelete} />
      ))
    }
  </ul>
)

export default ItemsList