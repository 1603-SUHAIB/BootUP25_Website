import "./Sponsors.css";

const Sponsors = () => {
  const sponsors = [
    { id: 1, logo: "/sponsors/i1.png" },
    { id: 2, logo: "/sponsors/i1.png" },
    { id: 3, logo: "/sponsors/i1.png" },
    { id: 4, logo: "/sponsors/i1.png" },
    { id: 5, logo: "/sponsors/i1.png" },
    { id: 6, logo: "/sponsors/i1.png" },
    { id: 7, logo: "/sponsors/i1.png" },
    { id: 8, logo: "/sponsors/i1.png" },
    { id: 9, logo: "/sponsors/i1.png" },
  ];

  return (
    <section className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-marquee">
        <div className="sponsor-list">
          {sponsors.concat(sponsors).map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img src={sponsor.logo} alt={`Sponsor ${sponsor.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
