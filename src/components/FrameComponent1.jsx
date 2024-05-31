import styles from "./FrameComponent1.module.css";
import PropTypes from 'prop-types';

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/rectangle-19@2x.png" />
      <img className={styles.frameItem} alt="" src="/rectangle-19@2x.png" />
      <img className={styles.frameInner} alt="" src="/rectangle-20@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-20@2x.png" />
      <img className={styles.frameChild1} alt="" src="/rectangle-21@2x.png" />
      <img className={styles.frameChild2} alt="" src="/rectangle-21@2x.png" />
      <img className={styles.frameChild3} alt="" src="/rectangle-22@2x.png" />
      <img className={styles.frameChild4} alt="" src="/rectangle-22@2x.png" />
      <div className={styles.ootyLake}>Ooty Lake</div>
      <div className={styles.ootyLake1}>Ooty Lake</div>
      <div className={styles.doddabettaPeak}>Doddabetta Peak</div>
      <div className={styles.doddabettaPeak1}>Doddabetta Peak</div>
      <div className={styles.mukurthiNationalParkContainer}>
        <p className={styles.mukurthi}>{`Mukurthi `}</p>
        <p className={styles.mukurthi}>National Park</p>
      </div>
      <div className={styles.mukurthiNationalParkContainer1}>
        <p className={styles.mukurthi}>{`Mukurthi `}</p>
        <p className={styles.mukurthi}>National Park</p>
      </div>
      <div className={styles.tigerHill}>Tiger Hill</div>
      <div className={styles.tigerHill1}>Tiger Hill</div>
      <div
        className={styles.aPopularTourist}
      >{`A popular tourist recreational spot, this L-shaped lake provides boating facilities. `}</div>
      <div
        className={styles.aPopularTourist1}
      >{`A popular tourist recreational spot, this L-shaped lake provides boating facilities. `}</div>
      <div className={styles.onClearDaysContainer}>
        <p className={styles.mukurthi}>
          On clear days, Doddabetta Peak provides panoramic views of lush
          landscape.
        </p>
      </div>
      <div className={styles.onClearDaysContainer1}>
        <p className={styles.mukurthi}>
          On clear days, Doddabetta Peak provides panoramic views of lush
          landscape.
        </p>
      </div>
      <div className={styles.itIsHomeTo}>
        It is home to an array of endangered wildlife, including royal Bengal
        tiger and Asian elephant.
      </div>
      <div className={styles.itIsHomeTo1}>
        It is home to an array of endangered wildlife, including royal Bengal
        tiger and Asian elephant.
      </div>
      <div className={styles.itsSplendidSights}>
         Its splendid sights of the early morning sunrise where you can witness
        a panoramic view of Mount Everest and Mount Kanchenjunga together.
      </div>
      <div className={styles.itsSplendidSights1}>
         Its splendid sights of the early morning sunrise where you can witness
        a panoramic view of Mount Everest and Mount Kanchenjunga together.
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
