import React, { useState, useEffect } from "react";
// @ts-ignore
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import NavBar from "../components/NavBar";
import {
  createBattery,
  getAllBatteries,
} from "../frontend-services/dashboard.service.ts";
import { Battery } from "../models/battery.ts";
import BatteryHeader from "../components/dashboard/BatteryHeader.tsx";

const Dashboard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState({
    name: "",
    type: "",
    description: "",
  });
  const [isBatteryAdded, setIsBatteryAdded] = useState(false);
  const [batteries, setBatteries] = useState([]);

  useEffect(() => {
    getAllBatteries().then((response) => setBatteries(response.batteries));
    setIsBatteryAdded(false);
  }, [isBatteryAdded]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBatteryInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addBattery = () => {
    closeModal();
    createBattery(batteryInfo);
    setIsBatteryAdded(true);
  };

  const stateOfCharge = 33;
  const temperature = 94;
  const powerGeneration = 40;
  const powerConsumption = 28;

  return (
    <>
      <NavBar />
      <div className="bg"></div>
      <div className="dashboard">
        <h1>Battery Dashboard</h1>
        <h2>Hi, Name!</h2>
        <p>
          Welcome to the Dashboard, the central hub for your energy journey. In
          real-time, monitor critical metrics such as State of Charge (SoC),
          temperature, and power dynamics to gain a comprehensive analysis of
          your battery storage system.
        </p>
        <div>
          <button onClick={openModal}>Add Battery</button>
          {batteries.map((battery: Battery) => (
            <>
              <BatteryHeader battery={battery} />
              <div className="card-container">
                <div className="card">
                  <h3>State of Charge</h3>
                  <div className="progress-bar">
                    <CircularProgressbar
                      value={stateOfCharge}
                      text={`${stateOfCharge}%`}
                      className="progress-bar-state-of-charge"
                      strokeWidth={10}
                      styles={buildStyles({
                        textColor: "#333",
                        pathTransition: "none",
                        trailColor: "#eee",
                      })}
                    />
                  </div>
                  <h4>HEALTH INDICATOR</h4>
                  <p>The battery is in a moderate state</p>
                </div>
                <div className="card">
                  <h3>Temperature</h3>
                  <div className="progress-bar">
                    <CircularProgressbar
                      value={temperature}
                      text={`${temperature}°C`}
                      className="progress-bar-temperature"
                      strokeWidth={10}
                      styles={buildStyles({
                        textColor: "#333",
                        pathTransition: "none",
                        trailColor: "#eee",
                      })}
                    />
                  </div>
                  <h4>CURRENT TEMPERATURE</h4>
                  <p>The battery is in a normal state</p>
                </div>
                <div className="card">
                  <h3>Power Metrics</h3>
                  <div className="metric">
                    <h4>Power Generation</h4>
                    <p className="metric-value">{powerGeneration} kW</p>
                  </div>
                  <div className="metric">
                    <h4>Power Consumption</h4>
                    <p className="metric-value">{powerConsumption} kW</p>
                  </div>
                  <h4>POWER STATE</h4>
                  <div className="efficiency-status">
                    <p>The system is operating efficiently</p>
                  </div>
                </div>
              </div>
            </>
          ))}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <label htmlFor="batteryName">Battery Name:</label>
                <input
                  type="text"
                  id="batteryName"
                  name="name"
                  value={batteryInfo.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="batteryType">Battery Type:</label>
                <input
                  type="text"
                  id="batteryType"
                  name="type"
                  value={batteryInfo.type}
                  onChange={handleInputChange}
                />
                <label htmlFor="batteryDescription">Description:</label>
                <input
                  type="text"
                  id="batteryDescription"
                  name="description"
                  value={batteryInfo.description}
                  onChange={handleInputChange}
                />
                <button onClick={addBattery}>Add Battery</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
