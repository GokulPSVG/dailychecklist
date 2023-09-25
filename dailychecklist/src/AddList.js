import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddList = ({handelSubmit,newValue,setnewValue}) => {
    const reff=useRef()
  return (
        <form id='addNew' className='addNewItem' action="add new item" onSubmit={(e)=>handelSubmit(e)}>
            <label htmlFor='addNewItem'>Add New List</label>
            <input
            id='addNewItem'
                placeholder='Add New List'
                autoFocus="on"
                ref={reff}
                required
                value={newValue}
                onChange={(e)=>setnewValue(e.target.value)}
            ></input>
            <button
              type='submit'
              onClick={(e)=>reff.current.focus()}
            ><FaPlus /></button>
        </form>
  )
}

export default AddList