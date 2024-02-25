import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './cartWidget.css'

function Cartwidget({number}) {
    const handleClick= (event) =>{
        console.log(event);
    }
    
    return (
        <div className='containerCart'>
            <ShoppingCartCheckoutIcon className='cartIcon' onClick= {(event)=>handleClick(event)} />
            <span className='cartNumber'>{number}</span>
        </div>
    )
}

export default Cartwidget