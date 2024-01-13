import "./LoadManagement.css";
import Navbar from "../components/NavBar";
import AddLoad from "../components/AddLoad";
import { useState } from "react";

const LoadManagement = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="load-management-bg"></div>
      <div id="load-management" className="load-management">
        <h1>Load Management</h1>
        <p>
          Take full control over of your energy usage. Add, edit, or delete
          loads, and create personalized schedules for each to ensure optimal
          efficiency.
        </p>
        <table className="LoadTable">
          <tr>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
            <td>
              <div className="Load-Head" id="Load-Head1">
                Heater
              </div>
              <div className="Load-Value" id="Load-Value">
                1.5kWh
              </div>
              <div>
                <button className="Edit">Edit</button>
                <button className="Delete">Delete</button>
              </div>
            </td>
          </tr>
        </table>
        <div className="Display">
          <button
            className="Add"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            +
          </button>
          <span className="AddText">Add new load</span>
          {openModal && <AddLoad closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
};

export default LoadManagement;