import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    
    if(!context)
    {
        throw new Error("AuthContext must be used within the scope");
    }

    return context 
}