import {
    LOGIN_SUCCESS, 
    SIGNUP_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ORDER_DETAIlS,
    OPEN_CART,
    HEADER_ACTIVE_SECTION,
    SET_EMAIL,
  } from "./actionTypes"


  export const loginSuccess = (jwt) => {
    return{
      type: LOGIN_SUCCESS,
      payload: jwt,
    }
  };
    
  export const signupSuccess = (message) => {
    return{
      type: SIGNUP_SUCCESS,
      payload:message
    }
  };
  
  export const openModal = (modalData) => ({
    type: OPEN_MODAL,
    payload: modalData,
  });
  
  export const closeModal = () => ({
    type: CLOSE_MODAL,
  });

  export const openOrderDetails = () => ({
    type:OPEN_ORDER_DETAIlS,
  });

  export const openCart = () => ({
    type:OPEN_CART,
  });

  export const headerActiveSection = (section) => {
    return{
      type: HEADER_ACTIVE_SECTION,
      payload:section
    }
  };

  export const saveEmail = (email) => {
    return{
      type: SET_EMAIL,
      payload:email
    }
  };
