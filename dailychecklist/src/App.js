import { useState } from "react";
import CheckList from "./CheckList";
import AddList from "./AddList";
import SearchList from "./SearchList";
import Header from "./Header";
import Footer from './Footer'

function App() {
  const [listContent,setlistContent]=useState(JSON.parse(localStorage.getItem('todolist')) || [{id:1,checked:false,content:'create your list'}])
  const [newValue,setnewValue]=useState('')
  const [search,setsearch]=useState('')

  const handelCheck=(id)=>{
    const modList1=listContent.map((list)=>(
      id === (list.id) ? {...list,checked:!list.checked} : list
    ))
    setlistContent(modList1)
    localStorage.setItem('todolist',JSON.stringify(modList1))
  }

  const handelDelete=(id)=>{
    const modList2=listContent.filter((list)=>(
      id !== list.id
    ))
    setlistContent(modList2)
    localStorage.setItem('todolist',JSON.stringify(modList2))
  }

  const addNewItem=(newValue)=>{
    const id= (listContent.length) ? listContent[(listContent.length)-1].id+1 : 1
    const addList={id:id,checked:false,content:newValue}
    const newList=[...listContent,addList]
    setlistContent(newList)
    localStorage.setItem('todolist',JSON.stringify(newList))
  }
  const handelSubmit=(e)=>{
      e.preventDefault()
      addNewItem(newValue)
      setnewValue('') 
  }
 
  return (
    <div className="App">
            <AddList 
              newValue={newValue}
              setnewValue={setnewValue}
              handelSubmit={handelSubmit}
            />
            <SearchList 
              search={search}
              setsearch={setsearch}
            />
          <div className="listCount">
              <Header title={'To Do List'}/>
              <span className="">{listContent.length} list(s)</span>
          </div>
          <Footer />
        <CheckList 
          listContent={listContent.filter((list)=>(
            ((list.content).toLowerCase()).includes(search.toLowerCase())
          ))}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
        />
    </div>
  );
}

export default App;