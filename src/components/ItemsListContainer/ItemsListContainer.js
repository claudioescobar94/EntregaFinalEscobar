import { useState, useEffect } from "react"
import {getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import {  useParams } from "react-router-dom"
import './ItemListContainer.css'
import {doc, getDocs, getFirestore ,collection, Firestore} from 'firebase/firestore'


const ItemsListContainer = ()=>{

    const getProducts = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },500)
        })
    }

    

    const db = getFirestore()
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams ()

    useEffect(()=>{

        /* const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error);
            }) */

            const productsDB = collection(db,'Productos')

            getDocs (productsDB)
            .then(products => {
                setProducts(products.docs.map(doc=>({id:doc.id , ...doc.data()})))
            })

    },[db])

    return(
        <div className="ItemList">
            <ItemList products={products}/> 
        </div>
    )
}

export default ItemsListContainer