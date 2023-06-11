import { Component } from 'react';
import styles from './styles.module.scss';
import { imageData, lengthImgArr } from '../component/imgForSlider/imgArray'
import ArrowBtn from './ArrowBtn';
import ChangeImgItem from './ChangeImgItem';
import AutoPlayBtn from './AutoPlayBtn';

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
componentDidMount(){
  this.startAuto();
}
  render() {
    const { currentImg, imgArray } = this.state;
    return (
      <section className={styles.wrapperSlider}>
        <ArrowBtn nextImg={this.nextImg} pastImg={this.pastImg} />
        <ChangeImgItem imgArray={imgArray} currentImg={currentImg} />
        <AutoPlayBtn  stopAuto={this.stopAuto} startAuto={this.startAuto}/>
      </section>
    );
  }
}

export default SliderDisplay;
