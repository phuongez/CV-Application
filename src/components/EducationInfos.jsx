
export default function EducationInfos({onChange,values}) {
    return (
        <>
            <div className="education-heading">
                <div>Education {}</div>
                <img src="src/assets/delete-outline.svg" alt="bin icon" />
            </div>
            <div className="input-container">
                <label htmlFor="schoolName">School Name</label>
                <input 
                    type="text" 
                    id="schoolName" 
                    name="schoolName"
                    onChange={onChange}
                    value={values?.schoolName || ""}
                    />
            </div>
            <div className="input-container">
                <label htmlFor="location">location</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    onChange={onChange}
                    value={values?.location || ""}
                    />
            </div>
            <div className="two-input-container">
                <div className="input-container">
                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="text" 
                        id="startDate" 
                        name="startDate"
                        onChange={onChange}
                        value={values?.startDate || ""}
                        />
                </div>
                <div className="input-container">
                    <label htmlFor="endDate">End Date</label>
                    <input 
                        type="text" 
                        id="endDate" 
                        name="endDate"
                        onChange={onChange}
                        value={values?.endDate || ""}
                        />
                </div>
            </div>
            <div className="input-container">
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    onChange={onChange}
                    value={values?.location || ""}
                    />
            </div>
            <button className="addEducation">Add New Education</button>
        </>
    );
}