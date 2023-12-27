
import "./AddLoad.css";

const AddLoad = ({closeModal}: any) => {
    return(
        <div className = "ModalBackground">
            <div id ="main" className="Modalmain">
            <div className="ModalPageHeader">Add Load</div>
                <form className="Information">
                    <button className="name" onClick={() => closeModal(false)}>EXIT</button>
                    <br></br><br></br>
                    <label id ="loadname">Load Name</label>
                    <br></br>
                    <input type="text" id="Loadname" placeholder="Example: Living Room Lights, Refrigerator"></input>
                    <br></br>
                    <label id ="loadtype">Load Type</label>
                    <br></br>
                    <input type="text" id="Loadtype" placeholder="Example: Lighting, Appliances"></input>
                    <br></br>
                    <label id ="power">Power Consumption</label>
                    <br></br>
                    <input type="text" id="power" placeholder="(kW)"></input>
                    <br></br>
                    <button className="submitdata" id="submit">Add New Load</button>
                </form>
            </div>
        </div>
    );
};

export default AddLoad;