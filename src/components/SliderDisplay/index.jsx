import { Component } from 'react';
import styles from './styles.module.scss';
import { imageData, lengthImgArr } from '../component/img/imgArray';
import NewImgItem from '../ImgItem';

class SliderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: structuredClone(imageData),
      currentImg: 0,
    };
    this.intervalSlider = null;
  }
  pastImg = () => {
    this.setState({
      currentImg:
        this.state.currentImg === 0
          ? lengthImgArr - 1
          : this.state.currentImg - 1,
    });
  };
  nextImg = () => {
    this.setState({
      currentImg:
        this.state.currentImg === lengthImgArr - 1
          ? 0
          : this.state.currentImg + 1,
    });
  };
  stopAuto = () => {
    clearInterval(this.intervalSlider);
    this.intervalSlider = null;
  };
  startAuto = () => {
    if (this.intervalSlider) {
      return;
    }
    this.intervalSlider = setInterval(() => {
      this.setState({
        currentImg:
          this.state.currentImg === lengthImgArr - 1
            ? 0
            : this.state.currentImg + 1,
      });
    }, 3000);
  };

  render() {
    const { imgArray, currentImg } = this.state;
    return (
      <section className={styles.wrapperSlider}>
        <button onClick={this.pastImg} className={styles.btnPast}>
          {'<'}
        </button>
        <button onClick={this.nextImg} className={styles.btnNext}>
          {'>'}
        </button>
        <NewImgItem imgArray={imgArray} currentImg={currentImg} />
        <button className={styles.btnAutoSlide} onClick={this.startAuto}>
          {'∞'}
        </button>
        <button className={styles.btnStopSlide} onClick={this.stopAuto}>
          {'⊠'}
        </button>
      </section>
    );
  }
}

export default SliderDisplay;
