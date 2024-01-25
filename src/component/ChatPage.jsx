import React from 'react'
const ChatPage = ({ src, name }) => {
  
  return (
    <div className='w-full flex items-center justify-start gap-8 pl-5'>
      <div className='w-14 h-14 rounded-full'>
        <img className='w-full h-full rounded-full' src={src} alt='' />
      </div>
      <div>
        {name}
      </div>
    </div>
  )
}

export default ChatPage
