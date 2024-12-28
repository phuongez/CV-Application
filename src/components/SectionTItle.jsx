import PersonalInfos from "./PersonalInfos";

export default function SectionTitle({title, onClear, onAutoFill,section}) {
    return (
        <>
            <div className="section-heading">
                <h2>{title}</h2>
                <div className="section-btns">
                    <button className="clear-btn" onClick={() => onClear(section)}>Clear</button>
                    <button className="auto-fill-btn" onClick={() => onAutoFill(section)}>Auto-Fill</button>
                </div>
            </div>
        </>
    )
}