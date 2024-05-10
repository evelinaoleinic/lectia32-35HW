import { useContext, useEffect, useState, } from "react"
import { ProductsContext } from "../../context "
import CardItem from "../carditem"
import './style.css'
import Icon from '../icons'
import cartIcon from '../../assets/shopping-cart.png'


const ProductList = () => {
    const { products, getProducts, addToCart } = useContext(ProductsContext)
    const [quantity, setQuantity]=useState(1)
    
    useEffect(() => {
        getProducts()
    }, [])
    
    // const handleAddToCart = (product) => {
    //     addToCart({ ...product, amount:quantity });
    //    setQuantity(1)
    // };
   
    return (
        <div className="product-list">
           
            {products.map(item => (
                <div key={item.id} className="product-item">
                    <CardItem key={item.id} title={item.title} img={item.img} price={item.price} measureType={item.measureType} id={item.id} />
                    <Icon src={cartIcon} name='cart-icon' onClick={() => addToCart(item)} />
                    
                    </div>
            ))}
        </div>
    )
}
export default ProductList