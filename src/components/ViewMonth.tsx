import "./ViewMonth.css";

const ViewMonth = ({closeMonth}: any) => {
    return(
        <div className="ViewMonth">
            <div className="Month">January</div>
            <table className="WeekDays">
                <tr className="Day">
                    <td>SUN</td><td>MON</td><td>TUE</td><td>WED</td><td>THU</td><td>FRI</td><td>SAT</td>
                </tr>
            </table>
            <table className="TableOutline">
                <tr className="Week">
                    <td>
                        <div className="Number">01</div>
                        <div className='Item red'>Laundry</div>
                    </td>
                    <td>
                        <div className="Number">02</div>
                        <div className='Item red'>Dishes</div>
                    </td>
                    <td>
                        <div className="Number">03</div>
                        <div className='Item blue'>Battery</div>
                    </td>
                    <td>
                        <div className="Number">04</div>
                        <div className='Item red'>Nothing</div>
                    </td>
                    <td>
                        <div className="Number">05</div>
                        <div className='Item green'>Dishes</div>
                    </td>
                    <td>
                        <div className="Number">06</div>
                        <div className='Item red'>Battery</div>
                    </td>
                    <td>
                        <div className="Number">07</div>
                        <div className='Item'></div>
                    </td>
                </tr>
                <tr className="Week">
                    <td>
                        <div className="Number">08</div>
                        <div className='Item blue'>Laundry</div>
                    </td>
                    <td>
                        <div className="Number">09</div>
                        <div className='Item red'>Dishes</div>
                    </td>
                    <td>
                        <div className="Number">10</div>
                        <div className='Item green'>Battery</div>
                    </td>
                    <td>
                        <div className="Number">11</div>
                        <div className='Item green'>Nothing</div>
                    </td>
                    <td>
                        <div className="Number">12</div>
                        <div className='Item red'>Dishes</div>
                    </td>
                    <td>
                        <div className="Number">13</div>
                        <div className='Item red'>Battery</div>
                    </td>
                    <td>
                        <div className="Number">14</div>
                        <div className='Item blue'>Nothing</div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ViewMonth;