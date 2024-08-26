import React, { useState } from "react";

const AddWidgetForm = ({ categoryId, addWidget }) => {
    const [widgetName, setWidgetName] = useState("");
    const [widgetText, setWidgetText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newWidget = {
            id: Date.now().toString(),
            name: widgetName,
            text: widgetText
        };
        addWidget(categoryId, newWidget);
        setWidgetName("");
        setWidgetText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-widget"
                type="text"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                placeholder="Widget Name"
                required
            />
            <input
                className="new-widget"
                type="text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
                placeholder="Widget Text"
                required
            />
            <button className="add-widget-button" type="submit">+ Add Widget</button>
        </form>
    );
};

export default AddWidgetForm;
