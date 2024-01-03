import "./Schedule.css";
import {useState} from "react";
import Navbar from "../components/NavBar";
import ViewDay from "../components/ViewDay";
import ViewWeek from "../components/ViewWeek";
import ViewMonth from "../components/ViewMonth";


const Schedule = () => {
    const [OpenDay, setOpenDay] = useState(true);
    const [OpenWeek, setOpenWeek] = useState(false);
    const [OpenMonth, setOpenMonth] = useState(false);

    function Color (x:number){
        let button1 = document.getElementById('1');
        let button2 = document.getElementById('2');
        let button3 = document.getElementById('3');
        if (x === 1){
            button1!.className = 'Option Item1';
            button2!.className = 'Option Item2';
            button3!.className = 'Option Item2';
        }
        else if (x === 2){
            button1!.className = 'Option Item2';
            button2!.className = 'Option Item1';
            button3!.className = 'Option Item2';
        }
        else{
            button1!.className = 'Option Item2';
            button2!.className = 'Option Item2';
            button3!.className = 'Option Item1';
        }
    }
    return(
        <body className="Schedule">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main">
                <div className="PageHeader">Schedule</div>
                <div className="ViewStyle">
                    <button className='Option Item1' id="1"
                    onClick={()=> {setOpenDay(true);setOpenWeek(false);setOpenMonth(false);Color(1)}}>Day</button>
                    <button className='Option Item2' id="2" 
                    onClick={()=> {setOpenDay(false);setOpenWeek(true);setOpenMonth(false);Color(2)}}>Week</button>
                    <button className='Option Item2' id="3" 
                    onClick={()=> {setOpenDay(false);setOpenWeek(false);setOpenMonth(true);Color(3)}}>Month</button>
                </div>
                <div className="Display">
                    {OpenDay && <ViewDay closeDay={setOpenDay} />}
                    {OpenWeek && <ViewWeek closeWeek={setOpenWeek} />}
                    {OpenMonth && <ViewMonth closeMonth={setOpenMonth} />}
                </div>
            </div>
        </body>
    );
};

export default Schedule;