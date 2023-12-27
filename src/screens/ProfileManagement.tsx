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
        <body className="ProfileManagement">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main"></div>
        <div className="PageHeader">Edit Profile</div>
        <form className="Information">
            <label>First Name {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Last Name</label>
            <br></br>
            <input type="text" className="halfbox"></input><input type="text" className="halfbox"></input>
            <br></br><br></br>
            <label>Email</label>
            <br></br>
            <input type="text" className="fullbox"></input>
            <br></br><br></br>
            <label>Contact Number</label><label className="end">Postal Code</label>
            <br></br>
            <input type="text" className="halfbox"></input><input type="text" className="halfbox"></input>
            <br></br><br></br>
            <label>Password</label>
            <br></br>
            <input type="text" className="fullbox"></input>
            <br></br><br></br>
            <button className ="cancel">Cancel</button><button className="save">Save</button>
        </form>
        </body>
    );
};

export default ProfileManagement;