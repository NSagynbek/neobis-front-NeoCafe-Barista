import "./headerStyles.css";
import { InputAdornment,IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import NotificationCenter from "../../modalwindows/notificationCenter/NotificationCenter"
import { useState } from 'react';
import { 
  capitalizeFirstLetter,
  addIconStyles,
  notificationIconStyles, 
} from '../../utils';

import {openModal} from "../../redux/index";
import {useDispatch } from "react-redux";
import SearchInput from "../searchInput/SearchInput";
import Orders from "../orders/Orders";

function Header ({selectedMenuItem}){

  const[isOpen,setIsOpen]=useState(false);
  const dispatch = useDispatch();
 
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
            <section className="page-title">
                <p className='page-title__text'>{capitalizeFirstLetter(selectedMenuItem)}</p>
            </section>

            <section className={`header-options ${selectedMenuItem==="orders" ? "header-option-active" : "testing"}`}>
              {selectedMenuItem==="orders" ? <Orders/> : <SearchInput/>}
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