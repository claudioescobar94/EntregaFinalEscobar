import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {  useParams } from "react-router-dom"
import './ItemListContainer.css'
import {getDocs, getFirestore ,collection} from 'firebase/firestore'


const ItemsListContainer = ()=>{

    

    const db = getFirestore()
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams ()

    useEffect(() => {
        const productsDB = collection(db, 'Productos');

        getDocs(productsDB)
        
        .then((products) => {

          const allProducts = products.docs.map((doc) => ({

            id: doc.id,...doc.data()}));

          if (categoryId) {
            const filteredProducts = allProducts.filter(
              (product) => product.category === categoryId
            );
            setProducts(filteredProducts);
          } else {
            setProducts(allProducts);
          }
        });
      }, [categoryId, db]);
      
      
    return(
        <div className="ItemList">
            <ItemList products={products}/> 
        </div>
    )
}

export default ItemsListContainer