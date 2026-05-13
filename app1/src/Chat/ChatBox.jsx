import styles from './ChatBox.module.css';
import SendImg from '../assets/Send.svg';
function ChatBox(){
    const SendMessage = () =>{
        prompt("Error");

    }
    const messages = [
        {id:1, Text :"Message1shdgshgdsgdhgshgdhsghdgshsdsdgdhsghdghdsgfhghfghdgfhsgdgsyugdjsgygfgu", type : "Received"},
        {id:2, Text :"Message2", type : "Sent"},
        {id:3, Text :"Message3", type : "Received"}


    ];
// test comment
    return(
        <div className={styles.Container}>
            <div className={styles.ChatSection}>
            <h1>This is Chat Section</h1>
            <div className={styles.MessagesContainer}>
                {messages.map((msg) => ( // Use 'msg' as the individual item
                    <p 
                        key={msg.id} // Access id from 'msg'
                        className={`${styles.message} ${msg.type === 'Sent' ? styles.Sent : styles.Received}`}
                    >
                        {msg.Text}
                    </p>
                ))}
            </div>
        
            </div>
            <div className={styles.inputSection}>
                <div className={styles.messageBox}>
                    <input type="text" placeholder="Message" />
                    <div className={styles.img}>
                        <img src={SendImg} alt="Send Icon" onClick={SendMessage} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default ChatBox;