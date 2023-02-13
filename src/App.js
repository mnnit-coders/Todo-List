import React,{useState} from 'react';
import './index.css'
function App() {
  const [inputList,setInputList]=useState("");
  const [items,setitems]=useState([])
  const itemevent=(e)=>{
    setInputList(e.target.value)
  }
  const listofitems=()=>{
    if(inputList){setitems((olditems)=>{
      return [...olditems,inputList];
    })
    setInputList("");}
  }
  const deleteitems=(item)=>{
   setitems((olditems)=>{
    return olditems.filter((arrele,index)=>{
      return index!==item;
    })
   })
  }
  return (
   <>
    <div className='main_div'>
      <div className='center_div'>
       <br />
       <h1>Todo List</h1>
       <br />
       <input type="text" placeholder='Add a item' value={inputList} onChange={itemevent} />
       <button onClick={listofitems}>+</button>

       <ol>
      {items.map((itemval,index)=>{
        return<><button onClick={()=>deleteitems(index)} className='xbutton'>X</button><li key={index} id={index} onSelect={deleteitems}>{itemval}</li></>;
      })}
       </ol>
      </div>
    </div>
   </>
  );
}

export default App;
