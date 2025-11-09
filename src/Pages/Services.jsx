// Services.jsx
import React from "react";
import {
  Code,
  Smartphone,
  Wrench,
  Plug,
  Globe,
  ShoppingCart,
} from "lucide-react";
import "../css/services.css";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first designs that work seamlessly across all devices.",
    },
    {
      icon: Wrench,
      title: "Custom Frontend Solutions",
      description:
        "Tailored frontend solutions to meet your specific business needs.",
    },
    {
      icon: Plug,
      title: "API Integration",
      description:
        "Seamless integration with third-party APIs and backend services.",
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for your business.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Sites",
      description:
        "Full-featured online stores with secure payment integration.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Services</h2>
          <p className="services-subtitle">
            Helping startups and individuals grow through clean web development
          </p>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="service-icon-container">
                    <Icon className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button className="service-button">Learn More →</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
