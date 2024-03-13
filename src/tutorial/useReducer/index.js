import React, { useReducer } from 'react'
import Modals from './Modals';
import {data} from '../../data';
import { useState } from 'react';
import {reducer} from './reducer'
const defaultState={
  people:[],
  showModal:false,
  modalContent:'',
}
const Index = () => {
  const [name,setName]=useState('');
  const[state,dispatch] =useReducer(reducer,defaultState);
const submitHandler=(e)=>{
  e.preventDefault();
  if(name){
    const newItem={id:new Date().getTime().toString(),name}
    dispatch({type:'ADD_ITEM',payload:newItem});
    setName('');
  }else{
    dispatch({type:'NO_VALUE'})
  }
}
const closeModal=()=>{
  dispatch({type:'CLOSE_MODAL'})
}

  return (
    <>
     {state.showModal &&<Modals closeModal={closeModal} modalContent={state.modalContent}/>}
     <form onSubmit={submitHandler}>
      <div>
        <input type="text" name="name" id="name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <button type='submit'>Add</button>
     </form>
     {
      state.people.map((person)=>{
        return(
          
          <div>
            <h3>
              {person.id}: {person.name}
            </h3>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}>remove</button>
          </div>
        )
      })
     }
     
    </>
  )
}

export default Index
