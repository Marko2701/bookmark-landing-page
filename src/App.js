import {Header} from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import Features from './componets/Features/Features';
import Extension from './componets/Extension/Extension';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Extension />
    </div>
  );
}

export default App;
