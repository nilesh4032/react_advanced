import React from 'react'
import {data} from'../../data'
const PropDrilling = () => {
  const[people,setPeople]=React.useState(data);
    const remove=(id)=>{
        setPeople((people)=>{
        return people.filter((person)=>person.id!==id)

        })
    }
    return (
    <>
    <List people={people} remove={remove}/>
      
    </>
  )
}
const List=({people,remove})=>{
    return<>
    {
        people.map((person)=>{
            return <SinglePerson {...person}key={person.id} remove={remove}/>
            //const[id,name]=person;
            
        })
      }
    </>
}
const SinglePerson=({id,name,remove})=>{
   return(
                <div>

                <h3>{id} : {name}</h3>
                <button onClick={()=>{remove(id)}}>remove</button>
                </div>
            )
}
export default PropDrilling
