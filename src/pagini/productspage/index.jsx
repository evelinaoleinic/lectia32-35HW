import { useContext } from "react";
import { ProductsContext } from "../../context ";
import CardItem from "../../componente/carditem";
import ProductList from "../../componente/productlist";



const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>Lista de produse</h1>
      <div className="product-list">
        {products.map((product) => (
         
          <ProductList/>
        ))}
      </div>
    </div>
  );
};
export default ProductsPage