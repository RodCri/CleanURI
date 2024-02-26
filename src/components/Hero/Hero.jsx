import heroImage from '../../assets/images/illustration-working.svg';
import { StartedBtn } from '../StartedBtn/StartedBtn';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.hero__image} src={heroImage} alt="" />
      <section className={styles.hero__info}>
        <h1 className={styles.hero__title}>More than just shorter links</h1>
        <p className={styles.hero__description}>Build your brand`s recognotion and get detailed insights on how your links are performing</p>
        <div className={styles.hero__cta}>
          <StartedBtn nameBtn={"Get Started"} />
        </div>
      </section>
    </div>
  )
}
