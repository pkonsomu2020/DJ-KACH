# DJ Kach Website

A modern, responsive website for DJ Kach - a professional gospel DJ and music minister. Built with React, TypeScript, and Node.js.

## Features

- **Modern Design**: Beautiful, responsive design with Tailwind CSS
- **Real-time Data**: Connected to MySQL database with RESTful API
- **Dynamic Content**: Events, services, testimonials, and gallery managed through backend
- **Contact Form**: Functional contact form with database storage
- **Image Slider**: Dynamic hero section with image rotation
- **Countdown Timer**: Live countdown for upcoming events
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Tailwind CSS for styling
- Lucide React for icons
- AOS for animations

### Backend
- Node.js with Express
- MySQL database
- CORS enabled for frontend communication
- Environment variables for configuration

## Project Structure

```
DJ KACH/
├── src/                    # Frontend source code
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── services/         # API service layer
│   └── main.tsx         # App entry point
├── backend/              # Backend server
│   ├── server.js        # Express server
│   ├── db.js           # Database connection
│   ├── schema.sql      # Database schema
│   ├── routes/         # API routes (empty - all in server.js)
│   └── .env           # Environment variables
├── public/             # Static assets
└── package.json       # Frontend dependencies
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MySQL database
- npm or yarn

### 1. Database Setup

1. Create a MySQL database
2. Run the schema file:
   ```sql
   mysql -u your_username -p < backend/schema.sql
   ```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `backend/.env`:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=dj_kach_db
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will be running on `http://localhost:5000`

### 3. Frontend Setup

1. Install frontend dependencies (from project root):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:5173`

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `POST /api/events` - Create new event

### Services
- `GET /api/services` - Get all services

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create new testimonial

### Gallery
- `GET /api/gallery` - Get all gallery images

### Contact
- `POST /api/contact` - Submit contact form

### Statistics
- `GET /api/stats` - Get website statistics

### Health Check
- `GET /api/health` - API health check

## Database Schema

### Tables
- `events` - Event information
- `services` - Service offerings
- `testimonials` - Customer testimonials
- `gallery` - Image gallery
- `contact_inquiries` - Contact form submissions

## Features Implemented

### Frontend
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with image slider
- ✅ Dynamic countdown timer
- ✅ Real-time statistics from database
- ✅ Contact form with API integration
- ✅ Events page with filtering
- ✅ Services showcase
- ✅ Gallery display
- ✅ Testimonials section
- ✅ About and Contact pages

### Backend
- ✅ Express server with CORS
- ✅ MySQL database connection
- ✅ RESTful API endpoints
- ✅ Error handling middleware
- ✅ Environment variable configuration
- ✅ Database schema with sample data

## Development

### Running in Development Mode
1. Start backend: `cd backend && npm run dev`
2. Start frontend: `npm run dev` (from project root)
3. Access frontend at `http://localhost:5173`
4. API available at `http://localhost:5000`

### Building for Production
1. Build frontend: `npm run build`
2. Start backend: `cd backend && npm start`

## Environment Variables

### Backend (.env)
```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=dj_kach_db
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team. 