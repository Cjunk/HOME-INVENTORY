# Home Harmony: The Ultimate Home Inventory Solution

## Overview

Home Harmony is an advanced home inventory application designed to organize and keep track of every item in your household. It serves as a dynamic solution for managing an array of items from pantry staples to electronic gadgets, furniture, and movie collections. The application combines robust functionality with a user-friendly interface, allowing users to add images, detailed descriptions, and PDFs for each item.

## Key Functionalities

- **Multi-Categorical Inventory Tracking:** Users can classify items into various categories such as food, electronics, furniture, etc.
- **Detailed Item Descriptions:** Facilitates storing multiple images, PDF files, and detailed information about each item.
- **Location Tagging:** Enables users to record and track the exact location of each item within their home.
- **Cross-Device Accessibility:** Accessible on both desktop and mobile devices, ensuring easy management of inventory anytime, anywhere.

## Technical Specifications

### Frontend Development

- **Framework:** React.js
- **State Management:** React Hooks and Context API for managing application state.
- **Routing:** React Router for navigation within the application.
- **Responsive Design:** CSS and media queries ensure the application is mobile-friendly.

### Backend Development

- **Framework:** Express.js
- **Database:** MySQL for data storage.
- **API:** RESTful API design for data retrieval and management.
- **Session Management:** `express-session` for managing user sessions.
- **Security:** `bcrypt` for password hashing and secure authentication.
- **Cross-Origin Resource Sharing (CORS):** Configured to handle requests from different origins.

### Database Design

- **Schema:** Well-structured database schema to efficiently store and retrieve inventory data.
- **Queries:** Optimized SQL queries for data manipulation and retrieval.

### Version Control

- **Platform:** GitHub for source code management and version control.
- **Branching Strategy:** Feature-based branching to ensure streamlined development and code integration.

### Environment Setup

- **Local Development:** Project setup on both desktop and laptop environments.
- **Remote Access:** SSH setup for remote development and debugging.
- **WSL Environment:** Windows Subsystem for Linux (WSL) used for development in a Linux-like environment on Windows.

### Deployment and Hosting

- **Server Configuration:** Custom server setup with Express.js running on a local machine.
- **Domain Configuration:** Personal domain configuration for application accessibility.
- **Hosting:** Local hosting with plans for cloud deployment.

### Cross-Origin Issues

- **WSL Impact:** Awareness of IP changes due to WSL environment and strategies to handle cross-origin issues.

### Security Considerations

- **Authentication:** Implementation of secure login/logout functionality.
- **Session Management:** Handling of session IDs and cookies for maintaining user sessions.

### Testing and Quality Assurance

- **Unit Testing:** Plans to implement unit testing for backend logic.
- **End-to-End Testing:** Strategies for comprehensive testing of the entire application.

### User Experience

- **Wireframes:** Creation of wireframes for each page to guide frontend development.
- **User Feedback:** Mechanisms for collecting user feedback after launch.

## Current Status

- Two routes implemented on the API: `/login` and `/test`.
- Session management is in place but experiencing issues with session ID consistency.

## Next Steps

1. Resolve session management issues.
2. Develop additional API endpoints as per project requirements.
3. Implement frontend pages and components based on wireframes.
4. Set up a testing framework for both unit and integration tests.
5. Further optimize cross-origin setups for seamless development experience.

---

Home Harmony stands as a testament to organized living, bringing peace of mind and efficiency to managing personal belongings. With its blend of technical robustness and user-centric design, it is poised to be an indispensable tool in any household.
