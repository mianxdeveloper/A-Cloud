import React from "react";
import "../css/Label.css";

const Label = ({Label}) => {
    return (
        <>
            <div className="label">
                <i className="ri-folder-5-fill folder"></i>&nbsp; {Label}
            </div>
        </>
    );
};

export default Label;