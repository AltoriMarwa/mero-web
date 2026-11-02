import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Orders() {
    const navigate = useNavigate();

  return (


    <div>Orders

      <div><button onClick={()=>navigate('/')} >Home Page </button></div>
    </div>
  )
}
