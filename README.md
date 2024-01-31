Redux Feedback Project

Introduction
🌟 Welcome to the Redux Feedback Project! This application is a sleek solution for capturing user feedback. It incorporates Redux for state management, React for a dynamic UI, and Material-UI for styling, showcasing modern web development practices.

Tech Stack:
Frontend: React for a dynamic UI.
State Management: Redux for application state management.
Styling: Material-UI for a polished look.
Routing: React Router for app navigation.
HTTP Requests: Axios for backend communication.
Backend: Node.js and Express (assumed setup).
Database: PostgreSQL for data storage (assumed usage).
Deployment:
The application is deployed on Heroku, offering a live, interactive experience. Check it out here: https://dashboard.heroku.com/apps/sql-redux-feedback

Local Development Setup:
Clone the Repository
Navigate to the Project Directory
Install Dependencies
Start the React App: npm start
Access the App at http://localhost:3000.
Features
Feedback collection forms for feelings, understanding, and support.
Navigational flow between feedback stages.
Review and modification capabilities before final submission.
Admin page for feedback review and management.
Engaging, user-friendly interface.
Project Structure
FeelingsForm: Captures user's feelings.
UnderstandingForm: Assesses understanding.
SupportForm: Inquires about support.
CommentsForm: Allows for additional comments.
Submit: Manages feedback submission.
SubmitSuccess: Indicates successful submission.
Admin: Interface for feedback management.

Admin Functionality
The Admin component, accessible manually by navigating to /admin in the URL, offers advanced feedback management features:

Flagging Feedback: Allows admins to flag feedback for review.
Deleting Feedback: Enables feedback deletion, with a confirmation modal to prevent accidental data loss.
Confirmation Modal: A 'Are You Sure?' modal for deletion confirmation, detailing the feedback to be deleted for admin review.


Contributing
Join in enhancing this project:

Fork the Repository.
Create a New Branch (git checkout -b your-branch).
Commit Changes (git commit -am 'Add a feature').
Push to the Branch (git push origin your-branch).
Submit a Pull Request.

Contact
Questions or suggestions? Contact me at JakeTBuroker@gmail.com
