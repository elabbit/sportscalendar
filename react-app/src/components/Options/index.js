import "./Options.css"

const Options = ({ toggleSide, setToggleSide }) => {

    function handleToggle() {
        setToggleSide(!toggleSide)
    }
    return (
        <div className="options-outer">
            <button onClick={handleToggle}>Toggle Sidebar</button>
        </div>

    )

}

export default Options;
