import styles from '../styles.module.scss';

function AutoPlayBtn(props) {
  const { stopAuto, startAuto ,className} = props;
  return (
    <>
      <button
        onClick={startAuto}
        className={className}
        title="Autoplay"
      >
        {'▶'}
      </button>
      <button onClick={stopAuto} className={styles.btnStopSlide} title="Stop">
        {'x'}
      </button>
    </>
  );
}
export default AutoPlayBtn;
