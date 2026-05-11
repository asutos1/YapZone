import "./leftpanel.css"

function LeftPanel(){
    return(
        <div className="leftpanel">
            <div className="searchbar">
                <input type="text" placeholder="Search..." />
            </div>
            <ul>
                <li>
                    <div className="pp"></div>Ninja Hattori</li>
                <li>
                    <div className="pp"></div>John Snow</li>
                <li>
                    <div className="pp"></div>Robb Stark</li>
            </ul>
        </div>


    );
}

export default LeftPanel;