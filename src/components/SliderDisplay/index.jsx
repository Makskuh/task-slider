import { Component } from 'react';
import styles from './styles.module.scss';
import BtnChanger from '../NextImg';
import imageArray from '../component/img/imgArray';
import NewImgItem from '../ImgItem';
const length = imageArray.length
class SliderDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgArray: structuredClone(imageArray),
      currentImg: 0,
    };
  }
  pastImg = () => {
    this.setState({
      currentImg: this.state.currentImg === 0 ? 0 : this.state.currentImg - 1,
    });
  };
  nextImg = () => {
    this.setState({
      currentImg:
        this.state.currentImg === length -1
          ? this.state.currentImg 
          : this.state.currentImg + 1,
    });
  };
  render() {
    const { imgArray, currentImg } = this.state;
    return (
      <section className={styles.wrapperSlider}>
        <BtnChanger onClick={this.nextImg} />
        <NewImgItem imageArray={imgArray} currentImg = {currentImg} key={currentImg}/>
      </section>
    );
  }
}

export default SliderDisplay;
