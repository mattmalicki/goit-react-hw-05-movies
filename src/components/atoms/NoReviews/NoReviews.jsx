import styles from './NoReviews.module.css';

export const NoReviews = () => {
  return (
    <div className={styles.NoReviews}>
      <span className={styles.Info}>Sorry. No reviews found.</span>
    </div>
  );
};
