import React, { useState } from 'react'
import NewItemForm from './components/NewItemForm/NewItemForm'
import ItemsList from './components/ItemsList/ItemsList'
import Menu from './components/Menu/Menu'
import { Item } from './models/item'
import { Column, Divider, Section } from 'rbx'
import 'rbx/index.css'

const App = () => {
  const [newItem, setNewItem] = useState<Item>({ id: 0, name: '' })
  const [items, setItems] = useState<Item[]>([])

  const addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const item = { id: newItem.id + 1, name: newItem.name }

    setNewItem({ ...item })
    setItems([item, ...items])
  }

  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      ...newItem,
      name: event.target.value
    })
  }

  const deleteItem = (itemToDelete: Item) => {
    setItems([...items.filter(item => item.id !== itemToDelete.id)])
  }

  return (
    <div>
      <Menu />
      <Column.Group centered>
        <Column size="half">
          <Section>
            <NewItemForm
              item={newItem}
              onAdd={addItem}
              onChange={handleItemChange}
            />
            <Divider color="primary">Today, July 11</Divider>
            <ItemsList
              items={items}
              onDelete={deleteItem}
            />
          </Section>
        </Column>
      </Column.Group>
    </div>
  )

}

export default App
