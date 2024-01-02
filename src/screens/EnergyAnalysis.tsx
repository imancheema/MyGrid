import "./EnergyAnalysis.css";
import Navbar from "../components/NavBar";

const EnergyAnalysis = () => {
    return(
        <body className="EnergyAnalysis">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main">
                <div className="PageHeader">Energy Usage</div>
                <div className="PageText">
                    Explore real-time insights into your system's energy flow with our Energy Usage Overview. Identify charge and drain rates in Watts (W) to guage the speed of energy entering the system and its impact on connected devices.
                </div>
                <div className="Container">
                    <div className = "Info">
                        <div className = "Header">
                            Charging Metrics
                        </div>
                        <div className = "Metric">
                            CHARGE RATE:
                        </div>
                        <div className = "Value" id="ChargeRate">
                            100W
                        </div>
                        <div className = "Metric">
                            CHARGER C RATING:
                        </div>
                        <div className = "Value" id="CRate">
                            0.2C
                        </div>
                        <div className = "Text">
                            The charge rate is <strong>20%</strong> of the battery's capacity.
                        </div>
                    </div>
                    <div className = "Battery">
                        <div className="Lid"></div>
                        <div className ="Shape">
                            <div className='Line Color1'></div>
                            <div className='Line Color2'></div>
                            <div className='Line Color3'></div>
                            <div className='Line Color4'></div>
                            <div className='Line Color5'></div>
                        </div>
                    </div>
                    <div className = "Info">
                        <div className = "Header">
                            Discharging Metrics
                        </div>
                        <div className = "Metric">
                            DISCHARGE RATE:
                        </div>
                        <div className = "Value" id="ChargeRate">
                            75W
                        </div>
                        <div className = "Metric">
                            DISCHARGER C RATING:
                        </div>
                        <div className = "Value" id="CRate">
                            0.15C
                        </div>
                        <div className = "Text">
                            The discharge rate is <strong>15%</strong> of the battery's capacity.
                        </div>
                    </div>
                </div>
                <div className="EndText">
                    It will take approximately <strong>5 hours</strong> to fully charge the battery.
                </div>
            </div>
        </body>

    );
};

export default EnergyAnalysis;