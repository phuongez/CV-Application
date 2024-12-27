import PersonalInfos from "./PersonalInfos";

export default function SectionTitle({title, onClear, onAutoFill}) {
    return (
        <>
            <div className="section-heading">
                <h2>{title}</h2>
                <div className="section-btns">
                    <button className="clear-btn" onClick={() => onClear("personalInfos")}>Clear</button>
                    <button className="auto-fill-btn">Auto-Fill</button>
                </div>
            </div>
        </>
    )
}