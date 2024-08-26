import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";

const Category = ({ category, addWidget, removeWidget }) => {
    return (
        <div className="category">
            <h2 className="category-title">{category.name}</h2>
            <div className="widgets-grid">
                {category.widgets.map((widget) => (
                    <Widget
                        key={widget.id}
                        widget={widget}
                        removeWidget={() => removeWidget(category.id, widget.id)}
                    />
                ))}
                <div className="widget-card">
                    <AddWidgetForm categoryId={category.id} addWidget={addWidget} />
                </div>
            </div>

        </div >
    );
};

export default Category;
