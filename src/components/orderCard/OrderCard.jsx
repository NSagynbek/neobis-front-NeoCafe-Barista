import "./orderCardStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {openModal,openOrderDetails} from "../../redux/index";
import {useDispatch } from "react-redux";
import { useState } from "react";

function OrderCard (){

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
                <p className={`order-number ${isActive?"order-number-active":""}`}>М-47</p>
                <InputAdornment 
                  position="end"
                  className="cancel-order-btn"
                  onClick={()=>handleOpenModal("cancelOrder")}
                >
                    <IconButton>
                        <CloseIcon style={{color:isActive?"white":"#2A3440"}}/>
                    </IconButton>
                </InputAdornment>
            </header>
            <div className="cutomer-name-container">
              <p className={`customer-name ${isActive?"customer-name-active":""}`}>Валентина</p>
            </div>
            <ul className="order-list"
              onClick={handleOrderDetails}
            >
                <li className={`order-item ${isActive?"order-item-active":""}`}>1x Капучино</li>
                <li className={`order-item ${isActive?"order-item-active":""}`}>1x Багровый закат</li>
                <li className={`order-item ${isActive?"order-item-active":""}`}>1x Мохито Клубничный</li> 
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