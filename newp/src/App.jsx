import "./App.css";

const cars = [
  {
    name: "BMW M4",
    price: "₹1.48 Cr",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mercedes AMG",
    price: "₹2.45 Cr",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Audi R8",
    price: "₹2.30 Cr",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AUTO<span>HUB</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">Book a Test Drive</button>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">PREMIUM CAR SHOWROOM</p>

          <h1>
            Find Your
            <br />
            <span>Dream Car.</span>
          </h1>

          <p className="hero-text">
            Discover premium cars from the world's leading brands.
            Drive your dream car today.
          </p>

          <div className="hero-buttons">
            <a href="#cars" className="primary-btn">
              Explore Cars
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="cars-section" id="cars">
        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Featured Cars</h2>
        </div>

        <div className="car-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.name}>
              <img src={car.image} alt={car.name} />

              <div className="car-info">
                <h3>{car.name}</h3>
                <p className="price">{car.price}</p>

                <div className="car-details">
                  <span>Automatic</span>
                  <span>Petrol</span>
                  <span>2026</span>
                </div>

                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="small-title">WHY AUTOHUB?</p>
          <h2>Your Journey Starts Here.</h2>
        </div>

        <p>
          At AutoHub, we make buying your dream car simple and enjoyable.
          Explore our collection of premium vehicles and experience
          outstanding customer service.
        </p>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Ready to Find Your Car?</h2>
        <p>Visit our showroom or contact us for a test drive.</p>

        <button className="primary-btn">Contact Us</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">AUTO<span>HUB</span></div>
        <p>© 2026 AutoHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
