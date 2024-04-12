import "./AddLoad.css";
import { useState, useEffect } from "react";
import { createLoad, editLoad } from "../frontend-services/loads.services.ts";
import { getAllBatteries } from "../frontend-services/dashboard.service.ts";

const AddLoad = ({ modalData }: any, { closeModal }: any) => {
  const userId = JSON.parse(sessionStorage.getItem("user") || "{}")?.id || "";
  const isAdding = modalData.type === "add";
  const [loadInfo] = useState({
    Name: isAdding ? "" : modalData.load.Name,
    Type: isAdding ? "" : modalData.load.Type,
    Powerusage: isAdding ? "" : modalData.load.Powerusage,
    Id: isAdding ? "" : modalData.load.Id,
    batteryId: isAdding ? "" : modalData.load.batteryId,
  });
  const [batteries, setBatteries] = useState([]);
  const [batteryId, setBatteryId] = useState(modalData?.load?.batteryId);
  useEffect(() => {
    getAllBatteries(userId).then((response) => {
      setBatteries(response.batteries);
    });
  }, []);

  useEffect(() => {
    if (!batteryId || batteryId === "") {
      setBatteryId(batteries[0]?.batteryId);
    }
  }, [batteries]);
  const addLoad = () => {
    // const userId = JSON.parse(sessionStorage.getItem("user") || "{}")?.id || "";

    loadInfo.Name = (
      document.getElementById("Loadname") as HTMLInputElement
    ).value;
    loadInfo.Type = (
      document.getElementById("Loadtypes") as HTMLInputElement
    ).value;
    loadInfo.Powerusage = Number(
      (document.getElementById("power") as HTMLInputElement).value
    );
    loadInfo.Id = isAdding ? "temp" : modalData.load.Id;
    loadInfo.batteryId = batteryId;
    isAdding ? createLoad(loadInfo, userId) : editLoad(loadInfo);
  };

  return (
    <div className="ModalBackground">
      <div id="main" className="Modalmain">
        <div className="ModalPageHeader">
          {isAdding ? "Add Load" : "Edit Load"}
        </div>
        <form className="Information" onSubmit={addLoad}>
          <button className="name" onClick={() => closeModal(false)}>
            EXIT
          </button>
          <br></br>
          <br></br>
          <label id="loadname">Please specify the name for this load:</label>
          <input
            type="text"
            id="Loadname"
            placeholder="Example: Living Room Lights, Refridgerator"
            defaultValue={loadInfo.Name}
          ></input>
          <br></br>
          <div>
            <label id="loadtype">Please select the load's type: </label>
            <select
              className="Types"
              id="Loadtypes"
              defaultValue={loadInfo.Type}
            >
              <option id="appliance" value="Appliance">
                Appliance
              </option>
              <option id="gas" value="Gas">
                Gas
              </option>
              <option id="electronics" value="Electronics">
                Electronics
              </option>
              <option id="charge" value="Charge">
                Charge Battery
              </option>
              <option id="nocharge" value="NoCharge">
                Avoid Charging
              </option>
              <option id="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div>
            <label>Select battery:</label>
            <select
              id="battery"
              //   defaultValue={batteries?.[0]?.batteryId}
              value={batteryId}
              onChange={(e) => setBatteryId(e.target.value)}
            >
              {batteries?.map((battery, index) => (
                <option key={index} value={battery?.batteryId}>
                  {battery?.name}
                </option>
              ))}
            </select>
          </div>
          <label id="powerdisplay">
            What is this load's rated power Consumption?
          </label>
          <input
            type="text"
            id="power"
            placeholder="(W)"
            defaultValue={loadInfo.Powerusage}
          ></input>
          <br></br>
          <button
            autoFocus={true}
            className="submitdata"
            type="submit"
            id="submit"
          >
            {isAdding ? "Add New Load" : "Submit Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLoad;
