import "./profileContentStyles.css";
import PersonalDetails from "../personalDetails/PersonalDetails";
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import {useSelector} from "react-redux"

function ProfileContent(){
    const headerActiveSection = useSelector((state)=>state.headerActiveSection)

    return(
        <div className="profile-main">
             {headerActiveSection === "Профиль" ? (
              <PersonalDetails/>
             ) : headerActiveSection === "График работы" ? (
                <Calendar/>
             ) : (
             null
             )}       
        </div>
    )
}

export default ProfileContent;