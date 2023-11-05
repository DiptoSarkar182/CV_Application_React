import { useState,useEffect } from "react";

export default function General_Information({
    sendFirstName,
    sendLastName
}){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    

    return (
        <div>
            <h2>Please provide your name.</h2>
            <label>
                First Name: {' '}
                <input
                    value={firstName}
                    onChange={(e) => {
                    setFirstName(e.target.value);
                    sendFirstName(e.target.value);}}
                ></input>
            </label>

            <label>
                Last Name: {' '}
                <input
                    value={lastName}
                    onChange={(e) =>{ 
                    setLastName(e.target.value);
                    sendLastName(e.target.value);}}
                ></input>
            </label>
        </div>
    );
}