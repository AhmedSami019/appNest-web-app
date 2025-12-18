import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthContext";

const UserReview = ({ reviews }) => {
  const { user } = use(AuthContext);
  const [allReviews, setAllReviews] = useState(reviews || []);

  // Sync with appData when it loads
  useEffect(() => {
    // 1. Define the async function
    const updateReviewsAsync = async () => {
      try {
        if (reviews) {
          setAllReviews(reviews);
        }
      } catch (error) {
        // console.error("Failed to update reviews:", error);
      }
    };

    updateReviewsAsync();
  }, [reviews]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const rating = form.rating.value;

    // Create the new review object
    const newReview = {
      user: user?.displayName || "Anonymous",
      rating: parseInt(rating),
      comment: comment,
    };

    // Update the state
    setAllReviews([...allReviews, newReview]);

    // Clear the form
    form.reset();
  };

  return (
    <div className="mt-10 space-y-8">
      <h2 className="text-2xl font-bold">Reviews</h2>

      {/* Display Section */}
      <div className="space-y-4">
        {allReviews.length > 0 ? (
          allReviews.map((rev, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold">{rev.user}</span>
                <div className="badge badge-secondary badge-outline">
                  {rev.rating} ★
                </div>
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">No reviews yet. Be the first!</p>
        )}
      </div>

      <div className="divider"></div>

      {/* Input Form Section */}
      <div className="card bg-base-200 p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div className="form-control flex flex-col">
            <label className="label font-medium">Review</label>
            <textarea
              name="comment"
              className="textarea textarea-bordered h-24"
              placeholder="What do you think about this app?"
              required
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label font-medium">Rating (1-5)</label>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              className="input input-bordered"
              placeholder="5"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserReview;
