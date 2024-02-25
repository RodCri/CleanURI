import logo from '../../assets/icons/logo.svg'
import {MobileMenu} from './MobileMenu/MobileMenu'
import {DesktopMenu} from './DesktopMenu/DesktopMenu';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.nav__logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.nav__desktop}>
        <DesktopMenu />
      </div>
      <div className={styles.nav__mobile}>
        <MobileMenu />
      </div>
  </header>
  )
}
