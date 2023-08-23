import { useEffect } from 'react';
import useStats from '../../hooks/useStats';
import styles from './Stats.module.scss';
import Overall from './OverallRating';
import ErrorFallback from '../ErrorFallback';
import LoadingSpinner from '../LoadingSpinner';

interface Stats {
  displayName: string;
  score: {
    stars: number;
  };
  numberOfReviews: {
    fiveStars: number;
  };
}

interface useStatsInterface {
  stats: Stats;
  error: Error;
  isLoading: boolean;
  getStats: () => void;
}

export default function Score(): JSX.Element {
  const { stats, error, isLoading, getStats } =
    useStats() as unknown as useStatsInterface;

  useEffect(() => {
    getStats();
  }, []);

  if (error) {
    return <ErrorFallback errorText={error.message} />;
  }

  return (
    <div className={styles['container']}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className={styles['container__title']}>{stats.displayName}</div>
          <Overall rating={stats.score?.stars} />
          <div className={styles['container__five-star-count']}>
            With{' '}
            <span className={styles['container__five-star-count__highlight']}>
              {stats.numberOfReviews?.fiveStars}
            </span>{' '}
            5-Star reviews
          </div>
        </>
      )}
    </div>
  );
}
