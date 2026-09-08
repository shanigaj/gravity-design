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
        description="Gravity Tech World is a leading web & software development company in Surat offering website development, Android & iOS apps, UI/UX design, e-commerce and SEO. Combine your idea with technology."
        keywords="web development company Surat, software company Surat, mobile app development, website design, UI UX design, e-commerce development, SEO services, Gravity Tech World"
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
