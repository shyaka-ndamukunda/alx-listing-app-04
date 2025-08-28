// components/reviews/ReviewList.tsx

import React from 'react';
import { Review } from '@/interfaces';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Guest Reviews ({reviews.length})</h2>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="font-bold">{review.author}</span>
                <span className="ml-2 text-yellow-500">
                  {/* You can render stars based on the rating here */}
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
      )}
    </div>
  );
};

export default ReviewList;