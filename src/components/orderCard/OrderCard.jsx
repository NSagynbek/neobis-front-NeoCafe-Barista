import "./orderCardStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {openModal,openOrderDetails} from "../../redux/index";
import {useDispatch } from "react-redux";
import { useState } from "react";

function OrderCard ({order}){

  const [isActive,setIsActive]=useState(false);

  const dispatch = useDispatch()

  const handleOpenModal = (modalName) => {
    dispatch(
      openModal({
        name: modalName,
      })
    );
  };

  const handleOrderDetails = ()=>{
    dispatch(openOrderDetails());
    setIsActive(!isActive);
  }
    return(
     
        <div 
          className={`order-card-container ${isActive?"order-card-active":""}`}
        >
          
           <header className="order-card-header">
           <p className={`order-number ${isActive?"order-number-active":""}`}>M-{order.order_number}</p>
           <InputAdornment position="end">
             <IconButton>
              <CloseIcon style={{color:isActive?"white":"#2A3440"}}/>
             </IconButton>
           </InputAdornment>
           </header>
            
            <div className="cutomer-name-container">
              <p className={`customer-name ${isActive?"customer-name-active":""}`}>
                {order.employee_profile?employee_profile:"Не указано"}
              </p>
            </div>
            <ul className="order-list"
              onClick={handleOrderDetails}
            >
              {order.ITO.map((item,index)=>(
                 <li className={`order-item ${isActive?"order-item-active":""}`}>{item.quantity}x {item.item_name}</li>
              ))}
            </ul>
            <div className="show-more-btn-container">
                <button 
                  className={`show-more-btn ${isActive?"show-more-active":""}`}
                >
                  Ещё +2
                </button>
                </div>

            <button 
              className={`eccept-order-btn ${isActive?"accept-active":""}`}
            >
                Принять
            </button>
        </div>
    )
}

export default OrderCard;