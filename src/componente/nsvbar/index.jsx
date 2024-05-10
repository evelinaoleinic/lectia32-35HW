
import FormSearch from "./form"
import './style.css'
import { Link } from "react-router-dom"
import Icon from "../icons"
import cartIcon from '../../assets/shopping-cart.png'
import {  useContext } from "react"
import { ProductsContext } from "../../context "



const NavBar = ({ onSearch, onSearchSubmit }) => {
    const {cartProducts} = useContext(ProductsContext)
   
   

    return (
        <nav className="nav">
            <ul className='ul'>
                <li className='li ' ><Link to='/'>Acasa</Link></li>
                <li className='li' ><Link to='/produse'>Produse</Link></li>
                <li className='li '><Link to='/blog'>Blog</Link></li>
                <li className='li '> <Link to='feedback-reviews'>Feedback si recenzii</Link></li>
                <li className="li"><Link to='/cart'>
                    <Icon src={cartIcon} name='cart-icon' />
                    {Boolean(cartProducts.length ) && <span className="cart-counter">{cartProducts.reduce((total,item)=>total + item.amount, 0)}</span>}
                </Link></li>
            
            </ul>
            <FormSearch onSearch={onSearch} onSearchSubmit={onSearchSubmit} 

             />

        </nav>

    )
}
export default NavBar