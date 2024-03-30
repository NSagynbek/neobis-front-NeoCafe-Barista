// import instance from "./axiosConfig"
import axios from "axios";
const instance = axios.create({
    baseURL: 'https://tokyo-backender.org.kg/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
export const login = async (data)=>{
    const res = await instance.post("bartender/check-email-login/",data)
    return res
}

export const authorize = async (code)=>{
    const res = await instance.post("bartender/login/",code)
    return res
}

