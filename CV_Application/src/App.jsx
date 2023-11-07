import { useState } from 'react'
import General_Information from './components/general_information';
import Educational_Experience from './components/educational_Experience';
import Practical_Experience from './components/practical_Experience';
import './styles/App.css';

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
  const [companyName, setCompanyName] = useState('');
  const [titleOfPosition, setTitleOfPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [expStartDate, setExpStartDate] = useState('');
  const [expEndDate, setExpEndDate] = useState('');
  

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

  function handleCompanyName(data){
    setCompanyName(data);
  }

  function handleTitleOfPosition(data){
    setTitleOfPosition(data);
  }

  function handleResponsibilities(data){
    setResponsibilities(data);
  }

  function handleExpStartDate(data){
    setExpStartDate(data);
  }

  function handleExpEndDate(data){
    setExpEndDate(data);
  }

  return (
    <div className='test'>
      <div className='headerContainer'>
        <header className='header'><h1>CV App</h1></header>
      </div>
      <div className='inputAndOutput'>
        <div className='input'>
          <div>
            <General_Information 
              sendFirstName={handleFirstName}
              sendLastName={handleLastName}
              sendEmail={handleEmail}
              sendPhoneNumber={handlePhoneNumber}
            ></General_Information>
          </div>
          <div>
            <Educational_Experience
              sendSchoolName={handleSchoolName}
              sendTitleOfStudy={handleTitleOfStudy}
              sendStartDate={handleStartDate}
              sendEndDate={handleEndDate}
            ></Educational_Experience>
          </div>
          <div>
            <Practical_Experience
              sendCompanyName={handleCompanyName}
              sendTitleOfPosition={handleTitleOfPosition}
              sendResponsibilities={handleResponsibilities}
              sendStartDate={handleExpStartDate}
              sendEndDate={handleExpEndDate}
            ></Practical_Experience>
          </div>
        </div>
          <div className='output'>
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

            <div className="practical_Experience">
              <div>{companyName}</div>
              <div>{titleOfPosition}</div>
              <div>{responsibilities}</div>
              <div>{expStartDate}</div>
              <div>{expEndDate}</div>
            </div>
        </div>
      </div>
      
    </div>
  );
  
}

