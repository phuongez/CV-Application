
export default function PersonalInfos({onChange,values}) {
    return (
        <>
            <div className="input-container">
                <label htmlFor="fullName">Full Name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    onChange={onChange}
                    value={values?.fullName || ""}
                    />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    onChange={onChange}
                    value={values?.email || ""}
                    />
            </div>
            <div className="two-input-container">
                <div className="input-container">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone"
                        onChange={onChange}
                        value={values?.phone || ""}
                        />
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
            </div>
        </>
    );
}