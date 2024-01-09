import "./ProfileManagement.css";
import Navbar from "../components/NavBar";

/*
type profile = {
    Fname: string;
    LName: string;
    Email: string;
    ContactNum: string;
    PostalCode: string;
    password: string;
};
*/

const ProfileManagement = () => {
    return(
        <div className="ProfileManagement">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main">
                <div className="PageHeader">Edit Profile</div>
                <form className="Information">
                    <label>First Name {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Last Name</label>
                    <br></br>
                    <input type="text" className="halfbox"></input><input type="text" className="halfbox"></input>
                    <br></br><br></br>
                    <label>Email {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Contact Number</label>
                    <br></br>
                    <input type="text" className="halfbox"></input><input type="text" className="halfbox"></input>
                    <br></br><br></br>
                    <label>City{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Postal Code</label>
                    <br></br>
                    <input type="text" className="halfbox"></input><input type="text" className="halfbox"></input>
                    <br></br><br></br>
                    <label>Password</label>
                    <br></br>
                    <input type="text" className="fullbox"></input>
                    <br></br><br></br>
                    <button className ="cancel">Cancel</button><button className="save">Save</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileManagement;