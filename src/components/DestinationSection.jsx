import styles from "./DestinationSection.module.css";
import PropTypes from 'prop-types';

const DestinationSection = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.topDestinationParent}>
        <div className={styles.topDestination}>Top Destination</div>
        <div className={styles.getInspired}>Get Inspired</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.arrowLeft1Icon}
            alt=""
            src="/arrowleft-1.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img
            className={styles.arrowLeft2Icon}
            alt=""
            src="/arrowleft-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

DestinationSection.propTypes = {
  className: PropTypes.string,
};

export default DestinationSection;
