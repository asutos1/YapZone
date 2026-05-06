import './SignUp.css';
import Img from '../assets/Img.svg';
function SignUp(){
    return (
        <div>
            <div className="Container">
                <div className="LeftPanel">
                    
                    <div className='Title'>
                        <label className='T1'>5</label>
                        <div className='TitleText'>
                            <label htmlFor="">Minutes</label>
                            <label htmlFor="">Seconds</label>
                        </div>
                    </div>
                    
                    <p className='Description'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="SignUpLeftPanelImg">
                        <img src={Img} alt="Img not displayed" width={200} />
                    </div>
                </div>



                <div className="RightPanel">
                    <h1>RightPanel</h1>
                    
                </div>
            </div>
        </div>
    );
}
export default SignUp