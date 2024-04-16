import "./ordersStyles.css";
import { useState } from "react";

function Orders ({firstOption,secondOption}){

    const [activeSection, setActiveSection]=useState(firstOption)

    const handleClick = (section)=>{
        setActiveSection(section===activeSection?null:section);
    }
    

    const isActive = (section) =>(section===activeSection)

    return (
        <div className="orders">
            <button 
              className={`takeaway ${isActive(firstOption) ? "active" : "" }`}
              onClick={()=>handleClick(firstOption)}
            >
                {firstOption}
            </button>
            <button 
              className={`inhouse ${isActive(secondOption)? "active":""}`}
              onClick={()=>handleClick(secondOption)}
            >
                {secondOption}
            </button>
        </div>

    )
}

export default Orders;