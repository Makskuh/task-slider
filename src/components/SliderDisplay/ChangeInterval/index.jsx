import React from 'react';
import styles from './interval.module.scss';
function ChangeInterval(props) {
  const { getInterval } = props;

  return (
    <>
      <form className={styles.form}>
        <label className={styles.label}>
          Write the interval of changing pictures in seconds
          <input
            name="getInterval"
            type="text"
            placeholder="Change interval"
            onChange={getInterval}
            className={styles.input}
          />
        </label>
      </form>
    </>
  );
}

export default ChangeInterval;
