import Cards from '../../components/Cards/Nontechnicalcards';
import './NonTechnical.css';

const NonTechnical = () => {

  return (
    <section className="non-technical" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className='non-technical-heading'>Non-Technical Events</h2>
      <Cards />
    </section>
  );
};

export default NonTechnical;