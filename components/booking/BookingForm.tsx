// components/booking/BookingForm.tsx

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Button from '@/components/common/Button';

interface BookingFormProps {
  propertyId: number;
  pricePerNight: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ propertyId, pricePerNight }) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const bookingData = {
        propertyId,
        checkInDate,
        checkOutDate,
        guests,
      };

      const response = await axios.post('https://api.example.com/bookings', bookingData);
      setMessage(`Booking successful! Confirmation ID: ${response.data.bookingId}`);
      // Clear form after successful submission
      setCheckInDate('');
      setCheckOutDate('');
      setGuests(1);
    } catch (error) {
      console.error('Booking error:', error);
      setMessage('Booking failed. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Book this place</h2>
      <div>
        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          id="check-in"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          id="check-out"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Processing...' : 'Reserve'}
      </Button>
      {message && <p className="mt-2 text-sm text-center font-medium">{message}</p>}
    </form>
  );
};

export default BookingForm;