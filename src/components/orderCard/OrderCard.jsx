import "./orderCardStyles.css";
import { InputAdornment, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {openModal,openOrderDetails} from "../../redux/index";
import {useDispatch } from "react-redux";

function OrderCard (){

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
    console.log("Cicked")
  }
    return(
        <div 
          className="order-card-container"
          onClick={handleOrderDetails}
        >
            <header className="order-card-header">
                <p className="order-number">М-47</p>
                <InputAdornment 
                  position="end"
                  className="cancel-order-btn"
                  onClick={()=>handleOpenModal("cancelOrder")}
                >
                    <IconButton>
                        <CloseIcon style={{color:"#2A3440"}}/>
                    </IconButton>
                </InputAdornment>
            </header>
            <div className="cutomer-name-container">
              <p className="customer-name">Валентина</p>
            </div>
            <ul className="order-list">
                <li className="order-item">1x Капучино</li>
                <li className="order-item">1x Багровый закат</li>
                <li className="order-item">1x Мохито Клубничный</li>

                <div className="show-more-btn-container">
                <button 
                  className="show-more-btn"
                >
                  Ещё +2
                </button>
                </div>
                
            </ul>

            <button 
              className="eccept-order-btn"
            >
                Принять
            </button>
        </div>
    )
}

export default OrderCard;