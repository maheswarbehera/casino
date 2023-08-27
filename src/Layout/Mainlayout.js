import React, { useEffect, useState } from 'react'
import {useNavigate  } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const MainLayout = ({children}) => {

    const [mount,setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user)
                {
                    setMount(false);
                }
                else{
                    navigate('/login');
                    
                }
            })
    },[])

    if(mount){
        return <h1>loading...</h1>
    }
  return (
    <div>
            {children}
    </div>
  )
}

export default MainLayout