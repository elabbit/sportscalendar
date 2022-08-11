import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import "./SplashPage.css"
import splash from "../../images/splash7.png"

const SplashPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='splash-outer'>
            <div className="splash-container">
                <div>
                    <img src={splash}></img>
                </div>
                <div className='splash-form'>
                {showLogin ?
                    <LoginForm setShowLogin={setShowLogin}/>
                    :
                    <SignUpForm setShowLogin={setShowLogin}/>
                }
                </div>
            </div>
        </div>
    )


}

export default SplashPage;
