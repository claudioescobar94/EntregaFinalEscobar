import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {getProductById} from '../../asyncMock'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
      getProductById(ItemId)
        .then( response => {
            setProduct(response)
        })
        .catch(error=> {
            console.error(error);
        })
    }, [ItemId])
    

  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...product}/>
    </div>
  )
}
