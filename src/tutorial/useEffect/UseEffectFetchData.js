import React from 'react'
import { useState,useEffect } from 'react';
const url='https://api.github.com/users';
const UseEffectFetchData = () => {
  const[users,setUser]=useState([]);
  // const getUsers=async()=>{
  //   const response=await fetch(url);
  //   const users=await response.json();
  //   setUser(users)
  //   console.log(users);
  // }
  useEffect(()=>{
    //getUsers();
    fetch(url)
      .then((resp)=>{
        console.log(resp.status)
        return resp.json();
      })
      .then((users)=>{
        console.log(users)
        setUser(users)})
      .catch((err)=>{console.error(err)})

  },[])
    return (
    <>
     {
        users.map((user)=>{
            const{id,login,avatar_url,html_url}=user;
            return <h3 key={id}>
                {login}
            </h3>
        })
     } 
    </>
  )
}

export default UseEffectFetchData
