import "./leftpanel.css"

function LeftPanel(){

    const people = [
        { name: "Ninja Hattori", profilePic: "ninja.jpg" },
        { name: "John Snow", profilePic: "john.jpg" },
        { name: "Robb Stark", profilePic: "robb.jpg" },
        { name: "Arya Stark", profilePic: "arya.jpg" },
        { name: "Sansa Stark", profilePic: "sansa.jpg" },
    ];
        
    return(
        <div className="leftpanel">
            <div className="searchbar">
                <input type="text" placeholder="Search..." />
            </div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        <div className="profile-pic"></div>
                        {person.name}
                    </li>
                ))}
            </ul>
        </div>


    );
}

export default LeftPanel;