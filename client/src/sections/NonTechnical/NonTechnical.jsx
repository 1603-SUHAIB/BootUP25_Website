import Cards from '../../components/Cards/Cards';
import './NonTechnical.css';

const NonTechnical = () => {
  const events = [
    { id: 1, name: 'event', description: 'desc' },
    { id: 2, name: 'event', description: 'desc' },
  ];

  return (
    <section className="non-technical">
      <h2>Non-Technical Events</h2>
      <Cards data={events} />
    </section>
  );
};

export default NonTechnical;