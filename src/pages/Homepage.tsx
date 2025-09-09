import About from '../components/Layout/About';
import FAQs from '../components/Layout/FAQs';
import Footer from '../components/Layout/Footer';
import NavigationBar from '../components/Layout/NavigationBar';
import Prototype from '../components/Layout/Prototype';
import Slider from '../components/Layout/Slider';
import Team from '../components/Layout/Team';
import Testimonials from '../components/Layout/Testimonial';

export default function Homepage() {
  return (
    <>
      <NavigationBar />
      <section id="homepage-slider">
        <Slider />
      </section>
      <section id="homepage-about">
        <About />
      </section>
      <section id="homepage-prototype">
        <Prototype />
      </section>
      <section id="homepage-team">
        <Team />
      </section>
      <section id="homepage-faqs">
        <FAQs />
      </section>
      <section id="homepage-feedback">
        <Testimonials />
      </section>
      <section id="homepage-footer">
        <Footer />
      </section>
    </>
  );
}
