import styles from './Header.module.scss'

function Header() {
  return (
    <div className={`${styles.HeaderWrapper}`}>
      <div className={`${styles.Header}`}>
        <h1 className={`${styles.logo}`}>Logo</h1>
      </div>
      <div className={`${styles.navList}`}>
        <li className={`${styles.navMenu}`}>Home</li>
        <li className={`${styles.navMenu}`}>About Us</li>
        <li className={`${styles.navMenu}`}>Contact us</li>
      </div>
    </div>
  );
}

export default Header;
