import Header from "./Header";
import Body from "./body";
import ChatHeader from "./Chat/chatheader";
import leftpanel from "./Chat/leftpanel";
import SignUp from "./Form/SignUp";

import Contact from "./contact";
import ChatBox from "./Chat/ChatBox";


function App() {
  return (
    <div>
      <ChatHeader/>
      <leftpanel/>

      {/* <SignUp/>
      <Header/>
      <Body/>
      <Contact/> */} 
      <ChatBox></ChatBox>


    </div>
  );
}
export default App;
