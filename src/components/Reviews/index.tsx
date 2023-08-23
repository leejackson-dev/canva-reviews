import { useEffect } from 'react';
import moment from 'moment';
import styles from './Reviews.module.scss';
import useReviews from '../../hooks/useReviews';
import InitialCircle from './InitialCircle';
import ratingPhraseHandler from '../../utils/ratingPhraseHandler';
import Stars from '../shared/Stars';
import Divider from '../shared/Divider';
import ErrorFallback from '../ErrorFallback';
import LoadingSpinner from '../LoadingSpinner';

interface useReviewsInterface {
  reviews: {
    [key: string]: {};
  }[];
  error: Error;
  isLoading: boolean;
  getReviews: () => void;
}

export default function Reviews(): JSX.Element {
  // Gets the variables and functions from the custom hook useReviews
  const { reviews, error, isLoading, getReviews } =
    useReviews() as useReviewsInterface;

  useEffect(() => {
    // Fires getReviews function
    getReviews();
  }, []);

  // If ther is an error of somesort use the error fallback component
  if (error) {
    return <ErrorFallback errorText={error.message} />;
  }

  return (
    <div className={styles['container']}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Map over the reviews */}
          {reviews?.map((review: any) => (
            <div key={review.id}>
              <div className={styles['container__review']}>
                <div className={styles['container__initial-circle-container']}>
                  <InitialCircle
                    initial={review.consumer.displayName[0].toUpperCase()}
                  />
                </div>
                <div>
                  <div className={styles['container__review__user-info']}>
                    <span
                      className={styles['container__review__user-info__name']}
                    >
                      {review.consumer.displayName}
                    </span>
                    <span>{moment.utc(review.createdAt).fromNow()}</span>
                  </div>
                  <div>
                    <h1 className={styles['container__review__rating-phrase']}>
                      {ratingPhraseHandler(review.stars)}
                    </h1>

                    <div className={styles['container__review__stars']}>
                      <Stars rating={review.stars} />
                      <span
                        className={styles['container__review__stars__numbers']}
                      >
                        {review.stars}/5
                      </span>
                    </div>
                  </div>
                  <div className={styles['container__review__text']}>
                    <span className={styles['container__review__text__title']}>
                      {review.title}
                    </span>
                    <span
                      className={styles['container__review__text__paragraph']}
                    >
                      {review.text}
                    </span>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
