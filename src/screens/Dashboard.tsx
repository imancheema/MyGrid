import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
// @ts-ignore
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import NavBar from "../components/NavBar";
import {
  createBattery,
  getAllBatteries,
  simulateData,
} from "../frontend-services/dashboard.service.ts";
import { Battery } from "../models/battery.ts";
import BatteryHeader from "../components/Header/BatteryHeader.tsx";

// type Measurements = {
//   chargeRate: number;
//   current: number;
//   dischargeRate: number;
//   powerConsumption: number;
//   powerGeneration: number;
//   temperature: number;
//   time: Date;
//   voltageConsumption: number;
//   voltageGeneration: number;
// };

type BatteriesState = {
  batteryId: string;
  description?: string;
  name: string;
  type: string;
  measurements: [];
};

const Dashboard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [addedNewMeasurement, setAddedNewMeasurement] = useState(false);
  const [batteryInfo, setBatteryInfo] = useState({
    name: "",
    type: "",
    description: "",
  });
  const [isBatteryAdded, setIsBatteryAdded] = useState(false);
  const [batteries, setBatteries] = useState<BatteriesState[]>([]);
  const [infoIconHovered, setInfoIconHovered] = useState(-1);

  useEffect(() => {
    getAllBatteries().then((response) => {
      setBatteries(response.batteries);
    });
    setIsBatteryAdded(false);
    setAddedNewMeasurement(false);
  }, [isBatteryAdded, addedNewMeasurement]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBatteryInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // const handleInfoIconClick = (index: number) => {
  //   setInfoIconClicked(infoIconClicked === index ? -1 : index);
  // };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBatteryInfo({ name: "", type: "", description: "" }); // Reset input fields
  };

  const addBattery = () => {
    closeModal();
    createBattery(batteryInfo);
    setIsBatteryAdded(true);
  };

  const simulateMeasurements = (batteryId: string) => {
    simulateData(batteryId, true, 1);
    setAddedNewMeasurement(true);
  };

  useEffect(() => {
    batteries.forEach((battery, index) => {
      const canvas = document.getElementById(
        `powerChart${index}`
      ) as HTMLCanvasElement;
      const ctx = canvas?.getContext("2d");

      // Check if a chart instance already exists on this canvas
      if (ctx && Chart.getChart(ctx)) {
        // Destroy the existing chart instance
        Chart.getChart(ctx).destroy();
      }

      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Power Consumption", "Power Generation"],
            datasets: [
              {
                label: "Power (kW)",
                backgroundColor: ["#80ED99", "#38A3A5"],
                data: [
                  battery?.measurements[0]?.powerConsumption ?? 0,
                  battery?.measurements[0]?.powerGeneration ?? 0,
                ],
                barThickness: 40, // Adjust the thickness of the bars
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Power (kW)",
                  font: {
                    weight: "bold", // Make the title bold
                  },
                },
                ticks: {
                  font: {
                    weight: "bold", // Make the tick labels bold
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Hide the legend
              },
            },
            responsive: true,
            maintainAspectRatio: false, // Allow the chart to stretch to fit its container
          },
        });
      }
    });
  }, [batteries]);

  return (
    <>
      <NavBar />
      <div className="bg"></div>
      <div className="dashboard">
        <h1>Battery Dashboard</h1>
        {/* <h2>Hi, Name!</h2> */}
        <p>
          Welcome to the Dashboard, the central hub for your energy journey. In
          real-time, monitor critical metrics such as State of Charge (SoC),
          temperature, and power dynamics to gain a comprehensive analysis of
          your battery storage system.
        </p>
        <div>
          <button className="add-battery-button" onClick={openModal}>
            <span className="plus-icon">
              <i className="fas fa-plus" style={{ color: "white" }}></i>
            </span>{" "}
            Add Battery
          </button>
          {batteries.map((battery: Battery, index: number) => (
            <>
              <div className="button-container">
                <BatteryHeader battery={battery} />
                <button
                  className="measurements-button"
                  onClick={() => simulateMeasurements(battery.batteryId)}
                >
                  <i className="fas fa-sync"></i> Simulate Measurements
                </button>
              </div>
              <div className="card-container">
                <div className="card">
                  <div
                    className="info-icon"
                    onMouseEnter={() => setInfoIconHovered(index)}
                    onMouseLeave={() => setInfoIconHovered(-1)}
                  >
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div
                    className={
                      infoIconHovered === index ? "info-tag" : "info-tag hidden"
                    }
                  >
                    <p>
                      The State of Charge (SoC) indicates the current charge
                      level in your battery relative to its maximum capacity. A
                      higher SoC means more available energy.
                    </p>
                  </div>
                  <h3>State of Charge</h3>
                  <div className="progress-bar">
                    <CircularProgressbar
                      value={parseFloat(
                        (battery?.measurements[0]?.stateOfCharge ?? 0).toFixed(
                          2
                        )
                      )}
                      text={`${(
                        battery?.measurements[0]?.stateOfCharge ?? 0
                      ).toFixed(2)}%`}
                      className="progress-bar-state-of-charge"
                      strokeWidth={8}
                      styles={buildStyles({
                        textColor: "#333",
                        pathTransition: "none",
                        trailColor: "#eee",
                        backgroundColor: "#b19cd9",
                      })}
                    />
                  </div>
                  {/* <h4>HEALTH INDICATOR</h4> */}
                  <p>The battery is in a moderate state</p>
                </div>
                <div className="card">
                  <div
                    className="info-icon"
                    onMouseEnter={() => setInfoIconHovered(index)}
                    onMouseLeave={() => setInfoIconHovered(-1)}
                  >
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div
                    className={
                      infoIconHovered === index ? "info-tag" : "info-tag hidden"
                    }
                  >
                    <p>
                      Temperature refers to the current temperature of your
                      battery. Extreme temperatures, either too high or too low,
                      can affect battery efficiency and lifespan.
                    </p>
                  </div>
                  <div className="metric">
                    <h3>Temperature</h3>
                    <div className="temperature-icon">
                      <i className="fas fa-thermometer-half"></i>{" "}
                      {/* Temperature icon */}
                    </div>
                    <p className="metric-value">
                      {parseFloat(
                        (battery?.measurements[0]?.temperature ?? 0).toFixed(2)
                      )}
                      K
                    </p>
                  </div>
                  {/* <h4>HEALTH INDICATOR</h4> */}
                  <p>The battery is in a moderate state</p>
                </div>

                <div className="card">
                  <div
                    className="info-icon"
                    onMouseEnter={() => setInfoIconHovered(index)}
                    onMouseLeave={() => setInfoIconHovered(-1)}
                  >
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div
                    className={
                      infoIconHovered === index ? "info-tag" : "info-tag hidden"
                    }
                  >
                    <p>
                      The Charge Rate indicates how quickly your battery
                      charges, while the Discharge Rate shows how rapidly it
                      supplies power.
                    </p>
                  </div>
                  <h3>Charge Ratings</h3>
                  <div className="metric">
                    <h4>• Charge Rate •</h4>
                    <p className="metric-value">
                      {battery?.measurements[0]?.chargeRate.toFixed(2) ?? 0}kW
                    </p>
                  </div>
                  <div className="metric">
                    <h4>• Discharge Rate •</h4>
                    <p className="metric-value">
                      {battery?.measurements[0]?.dischargeRate.toFixed(2) ?? 0}
                      kW
                    </p>
                  </div>
                  {/* <h4>POWER STATE</h4> */}
                  <div className="efficiency-status">
                    <p>The system is operating efficiently</p>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="info-icon"
                    onMouseEnter={() => setInfoIconHovered(index)}
                    onMouseLeave={() => setInfoIconHovered(-1)}
                  >
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <div
                    className={
                      infoIconHovered === index ? "info-tag" : "info-tag hidden"
                    }
                  >
                    <p>
                      The State of Health (SoH) assesses your battery's overall
                      health and capacity compared to its original design, with
                      a higher SoH indicating better performance.
                    </p>
                  </div>
                  <h3>State of Health</h3>
                  <div className="progress-bar">
                    <CircularProgressbar
                      value={battery?.measurements[0]?.stateOfHealth ?? 0}
                      text={`${battery?.measurements[0]?.stateOfHealth ?? 0}%`}
                      className="progress-bar-soh"
                      strokeWidth={9}
                      styles={buildStyles({
                        textColor: "#333",
                        pathTransition: "none",
                        trailColor: "#eee",
                      })}
                    />
                  </div>
                  {/* <h4>CURRENT TEMPERATURE</h4> */}
                  <p>The battery is in a normal state</p>
                </div>
                {/* Power generation/consumption chart card */}
              </div>
              <div className="card">
                <div
                  className="info-icon"
                  onMouseEnter={() => setInfoIconHovered(index)}
                  onMouseLeave={() => setInfoIconHovered(-1)}
                >
                  <i className="fas fa-info-circle"></i>
                </div>
                <div
                  className={
                    infoIconHovered === index ? "info-tag" : "info-tag hidden"
                  }
                >
                  <p>The power generation is. the power consumption is.</p>
                </div>
                <h3>Power Metrics</h3>
                <div>
                  <canvas
                    id={`powerChart${index}`}
                    style={{ maxWidth: "100%" }} // Adjust max-width and height as needed
                  ></canvas>
                </div>
                <div className="efficiency-status">
                  <p>The system is operating efficiently</p>
                </div>
              </div>

              {/* <button
                className="add-battery-button"
                onClick={() => simulateMeasurements(battery.batteryId)}
              >
                Simulate Measurements
              </button> */}
            </>
          ))}

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h2>Add Battery</h2>
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
