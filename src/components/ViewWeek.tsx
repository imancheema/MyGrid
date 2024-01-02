import "./ViewWeek.css";

const ViewWeek = ({closeWeek}: any) => {
    return(
        <div className="ViewWeek">
            <table className="WeekDays">
                <tr className="Day">
                    <td>SUN</td><td>MON</td><td>TUE</td><td>WED</td><td>THU</td><td>FRI</td><td>SAT</td>
                </tr>
                <tr className="Number">
                    <td id="Day0">21</td>
                    <td id="Day1">22</td>
                    <td id="Day2">23</td>
                    <td id="Day3">24</td>
                    <td id="Day4">25</td>
                    <td id="Day5">26</td>
                    <td id="Day6">27</td>
                </tr>
            </table>
            <table className="TableOutline">
            <tr className = "Row">
                    <td className ="Time">
                        12AM
                    </td>
                    <td className ='Value red' id="1-1">
                        STUFF HERE
                    </td>
                    <td className ='Value green' id="1-2">
                        STUFF HERE
                    </td>
                    <td className ='Value blue' id="1-3">
                        STUFF HERE
                    </td>
                    <td className ='Value white' id="1-4">
                        STUFF HERE
                    </td>
                    <td className ='Value white' id="1-5">
                        STUFF HERE
                    </td>
                    <td className ='Value white' id="1-6">
                        STUFF HERE
                    </td>
                    <td className ='Value white' id="1-7">
                        STUFF HERE
                    </td>
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        1AM
                    </td>
                    <td className ='Value red' id="2-1">
                        
                    </td>
                    <td className ='Value red' id="2-2">
                        
                    </td>
                    <td className ='Value blue' id="2-3">
                        
                    </td>
                    <td className ='Value green' id="2-4">
                        
                    </td>
                    <td className ='Value white' id="2-5">
                        
                    </td>
                    <td className ='Value blue' id="2-6">
                        
                    </td>
                    <td className ='Value white' id="2-7">
                        
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ViewWeek;