import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return (
        <nav>
            <h1>"PeMoa"</h1>
            <h3>Tienda de ropa </h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Buzos</button>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar