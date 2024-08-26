# React Dashboard Project

This project is a dynamic dashboard built with React that allows users to manage various widgets across different categories. Users can add, remove, and search for widgets in real time, making the dashboard highly customizable and interactive.

## Table of Contents
Getting Started

Project Structure

* Features

* Functionality

* JSON Structure


## Getting Started

### Prerequisites

To run this project locally, you need to have the following installed on your machine:

Node.js (version 14.x or higher)

npm (Node Package Manager)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-dashboard.git
cd react-dashboard
```
2. Install the dependencies:

```bash
npm install
```
3. Start the development server:

```bash
npm start
```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Features

* Dynamic Widgets: Users can dynamically add and remove widgets from categories.
* Category Management: Widgets are grouped into categories. Users can choose which widgets to display within each category.
* Search Functionality: A search input allows users to filter widgets by name.
* Responsive Design: The dashboard is styled to be responsive and user-friendly.

## Functionality

1. Adding Widgets:
* Users can click the "Add Widget" button to open a modal.
* In the modal, users can select widgets from different categories to add to the dashboard.
* Initially, all widgets are selected by default.
* Users can check or uncheck widgets as needed.
* When the user clicks "Confirm," the selected widgets are added to the corresponding categories on the dashboard.

2. Removing Widgets:
* Each widget on the dashboard has a "Remove" button (represented by a cross icon).
* Clicking the "Remove" button will remove the widget from the dashboard.
* Widgets can also be removed from the dashboard by unchecking them in the "Add Widget" modal and clicking "Confirm."

3. Search Functionality:
* Users can search for widgets using the search input located on the dashboard.
* The search is case-insensitive and will dynamically filter widgets based on the user's input.

4. JSON-based Configuration:
* The dashboard's structure, including categories and widgets, is defined in a 
 'dashboardData.json' file.
* This allows for easy customization and scalability of the dashboard by simply editing the JSON data.

