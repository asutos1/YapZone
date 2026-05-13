
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
  const [showSignUp, setShowSignUp] = useState(false);

  const signupState = () => {
    setShowSignUp(true);
    setIsLoggedIn(true);
  }

  function startYapping() {

    if (isLoggedIn) {
      return;
    }

    setShowSignUp(true);
}



  return (
    <>
      {isLoggedIn ? 
          (<>  

            <ChatHeader/> 
            <LeftPanel/>

          </>) : showSignUp ? (<SignUp signupState={signupState}/>) :
          
          (<>
            <Header startYapping={startYapping}/> 
            <Body startYapping={startYapping}/> 
            <Contact/> 
            <Footer/>
          </>)
      }


      {/* <SignUp/> */}
      {/* <ChatBox/>*/}


    </>
  );
}
export default App;
