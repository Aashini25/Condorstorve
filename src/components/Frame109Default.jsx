import styles from "./Frame109Default.module.css";
import PropTypes from 'prop-types';

const Frame109Default = ({ className = "" }) => {
  return (
    <div className={[styles.frame109default, className].join(" ")}>
      <div className={styles.joinUsInPreservingThisNatParent}>
        <div className={styles.joinUsIn}>
          Join us in preserving this natural paradise for generations to come.
        </div>
        <div className={styles.joinUsIn1}>
          Join us in preserving this natural paradise for generations to come.
        </div>
      </div>
      <div className={styles.frame109defaultChild} />
    </div>
  );
};

Frame109Default.propTypes = {
  className: PropTypes.string,
};

export default Frame109Default;
