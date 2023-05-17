import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = ()=>{
    return (
        <nav className="navBar">
            <Link to= '/'> 
                <h3>PeaMoa</h3>
            </Link>
            <div>
                <NavLink to={`/category/remera`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/campera`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
                <NavLink to={`/category/pantalone`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/category/zapatilla`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
                <CartWidget/>
            </div>
        </nav>
        
    )
}

export default NavBar