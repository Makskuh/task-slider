import { Component } from 'react';
import styles from './styles.module.scss';
import BtnChanger from '../NextImg';
import imageArray from '../component/img/imgArray';
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
    const length = imgArray.length;
    return (
      <section className={styles.wrapperSlider}>
        <button onClick={this.pastImg} className={styles.btnPast}>
          {'<'}
        </button>
        <button onClick={this.nextImg} className={styles.btnNext}>
          {'>'}
        </button>
        {imgArray.map((itemImg, index) => {
          if (currentImg === index) {
            return (
              <>
                <img
                  key={itemImg.id}
                  className={styles.img}
                  src={itemImg.src}
                  alt={itemImg.alt}
                />
                <p className={styles.textUnderImg}>{itemImg.alt}</p>
              </>
            );
          }
        })}
      </section>
    );
  }
}

export default SliderDisplay;
