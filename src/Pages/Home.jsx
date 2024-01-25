import React, { useContext, useEffect, useState } from "react";
import ChatPage from "../component/ChatPage";
import { Link2, Send, SmilePlus, ArrowLeft } from "lucide-react";
import useAxios from "../utils/useAxios";
import Chat from "../component/chat/Chat";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {jwtDecode} from 'jwt-decode'
import AuthContext from "../context/AuthContext";
const Home = ({ name, src }) => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => {
    return state.custom
  })
  const {sendMessage}=useContext(AuthContext)
  const borderColor=themes.curTheme.borderColor
  const [messages, setMessage] = useState([
    { id: 1, text: 'Hello!', sender: 1 },
    { id: 2, text: 'Hi there!', sender:2 },
    { id: 3, text: 'How are you?', sender: 1 },
    { id: 4, text: 'Fine....', sender: 2 },
  ]);
  const [file, setFile] = useState(null);
  const api = useAxios();
    const token = localStorage.getItem("authTokens")
    const decode = jwtDecode(token)
    var user_id = decode.user_id
    console.log(user_id)
    const [sendChat, setSendChat] = useState("");
  const send = () => {
    if (sendChat.length > 0 && user_id==2) {
      sendMessage(user_id,5,sendChat)
    }else if(sendChat.length > 0 && user_id==3){
      sendMessage(user_id,4,sendChat)
    }
  };
  const onKeyPressHandler = e => {
    if (e.key === 'Enter') {
      send();
    }
};
  const theme = useSelector((state) => {
    return state.custom;
  });
  const iconcolor=theme.curTheme.iconcolor

    useEffect(()=>{
       if(user_id==4){
        api.get(`/get-messages/${user_id}/5`)
      .then((res)=>{
        console.log(res.data)
        setMessage(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
       }else if(user_id==5){
        api.get(`/get-messages/${user_id}/4`)
        .then((res)=>{
          console.log(res.data)
          setMessage(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })}
    },[])
  return (
    <div className="w-full h-full sticky top-0 flex flex-col" style={{background:themes.curTheme.background, color:themes.curTheme.color}}>
      <div className="w-full p-2 flex">
        <Link to="/">
          <ArrowLeft className="mt-4" color={iconcolor}/>
        </Link>
        <ChatPage name={name} src={src} />
      </div>
      <div
        className="w-full h-[84vh] overflow-y-scroll overflow-x-hidden scroll-none"
        id="chat"
        style={{ background: theme.color}}
        
      >
        <div className="w-full flex flex-col pb-3 gap-6 scroll-none">
        <div className="flex-1 mb-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${
              message.sender.id === user_id ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className='p-2 rounded-lg'
            >
              {message.message}
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
      <div className="w-full h-12 border-t sticky bottom-0 flex items-center justify-around" style={{ borderColor:borderColor}}>
        <div className="">
          <label htmlFor="addFile">
            <Link2 color={iconcolor} />
          </label>
          <input
            type="file"
            name="file"
            id="addFile"
            style={{ display: "none", visibility: "hidden" }}
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
        </div>
        <div className="">
          <SmilePlus color={iconcolor} />
        </div>
        <div className="w-[80%] flex gap-2">
          <input
            type="text"
            name="message"
            className="border w-full p-1 rounded-md"
            onChange={(e) => {setSendChat(e.target.value); console.log(sendChat)}}
            onKeyPress={(e)=>onKeyPressHandler(e)}
            style={{background:themes.curTheme.background, color:themes.curTheme.color, borderColor:borderColor, outline:'none'}}
          />
          <button onClick={() =>sendMessage(user_id,5,sendChat)}>
            <Send color={iconcolor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
