import { useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  const [items,setItems]=useState([])
  const [query,setQuery] = useState("")
  const inputRef=useRef()

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    // console.log(inputRef)
    const value=inputRef.current.value
    if(value ==="") return
    setItems(prev=>[...prev,value])
    inputRef.current.value=""
  }

  const filteredItems =useMemo(()=>{
    return items.filter(item=>{
    return item.toLowerCase().includes(query.toLowerCase())
  })},[items,query])
  return (
    <>
      Search:
      <input value={query} onChange={e=>setQuery(e.target.value)} type="search" />
      <br/>
      <br/>
      <form onSubmit={handleOnSubmit} >
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items</h3>
      {
        filteredItems.map(item =>(
          <div key={item.id} >{item}</div>
        ))
      }
    </>
  );
}

export default App;
