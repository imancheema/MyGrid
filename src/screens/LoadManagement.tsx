import "./LoadManagement.css";
import Navbar from "../components/NavBar";
import AddLoad from "../components/AddLoad";
import { useState, useEffect } from "react";
import {
  getLoadsByUserID,
} from "../frontend-services/loads.services.ts";
import { Load } from "../models/loads.ts";
import LoadHeader from "../components/Header/LoadHeader.tsx";

const LoadManagement = () => {
  const [openModal, setOpenModal] = useState({open: false, type: 'add', load: undefined});

  const [isLoadAdded, setIsLoadAdded] = useState(false);
  const [loads, setloads] = useState([]);
  const userId = "mv0QrbUwy9N7tCq0lyER"
  useEffect(() => {
    getLoadsByUserID(userId).then((response) => setloads(response.loads));
    setIsLoadAdded(false);
  }, [isLoadAdded]);

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
          {
          [...Array(Math.floor(loads.length / 3))].map((_, index) => 
            (
              <tr>
              {loads.map((load: Load, i) => (
                (i >= index * 3) && (i < (index * 3) + 3) ? <LoadHeader load={load} setOpenModal={setOpenModal} /> : false
              )
              )}
              </tr>
            )
          )
          }
          {loads.length % 3 !== 0 ? 
            (
              <tr>
              {[...Array(loads.length % 3)].map((_, index) => <LoadHeader load={loads[loads.length - 1 - index]} setOpenModal={setOpenModal} />) }
              </tr>
              ) : false
          }
        </table>
        <div className="Display">
          <button
            className="Add"
            onClick={() => {
              setOpenModal({open: true, type: 'add', load: undefined});
            }}
          >
            +
          </button>
          <span className="AddText">Add new load</span>
          {openModal.open && <AddLoad modalData={openModal} closeModal={setOpenModal} />}
        </div>
      </div>
    </>
  );
};

export default LoadManagement;