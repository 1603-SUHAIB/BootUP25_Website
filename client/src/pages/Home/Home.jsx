import Bg from "../../components/Background/Bg";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../sections/Hero/Hero";
import Technical from "../../sections/Technical/Technical";
import NonTechnical from "../../sections/NonTechnical/NonTechnical";
import TitleSponsor from "../../sections/TitleSponsor/TitleSponsor";
import Sponsors from "../../sections/Sponsors/Sponsors";
import Memories from "../../sections/Memories/Memories";
import Coordinators from "../../sections/Coordinators/Coordinators";
import FAQ from "../../sections/Faq/FAQ";
import Footer from "../../sections/Footer/Footer";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Bg />
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="events">
        <Technical />
        <NonTechnical />
      </section>
      <TitleSponsor />
      <Sponsors />
      <Memories />
      <section id="coordinators">
        <Coordinators />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
