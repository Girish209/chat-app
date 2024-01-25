import React from 'react'
import ocean from '../ocean.png'
import { useSelector } from "react-redux/es/hooks/useSelector";
const Chat = ({ message }) => {
  const themes = useSelector((state) => {
    return state.custom
  })
  return (
    <div className=' flex items-center gap-3 justify-start'>
      <div className='rounded-full px-2 pt-1 pb-1 max-w-xs break-words' style={{background:themes.curTheme.chatbg}}>
        {message}
      </div>
      <div className='w-5 h-5 rounded-full'>
        <img className="w-full h-full rounded-full" src={ocean} alt="profile" />
      </div>
    </div>
  )
}

export default Chat
