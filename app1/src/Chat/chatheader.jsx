import "./chatheader.css"

function ChatHeader({ toggleLogin }) {
    return(
        <div className="leftheader">
            <div id="logo">
                <h2 onClick={toggleLogin}>Yap<span>Zone</span></h2>
            </div>
        </div>
            

    );
}
export default ChatHeader;