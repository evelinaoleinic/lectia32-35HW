import { createContext, useState } from "react"


const mockData= [
  {
  title: 'tomato',
    img: 'https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    price: '3.55',
    measureType: 'kg',
      id:'1'
},
  {
    title: 'cucumber',
    img: 'https://wh.farm/wp-content/uploads/2022/09/hps-cucumbers.png',
    price: '4.00',
    measureType: 'kg',
  id:'2',

  },
  {
    title: 'ananas',
    img: 'https://riojuiceromania.com/wp-content/uploads/2022/07/ananas-2.png',
    price: '2.34',
    measureType:'piece',
    id:'3',
  },
  {
    title: 'cabbage',
    img: 'https://d3awvtnmmsvyot.cloudfront.net/api/file/GGosbWO9SYyGxvDaciZf/convert?fit=max&w=570&cache=true',
    price: '5.00',
    measureType:'piece',
    
    id:'4',
  },
  {
    title: 'melon',
    img: 'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/4:3/w_5100,h_3825,c_limit/RoastChicken_RECIPE_080420_37993.jpg',
    price: '3.67',
    measureType:'piece',
    id:'5',
    },
  {
  
      title: 'cherry',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8p7lAa8aCXTc8l5zU1lgRRtKY80dsqpg-3SnuIW_Ig&s',
    price: '2.00',
      measureType: 'kg',
      id: '6'
    },
    {
      title: 'chicken',
      img: 'https://www.allrecipes.com/thmb/SoBuPU73KcbYHl3Kp3j8Xx4A3fc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg',
      price: '5.67',
      measureType:'piece',
      id: '7'
    },
    {
      title: 'salmon',
      img: 'https://lasa-masafiu.eu/wp-content/uploads/2021/09/fresh-salmon-fillet-with-basil-white-background_120872-25364.jpeg',
      price: '20.50',
      measureType:'piece',
      id: '8',
    },
    {
        title: 'strawberry',
        img: 'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg',
      price: '25,40',
        measureType: 'kg',
        id:'9'
    },
    {
        title: 'apple',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg',
      price: '4.50',
        measureType: 'kg',
        id:'10'
    },
    {
        title: 'potato',
        img: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/open_graph_image/public/2022-08/Potatoes-shutterstock-1721688538.jpg?h=1dd3cf61&itok=VhB7fsyi',
      price: '3.40',
        measureType: 'kg',
        id:'11',
    },
    {
        title: 'milk',
        img: 'https://i5.walmartimages.com/seo/Great-Value-Milk-Whole-Vitamin-D-Gallon-Plastic-Jug_6a7b09b4-f51d-4bea-a01c-85767f1b481a.86876244397d83ce6cdedb030abe6e4a.jpeg',
      price: '10.33',
        measureType: 'l',
        id:'12',
    },
    {
        title: 'yogurt',
        img: 'https://www.bigbasket.com/media/uploads/p/l/40281258_1-milky-mist-greek-yogurt-natural-high-protein-no-added-sugar.jpg',
      price: '9.67',
      measureType:'piece',
        
        id:'13',
    },
    {
        title: 'cheese',
        img: 'https://cdn.usdairy.com/optimize/getmedia/b5108b6f-59c3-4cc4-b1d5-4b9b0d1e0c54/swiss.jpg.jpg.aspx?format=webp',
      price: '34.56',
        measureType: 'kg',
        id:'14'
    },
    {
        title: 'ham',
        img: 'https://images.heb.com/is/image/HEBGrocery/008448513-1',
      price: '35.67',
        measureType: 'kg',
        id:'15'
    },
    {
        title: 'basil',
        img: 'https://www.veggycation.com.au/siteassets/veggycationvegetable/basil.jpg',
      price: '2.56',
        measureType: 'kg',
        id:'16',
    },
    {
        title: 'lemon',
        img: 'https://i5.walmartimages.com/seo/Fresh-Lemon-Each_f025c57c-13e1-4a1a-ac81-0695aaf2473d.7f3c9f067735c2730223c9147a646f7c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      price: '5.30',
        measureType: 'kg',
        id:'17'

    },
    {
        title: 'coca-cola',
        img: 'https://pi.nice-cdn.com/upload/image/product/large/default/45793_b608b2ff.1024x1024.jpg',
      price: '3.45',
        measureType: 'l',
        id:'18'
    },
    {
        title: 'sparkling water',
        img: 'https://cdn.shoplightspeed.com/shops/609238/files/3191564/san-pellegrino-sparkling-water-750-ml.jpg',
      price: '20.50',
        measureType: 'l',
        id:'19'
    },
    {
        title: 'chocolate',
        img: 'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg',
      price: '4.67',
        measureType:'piece',
        id:'20'
        
    },
    {
        title: 'bread',
        img: 'https://i5.walmartimages.com/seo/Freshness-Guaranteed-French-Bread-14-oz_fd51f0c3-4eea-4ff1-8109-7770339b6d85.fdba2ce348744cde3840700f5e33f3d3.jpeg',
      price: '3.33',
        measureType:'piece',
        id:'21'
    }

]
const fetchdata = () => {
    return new Promise((res)=>res(mockData))
}
export const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
    
    
  const getProducts = () => {
    fetchdata().then(data => setProducts([...data]))
  }

  const getProduct = (id) => {
    return products.find(item => item.id === id)
  }
  const addToCart = (product) => {
    const added = cartProducts.some(item => item.id === product.id)
    if (added) {
      increaseAmount(product.id)
      return;
    }
    setCartProducts(prev => [...prev, { ...product, amount: 1 }])
  }
  const increaseAmount = (id) => {
    setCartProducts(prev => prev.map(item => item.id === id ? { ...item, amount: item.amount + 1 } : item))
  }

  const decreaseAmount = (id) => {
    setCartProducts(prev => prev.map(item => item.id === id && item.amount > 0 ? { ...item, amount: item.amount - 1 } : item))
  }
  return (
    <ProductsContext.Provider value={{ products, getProducts, getProduct, addToCart, cartProducts, increaseAmount, decreaseAmount }}>
      {children}
    </ProductsContext.Provider>
  )
}
