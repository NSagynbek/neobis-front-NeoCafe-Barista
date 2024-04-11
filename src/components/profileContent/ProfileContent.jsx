import "./profileContentStyles.css";
import PersonalDetails from "../personalDetails/PersonalDetails";
import { useState } from "react";


function ProfileContent(){

  
    return(
        <div className="profile-main">
            <PersonalDetails/>  
        </div>
    )
}

export default ProfileContent;