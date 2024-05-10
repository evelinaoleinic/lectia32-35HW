import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductsContext } from "../../context "
import Typography from "../../componente/typography"
import './style.css'

const ProductPage = () => {
    const { id } = useParams()
    const{ getProduct, addToCart }=useContext(ProductsContext)
    const product = getProduct(id)
    const handleAddToCart = () => {
        addToCart({...product, amount :1})
    }
    if (!product) {
        return <div>Produsul nu a fost găsit.</div>;
    }
    return (
        <div className="product-page-container">
            <div className="product-page-details">
                <div>
                    <img className="product-page-img" src={product.img} alt={ product.title} />
                </div>
                <div>
                    <Typography tag='h2' title='Produsul este disponibil in magazin:' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem ducimus praesentium illo magni quas soluta deleniti omnis
                        nostrum deserunt. Provident, enim illo distinctio unde in, placeat asperiores
                        quo error et commodi possimus reiciendis,
                        quos aut perspiciatis! Minus fugiat nisi nemo.</p>
                    <p>{product.price}$</p>
                    <button className='add-to-cart-button' onClick={handleAddToCart}>Adauga in cos</button>

                    

                </div>

            </div>
        </div>
    )
}
export default ProductPage