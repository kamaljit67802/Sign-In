import React from "react"; 
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export const ProtectedRoute = ({children}) =>{

    if(!signOut(auth))
    {
         return <Navigate to ="/home" />
    }
    return children
    
}