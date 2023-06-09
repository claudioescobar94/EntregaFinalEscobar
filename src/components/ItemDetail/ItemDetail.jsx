import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
   

export const ItemDetail=({id, name, img, category, talle, price, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }   

        addItem(item, quantity)
    }


    return(
        <article>
            <header className="Headers">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImgs" />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Talle: {talle}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>

            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Options">Terminar compra</Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>


        </article>
    )
}


