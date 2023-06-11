import styles from '../styles.module.scss';

function ArrowBtn(props) {
  const { nextImg, pastImg } = props;
  return (
    <>
      <button onClick={pastImg} className={styles.btnPast}>
        {'<='}
      </button>
      <button onClick={nextImg} className={styles.btnNext}>
        {'=>'}
      </button>
    </>
  );
}
export default ArrowBtn;
