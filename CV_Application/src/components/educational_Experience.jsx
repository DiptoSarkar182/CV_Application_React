import { useState } from "react";


export default function Educational_Experience({
    sendSchoolName,
    sendTitleOfStudy,
    sendStartDate,
    sendEndDate
}){
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        sendSchoolName(schoolName);
        sendTitleOfStudy(titleOfStudy);
        sendStartDate(startDate);
        sendEndDate(endDate);
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <h2>Education Info</h2>
                
                <label>
                    School Name: {' '}
                    <input 
                        value={schoolName}
                        onChange={(e) => {
                            setSchoolName(e.target.value);
                    }}>
                    </input>
                </label>

                <label>
                    Title Of Study: {' '}
                    <input value={titleOfStudy} 
                    onChange={(e) => {
                        setTitleOfStudy(e.target.value);
                    }}></input>
                </label>

                <label>
                    Start Date: {' '}
                    <input type="date" value={startDate}
                    onChange={(e)=>{
                        setStartDate(e.target.value);
                    }}></input>
                </label>

                <label>
                    End Date: {' '}
                    <input type="date" value={endDate}
                    onChange={(e)=>{
                        setEndDate(e.target.value);
                    }}></input>
                </label>
                <button type="submit">Submit</button>
                </form>
        </div>
    );
}