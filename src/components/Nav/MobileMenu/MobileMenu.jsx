import { useState } from 'react';
import menuIcon from '../../../assets/icons/ic--outline-menu.svg'
import styles from './MobileMenu.module.css';

export const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className="menuToggle">
        <button className="menuToggle__button" onClick={openMenu}>
          <img
            className="button__icon"
            src={menuIcon}
            alt="Menu Icon"
          />
        </button>
      </div>
      {menuOpen && (
        <nav className={styles.menuBar}>
          <div className={styles.menuBar__options}>
            <button className={styles.menuBar__links}>Features</button>
            <button className={styles.menuBar__links}>Pricing</button>
            <button className={styles.menuBar__links}>Resourses</button>
          </div>
          <div className={styles.menuBar__divider} />
          <div className={styles.menuBar__login}>
            <button className={styles.menuBar__links}>Login</button>
            <button className={[styles.menuBar__links, styles.menuBar__links__colorful]}>Sign Up</button>
          </div>
        </nav>
      )}
    </>
  )
}
