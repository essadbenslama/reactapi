import axios from 'axios';
import React, { useEffect, useState } from 'react';


export const Users = () => {
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
            setUsers(result.data);
                });

    });
 
   
  return (
    <div>
{users?.map ((user)=>(
    <p>{user.name}</p>
))};
    </div>
  )
}
