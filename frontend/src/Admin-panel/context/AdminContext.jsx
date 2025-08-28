import React,{createContext, useContext, useEffect, useState} from 'react'
import { AuthDataContext } from './AuthContext'
import axios from 'axios'
export  const AdminDataContext=createContext()
function UserContext({children}){
    let [adminData,setAdminData]=useState(null)
let {serverUrl}=useContext(AuthDataContext)
const getAdmin=async (req,res)=>{
      try{
        const result = await axios.post(serverUrl+"/getadmin" ,
      {withCredentials:true}); 
      setAdminData(result.data)
      console.log(result.data)
      }
      catch(error){
        setAdminData(null)
          console.log(error)
      }
}
useEffect(()=>{
    getAdmin()
})

let value={
    adminData,setAdminData,getAdmin
}
return(
    <div>
        <AdminDataContext.Provider value={value}>
            {children}
            </AdminDataContext.Provider>

    </div>
)
}
export default UserContext;
