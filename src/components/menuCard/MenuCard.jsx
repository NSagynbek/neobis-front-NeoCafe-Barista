import "./menuCardStyles.css";
import coffeeImage from "../../assets/coffee1.png"
import {useDispatch} from "react-redux"
import {openModal} from "../../redux"
import { useState,useEffect,useRef } from "react";
import ButtonMode from "../buttonMode/ButtonMode";

function MenuCard(){
 const dispatch = useDispatch();

 const [isButtonMode,setIsButtonMode]=useState(false);
 const [count,setCount]=useState(0)
 const [timeOut,setTimeOut] = useState(3000);

 const timeoutRef = useRef(null); 

 const handleOpenModal = (modalName) => {
    dispatch(
      openModal({
        name: modalName,
      })
    );
  };

 
  const handleButtonMode = () => {
    setIsButtonMode(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsButtonMode(false);
    },3000);
  };


    return(
      <>
      {isButtonMode?(
        <ButtonMode 
          setCount={setCount} 
          count={count} 
          handleButtonMode={handleButtonMode}
        />
      ):(
        <div className="menu-card">
            <div className="menu-card-image-container">
                <img 
                  src={coffeeImage} 
                  alt="coffeeImage" 
                  className="menu-card-image"
                  onClick={()=>handleOpenModal("menuItemDetails")}
                />
            </div>
            <div 
              className="menu-card-text-container"
              onClick={()=>handleOpenModal("menuItemDetails")}
            >
                <p className="menu-card-name">Капучино</p>
                <p className="menu-card-price">140 с</p>
            </div>
            <div className="menu-card-btn-container">
                <button 
                  className="menu-card-btn"
                  onClick={()=>{
                    // handleOpenModal("coffeeOptions")
                    handleButtonMode();
                  }}
                >
                    +
                </button>
            </div>
        </div>
      )}
      </>
    )

}

export default MenuCard;