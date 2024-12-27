import { useState } from 'react'
import './App.css'
import PersonalInfos from './components/PersonalInfos'
import SectionTitle from './components/SectionTItle';
import EducationInfos from './components/EducationInfos'
import ExperienceInfos from './components/ExperienceInfos';
import OutputCV from './components/OutputCV';

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
    <div className='app-display'>
      <div className="input-field">
        <div className="personal-infos input-container">
          <SectionTitle title="Personal Information" onClear={handleClear} onAutoFill={handleAutoFill}/>
          <PersonalInfos values={userData} onChange={handleInputChange}/>
        </div>
        <div className="education-infos input-container">
          <SectionTitle title="Education" onClear={handleClear} onAutoFill={handleAutoFill}/>
          <EducationInfos values={userEducation} onChange={handleInputChange}/>
        </div>
        <div className="experience-infos input-container">
          <SectionTitle title="Experience" onClear={handleClear} onAutoFill={handleAutoFill}/>
          <ExperienceInfos values={userExperience} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="output-field">
        <OutputCV />
      </div>
    </div>
  )
}

export default App
