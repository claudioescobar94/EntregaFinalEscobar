import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'
import {doc, getDoc } from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

export const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const itemDB = doc(db, 'Productos', itemId)

    getDoc(itemDB)
    .then((product)=>{
      if(product.exists()){
        setProduct({id:product.id,...product.data()});
      }
    })

  })

  

  return (
    <div className='ItemDetailContainer'>
      { <ItemDetail {...product} />}
    </div>
  )
}
