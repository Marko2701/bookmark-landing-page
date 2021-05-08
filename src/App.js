import HeaderMobile from './componets/HeaderMobile/HeaderMobile';
import HeaderDesktop from './componets/HeaderDesktop/HeaderDesktop';
import Hero from './componets/Hero/Hero';
import Features from './componets/Features/Features';
import Extension from './componets/Extension/Extension';
import Faq from './componets/Faq/Faq';
import Newsletter from './componets/Newsletter/Newsletter';
import Footer from './componets/Footer/Footer';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="app">
      <HeaderMobile />
      <HeaderDesktop />
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
