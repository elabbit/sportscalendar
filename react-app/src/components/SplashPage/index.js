import { useEffect, useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import "./SplashPage.css"
import splash from "../../images/splash-temp.png"
import splashImg1 from '../../images/realsplash1.png'
import splashImg2 from '../../images/realsplash2.png'
import splashImg3 from '../../images/realsplash3.png'

const SplashPage = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [indexOne, setIndexOne] = useState(0);
    const [indexTwo, setIndexTwo] = useState(1);
    const [indexThree, setIndexThree] = useState(2);

    const splashImages = [splashImg1, splashImg2, splashImg3]
    const classes = ["splash-img fade-in", "splash-img ade-out", "splash-img fade-none"]

    useEffect(() => {
        const imgId = setInterval(() => {
            if (indexOne === 2) {
                setIndexOne(0);
            }
            else {
                setIndexOne(indexOne + 1)
            }

            if (indexTwo === 2) {
                setIndexTwo(0);
            }
            else {
                setIndexTwo(indexTwo + 1)
            }

            if (indexThree === 2) {
                setIndexThree(0);
            }
            else {
                setIndexThree(indexThree + 1)
            }

        }, 10000)
        return () => clearInterval(imgId);
    }, [splashImages.length, indexOne, indexTwo, indexThree]);


    return (
        <div className='splash-outer'>

            <div className="splash-container">
            <div>
                <img className="splash-temp" src={splash} alt=''></img>
            </div>
                <div className="splash-img-container">
                    <img className={`one ${classes[indexOne]}`} src={splashImages[0]} alt="" />
                    <img className={`two ${classes[indexTwo]}`} src={splashImages[1]} alt="" />
                    <img className={`three ${classes[indexThree]}`} src={splashImages[2]} alt="" />
                </div>

                <div className='splash-form'>
                    {showLogin ?
                        <LoginForm setShowLogin={setShowLogin} />
                        :
                        <SignUpForm setShowLogin={setShowLogin} />
                    }
                </div>
            </div>
        </div>
    )


}

export default SplashPage;
