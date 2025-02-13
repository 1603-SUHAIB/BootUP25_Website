import './Memories.css';

const Memories = () => {
  const memories = [
    { id: 1, image: 'https://placehold.co/100' },
    { id: 2, image: 'https://placehold.co/100' },
    { id: 3, image: 'https://placehold.co/100' },
  ];

  return (
    <section className="memories">
      <h2>Memories</h2>
      <div className="memory-grid">
        {memories.map((memory) => (
          <div key={memory.id} className="memory-item">
            <img src={memory.image} alt={`Memory ${memory.id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memories;