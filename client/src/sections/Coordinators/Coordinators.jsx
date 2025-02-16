import './Coordinators.css';

const Coordinators = () => {
  const coordinators = [
    { id: 1, name: 'Name', role: 'Description' },
    { id: 2, name: 'Name', role: 'Description' },
  ];

  return (
    <section className="coordinators" style={{ position: 'relative', zIndex: 10 }}>
      <h2>Coordinators</h2>
      <div className="coordinator-list">
        {coordinators.map((coordinator) => (
          <div key={coordinator.id} className="coordinator-item">
            <h3>{coordinator.name}</h3>
            <p>{coordinator.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coordinators;