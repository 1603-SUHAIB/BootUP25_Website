import Cards from '../../components/Cards/Cards';
import './NonTechnical.css';

const NonTechnical = () => {
  const events = [
    { id: 1, name: 'event', description: 'desc' },
    { id: 2, name: 'event', description: 'desc' },
  ];

  return (
    <section className="non-technical" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className='non-technical-heading'>Non-Technical Events</h2>
      <Cards data={events} />
    </section>
  );
};

export default NonTechnical;