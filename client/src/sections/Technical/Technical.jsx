import Cards from '../../components/Cards/Cards';
import './Technical.css';

const Technical = () => {
  const events = [
    { id: 1, name: 'Coding Challenge', description: 'Test your coding skills.' },
    { id: 2, name: 'Robotics Workshop', description: 'Learn the basics of robotics.' },
  ];

  return (
    <section className="technical" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className="technical-heading">Technical Events</h2>
      <Cards data={events} />
    </section>
  );
};

export default Technical;