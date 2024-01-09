import "./LoadManagement.css";
import Navbar from "../components/NavBar";
import AddLoad from "../components/AddLoad";
import {useState} from "react";

const LoadManagement = () => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <body className="LoadManagement">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main">
                <div className="PageHeader">Load Management</div>
                <div className="PageText">Take full control over of your energy usage. Add, edit, or delete loads, and create personalized schedules for each to ensure optimal efficiency.</div>
                <table className="LoadTable">
                    <tr>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                        <td>
                            <div className ="Load-Head" id="Load-Head1">Heater</div>
                            <div className="Load-Value" id="Load-Value">1.5kWh</div>
                            <div className="Options"><button className="Edit">Edit</button><button className="Delete">Delete</button></div>
                        </td>
                    </tr>
                </table>
                <div className="Display">
                    <button className="Add" onClick={()=> {setOpenModal(true)}}>+</button><span className="AddText">Add new load</span>
                    {openModal && <AddLoad closeModal={setOpenModal} />}
                </div>
            </div>
        </body>
    );
};

export default LoadManagement;