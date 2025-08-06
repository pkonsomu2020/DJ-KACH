-- DJ Kach Database Schema

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS dj_kach_db;
USE dj_kach_db;

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    event_time TIME,
    venue VARCHAR(255),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    image_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    event_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contacts table (matching your existing table)
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bookings table (matching your existing table)
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    event_type VARCHAR(100),
    event_date DATE,
    event_time TIME,
    venue VARCHAR(255),
    message TEXT,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data

-- Sample events
INSERT INTO events (title, description, event_date, event_time, venue, image_url) VALUES
('Hour of Worship', 'A powerful worship session with gospel music and prayer', '2025-10-07', '14:00:00', 'See Light International Ministries', '/hour_of_worship poster.jpg'),
('Wedding Celebration', 'Beautiful wedding ceremony with gospel music', '2025-11-15', '16:00:00', 'Grand Hotel Ballroom', 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg'),
('Church Conference', 'Annual church conference with live music', '2025-12-20', '10:00:00', 'Community Church Hall', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg');

-- Sample services
INSERT INTO services (title, description, price, image_url, is_featured) VALUES
('Wedding DJ Services', 'Professional wedding DJ services with gospel music selection', 500.00, 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg', TRUE),
('Church Events', 'Uplifting gospel music for church services and religious gatherings', 300.00, 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', TRUE),
('Corporate Events', 'Professional entertainment for business functions and celebrations', 400.00, 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', TRUE),
('Birthday Parties', 'Fun and energetic music for birthday celebrations', 250.00, 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', FALSE),
('Funeral Services', 'Respectful and comforting music for funeral services', 200.00, 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', FALSE);

-- Sample testimonials
INSERT INTO testimonials (name, rating, comment, event_type) VALUES
('Sarah Johnson', 5, 'DJ Kach made our wedding absolutely perfect! The music selection was amazing and kept everyone dancing all night.', 'Wedding'),
('Pastor Michael', 5, 'Excellent service for our church events. The gospel music selection was perfect and uplifting.', 'Church Event'),
('David Smith', 5, 'Professional, punctual, and amazing music. Highly recommend for any event!', 'Corporate Event'),
('Maria Garcia', 5, 'DJ Kach created the perfect atmosphere for our birthday party. Everyone had a great time!', 'Birthday Party'),
('John Williams', 5, 'The music was beautiful and respectful for our family gathering. Thank you for your professionalism.', 'Family Event');

-- Sample gallery images
INSERT INTO gallery (title, description, image_url, category) VALUES
('Wedding Celebration', 'Beautiful wedding ceremony with live music', 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg', 'Weddings'),
('Church Service', 'Uplifting gospel music during church service', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', 'Church Events'),
('Corporate Event', 'Professional entertainment for business function', 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', 'Corporate Events'),
('Birthday Party', 'Fun celebration with great music', 'https://images.pexels.com/photos/1779447/pexels-photo-1779447.jpeg', 'Parties'),
('Community Event', 'Bringing people together through music', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg', 'Community Events'); 