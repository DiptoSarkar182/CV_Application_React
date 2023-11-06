import { useState } from 'react'
import General_Information from './components/general_information';
import Educational_Experience from './components/educational_Experience';


export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const fullName = firstName + ' ' + lastName;
  const [schoolName, setSchoolName] = useState(''); 
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleFirstName(data){
    setFirstName(data);
  }

  function handleLastName(data){
    setLastName(data);
  }

  function handleEmail(data){
    setEmail(data);
  }

  function handlePhoneNumber(data){
    setPhoneNumber(data);
  }

  function handleSchoolName(data){
    setSchoolName(data);
  }

  function handleTitleOfStudy(data){
    setTitleOfStudy(data);
  }

  function handleStartDate(data){
    setStartDate(data);
  }

  function handleEndDate(data){
    setEndDate(data);
  }

  return (
    <div>
      <General_Information 
        sendFirstName={handleFirstName}
        sendLastName={handleLastName}
        sendEmail={handleEmail}
        sendPhoneNumber={handlePhoneNumber}
      ></General_Information>

      <Educational_Experience
        sendSchoolName={handleSchoolName}
        sendTitleOfStudy={handleTitleOfStudy}
        sendStartDate={handleStartDate}
        sendEndDate={handleEndDate}
      ></Educational_Experience>

      <div className="general_Information">
        <div>{fullName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
      </div>

      <div className="educational_Experience">
        <div>{schoolName}</div>
        <div>{titleOfStudy}</div>
        <div>{startDate}</div>
        <div>{endDate}</div>
      </div>
      
    </div>
  );
  
}

