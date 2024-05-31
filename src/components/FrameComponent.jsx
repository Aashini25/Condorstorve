import PropTypes from 'prop-types';
import styles from "./FrameComponent.module.css";


const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.janeCooperParent, className].join(" ")}>
      <div className={styles.janeCooper}>Jane Cooper</div>
      <div className={styles.janeCooper1}>Jane Cooper</div>
      <div className={styles.eleanorPena}>Eleanor Pena</div>
      <div className={styles.eleanorPena1}>Eleanor Pena</div>
      <div className={styles.jeromeBell}>Jerome Bell</div>
      <div className={styles.jeromeBell1}>Jerome Bell</div>
      <div className={styles.ronaldRichards}>Ronald Richards</div>
      <div className={styles.ronaldRichards1}>Ronald Richards</div>
      <div className={styles.estherHoward}>Esther Howard</div>
      <div className={styles.estherHoward1}>Esther Howard</div>
      <div className={styles.div}>01.02.2024</div>
      <div className={styles.div1}>01.02.2024</div>
      <div className={styles.div2}>01.02.2024</div>
      <div className={styles.div3}>01.02.2024</div>
      <div className={styles.div4}>01.02.2024</div>
      <div className={styles.div5}>01.02.2024</div>
      <div className={styles.div6}>01.02.2024</div>
      <div className={styles.div7}>01.02.2024</div>
      <div className={styles.div8}>01.02.2024</div>
      <div className={styles.div9}>01.02.2024</div>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.frameChild1} />
      <div className={styles.frameChild2} />
      <div className={styles.frameChild3} />
      <div className={styles.frameChild4} />
      <div className={styles.frameChild5} />
      <div className={styles.frameChild6} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-2651@2x.png"
      />
      <img className={styles.frameChild7} alt="" src="/rectangle-2651@2x.png" />
      <img className={styles.frameChild8} alt="" src="/rectangle-2652@2x.png" />
      <img className={styles.frameChild9} alt="" src="/rectangle-2652@2x.png" />
      <img
        className={styles.frameChild10}
        alt=""
        src="/rectangle-2653@2x.png"
      />
      <img
        className={styles.frameChild11}
        alt=""
        src="/rectangle-2653@2x.png"
      />
      <img
        className={styles.frameChild12}
        alt=""
        src="/rectangle-2654@2x.png"
      />
      <img
        className={styles.frameChild13}
        alt=""
        src="/rectangle-2654@2x.png"
      />
      <img
        className={styles.frameChild14}
        alt=""
        src="/rectangle-2650@2x.png"
      />
      <img
        className={styles.frameChild15}
        alt=""
        src="/rectangle-2650@2x.png"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
