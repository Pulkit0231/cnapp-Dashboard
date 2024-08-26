import React, { useState, useEffect } from "react";
import "./AddWidgetPopup.css";

const AddWidgetPopup = ({ isOpen, onClose, onConfirm, categories }) => {
    const [selectedTab, setSelectedTab] = useState(categories && categories.length > 0 ? categories[0].id : "");

    const [selectedWidgets, setSelectedWidgets] = useState([]);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedTab(categories[0].id);

            const initialSelectedWidgets = categories.flatMap(category =>
                category.widgets.map(widget => ({
                    ...widget,
                    categoryId: category.id
                }))
            );
            setSelectedWidgets(initialSelectedWidgets);
        }
    }, [categories]);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleWidgetSelection = (widget, categoryId) => {
        setSelectedWidgets((prevSelected) =>
            prevSelected.some((w) => w.id === widget.id && w.categoryId === categoryId)
                ? prevSelected.filter((w) => !(w.id === widget.id && w.categoryId === categoryId))
                : [...prevSelected, { ...widget, categoryId }]
        );
    };

    const handleConfirm = () => {
        onConfirm(selectedWidgets);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <h2>Add Widget</h2>
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="popup-body">
                    <p>Personalize your dashboard by adding the following widget:</p>
                    <div className="tabs">
                        {categories?.map((category) => (
                            <button
                                key={category.id}
                                className={`tab-button ${selectedTab === category.id ? "active" : ""}`}
                                onClick={() => handleTabChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="widget-list">
                        {categories
                            .find((category) => category.id === selectedTab)?.widgets.map((widget) => (
                                <div key={widget.id} className="widget-item">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedWidgets.some(
                                                (w) => w.id === widget.id && w.categoryId === selectedTab
                                            )}
                                            onChange={() => handleWidgetSelection(widget, selectedTab)}
                                        />
                                        {widget.name}
                                    </label>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="popup-footer">
                    <button className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="confirm-button" onClick={handleConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddWidgetPopup;
