import "./profileContentStyles.css";
import PersonalDetails from "../personalDetails/PersonalDetails";
import { useState } from "react";
import Calendar from "../calendar/Calendar";


function ProfileContent(){

  
    return(
        <div className="profile-main">
            {/* <PersonalDetails/> */}
            <Calendar/>
        </div>
    )
}

export default ProfileContent;