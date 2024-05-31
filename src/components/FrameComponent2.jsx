import styles from "./FrameComponent2.module.css";
import PropTypes from 'prop-types';

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.image196RemovebgPreview2Parent}>
          <img
            className={styles.image196RemovebgPreview2Icon}
            alt=""
            src="/image-196removebgpreview-2@2x.png"
          />
          <div className={styles.contraryToPopularContainer}>
            <p className={styles.contraryToPopular}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots
            </p>
            <p className={styles.contraryToPopular}>
              in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
        </div>
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
          <img className={styles.groupIcon} alt="" src="/group1.svg" />
          <img className={styles.groupIcon} alt="" src="/group-8.svg" />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.image196RemovebgPreview2Parent}>
          <div className={styles.mainPage}>Main Page</div>
          <div className={styles.destination}>Destination</div>
          <div className={styles.destination}>Experiences</div>
          <div className={styles.destination}>Travel</div>
        </div>
        <div className={styles.image196RemovebgPreview2Parent}>
          <div className={styles.mainPage}>Info</div>
          <div className={styles.destination}>Why Nilgiris?</div>
          <div className={styles.destination}>Partner with us</div>
          <div className={styles.destination}>FAQ’s</div>
          <div className={styles.destination}>Blog</div>
        </div>
        <div className={styles.image196RemovebgPreview2Parent}>
          <div className={styles.mainPage}>Helpline</div>
          <div className={styles.destination}>+91 9488089404</div>
          <div className={styles.destination}>info@udaipur.com</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
