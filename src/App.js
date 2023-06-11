import SliderDisplay from './components/SliderDisplay';
import './App.css';
import styles from './component/style/styles.module.scss'

function App() {
  return (
    <section className={styles.centeredSlider}>
    <SliderDisplay/>
    </section>
  );
}

export default App;
