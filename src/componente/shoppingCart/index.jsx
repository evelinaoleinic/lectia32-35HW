import { useContext } from "react";

import { ProductsContext } from "../../context ";


const Cart = () => {
    const {cartProducts, increaseAmount,decreaseAmount}=useContext(ProductsContext)
    return (
        <div className="shopping-cart">
       
        <ul>
            {cartProducts.map((product)=> (
            <li key={product.id}>
                    <p>{product.title}</p>
                    <div>
                        <button onClick={() => decreaseAmount(product.id)}>-</button>
                        <p>Cantitate: {product.amount}</p>
                        <button onClick={()=>increaseAmount(product.id)}>+</button>
                    </div>
            <p>{product.price}</p>
             </li>
    ))}
        </ul>
        </div>
    );
};

export default Cart;