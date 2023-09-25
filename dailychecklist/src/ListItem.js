import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ListItem = ({singleListItem,handelCheck,handelDelete}) => {
  return (
    <li>
        <form id='listForm'  className='listItem'>
            <input
                type='checkbox'
                checked={singleListItem.checked}
                onClick={(e)=>handelCheck(singleListItem.id)}
            ></input>
            <label 
                style={(singleListItem.checked)?{textDecoration:'line-through'}:{textDecoration:'none'}}
                onClick={(e)=>handelCheck(singleListItem.id)}
            >{singleListItem.content}</label>
            <FaTrashAlt 
                role='button'
                tabIndex='0'
                onClick={(e)=>handelDelete(singleListItem.id)}
                aria-label='Delete button'
            />
        </form>
    </li>
  )
}

export default ListItem