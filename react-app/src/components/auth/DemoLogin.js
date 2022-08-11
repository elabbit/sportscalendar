
import { useDispatch } from "react-redux";
import { login } from "../../store/session"

const DemoLogin = () => {
    const dispatch=useDispatch();
    const handleDemo = () =>{
        dispatch(login("demo@email.com", "password"));
    }
    return(
        <button onClick={handleDemo}>demo</button>
    )
}

export default DemoLogin;
