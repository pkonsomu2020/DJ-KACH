# DJ Kach Website Deployment Guide

## 🚀 Deployment Overview

- **Frontend**: Netlify (React + Vite)
- **Backend**: Render (Node.js + Express)
- **Database**: MySQL (local or cloud)

## 📋 Prerequisites

1. **GitHub Account**: Push your code to GitHub
2. **Netlify Account**: For frontend deployment
3. **Render Account**: For backend deployment
4. **MySQL Database**: Local or cloud (PlanetScale, Railway, etc.)

## 🎯 Step 1: Prepare Your Code

### 1.1 Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/dj-kach-website.git
git push -u origin main
```

### 1.2 Update Environment Variables

**Frontend (.env file in root):**
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend (.env file in backend/):**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=ponsomu756@
DB_NAME=dj_kach_db
PORT=5000
NODE_ENV=development
```

## 🌐 Step 2: Deploy Backend to Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create a new account

### 2.2 Deploy Backend Service
1. **Click "New +" → "Web Service"**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name**: `dj-kach-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node 18`

### 2.3 Set Environment Variables in Render
Add these environment variables in Render dashboard:

```env
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=dj_kach_db
NODE_ENV=production
```

### 2.4 Database Options
**Option A: Use PlanetScale (Recommended)**
1. Go to [planetscale.com](https://planetscale.com)
2. Create free account
3. Create new database
4. Get connection string
5. Update environment variables in Render

**Option B: Use Railway**
1. Go to [railway.app](https://railway.app)
2. Create MySQL database
3. Get connection details
4. Update environment variables in Render

### 2.5 Get Your Backend URL
After deployment, Render will give you a URL like:
`https://dj-kach-backend.onrender.com`

## 🎨 Step 3: Deploy Frontend to Netlify

### 3.1 Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub

### 3.2 Deploy Frontend
1. **Click "New site from Git"**
2. **Connect your GitHub repository**
3. **Configure build settings:**
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### 3.3 Set Environment Variables in Netlify
1. Go to **Site settings** → **Environment variables**
2. Add:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```

### 3.4 Update CORS in Backend
Update the CORS configuration in `backend/server.js`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-name.netlify.app', 'http://localhost:5173']
    : 'http://localhost:5173',
  credentials: true
}));
```

Replace `your-frontend-name` with your actual Netlify site name.

## 🔧 Step 4: Test Your Deployment

### 4.1 Test Backend
Visit: `https://your-backend-url.onrender.com/api/health`
Should return: `{"status":"OK","message":"DJ Kach API is running"}`

### 4.2 Test Frontend
Visit your Netlify URL and test:
- Contact form submission
- Booking form submission
- All pages load correctly

## 🛠️ Troubleshooting

### Backend Issues
1. **Database Connection Error**
   - Check environment variables in Render
   - Verify database credentials
   - Ensure database is accessible

2. **CORS Error**
   - Update CORS origin in backend
   - Check frontend URL in backend CORS config

### Frontend Issues
1. **API Calls Failing**
   - Check `VITE_API_URL` environment variable
   - Verify backend URL is correct
   - Check browser console for errors

2. **Build Errors**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed
   - Check build logs in Netlify

## 📝 Environment Variables Summary

### Render (Backend)
```env
DB_HOST=your-mysql-host
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=dj_kach_db
NODE_ENV=production
```

### Netlify (Frontend)
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## 🎉 Success Checklist

- [ ] Backend deployed to Render
- [ ] Database connected and working
- [ ] Frontend deployed to Netlify
- [ ] Environment variables set correctly
- [ ] Contact form working
- [ ] Booking form working
- [ ] All pages loading correctly
- [ ] CORS issues resolved

## 🔗 Useful Links

- [Render Documentation](https://render.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [PlanetScale Documentation](https://planetscale.com/docs)
- [Railway Documentation](https://docs.railway.app) 