import "./codeConfirmationStyles.css";
import loginImage from "../../assets/loginimg.png"
import { useState } from "react";
import { authorize } from "../../api";
import OTPInput from "../../components/otpInput/OtpInput";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { setCookie } from "../../api/tokenService";

function CodeConfirmation (){

    const userEmail = useSelector((state)=>state.email);
    const [error,setError]= useState(null);
    const [code,setCode]=useState(null);
    const navigate = useNavigate();


    const handleClick = async ()=>{
       const formData = {
         email:userEmail.email,
         confirmation_code:code.join("")
       }
       console.log(formData)
         try{
             const response = await authorize(formData)
             setCookie('tokenData', JSON.stringify(response.data), 7);
             localStorage.setItem('branch', response.data.branch_id);
             console.log("****************",response)
             navigate("/admin-page")
         }catch(error){
             setError(error.message)      
         }
    }
    
    return (
        <main className="login">
           
            <section className="login-image-container">
                <img 
                  src={loginImage} 
                  alt="login-image"
                  className="login-image"
                />
            </section>

            <section className="login-inputs">
              <div className="logo-text">
                <span className="neo">neo</span>
                <span className="cafe">cafe</span>
              </div>
              
              <div className="code-container">
                <p 
                  className="code-content__title"
                >
                  Код подтверждения
                </p>
                <OTPInput 
                  error={error}
                  setCode={setCode}
                />   

                <button
                  type="submit" 
                  className="loginBtn-valid"   
                  onClick={handleClick}        
                >
                  Войти
                </button>
                <button 
                  className="resend-code"
                >
                  Отправить повторно
                </button>
              </div>
            </section>
        </main>
    )
}

export default CodeConfirmation;