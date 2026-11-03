import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function ShopTemp() {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [ setLoggedIn] =useState(false);


function handleLogin(event) {
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  }




  return (

    <div> 
        <div>
            <button onClick={()=>navigate('/')} >Home Page </button>
        </div>
        
          <form>
            <input type="text" placeholder="UserName" onChange={(e)=>setUsername(e.target.value)} /> 
            <br/>
            <input type="text" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button  value="submit"    onClick={handleLogin} > login</button>
          </form>






















        
        </div>
  )
}
