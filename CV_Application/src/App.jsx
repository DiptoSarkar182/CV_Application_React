import { useState } from 'react'
import General_Information from './components/general_information';


export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + ' ' + lastName;

  function handleFirstName(sendName){
    setFirstName(sendName);
  }
  function handleLastName(sendName){
    setLastName(sendName);
  }

  function testValue(){
    console.log(fullName);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      testValue();
    }}>
      <General_Information 
      sendFirstName={handleFirstName}
      sendLastName={handleLastName}
      >
      </General_Information>
      <button type='submit'>Submit</button>
    </form>
  );
}

