
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
        </>
    );
}