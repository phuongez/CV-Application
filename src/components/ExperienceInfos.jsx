
export default function ExperienceInfos({onChange,values}) {
    return (
        <>
            <div className="education-heading">
                <div>Experience {}</div>
                <img src="src/assets/delete-outline.svg" alt="bin icon" />
            </div>
            <div className="input-container">
                <label htmlFor="companyName">Company Name</label>
                <input 
                    type="text" 
                    id="companyName" 
                    name="companyName"
                    onChange={onChange}
                    value={values?.companyName || ""}
                    />
            </div>
            <div className="input-container">
                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    name="position"
                    onChange={onChange}
                    value={values?.position || ""}
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
            <div className="input-container">
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description"
                    onChange={onChange}
                    value={values?.description || ""}
                    />
            </div>
            <button className="addEducation">Add New Education</button>
        </>
    );
}