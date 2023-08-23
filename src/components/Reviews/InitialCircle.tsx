import useReviews from '../../hooks/useReviews';
import styles from './Reviews.module.scss';

interface InitialCircleProps {
  initial?: string;
}

export default function InitialCircle({
  initial,
}: InitialCircleProps): JSX.Element {
  return (
    <div className={styles['initial-circle']}>
      <span>{initial}</span>
    </div>
  );
}
