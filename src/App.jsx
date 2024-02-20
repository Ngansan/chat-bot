import './App.css';
import chatBotLogo from './assets/chatbotLogo.png';
import './style/sidebar.scss';
import './style/chat.scss';
import { IoAddCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { GrUpgrade } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
// import { TbMessageChatbot } from "react-icons/tb";
// import { RxAvatar } from "react-icons/rx";
import { sendMsgToOpenAI } from './openAI';
import { useState } from 'react';
import user from './assets/user.png';



function App() {
  const [input, setInput] = useState("");

  
  const [messages, setMessages] = useState([{
    text: "Hi , I am ChatGPT, a state-of-",
    isBot: true,
  }]);


  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot: false}
    ]);

    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      {
        text, isBot: false
      },
      {text: res, isBot: true}
    ]);
  }; 
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={chatBotLogo} className='logo' />
            <span className="brand">ChatBot</span>
          </div>
          <button className="midBtn">
            <IoAddCircleOutline className='addBtn'/>New chat
          </button>
          <div className="upperSideBottom">
            <button className="query"><FaRegMessage className='msgIcon'/>What is programming ?</button>
            <button className="query"><FaRegMessage className='msgIcon'/>How to use an API ?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><IoHomeOutline className="listItemsImg" />Home</div>
          <div className="listItems"><IoSaveOutline className="listItemsImg" />Saved</div>
          <div className="listItems"><GrUpgrade className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, i) =>
              <div key={i} className={message.isBot ? "chat second_chat" : "chat"}>
                  <img src={message.isBot ? chatBotLogo : user} className='chatIcon'/>
                  <p className="txt">{message.text}</p>
              </div>
          )}
        </div>

        <div className="chatFooter">
            <div className="inp">
              <input type="text" name="" value={input} onChange={(e) => {setInput(e.target.value)}} placeholder='Send a message' className='inp_input' onClick={handleSend}/>
              <button className='send'><IoIosSend className='sendIcon'/></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;




