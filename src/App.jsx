import { useState } from 'react'
import './App.css'
import PersonalInfos from './components/PersonalInfos'
import SectionTitle from './components/SectionTItle';
import EducationInfos from './components/EducationInfos'
import ExperienceInfos from './components/ExperienceInfos';
import OutputCV from './components/OutputCV';

function App() {

  const [userData, setUserData] = useState({});
  const [userEducation, setUserEducation] = useState([{}]);
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
    if (section === "personalInfos") {
      setUserData({fullName: "Duy Phuong",email: "duyphuong.hvnh@gmail.com", phone: "0949048788", location: "Vietnam"});
    } else if (section === "education") {
        setUserEducation({});
      } else {
        setUserExperience({});
      }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedUserEducation = [...userEducation];
    updatedUserEducation[index] = {...updatedUserEducation[index],[name]:value}
    setUserEducation(updatedUserEducation)
  }

  return (
    <div className='app-display'>
      <div className="input-field">
        <div className="personal-infos input-container">
          <SectionTitle title="Personal Information" onClear={handleClear} onAutoFill={handleAutoFill} section="personalInfos"/>
          <PersonalInfos values={userData} onChange={handleInputChange}/>
        </div>
  {/* Education input section       */}
        <div className="education-infos input-container">
          <SectionTitle title="Education" onClear={handleClear} onAutoFill={handleAutoFill} section="educationInfos"/>
          {userEducation.map((edu,index) => (
            <div key={index}>
              {index > 0 && <hr />}
              <EducationInfos index={index} onChange={(e) => handleEducationChange(index, e)} value={edu}/>
            </div>
          ))}
          <button className="addEducation">Add New Education</button>
        </div>
  {/* Experience input section       */}        
        <div className="experience-infos input-container">
          <SectionTitle title="Experience" onClear={handleClear} onAutoFill={handleAutoFill}/>
          <ExperienceInfos values={userExperience} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="output-field">
        <OutputCV userData={userData} userEducation={userEducation} userExperience={userExperience}/>
      </div>
    </div>
  )
}

export default App
