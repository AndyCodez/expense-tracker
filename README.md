# Expense Tracker (Frontend) - A Personal Finance Tracking Application
## Overview
This project is a simplified web-based personal finance tracking application developed as a rapid prototype within a limited timeframe. It allows users to add and categorize their expenses, providing a basic user interface for adding expenses and viewing them in a list and graph format.

## Key URLs
Backend API: https://github.com/AndyCodez/expense-tracker-backend 

## Features
1. **Expense Tracking**: Users can add expenses with details such as date, expense name, amount, and category.
2. **Clear Expense List**: The application provides a solution for displaying the list of expenses in a readable format.
3. **Modular Architecture**: The application architecture is designed to separate concerns and promote modularity, allowing for easy extension to include additional features in the future.
4. **Data Visualization**: Incorporates a pie chart built using Chart.js to display financial data and insights.

## Technology Stack
**Backend**: Node.js (Express.js), MongoDB

**Frontend**: React.js

**Charting Library**: Chart.js

## Setting Up the Application
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Rename `.env.example` to `.env` and configure your application.
4. Install dependencies by running npm install.
5. Start the MongoDB server.
6. Start the backend server by running npm start in the backend directory.
7. Start the frontend development server by running npm start in the frontend directory.
8. Access the application in your web browser at http://localhost:3001 or the through the url you provided in your .env file.

## Application Architecture
The application follows a client-server architecture. The backend, developed using Node.js with Express.js and MongoDB, serves as the API server handling requests from the frontend. The frontend, built with React.js, communicates with the backend to manage user interactions and data visualization. The codebase is structured to separate concerns, with clear division between frontend and backend functionalities.

## Testing
Due to the time-limited nature of this rapid prototype, testing was not included in the development process. While testing is a crucial aspect of software development for ensuring code quality and reliability, it was omitted in this prototype to prioritize meeting the project's deadline.

In a production environment or for further development, writing comprehensive unit tests, integration tests, and end-to-end tests would be highly recommended to validate the application's functionality and maintain code quality over time.

## Assumptions
During development, the following assumptions were made:

1. Users will primarily interact with the application through a web browser.
2. Authentication and user management functionalities are not required for this prototype.
3. The focus is on basic expense tracking and visualization, rather than advanced financial analysis features.
4. Due to time constraints, API versioning was not implemented in this prototype. Implementing API versioning is recommended for future development to manage changes and maintain backward compatibility.
