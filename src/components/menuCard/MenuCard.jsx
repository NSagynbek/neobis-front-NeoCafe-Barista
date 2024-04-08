import "./menuCardStyles.css";
import coffeeImage from "../../assets/coffee1.png"


function MenuCard(){



    return(
        <div className="menu-card">
            <div className="menu-card-image-container">
                <img 
                  src={coffeeImage} 
                  alt="coffeeImage" 
                  className="menu-card-image"
                />
            </div>
            <div className="menu-card-text-container">
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