import ItemCount from "../ItemCount/ItemCount"


export const ItemDetail=({id, name, img, category, talle, price, stock}) =>{
    return(
        <article>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=>console.log('cantidad agregada')}/>
            </footer>


        </article>
    )
}


