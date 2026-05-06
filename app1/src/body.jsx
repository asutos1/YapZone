import "./body.css";

function Body() {
    return (
        <main>
            <h1>Welcome <span>to</span> YapZone..!!</h1>
            <p>YapZone is your unfiltered space to chat with anyone, anywhere — real-time rooms, group chats, direct threads, no noise.</p>
            <div className="buttons">
                <button className="start">Start Yapping</button>
                <button className="more">Learn More</button>
            </div>
           
           
           
            <div className="text-bubbles">

                <div class="bubble">
                    <div class="avatar av-a">A</div>
                    <div>
                        <div class="bubble-msg">yo this app is actually 🔥 everyone's here lmao</div>
                        <div class="bubble-meta">Alex · just now</div>
                    </div>
                </div>
                <div class="bubble right">
                    <div class="avatar av-b">K</div>
                    <div>
                        <div class="bubble-msg">ikr? joined the music room and it's been non-stop 🎵</div>
                        <div class="bubble-meta">Kai · 1 min ago</div>
                    </div>
                </div>
                <div class="bubble center">
                    <div class="avatar av-c">M</div>
                    <div>
                        <div class="bubble-msg">YapZone &gt; everything else, no cap 💯</div>
                        <div class="bubble-meta">Maya · 2 min ago</div>
                    </div>
                </div>
            </div>

        </main >
    );
}

export default Body;