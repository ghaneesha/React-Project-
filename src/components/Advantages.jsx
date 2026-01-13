import "./Advantages.css";

export default function Advantages() {
  const advantages = [
    {
      id: 1,
      icon: "🚚",
      title: "Express Delivery",
      description: "Ships in 24 Hours"
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Brand Warranty",
      description: "100% Original products"
    },
    {
      id: 3,
      icon: "🎁",
      title: "Exciting Deals",
      description: "On all prepaid orders"
    },
    {
      id: 4,
      icon: "💳",
      title: "Secure Payments",
      description: "SSL / Secure certificate"
    }
  ];

  return (
    <div className="advantages-section">
      <h2 className="section-title">Our Advantages</h2>
      
      <div className="advantages-grid">
        {advantages.map((advantage) => (
          <div key={advantage.id} className="advantage-card">
            <div className="advantage-icon">{advantage.icon}</div>
            <div className="advantage-content">
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}