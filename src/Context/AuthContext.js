import { onAuthStateChanged} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
// import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export const useAuthContext = ()=>{
    
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    // const navigate = useNavigate();
    const [user,setUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
},[])
// const handleLogout =async()=>{
//     await signOut(auth);
//     navigate("/login");
// }


    return <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
}