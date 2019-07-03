import React, { FunctionComponent } from "react"
import { Item } from "../../models/item"

/**
 * Generic interface Props
 * - describes what properties what properties NewItemForm component
 * gets from the parent/calling component 
 */
interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void
  item: Item
}

const NewItemForm: FunctionComponent<Props> = ({ onChange, onAdd, item }) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={item.name}/>
    <button type="submit">Add item</button>
  </form>
)

export default NewItemForm