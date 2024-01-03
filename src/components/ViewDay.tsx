import "./ViewDay.css";

const ViewDay = ({closeDay}: any) => {
    return(
        <div className="ViewDay">
            <div className="Day" id="Day">Monday, January 1st</div>
            <table className="TableOutline">
                <tr className = "Row">
                    <td className ="TimeHeader">
                        Time
                    </td>
                    <td className ="ValueHeader">
                        Planned Activities
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        00:00
                    </td>
                    <td className ="Value" id="Value0">
                        <div className='Object green'>Laundry</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        01:00
                    </td>
                    <td className ="Value" id="Value1">
                        <div className='Object red'>Tree Planting</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        02:00
                    </td>
                    <td className ="Value" id="Value2">
                        <div className='Object red'>Tree Planting</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        03:00
                    </td>
                    <td className ="Value" id="Value3">
                        <div className='Object red'>Tree Planting</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        04:00
                    </td>
                    <td className ="Value" id="Value4">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        05:00
                    </td>
                    <td className ="Value" id="Value5">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        06:00
                    </td>
                    <td className ="Value" id="Value6">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        07:00
                    </td>
                    <td className ="Value" id="Value7">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        08:00
                    </td>
                    <td className ="Value" id="Value8">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        09:00
                    </td>
                    <td className ="Value" id="Value9">
                        <div className='Object blue'>Sleep</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        10:00
                    </td>
                    <td className ="Value" id="Value10">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        11:00
                    </td>
                    <td className ="Value" id="Value11">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        12:00
                    </td>
                    <td className ="Value" id="Value12">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        13:00
                    </td>
                    <td className ="Value" id="Value13">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        14:00
                    </td>
                    <td className ="Value" id="Value14">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        15:00
                    </td>
                    <td className ="Value" id="Value15">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        16:00
                    </td>
                    <td className ="Value" id="Value16">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        17:00
                    </td>
                    <td className ="Value" id="Value17">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        18:00
                    </td>
                    <td className ="Value" id="Value18">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        19:00
                    </td>
                    <td className ="Value" id="Value19">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        20:00
                    </td>
                    <td className ="Value" id="Value20">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        21:00
                    </td>
                    <td className ="Value" id="Value21">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        22:00
                    </td>
                    <td className ="Value" id="Value22">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        23:00
                    </td>
                    <td className ="Value" id="Value23">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
                <tr className = "Row">
                    <td className ="Time">
                        24:00
                    </td>
                    <td className ="Value" id="Value24">
                        <div className="Object">{'\u00A0'}</div>
                    </td>    
                </tr>
            </table>
        </div>
    )
}

export default ViewDay;