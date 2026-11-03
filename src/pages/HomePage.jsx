import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from './logo.jpg';
export default function Housepage() {
  const navigate = useNavigate();

  return (
    <div className='main_div'>
      <div>     
           <img   className="logo-img"    src={logo}    alt="MeroWeb Logo"  />
   </div>
       <div className='inter_bon'>
        <button    onClick={() => navigate("/WareHouse")} class='inter_bon'     >כניסה למחסן </button>
        <button   onClick={()=> navigate("/ShopTemp")}  class='inter_bon'> כניסה לחנות </button>
        </div>
       <h1 className="h1-1">single shop </h1>
       
       <section className="mx-auto max-w-6xl px-4 pb-4 pt-10">
       <h1 className="font-display text-4xl font-bold" data-tsd-source="/src/routes/index.tsx:79:9">הזמנת סחורה מהמחסן המרכזי</h1>
       <p className="mt-2 text-muted-foreground" data-tsd-source="/src/routes/index.tsx:80:9">אתר להזמנת חומרי בניין </p>
       <div className="mt-6 flex gap-2 border-b" data-tsd-source="/src/routes/index.tsx:83:9">
       <button   onClick={()=> navigate("/ProdectCatalog")} >קטלוג מוצרים</button>
       <button  onClick={()=>navigate("/Orders")}        >ההזמנות שלי </button>
       <button  onClick={()=>navigate("/SignPage")}        >הרשמה </button>
       </div>
       
       
       
       
       
       </section>
       
    </div>
  )
}
