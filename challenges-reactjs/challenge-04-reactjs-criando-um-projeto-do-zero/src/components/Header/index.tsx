import Image from 'next/image';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/logo.svg" alt="logo" width={239} height={27} />
      </div>
    </header>
  );
}
