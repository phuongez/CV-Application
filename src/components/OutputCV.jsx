export default function OutputCV({userData,userEducation,userExperience}) {
    return (
        <div className="cv-display">
            <div className="cv-personal-infos">
                <div className="user-name">
                    {userData.fullName}
                </div>
                <div className="user-contact">
                    <div className="user-email">
                        <img src="src/assets/email-outline.svg" alt="email icon" />
                        <p>{userData.email}</p>
                    </div>
                    <div className="user-phone">
                        <img src="src/assets/cellphone.svg" alt="phone icon" />
                        <p>{userData.phone}</p>
                    </div>
                    <div className="user-location">
                        <img src="src/assets/map-marker-outline.svg" alt="address icon" />
                        <p>{userData.location}</p>
                    </div>
                </div>
            </div>
            <div className="cv-edu-exp">
                <div className="cv-title">Education</div>
                <div className="cv-education">
                    {userEducation.map((edu,index) => (
                        <div key={index} className="education-display">
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <p><b>{edu.schoolName}</b></p>
                            <p>{edu.location}</p>
                            <p>{edu.degree}</p>
                        </div>    
                    ))}
                </div>
                <div className="cv-title">Experience</div>
                <div className="cv-education">
                    {userExperience.map((exp,index) => (
                        <div key={index} className="education-display">
                            <p>{exp.startDate} - {exp.endDate}</p>
                            <p><b>{exp.companyName} ({exp.position})</b></p>
                            <p>{exp.location}</p>
                            <p>{exp.description}</p>
                        </div>    
                    ))}
                </div>
            </div>
        </div>
    )
}