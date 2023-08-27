import React, { useEffect, useState } from 'react'
import {useNavigate  } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

const AuthLayout = ({children}) => {

    const [mount,setMount] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
            onAuthStateChanged(auth,(user)=>{
                if(user)
                {
                    navigate('/dashboard');
                }
                else{
                    setMount(false);
                }
            })
    },[])

    if(mount){
        return <h1 className='text-center'>loading...</h1>
    }
  return (
    <div>
            {children}
    </div>
  )
}

export default AuthLayout