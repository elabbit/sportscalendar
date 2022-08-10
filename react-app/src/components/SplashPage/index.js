import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import "./SplashPage.css"

const SplashPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className='splash-outer'>
            <div className="splash-container">
                {showLogin ?
                    <LoginForm setShowLogin={setShowLogin}/>
                    :
                    <SignUpForm setShowLogin={setShowLogin}/>
                }
            </div>
        </div>
    )


}

export default SplashPage;
