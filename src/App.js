import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import HeaderDesktop from './components/HeaderDesktop/HeaderDesktop';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Extension from './components/Extension/Extension';
import Faq from './components/Faq/Faq';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Pages from './Pages/ReusableComponents';
import { Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/components" component={Pages} />
        <Route path='/'>
          <HeaderMobile />
          <HeaderDesktop />
          <Hero />
          <Features />
          <Extension />
          <Faq />
          <Newsletter />
          <Footer />
          </Route>
      </Switch>
    </div>


  );
}

export default App;
