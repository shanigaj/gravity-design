import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeStrip from '../components/MarqueeStrip';
import AboutUs from '../components/AboutUs';
import Values from '../components/Values';
import Services from '../components/Services';
import WorkingProcess from '../components/WorkingProcess';
import Technology from '../components/Technology';
import Stats from '../components/Stats';
import Team from '../components/Team';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Gravity Tech World - One of the reckoned Web & Software Development Company in Surat. Combine your idea with technology."
        keywords="Gravity Tech World, Web Development, App Development, Software Development, Surat"
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
        <Team />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
