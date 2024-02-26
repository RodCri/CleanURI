import styles from './DesktopMenu.module.css';

export const DesktopMenu = () => {
  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <a className={styles.menu__option} href="/">Features</a>
        <a className={styles.menu__option} href="/">Pricing</a>
        <a className={styles.menu__option} href="/">Resources</a>
      </nav>
      <div className={styles.menu__login}>
        <a className={styles.menu__option} href="/">Login</a>
        <a className={styles.menu__option__Colorful} href="/">
          Sign Up
        </a>
      </div>
    </div>
  )
}
