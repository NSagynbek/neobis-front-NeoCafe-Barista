import "./loginStyles.css";
import { toast } from 'react-toastify';
import {Formik,Form,Field} from "formik"
import * as yup from "yup"
import {useState} from "react";
import { useNavigate } from 'react-router';
import loginImage from "../../assets/loginimg.png"
import { login } from "../../api";
import { setCookie } from "../../api/tokenService";
import { loginSchema } from "../../schemas";
import { Bars } from 'react-loader-spinner'

const initialValues={
  email:"",
} 



const validationSchema = yup.object(loginSchema);

function Login() {
  
  const navigate = useNavigate();
  const [isError,setIsError] = useState(false);
  let [loading, setLoading] = useState(false);
 
  
  const onSubmit = async (values)=>{
    console.log(values)
    try{
        const response = await login(values);
        console.log(response.data)
        setLoading(false)
        setCookie('tokenData', JSON.stringify(response.data), 7);
        navigate('/admin-page');
    }catch(error){
      setLoading(false)
      setIsError(!isError);
      showToast(error.response.data.error);
    }

  }

  const showToast = (msg) => {
    toast.error(msg);
  };

  const handleLoading =()=>{
    setLoading(true)
  }
  return (
    <div className="login">
      <div className="logo-text">
        <span className="neo">neo</span>
        <span className="cafe">cafe</span>
      </div>
     
      <div className="login-image-container">
        <img 
          src={loginImage} 
          alt="Login Image" 
          className="login-image"
        />
      </div>

      <div className="login-inputs">
        <p className="login-inputs__title">Вход</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formikProps)=>(
            <Form 
              className="login-inputs__form"
            >
              <div>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Электронная почта"
                className={isError?"error":"email-input"}
              />
              
              </div>
  
              <button
                type="submit" 
                className={`loginBtn ${formikProps.dirty&&formikProps.isValid?"loginBtn-valid":""}`}
                disabled={!formikProps.dirty&&!formikProps.isValid}   
                onClick={handleLoading}        
              >
                {
                  loading?(
                  <Bars
                    height="30"
                    width="30"
                    color="white"
                  />
                  ):(
                    <p>Получить код</p>
                  )
                } 
                <div>
                
                </div>               
              </button>

            </Form>
          )}  
        </Formik>
      </div>
    </div>
  );
}

export default Login;