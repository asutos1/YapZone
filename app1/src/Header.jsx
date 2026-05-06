import './Header.css';
function Header() {

    return(
        <header>
            <h2>Yap<span>Zone</span></h2>
            <nav><ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
            <button className="join">Join Now</button></nav>
            
        </header>
    );
}
export default Header;