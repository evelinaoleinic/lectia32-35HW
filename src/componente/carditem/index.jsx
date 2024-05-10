import { useNavigate } from 'react-router-dom'
import './style.css'
const CardItem = ({ title, img, price,id, measureType }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/product/${id}`)
        
    }
   
    
    return (
        <div className="card-wrapper" onClick={handleClick}>
            <img className="card-image" src={img} alt={`${title}-image`} />
            <p className="card-title">{title}</p>
            <span className="card-price">{price}$</span>
        </div>
    )
    }
export default CardItem;