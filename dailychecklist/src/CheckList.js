import React from 'react'
import ListItem from './ListItem'

const CheckList = ({listContent,handelCheck,handelDelete}) => {
  return (
    <main>
        <ul>
            {(listContent.length)? (
                listContent.map((singleListItem)=>(
                    <ListItem 
                        singleListItem={singleListItem}
                        key={singleListItem.id}
                        handelCheck={handelCheck}
                        handelDelete={handelDelete}
                    />
                ))
             ) : (<p>Start creating your list</p>)            
            }
        </ul>
    </main>
  )
}

export default CheckList