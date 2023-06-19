import { Component } from 'react';
import styles from './styles.module.scss';
import { imageData, lengthImgArr } from '../component/imgForSlider/imgArray';
import ArrowBtn from './ArrowBtn';
import ChangeImgItem from './ChangeImgItem';
import AutoPlayBtn from './AutoPlayBtn';
import classname from 'classname';
import ChangeInterval from './ChangeInterval';

class SliderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: structuredClone(imageData),
      currentImg: 0,
      isWorking: false,
      changeInterval: 3000,
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
    this.setState({
      isWorking: false,
    });
  };
  startAuto = () => {
    if (this.intervalSlider) {
      return;
    }
    this.intervalSlider = setInterval(() => {
      this.setState({
        isWorking: true,
        currentImg:
          this.state.currentImg === lengthImgArr - 1
            ? 0
            : this.state.currentImg + 1,
      });
    }, [this.state.changeInterval]);
  };
  handleChange = ({ target: { value } }) => {
    if (
      typeof parseInt(value) === 'number' &&
      !isNaN(parseInt(value)) &&
      value >= 0.5
    ) {
      return this.setState({
        changeInterval: value * 1000,
      });
    }
  };

  render() {
    const { currentImg, imgArray, isWorking } = this.state;
    const AutoPlay = classname(styles.btnAutoSlide, {
      [styles.btnisActive]: isWorking,
    });
    return (
      <section className={styles.wrapperSlider}>
        <ArrowBtn nextImg={this.nextImg} pastImg={this.pastImg} />
        <ChangeImgItem imgArray={imgArray} currentImg={currentImg} />
        <AutoPlayBtn
          stopAuto={this.stopAuto}
          startAuto={this.startAuto}
          className={AutoPlay}
        />
        <ChangeInterval getInterval={this.handleChange} />
      </section>
    );
  }
}

export default SliderDisplay;
