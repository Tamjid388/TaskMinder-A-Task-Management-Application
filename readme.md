# TaskMinder 📝

TaskMinder is a task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. The app ensures real-time data synchronization and persistence.

## 🔗 Live Link  
[TaskMinder](https://taskminder-c98c0.web.app/)

## 🚀 Features  
### 1. Authentication  
- Users can sign in using Google Authentication (Firebase Auth).  
- User details (User ID, email, display name) are stored in MongoDB on first login.  

### 2. Task Management System  
- Users can **add, edit, delete**, and **reorder** tasks.  
- Tasks belong to one of three categories:  
  - ✅ To-Do  
  - 🚧 In Progress  
  - 🎯 Done  
- Users can **drag and drop** tasks between categories.  
- Changes are saved instantly to the database.  

### 3. Database & Real-Time Sync  
- **MongoDB (via Express.js server)** stores tasks persistently.  
- Real-time updates using one of the following:  
  - MongoDB **Change Streams**  
  - **WebSockets**  
  - **Optimistic UI Updates**  
  - **Polling (fallback method)**  

### 4. UI & Design  
- **Frontend**: Vite.js + React  
- **Drag & Drop**: Implemented using `react-beautiful-dnd`  
- **Clean UI**: Minimalist design with a **four-color scheme**  
- **Fully responsive**: Optimized for desktop & mobile  

## 🛠️ Tech Stack  
- **Frontend**: React (Vite.js)  
- **Backend**: Express.js, Node.js  
- **Database**: MongoDB  
- **Authentication**: Firebase (Google Sign-In)  
- **Real-Time Sync**: MongoDB Change Streams / WebSockets  

## 📦 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/taskminder.git
cd taskminder

### 2️⃣ Install Dependencies
Frontend
sh
Copy
Edit
cd client
npm install
npm run dev

### 3️⃣ Set Up Environment Variables
Create a .env file in the server directory and add:

sh
Copy
Edit
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
JWT_SECRET=your_jwt_secret_key