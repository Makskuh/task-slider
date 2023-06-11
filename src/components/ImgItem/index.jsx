
import styles from '../SliderDisplay/styles.module.scss';
function NewImgItem({ imageArray, currentImg}) {
  const slideArr = imageArray.map((itemImg, index) => {
    if (currentImg === index) {
      return (
        <div key={imageArray.id} className={styles.imgWrapper}>
          <img className={styles.img} src={itemImg.src} alt={itemImg.alt} />
          <p className={styles.textUnderImg}>{itemImg.alt}</p>
        </div>
      );
    }
    return null;
  });
  return <>{slideArr }</>;
}

export default NewImgItem;
