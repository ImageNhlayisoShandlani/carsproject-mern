# MERN Cars Showcase

A full-stack MERN application that serves a car listing API from an Express backend and includes a React/Vite frontend. The backend stores car inventory data in MongoDB and the frontend is built with React, TypeScript and Material UI.

## Features
- Express API serving car data from MongoDB
- MongoDB seeder for inserting sample vehicle listings
- React + Vite frontend with navigation and layout
- Concurrent development mode for backend and frontend

## Tech Stack
- Node.js
- Express
- MongoDB / Mongoose
- React
- TypeScript
- Vite
- Material UI

## Prerequisites
- Node.js 18+ installed
- npm installed
- MongoDB connection available (local or Atlas)

## Setup
1. Clone the repository
2. Install root dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   cd ..
   ```
4. Create a `.env` file in `backend/` with your MongoDB URL:
   ```env
   MONGODB_URL=mongodb://localhost:27017/your-db-name
   SERVE_PORT=5000
   ```

## Seed the Database
Import the sample cars into the database:

```bash
npm run importData
```

This runs `backend/seeder.js`, which clears existing cars and inserts the sample `CARS` dataset.

## Running the App
### Development (backend + frontend)
From the project root:

```bash
npm run dev-all
```

### Run only backend
```bash
npm run backend
```

### Run only frontend
```bash
npm run frontend
```

The frontend will start at `http://localhost:5173` by default and the backend API listens on port `5000` unless overridden.

## API Endpoints
The backend exposes the following routes:

- `GET /cars` - returns all car listings
- `GET /cars/:id` - returns a single car by its MongoDB `_id`

### Example
```bash
curl http://localhost:5000/cars
curl http://localhost:5000/cars/<carId>
```

## Project Structure
- `backend/`
  - `server.js` - Express server entry point
  - `routes/productRoutes.js` - car API routes
  - `models/carModel.js` - Mongoose car schema
  - `config/dbConnect.js` - MongoDB connection helper
  - `seeder.js` - seed script for sample car data
  - `db/cars.js` - sample car dataset
- `frontend/`
  - `src/` - React application source
  - `components/` - reusable UI components
  - `App.tsx` - main app component
  - `vite.config.ts` - Vite configuration

## Notes
- The backend uses `dotenv` to load environment variables from `backend/.env`.
- The frontend is a Vite-powered React/TypeScript app and currently includes a simple landing section and navigation component.
- Make sure MongoDB is running and reachable before starting the backend.

## License
MIT
