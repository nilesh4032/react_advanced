import React from 'react'

const UseStateObject = () => {
    const [people,setPeople]=React.useState({
        name:"walter",
        age:24,
        message:"Say my name"
    });
    const changeMsg=()=>{
        //setPeople({name:"walter",age:24,message:'world'});
        setPeople({...people,message:'Heisenberg'});
        setTimeout(()=>{
                setPeople({...people,message:"you're goddamn right!"});
            
        },2000)
    }
  return (
    <>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.message}</h3>
      <button className='btn' onClick={()=>{changeMsg()}}>change msg</button>
    </>
  )
}

export default UseStateObject
