import React from 'react';
import styles from './styles.module.scss';

function BtnChanger({nextImg,pastImg}) {
  return (
    <>
      <button onClick={nextImg} className={styles.btnPast}>
        {'<'}
      </button>
      <button onClick={pastImg} className={styles.btnNext}>
        {'>'}
      </button>
    </>
  );
}
export default BtnChanger;
