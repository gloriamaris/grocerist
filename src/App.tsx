import React, { useState } from 'react'
import NewItemForm from './components/NewItemForm/NewItemForm'
import ItemsList from './components/ItemsList/ItemsList'
import { Item } from './models/item'


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

  console.log({ items })
  return (
    <div>
      <h3>Grocerist</h3>
      <NewItemForm
        item={newItem}
        onAdd={addItem}
        onChange={handleItemChange}
      />
      <ItemsList
        items={items}
        onDelete={deleteItem}
      />
    </div>
  )

}

export default App