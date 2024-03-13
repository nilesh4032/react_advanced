import React from 'react'
import {data} from './../../data'
const UseStateArray = () => {
    const[people,setPeople]=React.useState(data);
   console.log(people);
   const remove=(id)=>{
    return setPeople((old)=>{
        let newpeople=old.filter((person)=>person.id!==id)
        return newpeople;
    });
   }
   const clear=()=>{
    if(people.length===0){
        return setPeople(data);
    }
    else{
        return setPeople([]);
    }
   }
   return( <>
   {
    people.map((person)=>{
        const {id,name}=person;
        console.log(name)
        return(<>
         <h3>
            {name}
        </h3>
        <button onClick={()=>{remove(id)}}>remove</button>
        </>
        )
    })
    
}
    <button onClick={()=>{clear()}}>clear all</button>
   
   </>
   )
}

export default UseStateArray
