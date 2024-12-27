import PersonalInfos from "./PersonalInfos";

export default function SectionTitle({title, onClear, onAutoFill}) {
    return (
        <>
            <div className="section-heading">
                <h2>{title}</h2>
                <div className="section-btns">
                    <button onClick={() => onClear("personalInfos")}>Clear</button>
                    <button>Auto-Fill</button>
                </div>
            </div>
        </>
    )
}