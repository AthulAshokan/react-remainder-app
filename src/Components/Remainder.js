import React,{useState} from 'react'
import './Remainder.css'
function Remainder() {
  const [remainder,setRemainder] =useState([])
  const [newRemainder,setNewRemainder] =useState("")
  
  const handleInputChange = (event)=>{
    setNewRemainder(event.target.value)
  }
  const  handleAddRemainder= ()=>{
    if (newRemainder.trim()){
      setRemainder([...remainder,newRemainder])
      setNewRemainder("")
    }
  }
   
  const deleteRemainder = (index)=>{
    setRemainder(remainder.filter((item,itemIndex)=> itemIndex !== index))

  }

  return (
    
    <div className='container'>
     <h1>Remainder App</h1>
     <div className='input-cont'>
       <input type='text'
            value={newRemainder} 
            placeholder='Enter a Remainder' 
            onChange={handleInputChange}>
       </input>
       <button className='add-btn' onClick={handleAddRemainder}>
        Add Remainder
       </button>
     </div>
     {
      remainder.length > 0?(
           <ul className='remainder-list'>
           {remainder.map((data,index)=>(
             <li key={index}>
               {data}
               <button className='deletebutton' onClick={()=>deleteRemainder(index)}>Delete</button>
             </li>
           ))}
          </ul>):
          <p>no remainder</p>
     }

    </div>

  )
}

export default Remainder