import "./AddLoad.css";

const AddLoad = ({closeModal}: any) => {
    return(
        <div className = "ModalBackground">
            <div id ="main" className="Modalmain">
            <div className="ModalPageHeader">Add Load</div>
                <form className="Information">
                    <button className="name" onClick={() => closeModal(false)}>EXIT</button>
                    <br></br><br></br>
                    <label id ="loadname">Please specify the name for this load:</label>
                    <input type="text" id="Loadname" placeholder="Example: Living Room Lights, Refrigerator"></input>
                    <br></br>
                    <div>
                        <label id ="loadtype">Please select the load's type: </label>
                        <select className="Types" id="Loadtypes">
                            <option value="Appliance">Appliance</option>
                            <option value="Temperature">Heater/AC</option>
                            <option value="Charge">Charge Battery</option>
                            <option value="NoCharge">Avoid Charging</option>
                        </select>
                    </div>
                    <label id ="power">What is this load's rated power Consumption?</label>
                    <input type="text" id="power" placeholder="(kW)"></input>
                    <br></br>
                    <button className="submitdata" id="submit">Add New Load</button>
                </form>
            </div>
        </div>
    );
};

export default AddLoad;