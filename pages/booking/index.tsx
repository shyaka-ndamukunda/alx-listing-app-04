// pages/booking/index.tsx

import axios from "axios";
import { useState, FormEvent } from "react";
import { Card } from "@/components/common/Card";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { Booking } from "@/interfaces"; // Assuming you have a Booking interface

export default function BookingPage() {
  const [formData, setFormData] = useState<Booking>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed! Your confirmation number is " + response.data.bookingId);
      // You might also want to clear the form data here
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (err) {
      console.error("Booking error:", err);
      setError("Failed to submit booking. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Confirm Your Booking</h1>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />

          <h2 className="text-xl font-semibold mt-6 mb-2">Payment Details</h2>
          <Input
            label="Card Number"
            name="cardNumber"
            type="text"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Expiration Date (MM/YY)"
              name="expirationDate"
              type="text"
              value={formData.expirationDate}
              onChange={handleInputChange}
              required
            />
            <Input
              label="CVV"
              name="cvv"
              type="text"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <Input
            label="Billing Address"
            name="billingAddress"
            type="text"
            value={formData.billingAddress}
            onChange={handleInputChange}
            required
          />
          
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Processing..." : "Confirm & Pay"}
          </Button>

          {success && <p className="mt-4 text-green-600 text-center font-medium">{success}</p>}
          {error && <p className="mt-4 text-red-500 text-center font-medium">{error}</p>}
        </form>
      </Card>
    </div>
  );
}