import React from 'react'
import { useState } from 'react'
import Propertys from './db.json'

const Property = () => {
    const [data,setData]=useState(Propertys)
    console.log(data.Propertys)
  return (
    <div>
       {
        data.Propertys.map((e)=>(
            <div key={e.id}>
                <div><img src={e.image} /></div>
                <div><p>{e.price}</p></div>
                <div><p>{e.type}</p></div>
                <div><p>{e.address}</p></div>
            </div>
           
        ))
       }
    </div>
  )
}

export default Property