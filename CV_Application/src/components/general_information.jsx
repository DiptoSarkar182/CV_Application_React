import { useState } from "react";
// import PropTypes from "prop-types";
import '../styles/index.css'

export default function General_Information({
    sendFirstName,
    sendLastName,
    sendEmail,
    sendPhoneNumber,
}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showEditButton, setShowEditButton] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendFirstName(firstName);
        sendLastName(lastName);
        sendEmail(email);
        sendPhoneNumber(phoneNumber);
        setShowEditButton(!showEditButton);
    }

    return (
       showEditButton ? (
        <div className="setShowEditButton">
            <h2>Edit Contact Info</h2>
            <button 
            onClick={() => setShowEditButton(!showEditButton)}
            >Edit</button>
        </div>
       ) : (<div className="takeInfo">
            <form onSubmit={handleFormSubmit}>
                <h2>Contact Info</h2>
                <label className="label">
                    First Name: {' '}
                    <input
                        className="inputArea"
                        value={firstName}
                        onChange={(e) => {
                        setFirstName(e.target.value);
                        }}
                    ></input>
                </label>

                <label className="label">
                    Last Name: {' '}
                    <input
                        className="inputArea"
                        value={lastName}
                        onChange={(e) =>{ 
                        setLastName(e.target.value);
                        }}
                    ></input>
                </label>

                <label className="label">
                    Email: {' '}
                    <input
                        className="inputArea"
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                    ></input>
                </label>

                <label className="label">
                    Phone Number: {' '}
                    <input
                        className="inputArea"
                        value={phoneNumber}
                        onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        }}
                    ></input>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>)
        
    );
}
// General_Information.propTypes = {
//     sendFirstName: PropTypes.func.isRequired,
//     sendLastName: PropTypes.func.isRequired,
//     sendEmail: PropTypes.func.isRequired,
//     sendPhoneNumber: PropTypes.func.isRequired
//   };