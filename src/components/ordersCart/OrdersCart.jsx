import "./ordersCartStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import addtocart from "../../assets/addtocart.png"
import {useDispatch} from "react-redux";
import { openCart } from "../../redux";

function OrdersCart (){
    const dispatch = useDispatch();

    const orderCartClose =()=>{
      dispatch(openCart())
    }
    return(
        <div className="orders-cart">
            <header className="order-cart-header">
                <p className="order-cart-header-text">Заказ на вынос</p>
                <InputAdornment 
                  position="end"
                  className="order-cart-close-icon"
                  onClick={orderCartClose}
                >
                    <IconButton>
                        <CloseIcon style={{color:"white", width:"30px", height:"30px"}}/>
                    </IconButton>
                </InputAdornment>
            </header>

            <div className="no-items-added-container">
                <p className="no-items-text">Вы ещё ничего не добавили</p>
                <div className="no-items-image-container">
                    <img 
                      src={addtocart} 
                      alt="Add to cart image" 
                      className="no-item-image"
                    />
                </div>
            </div>

            <div className="order-footer-details">
                <div className="order-total-container">
                    <p className="order-total">Итого:</p>
                    <p className="order-price">570 сом</p>
                </div>

                <button className="order-complete-btn">
                    Принять
                </button>
            </div>

        </div>
    )
}

export default OrdersCart;