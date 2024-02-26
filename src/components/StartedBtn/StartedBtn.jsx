import styles from './StartedBtn.module.css'
import PropTypes from 'proptypes'

export const StartedBtn = ({nameBtn}) => {
  return (
    <button className={styles.started__btn}>{nameBtn}</button>
  )

}
StartedBtn.propTypes = {
  nameBtn: PropTypes.string
};

