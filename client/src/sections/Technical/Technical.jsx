import Cards from '../../components/Cards/Technicalcards';
import './Technical.css';

const Technical = () => {

  return (
    <section className="technical" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className="technical-heading">Technical Events</h2>
      <Cards />
    </section>
  );
};

export default Technical;