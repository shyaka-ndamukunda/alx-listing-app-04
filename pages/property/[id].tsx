// pages/properties/[id].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Property, Review } from '@/interfaces'; // Import Review
import PropertyDetail from '@/components/properties/PropertyDetail';
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
    const fetchData = async () => {
      if (!id) return;
      try {
        // Fetch property details
        const propertyResponse = await axios.get(`/api/properties/${id}`);
        setProperty(propertyResponse.data);

        // Fetch reviews
        const reviewsResponse = await axios.get(`/api/properties/${id}/reviews`);
        setReviews(reviewsResponse.data);

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="text-center mt-10">Property not found.</p>;
  }

  return (
    <PropertyDetail property={property}>
      <BookingForm propertyId={property.id} pricePerNight={property.price} />
      <ReviewList reviews={reviews} />
    </PropertyDetail>
  );
};

export default PropertyDetailsPage;