import styles from './ErrorFallback.module.scss';
import { BiErrorCircle } from 'react-icons/bi';

interface ErrorFallbackProps {
  errorText: string;
}

export default function ErrorFallback({
  errorText,
}: ErrorFallbackProps): JSX.Element {
  return (
    <div className={styles['container']}>
      <BiErrorCircle className={styles['container__error-icon']} />
      <span>{errorText}</span>
    </div>
  );
}
