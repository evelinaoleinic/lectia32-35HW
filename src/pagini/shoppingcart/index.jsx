
import Typography from "../../componente/typography";
import './style.css'
import { useContext } from "react";
import { ProductsContext } from "../../context ";
import './style.css'


const ShoppingCartPage = () => {
  const { cartProducts, increaseAmount, decreaseAmount } = useContext(ProductsContext)
  const total = cartProducts.reduce((total, product)=> total +(product.amount * Number(product.price)),0)
  const filteredCartProducts = cartProducts.filter(product=>product.amount >0)


    return (
      <div className="shopping-cart-page">
      <Typography tag="h2" title="Shopping Cart" />
      <div className="shopping-cart-container">
        {  cartProducts.length > 0 ? ( 
          <div classname='cart-items'>
            {filteredCartProducts.map((product, id) => (
         
            <div className="cart-item" key={id}>
            <img  className='cart-img'src={product.img}/>
            <p>{product.title}</p>
            <p>{product.amount}</p>
                
             <button className="cart-page-button" onClick={() => decreaseAmount(product.id)}>-</button>
             <button className='cart-page-button'onClick={() => increaseAmount(product.id)}>+</button>
              <p>Price per {product.measureType}: {product.price}</p>
              <p>Cost: {product.amount * Number(product.price)}$</p>

              </div>
              ))}
             <p className="cart-page-total">Total: {total}$</p>

          </div>
        ) : (
          <p className="empty-cart-message">Coșul de cumpărături este gol</p>
        )}
      </div>
    </div>
  );
};
export default ShoppingCartPage