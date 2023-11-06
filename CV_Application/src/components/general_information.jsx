import { useState } from "react";
import PropTypes from "prop-types";

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
    const fullName = firstName + ' ' + lastName;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendFirstName(firstName);
        sendLastName(lastName);
        sendEmail(email);
        sendPhoneNumber(phoneNumber);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h2>Contact Info</h2>
                <label>
                    First Name: {' '}
                    <input
                        value={firstName}
                        onChange={(e) => {
                        setFirstName(e.target.value);
                        }}
                    ></input>
                </label>

                <label>
                    Last Name: {' '}
                    <input
                        value={lastName}
                        onChange={(e) =>{ 
                        setLastName(e.target.value);
                        }}
                    ></input>
                </label>

                <label>
                    Email: {' '}
                    <input
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                    ></input>
                </label>

                <label>
                    Phone Number: {' '}
                    <input
                        value={phoneNumber}
                        onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        }}
                    ></input>
                </label>
                <button type='submit' >Submit</button>
            </form>
        </div>
        
    );
}
// General_Information.propTypes = {
//     sendFirstName: PropTypes.func.isRequired,
//     sendLastName: PropTypes.func.isRequired,
//     sendEmail: PropTypes.func.isRequired,
//     sendPhoneNumber: PropTypes.func.isRequired
//   };