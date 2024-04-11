import "./personalDetailsStyles.css";
import {Formik,Form,Field} from "formik"
import { profileSchema } from "../../schemas";
import { useState } from "react";

const initialValues={
    name:"",
    lastName:"",
    mobile:"",
    date_of_birth:"",
  } 

function PersonalDetails(){

    const [isError,setIsError] = useState(false)

    const onSubmit = ()=>{

    }
    return(
        <div className="profile">
            <div className="profile-title-container">
            <p className="profile-title">Личные данные</p>
            </div>
          <Formik
            initialValues={initialValues}
            validationSchema={profileSchema}
            onSubmit={onSubmit}
          >
            {(formikProps)=>(
            <Form 
              className="profile-inputs-form"
            >
              <div className="profile-input-container">
                <label 
                  htmlFor="name"
                  className="profile-label"
                >
                Имя
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Имя"
                className={isError?"error":"profile-inputs"}
              />
              </label>
              
              <label 
                htmlFor="lastName"
                className="profile-label"
              >
                Фамилия
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Фамилия"
                className={isError?"error":"profile-inputs"}
              />
              </label>
              
              </div>

              <div className="profile-input-container">
                <label 
                  htmlFor="mobile"
                  className="profile-label"
                >
                Номер телефона
              <Field
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Номер телефона"
                className={isError?"error":"profile-inputs"}
              />
              </label>
              
              <label 
                htmlFor="dateOfBirth"
                className="profile-label"
              >
                Дата рождения
              <Field
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="Дата рождения"
                className={isError?"error":"profile-inputs"}
              />
              </label>
              </div>
  
            

            </Form>
          )}  

          </Formik>

        </div>
    )
}

export default PersonalDetails;