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
  const [userExperience, setUserExperience] = useState([{}]);

  const handleClear = (section) => {
    if (section === "personalInfos") {
      setUserData({});
    } else if (section === "educationInfos") {
        setUserEducation([{}]);
      } else {
        setUserExperience([{}]);
      }
  }

  const handleAutoFill = (section) => {
    if (section === "personalInfos") {
      setUserData({fullName: "Duy Phuong",email: "duyphuong.hvnh@gmail.com", phone: "0949048788", location: "Vietnam"});
    } else if (section === "educationInfos") {
        setUserEducation([{schoolName: "Banking Academy", degree: "Bachelor of Banking & Finance", startDate: "9-2008", endDate: "5-2012", location: "Vietnam"}]);
      } else {
        setUserExperience([{companyName: "Agribank", position: "Loan officer", startDate: "11-2012", endDate: "11-2018", location: "Vietnam", description: "As a former Credit Officer at a reputable bank, I was responsible for evaluating and approving loan applications, managing credit portfolios, and ensuring compliance with banking regulations. My role involved assessing borrowers' creditworthiness through detailed financial analysis and risk assessment, conducting thorough background checks, and making informed decisions to minimize potential losses. I collaborated closely with clients to understand their financial needs, provided expert advice on loan products, and maintained strong relationships to foster trust and loyalty."}]);
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

  const handleAddEducation = () => {
    const newUserEducation = [...userEducation,{}];
    setUserEducation(newUserEducation);
  }

  const handleDeleteEducation = (index) => {
    const newUserEducation = userEducation.splice(index-1,1);
    setUserEducation(newUserEducation);
  }

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedUserExperience = [...userExperience];
    updatedUserExperience[index] = {...updatedUserExperience[index],[name]:value}
    setUserExperience(updatedUserExperience)
  }

  const handleAddExperience = () => {
    const newUserExperience = [...userExperience,{}];
    setUserExperience(newUserExperience);
  }

  const handleDeleteExperience = (index) => {
    const newUserExperience = userExperience.splice(index-1,1);
    setUserExperience(newUserExperience);
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
              <EducationInfos index={index} onChange={(e) => handleEducationChange(index, e)} onDelete={() => handleDeleteEducation(index)} value={edu}/>
            </div>
          ))}
          <button className="addEducation" onClick={handleAddEducation}>Add New Education</button>
        </div>
      {/* Experience input section       */}        
        <div className="experience-infos input-container">
          <SectionTitle title="Experience" onClear={handleClear} onAutoFill={handleAutoFill} section="experienceInfos"/>
          {userExperience.map((edu,index) => (
            <div key={index}>
              {index > 0 && <hr />}
              <ExperienceInfos index={index} onChange={(e) => handleExperienceChange(index, e)} onDelete={() => handleDeleteExperience(index)} value={edu}/>
            </div>
          ))}
          <button className="addEducation" onClick={handleAddExperience}>Add New Education</button>
        </div>
      </div>
      <div className="output-field">
        <OutputCV userData={userData} userEducation={userEducation} userExperience={userExperience}/>
      </div>
    </div>
  )
}

export default App
