import React, { useContext, useState,useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../component/Sidebar/Sidebar'
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'

import Welcome from '../Pages/Welcome'
import Profile from '../Pages/Profile'
import Loginpage from '../Pages/Loginpage'
import Registerpage from '../Pages/Registerpage'
import PrivateRoute from '../utils/PrivateRoute'
import AuthContext from '../context/AuthContext'
import {jwtDecode} from 'jwt-decode'
import useAxios from '../utils/useAxios'
const Router = () => {
  let {user}=useContext(AuthContext);
  const [data,setData]=useState([])
  const api = useAxios();
    //const token = localStorage.getItem("authTokens")
    //const decode = jwtDecode(token)
     //var user_id = decode.user_id
    const retrieve=()=>{
      api.get(`/users`)
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    }
    useEffect(()=>{
      retrieve();
    },[])
    return (
      <>
        {user &&(
          <div className='flex'>
        <div className='sticky top-0'>
          <Sidebar />
        </div>
        <div className='w-full h-[100vh] overflow-hidden'>
          <Routes>
            
          <Route exact path='/' element={<PrivateRoute />} />
            <Route path='/settings' element={<Settings />} />
            {data.map((i, num) => {
    
      return <Route path={`/user${i.id}`} element={<Home name={i.username} src={'/images/island.png'} key={num} />} key={num} />
   
 })}
            <Route path='/profile' element={<Profile />} />
            <Route element={<Loginpage/>} path="/login" />
            <Route element={<Registerpage/>} path="/register" exact />
          </Routes>
        </div>
      </div>
        )}
        {!user &&(
          <div className='w-full h-[100vh]'>
      <Routes>
        <Route exact path='/' element={<PrivateRoute />} />
        <Route element={<Loginpage/>} path="/login" />
        <Route element={<Registerpage/>} path="/register" exact />
      </Routes>
    </div>
        )}
      </>
    )
  
  }
//}
export default Router

// {
//   data.map((i, num) => {
//     if(i.id!==user_id){
//       return <Route path={`/user${i.id}`} element={<Home name={i.username} src={'/images/island.png'} key={num} />} key={num} />
//     }
//   })
// }