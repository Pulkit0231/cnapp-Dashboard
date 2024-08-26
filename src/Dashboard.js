import React, { useState, useEffect } from "react";
import Category from "./Category";
import "./Dashboard.css";
import AddWidgetPopup from "./AddWidgetPopup";

const Dashboard = () => {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        fetch("/dashboardData.json")
            .then((response) => response.json())
            .then((data) => setCategories(data.categories))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);


    const addWidget = (categoryId, widget) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.id === categoryId
                    ? { ...category, widgets: [...category.widgets, widget] }
                    : category
            )
        );
    };

    const removeWidget = (categoryId, widgetId) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.id === categoryId
                    ? {
                        ...category,
                        widgets: category.widgets.filter(
                            (widget) => widget.id !== widgetId
                        ),
                    }
                    : category
            )
        );
    };

    const handleAddWidgetClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleConfirm = (selectedWidgets) => {
        const updatedCategories = categories.map(category => ({
            ...category,
            widgets: category.widgets.filter(widget =>
                selectedWidgets.some(selected => selected.id === widget.id && selected.categoryId === category.id)
            )
        }));
        setCategories(updatedCategories);
        setIsPopupOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredCategories = categories.map((category) => ({
        ...category,
        widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    }));

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div >
                    <h1>CNNAP Dashboard</h1>
                </div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="🔎︎ Search anything..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="add-widget-button" onClick={handleAddWidgetClick}>
                    + Add Widget
                </button>
            </div>
            <div className="dashboard-content">

                {filteredCategories.map((category) => (
                    <Category
                        key={category.id}
                        category={category}
                        addWidget={addWidget}
                        removeWidget={removeWidget}

                    />
                ))}
                <AddWidgetPopup
                    isOpen={isPopupOpen}
                    onClose={handlePopupClose}
                    onConfirm={handleConfirm}
                    categories={categories}
                />
            </div>

        </div>
    );
};

export default Dashboard;
