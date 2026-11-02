import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SignPage() {
        const navigate = useNavigate();

  return (
    <div>SignPage



<div>
   <button onClick={() =>navigate(('/')) }> Home Page</button>
</div>

    </div>
  )
}
