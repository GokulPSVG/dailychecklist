import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'


const CheckList = ({listContent,handelCheck,handelDelete}) => {
    const [line,setline]=useState("IT REMAINS IMPOSSIBLE UNTIL IT'S DONE")
    useEffect(()=>{
        const randomNumber=Math.round(Math.random()*3)
        const quote1="YOU ARE GREAT AND YOU CAN ACHIEVE ANYTHING"
        const quote2='THE FUTURE DEPENDS ON WHAT YOU DO TODAY'
        const quote3="TODAY IS ANOTHER CHANCE TO GET BETTER"
        const quote4="IT REMAINS IMPOSSIBLE UNTIL IT'S DONE"
        const line = randomNumber=== 1 ? quote1 : randomNumber === 2 ? quote2 : randomNumber === 3 ? quote3 : quote4 ;
        setline(line)
    },[])
  return (
    <main>
        <div className='quote'>
            <h2>{line}</h2>
        </div>
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
             ) : (<p>No list to show</p>)            
            }
        </ul>
    </main>
  )
}

export default CheckList