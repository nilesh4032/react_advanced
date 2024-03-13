import React from 'react'
import {useState,useEffect} from 'react';
const CantrolledInputs = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[people,setPeople]=useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        if(name&&email){
          const person={id:new Date().getTime().toString(), name,email};
          console.log(person);
          setPeople((people)=>{
            return [...people,person]
          })
          console.log(people);
          setName('');
          setEmail('')
        }
      else
      console.log('empty');

    }
  return (
    <article>
      <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="firstName">Name: </label>
            <input 
            type="text" 
            id='firstName' 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div>
            <label htmlFor="email">Last Name: </label>
            <input type="text" id='email' value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {
        people.map((person)=>{
          const{id,name,email}=person;
          console.log(name,email);
          return <ul key={id}>
            <li>{name}</li>
            <li>{email}</li>
          </ul>
        })
      }
    </article>
  )
}

export default CantrolledInputs
