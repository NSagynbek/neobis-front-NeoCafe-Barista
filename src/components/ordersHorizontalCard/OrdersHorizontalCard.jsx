import "./ordersHorizontal.css";
import coffee1 from "../../assets/coffee1.png"
function  OrdersHorizontalCard(){

    return(
        <div className="horizontal-card">
            <div className="horizontal-card-image">
                <img 
                  src={coffee1} 
                  alt="" 
                  className="horizontal-card-image"
                />
            </div>
            <div className="horizontal-card-subcontainer">
                <div className="horizontal-card-text">
                  <p className="horizontal-card-item-name">Латте</p>
                  <p className="horizontal-card-item-ingredient">Коровье молоко</p>
                  <p className="horizontal-card-item-ingredient">Карамельный сироп</p>
                </div>
                <p className="horizontal-card-item-price">140 c</p>
            </div>
            <div className="horizontal-card-btns-container">
                <button className="horizontal-card-item-increment">+</button>
                <p className="horizontal-card-item-qty">1</p>
                <button className="horizontal-card-item-decrement">-</button>
            </div>

        </div>
    )
}

export default OrdersHorizontalCard;