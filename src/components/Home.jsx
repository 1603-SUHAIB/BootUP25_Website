import React, { useEffect, useState } from "react";
import "./Home.css";
import videoBg from "../assets/video.mp4";

const Home = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 1500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="home">
      {/* Video Background Section */}
      <section className="video-section">
        <video autoPlay loop muted className="background-video">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/*}
        <div className="video-content">
          <h1>Welcome to BootUP 25</h1>
          <p>Innovate. Build. Grow.</p>
        </div>
        */}

        {/* Scroll Down Indicator */}
        <div className={`scroll-down ${isScrolling ? "hidden" : ""}`}>
          Scroll Down ↓
        </div>
      </section>

      {/* Placeholder for More Sections */}
      <section className="next-section">
        <h2>About Us</h2>
        <p>This is where your next section will go.</p>
      </section>
    </div>
  );
};

export default Home;
