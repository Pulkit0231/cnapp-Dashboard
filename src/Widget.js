import React from "react";

const Widget = ({ widget, removeWidget }) => {
    return (
        <div className="widget-card">
            <h3>{widget.name}</h3>
            <div className="widget-content">
                <p>{widget.text}</p>
                <button className="add-widget-button" onClick={removeWidget}>Remove</button>
            </div>
        </div>
    );
};

export default Widget;
