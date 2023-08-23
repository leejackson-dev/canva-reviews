import starHandler from '../../utils/starHandler';
import styles from './Shared.module.scss';
import { FaStar } from 'react-icons/fa';

interface StarsProps {
  rating: number;
}

export default function Stars({ rating }: StarsProps): JSX.Element {
  return (
    <div className={styles['stars-container']}>
      {starHandler(rating).map((starColour: boolean) =>
        starColour ? (
          <FaStar
            key={Math.random()}
            className={styles['stars-container__gold-star']}
          />
        ) : (
          <FaStar
            key={Math.random()}
            className={styles['stars-container__grey-star']}
          />
        )
      )}
    </div>
  );
}
