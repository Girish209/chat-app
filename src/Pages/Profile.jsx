import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Camera, ArrowLeft } from 'lucide-react'
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => {
    return state.custom
  })
  const iconcolor = themes.curTheme.iconcolor
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  return (
    <div className='w-full h-full' style={{ background: themes.curTheme.background, color: themes.curTheme.color }}>
      <div className="flex w-full gap-6 pb-2 pl-4">
        <Link to="/">
          <ArrowLeft className="mt-4" color={iconcolor} />
        </Link>
        <h3 className="mt-3 text-2xl font-bold">Profile</h3>
      </div>
      <div className='p-4 pt-10'>
        <div className='w-60 h-60 rounded-full border m-auto overflow-hidden'>
          {imageUrl && selectedImage && (
            <img src={imageUrl} alt={selectedImage.name} className='w-full h-full' />
          )}
        </div>
        <div className='w-full flex flex-col gap-3 items-center justify-center pt-6'>
          <div className='w-[50%] border'>
            <input type='text' name='username' className='w-full outline-none p-1' placeholder='User name' style={{background:themes.curTheme.background, color:themes.curTheme.color}}/>
          </div>
          <div className='w-[50%] border'>
            <input type='text' name='userBio' className='w-full outline-none p-1' placeholder='Email' style={{background:themes.curTheme.background, color:themes.curTheme.color}}/>
          </div>
          <div className=''>
            <button style={{background:themes.curTheme.chatbg}} className='flex gap-2 px-4 rounded-sm shadow-md pb-1'>
            <input type='file' name='changeProfile' id='profile' style={{ display: 'none' }} onChange={(e) => setSelectedImage(e.target.files[0])} />
            <label htmlFor='profile'>
              <Camera color={iconcolor} size={30}/>
            </label>
            <h3 style={{color:themes.curTheme.color}} className='pt-1'>Change Profile</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
