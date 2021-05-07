import {Header} from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import Features from './componets/Features/Features';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
