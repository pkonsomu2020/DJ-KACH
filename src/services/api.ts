const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone?: string;
  event_type: string;
  event_date?: string;
  event_time?: string;
  venue?: string;
  message?: string;
}

export interface RSVPForm {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  how_heard?: string;
  attending_with?: string;
  expectations?: string;
  prayer_followup?: string;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  // Health check
  async healthCheck(): Promise<{ status: string; message: string }> {
    return this.request('/health');
  }

  // Contact form
  async submitContactForm(form: ContactForm): Promise<{ id: number; message: string }> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });
  }

  // Get all contacts
  async getContacts(): Promise<ContactForm[]> {
    return this.request('/contacts');
  }

  // Booking form
  async submitBookingForm(form: BookingForm): Promise<{ id: number; message: string }> {
    return this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(form),
    });
  }

  // Get all bookings
  async getBookings(): Promise<BookingForm[]> {
    return this.request('/bookings');
  }

  // RSVP form
  async submitRSVPForm(form: RSVPForm): Promise<{ id: number; message: string }> {
    return this.request('/rsvp', {
      method: 'POST',
      body: JSON.stringify(form),
    });
  }
}

export const apiService = new ApiService(); 