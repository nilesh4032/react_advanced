import React from 'react'
import { useState,useEffect } from 'react';
const MultipleInputs = () => {
    const[people,setPeople]=useState([]);
    const[person,setPerson]=useState({name:'',email:'',age:''});
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson({...person,[name]:value});
        }

    const submitHandler=(e)=>{
        e.preventDefault();
        if(person.name&&person.email&&person.age){
            const newPerson={...person,id:new Date().getTime().toString()}
            console.log(newPerson);
            setPeople([...people,newPerson]);
            console.log(people);
            setPerson({name:'',email:'',age:''});
        }
    }
    return (
    <article>
      <form >
        <div>
            <label htmlFor="name">Name: </label>
            <input 
            type="text" 
            id='name' 
            name='name'
            value={person.name}
            onChange={handlechange}
            />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email"id='email' value={person.email}
             onChange={handlechange}
            />
        </div>
        <div>
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" id='age' value={person.age}
             onChange={handlechange}
            />
        </div>
        <button type='submit'onClick={submitHandler}>Add Person</button>
      </form>
      {
        people.map((per)=>{
          const{id,name,email,age}=per;
          console.log(name,email);
          return <ul key={id}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{age}</li>
          </ul>
        })
      }
    </article>
  )
}


export default MultipleInputs
