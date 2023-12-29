import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import NavBar from "../components/NavBar";

const Dashboard: React.FC = () => {
  const stateOfCharge = 33;
  const temperature = 94;
  const powerGeneration = 40;
  const powerConsumption = 28;

  return (
    <>
      <NavBar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>
          Welcome to the Dashboard, the central hub for your energy journey. In
          real-time, monitor critical metrics such as State of Charge (SoC),
          temperature, and power dynamics to gain a comprehensive analysis of
          your battery storage system.
        </p>
        <div>
          <h2>Battery Storage System Status</h2>
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
