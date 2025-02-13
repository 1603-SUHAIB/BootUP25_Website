import './Cards.css';

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;