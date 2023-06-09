import SliderDisplay from './components/SliderDisplay';
import './App.css';
import styles from './component/style/styles.module.scss'

function App() {
  return (
    <div className={styles.centeredSlider}>
    <SliderDisplay/>
    </div>
  );
}

export default App;
