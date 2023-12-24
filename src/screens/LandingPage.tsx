import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="landing-image">
        <img src="src/assets/LandingImg.jpg" alt="Landing Page Energy Storage Image" />
      </div>
      <div className="how-it-works-text">
        <h2>How it works?</h2>
        <p>The Battery Storage Optimization Application maximizes the efficiency, performance, and cost-effectiveness of energy storage systems through several features</p>
      </div>
      <div className="how-it-works-columns">
        <div className="column">
          <img src="src\assets\BatteryDashboard.png" alt="Battery Dashboard Image" />
          <h3>Battery Dashboard</h3>
          <p>Monitor the system’s health through a real-time overview of the battery storage system, including the State of Charge (SoC), temperature, and power generation/consumption.</p>
        </div>
        <div className="column">
          <img src="src\assets\BatteryOptimization.png" alt="Battery Optimization Image" />
          <h3>Battery Optimization</h3>
          <p>Elevate your energy storage experience with tailored algorithms, optimizing charging and discharging based on your preferences, energy costs, and environmental factors</p>
        </div>
        <div className="column">
          <img src="src\assets\LoadManagement1.png" alt="Load Management Image" />
          <h3>Load Management</h3>
          <p>Monitor and analyze energy consumption patterns across your connected devices, and gain insights into peak usage times and opportunities for optimizing energy distribution</p>
        </div>
      </div>
      <div className="why-its-important">
        <div className="why-its-important-content">
          <h2>Why it's important?</h2>
          <p>In an era where smart homes are now becoming a norm, efficient methods of using and storing are sought after to reduce costs and increase energy efficiency. The Battery and Load Management System provides a streamlined solution for efficient energy use, cost reduction, and enhanced energy efficiency through real-time insights and optimizing charging and discharging.</p>
        </div>
      </div>
      <div className="how-can-we-help-you">
        <div className="how-can-we-help-you-content">
          <h2>How can we help you?</h2>
          <p>If you’re an individual or business seeking efficient solutions to manage and optimize your energy usage, then we can help! Our Battery and Load Management System offers real-time insights and tailored optimizations to suit your preferences. Step into a world of intelligent energy solutions as we lead the way to a greener future.</p>
        </div>
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
};

export default LandingPage;
