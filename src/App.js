
import { useState } from "react"

import { ProductsProvider } from "./context "

import ProductPage from "./pagini/productpage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pagini/homepage"
import ProductsPage from "./pagini/productspage"
import BlogPage from "./pagini/blogpag"
import FeedbackReviewsPage from "./pagini/feedbavk"
import ShoppingCartPage from "./pagini/shoppingcart"
import NavBar from "./componente/nsvbar"
import Footer from "./componente/footer"



function App() {
  
  const [cautaProdus, setCautaProdus] = useState('')



  const handleSearch = (event) => {
    setCautaProdus(event.target.value)
  }

  const handleSearchSubmit = () => {
    
  }


  return (
    <div>
      
      <BrowserRouter>
       
        <ProductsProvider>
          <NavBar onSearch={handleSearch} onSearchSubmit={handleSearchSubmit}/>

          
       
          <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/produse" element={<ProductsPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/feedback-reviews' element={<FeedbackReviewsPage />} />
            <Route path='/cart' element={<ShoppingCartPage/>}/>
            <Route path='/product/:id' element={<ProductPage />} />
            
            </Routes>
            </div>
  
          </ProductsProvider>
         
      </BrowserRouter> 
      <Footer/>
      

    </div>
  );
}
  


export default App;
