import React, { useContext } from 'react'
import {data} from '../../data'
const personContext=React.createContext();
//two components provider and consumer
const UseContext = () => {
   const[people,setPeople]=React.useState(data);
    const remove=(id)=>{
        setPeople((people)=>{
        return people.filter((person)=>person.id!==id)

        })
    }
    return (
    <personContext.Provider value={{remove}}>
    <List people={people} />
      
    </personContext.Provider>
  )
}
const List=({people})=>{
    return<>
    {
        people.map((person)=>{
            return <SinglePerson {...person}key={person.id} />
            //const[id,name]=person;
            
        })
      }
    </>
}
const SinglePerson=({id,name})=>{
    const {remove}=useContext(personContext)
   return(
                <div>

                <h3>{id} : {name}</h3>
                <button onClick={()=>{remove(id)}}>remove</button>
                </div>
            )
}
export default UseContext
