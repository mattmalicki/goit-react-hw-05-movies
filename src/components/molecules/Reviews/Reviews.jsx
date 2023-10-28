import { Review } from 'components/atoms/Review/Review';

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        <Review
          key={review.id}
          author={review.author}
          description={review.description}
        />;
      })}
    </ul>
  );
};
