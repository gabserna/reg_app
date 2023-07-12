**Registration App - Capstone Project**

# Project Description

This project will build a Student Registration App using Express.js as the web server, bcrypt, passport and jwt as the authentication system, and either MongoDB or Postgres as the database. The frontend of the application will be built using either React or Vue. The app will have two user roles: student and administrator. Students will be able to register and manage their own details including username, email, firstname, lastname, telephone, and address. 

Students should also be able to register/unregister for courses. Administrators will be able to view the registered students and manage their details and courses. Admins should be able to: Edit all users details (username, email, firstname, lastname, telephone, address, isAdmin etc...), create/delete users. Edit all courses details (title, description, schedule, capacity, tuition_cost etc...), create/delete courses. Register/unregister any student for any course.

The application will also have a filter feature to allow admins to search for registered students and courses. The application should also make good use of environment variables for any ports, urls, or secrets.

The task breakdown for this project includes setting up a web server and configuring Express.js, setting up a React/Vue frontend application. Setting up an authentication system using bcryt, passport and jwt. Setting up the database including creating user and course models/tables. Creating login, user registration, student profile, courses, and administrator pages. Creating a filter feature for the courses and admin pages. Configuring logging (Winston/Morgan). Creating client side routes, creating client side route guard for both logged in users and admin users. Creating server side route guards for both logged in users and admin users. Include responsive design. Implementing a loading icon. Sanitizing inputs and ensuring security. Creating logout functionality. Creating a good directory and code structure. Deploying the application. Refactoring as you go.

# Teams Assigned
Students will work in a team of 2. If you don't have a team member, we will help you find a group to join.

# Project Deadline
Presentation set for August 2023

# Task Breakdown
- Create a web server and configure Express.js
- Create a React/Vue app
- Establish communication between frontend and backend apps.
- Set up an authentication system using bcrypt, passport and jwt
- Set up database (MongoDB or Postgres)
- Create user model - username (unique, required), email (unique, required), hash, isAdmin, - firstName, lastName, telephone, address, createDate
- Create course model - id, title, description, schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost
- Create login page
- Create user registration page
- Create courses page
- Create user profile page
- Create admin page
- Create search feature for courses and users
- Create env variables
- Configure logging (Winston/Morgan)
- Create client-side routes
- Create client-side route guard
- Create server-side routes
- Create server-side route guard
- Implement a loading icon
- Sanitize inputs and ensure security
- Logout functionality
- Good directory and code structure
- Refactor as you go
- Responsive design
- Deploy application to render

# Prepare and Present Presentation
Once the product has been finalized and tested, the team should prepare a presentation to demonstrate the product's features, functions, and components. The presentation should include a clear explanation of the product's purpose and how it works. It should also include screenshots of the user interface and examples of how the product can be used. A date will be determined by Thomas and Curtis for this final presentation.

# Submission
- Create a private repository for your team.
- Post your Git Hub link here - make sure to include all the names of your team members so they can receive credit.
- Share your private repository with Curtis Dalton, Thomas Chan and MountainlandATC.

# How should I rate my teammates' participation?
A good rule of thumb:

- You would give a teammate 8 points if you feel they did their best, communicated timely when they were going to be absent, and collaborated on the project by coding.
- You would give only 4 points to a teammate if you feel they did ok, did not communicate with the team on a timely manner about tardies and absences, and contribute to the project's code in a limited fashion (only CSS or very few lines of code).
- You would give 0 points to a team mate if they barely contributed to the project or nothing at all, and showed complete disregard about communicating to the team about tardies and absences. You can also give points in between as you see fit.


**Rubric**
# User Registration Page: 10% 
- Appropriate fields are included 
- Data is stored and validated correctly 
- Includes a link to the Login page
# Login Page: 10% 
- User can log in and log out successfully 
- Gracefully handles incorrect credentials
- Includes a link to the User Registration page
# User Profile Page: 10% 
- Profile page is easy to use 
- Data is stored and retrieved correctly 
- User can update information successfully 
- Correctly displays users schedule
- Correctly displays users total tuition fees.
- Correctly displays users total credit hours
# Course Pages: 10% 
- Correctly displays information for all courses.
- Includes a search/filter feature
- Students can correctly register courses
- Students cannot register for courses that are full, or that they are already registered for.
# Administrator Pages: 10% 
- Appropriate fields are included 
- Includes a search/filter feature
- Data is stored and retrieved correctly 
- Administrators can create, edit, and delete users successfully 
- Administrators can create, edit, and delete courses successfully 
- Administrators can register/unregister any user for any course
# Logging: 5% 
- Server correctly logs events
- Logs are useful for finding errors in application
# Authentication System: 10% 
- Authentication system is secure 
- User passwords are encrypted
- client-side routes are guarded against users that are not logged in
- client-side admin routes are guarded against non-admin users
- server-side routes are guarded against users that are not logged in
- server-side admin routes are guarded against non-admin users
# Database: 10%
- Collections/Tables have correct data
- Collections/Tables have correct constraints
- Data is updated correctly
- Inputs are correctly sanitized
# Deployment: 5% 
- Application is deployed correctly 
- Application is functional 
- Application is secure
# UX/UI Design: 10% 
- Application is visually appealing 
- Navigation is intuitive 
- Overall design is user-friendly
- Includes responsive design
- Includes loading icon
# Code Structure: 10%
- Code is easy to navigate
- Code is easy to read
- Code is easy to understand
- Code is correctly partitioned 