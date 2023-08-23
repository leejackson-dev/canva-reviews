import styles from './Stats.module.scss';
import ratingPhraseHandler from '../../utils/ratingPhraseHandler';
import Stars from '../shared/Stars';

interface OverallRatingProps {
  rating: number;
}

export default function OverallRating({
  rating,
}: OverallRatingProps): JSX.Element {
  return (
    <div className={styles['overall']}>
      <span className={styles['overall__title']}>Overall Rating</span>
      <h1 className={styles['overall__rating-phrase']}>
        {ratingPhraseHandler(rating)}
      </h1>
      <div className={styles['overall__rating']}>
        <span>{rating}</span>
        <span className={styles['overall__rating__out-of-five']}>/5</span>
      </div>
      <div className={styles['overall__stars']}>
        <Stars rating={rating} />
      </div>
    </div>
  );
}
