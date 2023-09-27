import { useState } from "react";
import CheckList from "./CheckList";
import Footer from "./Footer";
import Header from "./Header";
import AddList from "./AddList";
import SearchList from "./SearchList";


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
    const id=(listContent.length)+1
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
        <Header title='Check List'/>
        <AddList 
          newValue={newValue}
          setnewValue={setnewValue}
          handelSubmit={handelSubmit}
        />
        <SearchList 
          search={search}
          setsearch={setsearch}
        />
        <CheckList 
          listContent={listContent.filter((list)=>(
            ((list.content).toLowerCase()).includes(search.toLowerCase())
          ))}
          handelCheck={handelCheck}
          handelDelete={handelDelete}
        />
        <Footer />
    </div>
  );
}

export default App;
