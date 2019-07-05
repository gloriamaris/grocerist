import React, { FunctionComponent } from 'react'
import { Item } from '../../models/item'
import { Button, Card } from 'rbx'

interface Props {
  item: Item,
  onDelete: (item: Item) => void
}

const GroceryListItem: FunctionComponent<Props> = ({ item, onDelete }) => {
  const onClick = () => {
    onDelete(item)
  }

  return (
    <Card>
      <Card.Content>
        {item.name} <Button color="success" size="small" onClick={onClick}>X</Button>
      </Card.Content>
    </Card>
  )
}

export default GroceryListItem