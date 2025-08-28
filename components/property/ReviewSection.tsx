import axios from "axios";
import { useState, useEffect } from "react";
import { Review } from "@/interfaces"; // Assuming a Review interface is defined

interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      // Return early if propertyId is not available
      if (!propertyId) return;
      
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Guest Reviews ({reviews.length})</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="font-bold">{review.author}</span>
              <span className="ml-2 text-yellow-500">
                {'⭐'.repeat(review.rating)}
              </span>
              <span className="text-sm text-gray-400 ml-auto">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;