import React, { FunctionComponent } from "react"
import { Item } from "../../models/item"
import { Field, Control, Input, Button, Section } from 'rbx'

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
      <Field kind="addons">
        <Control expanded>
          <Input size="medium" onChange={onChange} value={item.name} />
        </Control>
        <Control>
          <Button size="medium" type="submit" color="primary">Add item</Button>
        </Control>
      </Field>
    </form>
)

export default NewItemForm