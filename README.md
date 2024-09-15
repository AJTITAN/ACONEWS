


# GNews API Integration Project (ACONEWS)

## Project Setup

This project demonstrates how to fetch and display news articles from the GNews API, incorporating features like search, filters, and pagination. It consists of a backend API for fetching news and a frontend application for displaying it.

### Prerequisites

- Node.js and npm (or yarn)
- Firebase account (for hosting the frontend)
- GNews API key

### Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` File:**

   In the `backend` directory, create a `.env` file and add your GNews API key:

   ```plaintext
   GNEWS_API_KEY=your_gnews_api_key
   ```

4. **Start the Backend Server:**

   ```bash
   npm start
   ```

   The backend server will be running on `http://localhost:3000` by default.

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   If needed, create a `.env` file in the `frontend` directory for any environment-specific settings (e.g., API base URL).

4. **Start the Frontend Development Server:**

   ```bash
   npm start
   ```

   The frontend application will be accessible at `http://localhost:3000` by default.

### Deploying the Frontend to Firebase Hosting

1. **Build the Frontend Application:**

   ```bash
   npm run build
   ```

2. **Initialize Firebase Hosting:**

   If you haven’t already set up Firebase Hosting for your project, run:

   ```bash
   firebase init hosting
   ```

   Follow the prompts to configure Firebase Hosting.

3. **Deploy to Firebase Hosting:**

   ```bash
   firebase deploy 
   ```

   Your frontend application will be live at your Firebase Hosting URL.

## Project Overview

- **Backend:** Node.js with Express.js for handling API requests to the GNews API.
- **Frontend:** React for displaying news articles with Tailwind CSS for styling.
- **Features:** Search functionality, category and region filters, pagination.

## Troubleshooting

- **API Key Issues:** Ensure your GNews API key is valid and not exceeding rate limits and pagination isn't possible as there is limit of 10 post in a request.
- **CORS Issues:** If you encounter CORS errors, check your server configuration or use a proxy.
- **Deployment Errors:** Review Firebase deployment logs and ensure that build configurations are correct.

For detailed documentation and further assistance, refer to the respective documentation for [Node.js](https://nodejs.org/), [React](https://reactjs.org/), and [Firebase Hosting](https://firebase.google.com/docs/hosting).
