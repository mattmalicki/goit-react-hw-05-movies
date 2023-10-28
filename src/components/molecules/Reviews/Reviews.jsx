import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Review } from 'components/atoms/Review/Review';

import { fetchDetailsMovie } from 'services/fetchFromApi';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const respond = await fetchDetailsMovie(id, '/reviews');
        setReviews([...respond.results]);
      } catch (err) {
        console.log('Error: ', err.toString());
      }
    }
    getReviews();
  }, [id]);

  return (
    <ul>
      {reviews[0] ? (
        reviews.map(review => (
          <Review
            key={review.id}
            author={review.author}
            description={review.content}
          />
        ))
      ) : (
        <span>No reviews found</span>
      )}
    </ul>
  );
};
