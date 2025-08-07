import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService, RSVPForm } from '../services/api';

const mockEvent = {
  title: 'Hour of Worship',
  date: '23 Aug 2025',
  time: '2:00 PM – 6:00 PM',
  location: 'SEE LIGHT INTERNATIONAL MINISTRIES',
  description: `A heartfelt in-person gathering—a place of reconciliation for the lost & brokenhearted. Healing, hope, and the love of Jesus reaches wounded hearts. Through stories of redemption, we invite all to encounter the saving grace of our Lord Jesus Christ.\n\nWhether you’re in a season of joy, waiting, heartbreak, or renewal—this experience is for you. God’s love is personal, powerful, and present. Come expectant. A new chapter begins here—for many, it will be a turning point.`,
  scripture: `In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him. In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins. Beloved, if God so loved us, we also ought to love one another. (1 John 4:9-11)`,
  poster: '/hour_of_worship poster.jpg'
};

const howHeardOptions = ['Instagram', 'WhatsApp', 'Friend', 'Church', 'Other'];
const attendingWithOptions = ['Just me', "I'm coming with a friend / group"];

const EventDetails = () => {
  // const { id } = useParams(); // For real data
  const event = mockEvent; // Replace with real fetch if needed

  const [formData, setFormData] = useState<RSVPForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    how_heard: '',
    attending_with: '',
    expectations: '',
    prayer_followup: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await apiService.submitRSVPForm(formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          how_heard: '',
          attending_with: '',
          expectations: '',
          prayer_followup: ''
        });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      // Optionally show error
    }
  };

  return (
    <div className="pt-16 sm:pt-20 bg-gray-50 min-h-screen px-0 sm:px-4">
      <div className="max-w-5xl mx-auto px-0 sm:px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Event Info */}
        <div className="md:col-span-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-red-600 mb-4">{event.title}</h1>
          {/* Event Poster Centered */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={event.poster}
              alt="Event Poster"
              className="rounded-2xl shadow-lg max-w-full h-auto"
              style={{ display: 'block' }}
            />
          </div>
          {/* Event Info Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 text-center">
            <div>
              <div className="text-xs uppercase text-red-600 font-semibold mb-1 tracking-widest">event</div>
              <div className="text-base text-gray-800">{event.date.split(' ')[0]} {event.date.split(' ')[1]}</div>
              <div className="text-sm text-gray-700">{event.date.split(' ')[2]}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-red-600 font-semibold mb-1 tracking-widest">schedule</div>
              <div className="text-base text-gray-800">{event.time}</div>
            </div>
            <div>
              <div className="text-xs uppercase text-red-600 font-semibold mb-1 tracking-widest">place</div>
              <div className="text-base text-gray-800 whitespace-pre-line">{event.location}</div>
            </div>
          </div>
          <p className="text-base sm:text-lg mb-6 whitespace-pre-line">{event.description}</p>
          <blockquote className="bg-red-50 border-l-4 border-red-500 p-4 italic text-gray-700 mb-6">
            {event.scripture}
          </blockquote>
        </div>
        {/* RSVP Sidebar */}
        <div className="w-full md:max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border h-fit">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">RSVP</h2>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <span className="material-icons text-green-500 text-5xl">check_circle</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your RSVP has been received. We look forward to seeing you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" id="first_name" name="first_name" required value={formData.first_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" id="last_name" name="last_name" required value={formData.last_name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="how_heard" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about the event?</label>
                <select id="how_heard" name="how_heard" value={formData.how_heard} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Select</option>
                  {howHeardOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Will you be attending alone or with someone?</label>
                <div className="flex gap-4">
                  {attendingWithOptions.map(opt => (
                    <label key={opt} className="flex items-center gap-1">
                      <input type="radio" name="attending_with" value={opt} checked={formData.attending_with === opt} onChange={handleChange} className="accent-red-600" />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">What are you hoping to experience?</label>
                <textarea id="expectations" name="expectations" rows={2} value={formData.expectations} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Would you like someone to pray with you or follow up after the event?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="prayer_followup" value="Yes" checked={formData.prayer_followup === 'Yes'} onChange={handleChange} className="accent-red-600" />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="prayer_followup" value="No" checked={formData.prayer_followup === 'No'} onChange={handleChange} className="accent-red-600" />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold text-base hover:scale-105 transform transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;