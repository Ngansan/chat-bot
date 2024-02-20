import './App.css';
import chatBotLogo from './assets/chatbotLogo.png';
import './style/sidebar.scss';
import { IoAddCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoSaveOutline } from "react-icons/io5";
import { GrUpgrade } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";


function App() {
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

      <div className="main"></div>
    </div>
  );
}

export default App;




