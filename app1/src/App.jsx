
import { useState } from "react";
import Header from "./Header";
import Body from "./body";
import ChatHeader from "./Chat/chatheader";
import LeftPanel from "./Chat/leftpanel";
import SignUp from "./Form/SignUp";
import Contact from "./contact";
import Footer from "./footer";
import ChatBox from "./Chat/ChatBox";




function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      {isLoggedIn ? 
          <>  
            <ChatHeader toggleLogin={toggleLogin}/> <LeftPanel/>
          </> : 
          <>
            <Header toggleLogin={toggleLogin}/> <Body/> <Contact/> <Footer/>
          </>
      }


      {/* <SignUp/> */}
      {/* <ChatBox/>*/}


    </>
  );
}
export default App;
