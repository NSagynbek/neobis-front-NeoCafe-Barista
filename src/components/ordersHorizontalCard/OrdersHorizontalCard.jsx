import "./ordersHorizontal.css";
import coffee1 from "../../assets/coffee1.png"
import { useState } from "react";
function  OrdersHorizontalCard(){

    const [count, setCount]=useState(1);

    const incrementCount=()=>{
        setCount((prev)=>{
            return prev +=1
        })
    }

    const decriment = ()=>{
        setCount((prev)=>{
            return prev > 0 ? prev - 1 : prev;
        })
    }
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
                <button className="horizontal-card-item-increment"
                  onClick={incrementCount}
                >
                +
                </button>
                <p className="horizontal-card-item-qty">{count}</p>
                <button className="horizontal-card-item-decrement"
                onClick={decriment}
                >
                  -
                </button>
            </div>

        </div>
    )
}

export default OrdersHorizontalCard;