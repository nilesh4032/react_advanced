import React from 'react'
import { useState,useEffect } from 'react'
const url='https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isErr,setIsErr] = useState(false);
    const [user,setUser]=useState('default user');
    
    useEffect(() => {
       // setIsLoading(true)
        fetch(url)
        .then((resp)=>{ 
            console.log(resp.status);
            if(resp.status>=200&& resp.status<=299)
            {
                return resp.json();
            }
            else{
            setIsLoading(false);
            setIsErr(true);
            throw new Error(resp.statusText)
            }
        })
        .then((user)=>{console.log(user)
            const{login}=user;
        setUser(login);
        setIsLoading(false);
        })
        .catch((err)=>{console.log(err)
        setIsErr(true); 
        setIsLoading(false);
        })
    }, []);
    if(isLoading) {
  return (
    <h2>
      Loading..
    </h2>
  )
    }
    if(isErr) {
  return (
    <h2>
      Error..
    </h2>
  )
    }
    return(
        <h2>
            {user}
        </h2>
    )
}

export default MultipleReturns
