import { useState } from "react"
import { Modal } from '../../context/Modal';
import FetchFormulaOne from "../FetchFormulaOne";
import "./FetchSports.css"

const FetchSports = () => {
    const [showModal, setShowModal] = useState(false);




    return (
        <>
            <button onClick={() => setShowModal(true)}>Add Sports Events</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="sports-container">
                        <div className="sports-header">
                            <h2>Find Sports Events</h2>
                        </div>
                        <div className="sports-content">
                            <FetchFormulaOne />

                        </div>



                        <div>
                            <button type="cancel" onClick={() => setShowModal(false)}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>

                </Modal>
            )}
        </>
    )

}


export default FetchSports;
