import  { Component } from 'react'
import styles from './styles.module.scss'
import BtnChanger from '../NextImg';
class SliderDisplay extends Component {
  render() {
    return (
      <>
      <div className={styles.wrapperSlider}>
        <BtnChanger/>
      <img className={styles.img} src="https://stsci-opo.org/STScI-01EVSQQZQDXK4V2BYGG8TNW9A1.png" alt="1"/>
      </div>
      </>
    )
  }
}

export default SliderDisplay;