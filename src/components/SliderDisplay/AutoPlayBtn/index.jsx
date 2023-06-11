import styles from '../styles.module.scss';

function AutoPlayBtn(props) {
  const { stopAuto, startAuto } = props;
  return (
    <>
      <button
        onClick={startAuto}
        className={styles.btnAutoSlide}
        title="Autoplay"
      >
        {'∞'}
      </button>
      <button onClick={stopAuto} className={styles.btnStopSlide} title="Stop">
        {'x'}
      </button>
    </>
  );
}
export default AutoPlayBtn;
