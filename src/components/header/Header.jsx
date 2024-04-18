import "./headerStyles.css";
import { InputAdornment,IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationCenter from "../../modalwindows/notificationCenter/NotificationCenter"
import { useState } from 'react';
import { 
  capitalizeFirstLetter,
  notificationIconStyles, 
} from '../../utils';

import {openModal} from "../../redux/index";
import {useDispatch,useSelector } from "react-redux";
import SearchInput from "../searchInput/SearchInput";
import Orders from "../orders/Orders";
import OrderDetailsCard from "../../components/orderDetailsCard/OrderDetailsCard";
import OrdersCart from "../ordersCart/OrdersCart";

function Header ({selectedMenuItem}){
   
  const dispatch = useDispatch();

  const isOrderDetails = useSelector((state)=>state.isOrderDetails);
  const isOpenCart = useSelector((state)=>state.isOpenCart);
  const[isOpen,setIsOpen]=useState(false);
  
  
  const handleClick=()=>{
    setIsOpen(!isOpen)
  }

  const handleOpenModal = (modalName,type) => {
    dispatch(
      openModal({
        name: modalName,
        type:type
      })
    );
  };

    return(
        <header className="header">
          {isOpen?<NotificationCenter handleClick={handleClick} />:null}
          {isOrderDetails?<OrderDetailsCard/>:null}
          {isOpenCart?<OrdersCart/>:null}
            <section className="page-title">
                <p className='page-title__text'>{capitalizeFirstLetter(selectedMenuItem)}</p>
            </section>

            <section 
              className={`header-options 
              ${selectedMenuItem === "orders" || 
                selectedMenuItem === "profile" ? 
                "header-option-active" : 
                "search-input-styles"}`
              }
            >
              {selectedMenuItem === "orders" ? (
                <Orders 
                  firstOption={"На вынос"} 
                  secondOption={"В заведение"}
                />
               ) : selectedMenuItem === "profile" ? (
                 <Orders 
                   firstOption={"Профиль"} 
                   secondOption={"График работы"} 
                 />
               ) : (
                <SearchInput />
               )}        
                <div className='header-options__btn_container'>
                  
                </div>             
                <InputAdornment 
                  className='header-options__icon_notify' 
                  position="start" 
                  onClick={handleClick}
                >
                  <IconButton>
                    <NotificationsIcon 
                      style={notificationIconStyles}/>
                  </IconButton>
                </InputAdornment>       
                <div 
                  className='notification-count-container'
                  onClick={handleClick}
                >
                </div>        
            </section>
        </header>
    )
}

export default Header;