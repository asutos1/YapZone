import "./body.css";
import SignUp from "./Form/SignUp";


function Body({startYapping}) {


    

    return (
        <main>
            <h1>Welcome <span>to</span> YapZone..!!</h1>
            <p>YapZone is your unfiltered space to chat with anyone, anywhere — real-time rooms, group chats, direct threads, no noise.</p>
            <div className="buttons">
                <button onClick={startYapping} className="start">Start Yapping</button>
                <button className="more">Learn More</button>
            </div>
           
           
           
            <div className="text-bubbles">

                <div className="bubble">
                    <div className="avatar av-a">A</div>
                    <div>
                        <div className="bubble-msg">yo this app is actually 🔥 everyone's here lmao</div>
                        <div className="bubble-meta">Alex · just now</div>
                    </div>
                </div>
                <div className="bubble right">
                    <div className="avatar av-b">K</div>
                    <div>
                        <div className="bubble-msg">ikr? joined the music room and it's been non-stop 🎵</div>
                        <div className="bubble-meta">Kai · 1 min ago</div>
                    </div>
                </div>
                <div className="bubble center">
                    <div className="avatar av-c">M</div>
                    <div>
                        <div className="bubble-msg">YapZone &gt; everything else, no cap 💯</div>
                        <div className="bubble-meta">Maya · 2 min ago</div>
                    </div>
                </div>
            </div>

        </main >
    );
}

export default Body;