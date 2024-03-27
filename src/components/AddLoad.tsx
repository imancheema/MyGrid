import "./AddLoad.css";
import { useState, useEffect } from "react";
import {
  createLoad, editLoad,
} from "../frontend-services/loads.services.ts";

const AddLoad = ({modalData}: any, {closeModal}: any) => {

    const isAdding = modalData.type === 'add';
    const [loadInfo] = useState({
        Name: isAdding ? "" : modalData.load.Name,
        Type: isAdding ? "" : modalData.load.Type,
        Powerusage: isAdding ? "" : modalData.load.Powerusage,
        Id: isAdding ? "" : modalData.load.Id,
      });
      
    const addLoad = () => {
        const userId = "mv0QrbUwy9N7tCq0lyER"
        loadInfo.Name = (document.getElementById("Loadname") as HTMLInputElement).value
        loadInfo.Type = (document.getElementById("Loadtypes") as HTMLInputElement).value 
        loadInfo.Powerusage = Number((document.getElementById("power") as HTMLInputElement).value)
        loadInfo.Id = isAdding ? "temp" : modalData.load.Id;
        isAdding ? createLoad(loadInfo, userId) : editLoad(loadInfo);
      };

    return(
        <div className = "ModalBackground">
            <div id ="main" className="Modalmain">
            <div className="ModalPageHeader">{isAdding ? "Add Load" : "Edit Load"}</div>
                <form className="Information" onSubmit={addLoad}>
                    <button className="name" onClick={() => closeModal(false)}>EXIT</button>
                    <br></br><br></br>
                    <label id ="loadname">Please specify the name for this load:</label>
                    <input type="text" id="Loadname" placeholder="Example: Living Room Lights, Refridgerator" defaultValue={loadInfo.Name}></input>
                    <br></br>
                    <div>
                        <label id ="loadtype">Please select the load's type: </label>
                        <select className="Types" id="Loadtypes" defaultValue={loadInfo.Type}>
                            <option value="Appliance">Appliance</option>
                            <option value="Gas">Gas</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Charge">Charge Battery</option>
                            <option value="NoCharge">Avoid Charging</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <label id ="powerdisplay">What is this load's rated power Consumption?</label>
                    <input type="text" id="power" placeholder="(kW)" defaultValue={loadInfo.Powerusage}></input>
                    <br></br>
                    <button autoFocus={true} className="submitdata" type="submit" id="submit">{isAdding ? "Add New Load" : "Submit Changes"}</button>
                </form>
            </div>
        </div>
    );
};

export default AddLoad;