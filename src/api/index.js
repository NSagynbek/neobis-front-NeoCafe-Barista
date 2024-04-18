import instance from "./axiosConfig"

  
export const login = async (data)=>{
    const res = await instance.post("bartender/check-email-login/",data)
    return res
}

export const authorize = async (data)=>{
    const res = await instance.post("bartender/login/",data)
    return res
}

export const getAllOrders = async (branchId)=>{
  const response = await instance.get(`orders/all/${branchId}/`)
  return response
}

