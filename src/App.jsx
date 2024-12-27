import { useState } from 'react'
import './App.css'
import PersonalInfos from './components/PersonalInfos'

function App() {

  const [userData, setUserData] = useState({});

  const handleInputChange = (e) => {

  }

  return (
    <>
      <div className="input-field">
        <div className="personal-infos">
          <h1>Personal Information</h1>
          <PersonalInfos values={userData} onChange={handleInputChange}/>
        </div>
      </div>
      <div className="output-field">

      </div>
    </>
  )
}

export default App
