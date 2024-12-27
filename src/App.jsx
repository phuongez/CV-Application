import { useState } from 'react'
import './App.css'
import PersonalInfos from './components/PersonalInfos'
import SectionTitle from './components/SectionTItle';

function App() {

  const [userData, setUserData] = useState({});
  const [userEducation, setUserEducation] = useState({});
  const [userExperience, setUserExperience] = useState({});

  const handleClear = (section) => {
    if (section === "personalInfos") {
      setUserData({});
    } else if (section === "education") {
        setUserEducation({});
      } else {
        setUserExperience({});
      }
  }

  const handleAutoFill = (section) => {

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <>
      <div className="input-field">
        <div className="personal-infos input-container">
          <SectionTitle title="Personal Information" onClear={handleClear} onAutoFill={handleAutoFill}/>
          <PersonalInfos values={userData} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="output-field">

      </div>
    </>
  )
}

export default App
