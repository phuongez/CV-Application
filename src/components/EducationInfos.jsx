
export default function EducationInfos({index,onChange,value}) {
    return (
        <>
            <div className="education-heading">
                <div>Education {index+1}</div>
                <img src="src/assets/delete-outline.svg" alt="bin icon" />
            </div>
            <div className="input-container">
                <label htmlFor="schoolName">School Name</label>
                <input 
                    type="text" 
                    id="schoolName" 
                    name="schoolName"
                    onChange={onChange}
                    value={value?.schoolName || ""}
                    />
            </div>
            <div className="input-container">
                <label htmlFor="location">location</label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                    onChange={onChange}
                    value={value?.location || ""}
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
                        value={value?.startDate || ""}
                        />
                </div>
                <div className="input-container">
                    <label htmlFor="endDate">End Date</label>
                    <input 
                        type="text" 
                        id="endDate" 
                        name="endDate"
                        onChange={onChange}
                        value={value?.endDate || ""}
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
                    value={value?.location || ""}
                    />
            </div>
            
        </>
    );
}