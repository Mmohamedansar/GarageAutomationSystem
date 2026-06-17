import Navbar from "../components/Navebar";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const images = [
    "/images/banner image.png",
    "/images/banner image 2.jpg",
    "/images/banner image 3.jpg",
    "/images/banner image 4.jpg",
    "/images/banner image 5.jpg",
    "/images/banner image 6.jpg",
    "/images/banner image 7.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero-modern">
        <div className="hero-left">
            <img class="mainpic" src="Screenshot 2026-06-15 174852.png" ></img>
          <h1>DriveCare</h1>
          <h2>Unleash the Service Experience</h2>

          <p>
            A modern garage dedicated to providing reliable vehicle service and maintenance.Skilled technicians ensure accurate diagnosis and high-quality workmanship for every job.The garage is equipped with advanced tools to handle both minor and major repairs efficiently.Book the Service for smooth and safe Automotive Experience.

          </p>

          <div className="hero-buttons">
            <button className="primary">Book Service</button>
            <button className="secondary">Explore Services</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={images[current]}
            alt="Garage"
            className="carousel-image"
          />
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Smart Auto Care Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc" />
            <h3>Schedule Service</h3>
            <p>Book your service in seconds with smart scheduling.</p>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" />
            <h3>Live Tracking</h3>
            <p>Track your vehicle service in real-time updates.</p>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1581091870622-1e7b3c3a8a55" />
            <h3>Connnect With Expert</h3>
            <p>Communicate directly with trusted mechanics.</p>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" />
            <h3>Vehicle Report</h3>
            <p>Get complete health report of your vehicle anytime.</p>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e" />
            <h3>Pickup & Drop</h3>
            <p>We collect and deliver your vehicle safely.</p>
          </div>

          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2" />
            <h3>Service History</h3>
            <p>Access full maintenance records anytime.</p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;