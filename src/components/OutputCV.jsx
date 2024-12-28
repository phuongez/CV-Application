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

            </div>
        </div>
    )
}