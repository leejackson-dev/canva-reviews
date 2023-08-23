import styles from './LoadingSpinner.module.scss';
import FadeLoader from 'react-spinners/FadeLoader';

export default function LoadingSpinner() {
  return (
    <div className={styles['container']}>
      <FadeLoader color="#00a9ff" />
    </div>
  );
}
