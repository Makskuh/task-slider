import BtnChanger from '../NextImg';
import styles from '../SliderDisplay/styles.module.scss';
function newImgItem({ imageArray ,currentImg}) {

  const slideArr = imageArray.map((itemImg, index) => {
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
    return <>{slideArr}</>;
  });
}

export default newImgItem;
