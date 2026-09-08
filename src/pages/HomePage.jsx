import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeStrip from '../components/MarqueeStrip';
import AboutUs from '../components/AboutUs';
import Values from '../components/Values';
import Services from '../components/Services';
import WorkingProcess from '../components/WorkingProcess';
import Technology from '../components/Technology';
import Stats from '../components/Stats';
// import Team from '../components/Team'; // Team section hidden on request
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        path="/"
        description="Gravity Tech World is a leading mobile app development company in Surat offering Android & iOS app development, custom software, website development, UI/UX design and e-commerce. Combine your idea with technology."
        keywords="mobile app development company Surat, Android app development Surat, iOS app development Surat, app developers Surat, software company Surat, custom software development, web development, UI UX design, e-commerce development, Gravity Tech World"
      />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <AboutUs />
        <Values />
        <Services />
        <WorkingProcess />
        <Technology />
        <Stats />
        {/* Team section hidden on request — uncomment to restore */}
        {/* <Team /> */}
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
