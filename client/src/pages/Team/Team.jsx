import './Team.css';

const Team = () => {
  const coordinators = [
    { id: 1, name: 'Name', role: 'Description' },
    { id: 2, name: 'Name', role: 'Description' },
  ];

  return (
    <section className="coordinators">
      <h2>Meet the Team</h2>
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

export default Team;