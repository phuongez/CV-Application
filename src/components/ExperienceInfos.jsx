
export default function ExperienceInfos({index,onChange,onDelete,value}) {
    return (
        <>
            <div className="education-heading">
                <div>Experience {index+1}</div>
                <button className="delete-icon" onClick={onDelete}>
                    <img src="src/assets/delete-outline.svg" alt="bin icon" />
                </button>
            </div>
            <div className="input-container">
                <label htmlFor="companyName">Company Name</label>
                <input 
                    type="text" 
                    id="companyName" 
                    name="companyName"
                    onChange={onChange}
                    value={value?.companyName || ""}
                    />
            </div>
            <div className="input-container">
                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    name="position"
                    onChange={onChange}
                    value={value?.position || ""}
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
            <div className="input-container">
                <label htmlFor="description">Description</label>
                <textarea
                    type="text" 
                    id="description" 
                    name="description"
                    onChange={onChange}
                    value={value?.description || ""}
                    />
            </div>
        </>
    );
}