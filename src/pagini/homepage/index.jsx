import NavBar from "../../componente/nsvbar"
import ProductList from "../../componente/productlist"
import Typography from "../../componente/typography";


const HomePage = () => {
    return (
        <div>
                  <Typography tag='h1' title='bine ati venit la magazinul online' />

            <ProductList/>
        </div>
    )
}
export default HomePage;