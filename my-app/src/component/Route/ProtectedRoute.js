import React from "react"; 
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) =>{

    if(!auth)
    {
         return <Navigate to ="/home" />
    }
    return children
    
}