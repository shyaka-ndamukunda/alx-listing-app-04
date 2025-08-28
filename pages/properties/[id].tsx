// pages/properties/[id].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Property, Review } from '@/interfaces'; // Import Review
import PropertyItem from '@/components/properties/PropertyItem';
import BookingForm from '@/components/booking/BookingForm';
import ReviewList from '@/components/reviews/ReviewList'; // New component

const PropertyDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          // Fetch property details
          const propertyResponse = await axios.get(`https://api.example.com/properties/${id}`);
          setProperty(propertyResponse.data);

          // Fetch reviews
          const reviewsResponse = await axios.get(`https://api.example.com/properties/${id}/reviews`);
          setReviews(reviewsResponse.data);

        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Failed to fetch details. Please try again.");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!property) {
    return <div className="text-center mt-10">Property not found.</div>;
  }

  return (
    <PropertyItem property={property}>
      {/* Pass the booking form as a child */}
      <BookingForm propertyId={property.id} pricePerNight={property.price} />
      
      {/* Pass the reviews as a child */}
      <ReviewList reviews={reviews} />
    </PropertyItem>
  );
};

export default PropertyDetailsPage;