import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = ()=>{
    return (
        <nav className="navBar">
            <h1>"PeMoa"</h1>
            <div>
                <h3>Tienda de ropa </h3>
                <div className="option">
                    <button>Remeras</button>
                    <button>Pantalones</button>
                    <button>Buzos</button>
                </div>
                <CartWidget/>
            </div>
        </nav>
        
    )
}

export default NavBar