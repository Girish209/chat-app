import React from 'react'
import { useDispatch, useSelector } from "react-redux";
const Welcome = () => {
  const dispatch = useDispatch();
  const themes=useSelector((state)=>{
    return state.custom
  })
  return (
    <div className='w-full h-full flex items-center justify-center' style={{backgroundImage: `linear-gradient(to right top, #c6ea8d, #ebd176, #ffb77a, #ff9f90, #fe90af)`}}>
      <div>
        <h1 className='font-extrabold text-3xl text-center'>Talkative Threads</h1>
        <p className='text-lg font-semibold'>
          A place to Communicate and Connect with others!
        </p>
      </div>
    </div>
  )
}

export default Welcome
