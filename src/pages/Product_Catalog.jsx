import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Product_Catalog() {
  const nagative= useNavigate();  
  return (
    <div> product catalog
    <div>
      <button onClick={()=>nagative("/")} >home page</button>
      </div>      
    <section>
      <div>
       <button >everything</button>
       <button >חלב וביצים</button>
       <button >מאפים</button>
       <button >ירקות ופירות</button>
       <button >מזווה</button>
       <button >שתייה</button>
       <button >סלטים</button>
       <button >ניקיון ובית</button>
      </div>
    </section>
</div>
  )
}
