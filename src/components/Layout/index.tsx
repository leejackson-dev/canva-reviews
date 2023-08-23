import styles from './Layout.module.scss';
import Reviews from '../Reviews';
import Stats from '../Stats';
import Divider from '../shared/Divider';

export default function Layout() {
  return (
    <div className={styles['container']}>
      <div className={styles['container__nav']}>
        <img
          src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
          height="50"
          alt="Canva Logo"
        />
        <span className={styles['container__nav__page-title']}>
          Trustpilot Reviews
        </span>
      </div>
      <div className={styles['container__content']}>
        <Stats />
        <Divider />
        <Reviews />
      </div>
    </div>
  );
}
