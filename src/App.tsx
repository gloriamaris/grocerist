import React, { Component } from 'react' 
import NewItemForm from './components/NewItemForm/NewItemForm'
import ItemsList from './components/ItemsList/ItemsList'
import { Item } from './models/item'

interface State {
  newItem: Item,
  items: Item[]
}

class App extends Component<{}, State> {
  state = {
    newItem: {
      id: 1,
      name: ''
    },
    items: []
  }

  private addItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.setState(prevState => ({
      newItem: {
        id: prevState.newItem.id + 1,
        name: prevState.newItem.name
      },
      items: [ ...prevState.items, prevState.newItem ]
    }))
  }

  private handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        name: event.target.value
      }
    })
  }

  private deleteItem = (itemToDelete: Item) => {
    this.setState(prevState => ({
      items: [ ...prevState.items.filter(item => item.id !== itemToDelete.id)]
    }))
  }

  render () {
    const { newItem, items } = this.state
    
    return (
      <div>
        <h3>Grocerist</h3>
        <NewItemForm
          item={newItem}
          onAdd={this.addItem}
          onChange={this.handleItemChange}
        />
        <ItemsList 
          items={items}
          onDelete={this.deleteItem}
        />
      </div>
    )
  }
}

export default App