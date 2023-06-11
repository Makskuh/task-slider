import styles from '../styles.module.scss';
function ChangeImgItem({ imgArray, currentImg }) {
  const slideArr = imgArray.map((itemImg, index) => {
    if (currentImg === index) {
      return (
        <div key={itemImg.id} className={styles.imgWrapper}>
          <img className={styles.img} src={itemImg.src} alt={itemImg.alt} />
          <p className={styles.textUnderImg}>{itemImg.alt}</p>
        </div>
      );
    }
    return null;
  });
  return <>{slideArr}</>;
}

export default ChangeImgItem;
