import "./orderDetailsStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OrdersHorizontalCard from "../ordersHorizontalCard/OrdersHorizontalCard";
import { openOrderDetails } from "../../redux";
import {useDispatch } from "react-redux";

function OrderDetailsCard(){
    
    const dispatch = useDispatch();

    const orders = [1, 2, 3];

    const orderDetailsClose =()=>{
        dispatch(openOrderDetails())
    }
    return(
        <main className="order-details-container">
            <header className="order-details-header">
                <p>Заказ на вынос</p>
                <InputAdornment 
                  position="end"
                  className="order-details-close-icon"
                  onClick={orderDetailsClose}
                >
                    <IconButton>
                        <CloseIcon style={{color:"white", width:"30px", height:"30px"}}/>
                    </IconButton>
                </InputAdornment>

            </header>

            <div className="order-items-container">
              {orders.map((order, index) => (
                <OrdersHorizontalCard key={index} />
               ))}
            </div>
            <button className="add-new-item">
              Добавить
            </button>

            <div className="order-footer-details">
                <div className="order-total-container">
                    <p className="order-total">Итого:</p>
                    <p className="order-price">570 сом</p>
                </div>

                <button className="order-complete-btn">
                    Закрыть счёт
                </button>
            </div>
        </main>
    )
}

export default OrderDetailsCard;