import React from 'react'


export const CartItem = ({products}) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
