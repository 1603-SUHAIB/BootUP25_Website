import './TitleSponsor.css';

const TitleSponsor = () => {
  return (
    <section className="title-sponsor" style={{ position: 'relative', zIndex: 10 }}>
      <h2 className="title-heading">Title Sponsor</h2>
      <div className="sponsor-logo">
        <img src="https://placehold.co/150" alt="Sponsor Logo" />
      </div>
    </section>
  );
};

export default TitleSponsor;