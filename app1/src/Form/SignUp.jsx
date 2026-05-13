import styles from './SignUp.module.css';
import Img from '../assets/Img.svg';
import PassShowIcon from '../assets/passshow.svg'
import PassHideIcon from '../assets/PassHide.svg'

import { useState } from 'react';


function SignUp(){
    const[Icon,setIcon] = useState(PassShowIcon);
    const[InputType, SetInputType] = useState('password');
    const ToggleIcon = () =>{
        if(InputType === 'password'){
            SetInputType('text');
            setIcon(PassHideIcon);
        }
        else{
            SetInputType('password');
            setIcon(PassShowIcon);
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.Container}>
                <div className="LeftPanel">
                    
                    <div className={styles.Title}>
                        <h2>Yap<span>Zone</span></h2>
                    </div>
                    
                    <p className={styles.Description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className={styles.SignUpLeftPanelImg}>
                        <img src={Img} alt="Img not displayed" width={200} />
                    </div>
                </div>



                <div className={styles.RightPanel}>
                    <div className={styles.RightPanelTitle}>
                        <p>
                            Create Account
                        </p>
                    </div>
                    <form className={styles.Form} action="">
                        <label ><input type="text" placeholder='Name' /></label>
                        <label ><input type="email" placeholder='Email Address' /></label>
                        <label className={styles.Password}>
                            <input type={InputType} placeholder='Password' />
                            <div className={styles.ShowPasswordIcon} onClick={ToggleIcon}>
                                <img src={Icon} alt="ShowIcon" width={20}  />
                            </div>
                        </label>
                        <label className={styles.CheckBox}>
                            <input type="checkbox"  /> 
                            <span>I agree to the terms of services and privacy policy</span>
                        </label>
                        <label className={styles.SubmitBtn}><button type="submit">Sign Up</button></label>


                        
                        
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
}
export default SignUp