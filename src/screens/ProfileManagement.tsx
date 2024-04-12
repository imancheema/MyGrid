import "./ProfileManagement.css";
import Navbar from "../components/NavBar";
import firebase from "../../firebase.js";
import { updateEmail, updatePassword, verifyBeforeUpdateEmail } from "firebase/auth";
import {
    updateUser,
} from "../frontend-services/accountCreation.service"
import { useState } from "react";

const ProfileManagement = () => {
    const [checkBox, setCheckBox] = useState('password')

    const [formData, setFormData] = useState(() => {
        const storedUser = sessionStorage.getItem("user");
        if(storedUser) {
            return JSON.parse(storedUser);
        } else {
            return {
                firstName: "",
                lastName: "",
                email: "",
                phoneNum: "",
                city: "",
                postalCode: "",
                password: "",
            };
        }
    });

    const handleShowPassword = (e) => {
        setCheckBox(checkBox === 'password' ? 'text' : 'password')
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const auth = firebase.auth
            const user = auth.currentUser
            await updateUser(formData);
            sessionStorage.setItem("user", JSON.stringify(formData))
            alert("Profile updated sucessfully");
            if(user && formData.password) {
                updatePassword(user, formData.password);
                console.log(formData.password);
            }
            if(user && formData.email){
                verifyBeforeUpdateEmail(user, formData.email)
            }
        } catch (error) {
            alert("Failed to update profile " + error);
        }
    }

    return(
        <div className="ProfileManagement">
            <div>
                <Navbar />
            </div>
            <div id ="main" className="main">
                <div className="PageHeader">Edit Profile</div>
                <form className="Information" onSubmit={handleSubmit}>
                    <label>First Name {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Last Name</label>
                    <br></br>
                    <input type="text" className="halfbox" name="firstName" value ={formData.firstName} onChange={handleChange}></input>
                    <input type="text" className="halfbox" name="lastName" value ={formData.lastName} onChange={handleChange}></input>
                    <br></br><br></br>
                    <label>Email {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Contact Number</label>
                    <br></br>
                    <input type="text" className="halfbox" name="email" value ={formData.email} onChange={handleChange}></input>
                    <input type="text" className="halfbox" name="phoneNum" value ={formData.phoneNum} onChange={handleChange}></input>
                    <br></br><br></br>
                    <label>City{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}</label><label className="end">Postal Code</label>
                    <br></br>
                    <input type="text" className="halfbox" name="city" value ={formData.city} onChange={handleChange}></input>
                    <input type="text" className="halfbox" name="postalCode" value ={formData.postalCode} onChange={handleChange}></input>
                    <br></br><br></br>
                    <label>Password</label>
                    <br></br>
                    <input type={checkBox} className="fullbox" name="password" value ={formData.password} onChange={handleChange}></input>
                    <br></br>
                    <input type="checkbox" id="checkbox" name="checkbox" onClick={handleShowPassword}></input>Show Password
                    <br></br><br></br>
                    <button className ="cancel">Cancel</button><button className="save">Save</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileManagement;