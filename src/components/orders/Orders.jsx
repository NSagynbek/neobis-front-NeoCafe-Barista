import "./ordersStyles.css";
import { useState } from "react";

function Orders (){

    const [activeSection, setActiveSection]=useState("takeaway")

    const handleClick = (section)=>{
        setActiveSection(section===activeSection?null:section);
    }

    const isActive = (section) =>(section===activeSection)

    return (
        <div className="orders">
            <button 
              className={`takeaway ${isActive("takeaway")?"active":""}`}
              onClick={()=>handleClick("takeaway")}
            >
                На вынос
            </button>
            <button 
              className={`inhouse ${isActive("inhouse")?"active":""}`}
              onClick={()=>handleClick("inhouse")}
            >
                В заведении
            </button>
        </div>

    )
}

export default Orders;