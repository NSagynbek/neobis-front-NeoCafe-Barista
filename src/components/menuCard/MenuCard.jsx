import "./menuCardStyles.css";
import coffeeImage from "../../assets/coffee1.png"
import {useDispatch} from "react-redux"
import {openModal} from "../../redux"


function MenuCard(){
 const dispatch = useDispatch();
 
 const handleOpenModal = (modalName) => {
    dispatch(
      openModal({
        name: modalName,
      })
    );
  };

    return(
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
                <button className="menu-card-btn">
                    +
                </button>
            </div>
        </div>
    )

}

export default MenuCard;