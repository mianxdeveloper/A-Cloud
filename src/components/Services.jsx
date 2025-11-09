// Services.jsx
import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Wrench,
  Plug,
  Globe,
  ShoppingCart,
  X,
} from "lucide-react";
import "../css/services.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices.",
      detailedDescription:
        "I create responsive, high-performance web applications using React, Vue.js, and modern JavaScript. From single-page applications to complex enterprise solutions, I focus on clean code, optimal performance, and excellent user experience.",
      features: [
        "Custom React/Vue.js Applications",
        "Performance Optimization",
        "Progressive Web Apps",
        "Code Review & Best Practices",
      ],
      technologies: ["React", "Vue.js", "JavaScript", "TypeScript", "Next.js"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first designs that work seamlessly across all devices.",
      detailedDescription:
        "I specialize in creating mobile-first responsive designs that provide optimal viewing experience across all devices. Using CSS Grid, Flexbox, and modern layout techniques.",
      features: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Touch-Friendly Interfaces",
        "Performance Optimization",
      ],
      technologies: ["CSS3", "Tailwind", "SASS", "Bootstrap", "Media Queries"],
    },
    {
      icon: Wrench,
      title: "Custom Frontend Solutions",
      description:
        "Tailored frontend solutions to meet your specific business needs.",
      detailedDescription:
        "Need a unique solution? I build custom frontend architectures and components that solve specific business challenges and enhance user engagement.",
      features: [
        "Custom Component Libraries",
        "UI/UX Implementation",
        "State Management",
        "API Integration",
      ],
      technologies: [
        "Redux",
        "Context API",
        "Custom Hooks",
        "Component Libraries",
      ],
    },
    {
      icon: Plug,
      title: "API Integration",
      description:
        "Seamless integration with third-party APIs and backend services.",
      detailedDescription:
        "I connect your frontend with various APIs and services, ensuring smooth data flow, error handling, and optimal performance for real-time applications.",
      features: [
        "REST API Integration",
        "GraphQL Implementation",
        "WebSocket Connections",
        "Error Handling",
      ],
      technologies: ["REST APIs", "GraphQL", "Axios", "WebSockets", "JSON"],
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for your business.",
      detailedDescription:
        "From custom WordPress themes to bespoke plugins, I create scalable WordPress solutions that are easy to manage and optimized for performance.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Integration",
        "Performance Optimization",
      ],
      technologies: ["PHP", "WordPress", "WooCommerce", "MySQL", "REST API"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Sites",
      description:
        "Full-featured online stores with secure payment integration.",
      detailedDescription:
        "I build secure, scalable e-commerce solutions with seamless payment integration, inventory management, and excellent user experience for online shopping.",
      features: [
        "Payment Gateway Integration",
        "Shopping Cart Systems",
        "Inventory Management",
        "Order Processing",
      ],
      technologies: ["WooCommerce", "Stripe", "PayPal", "React E-commerce"],
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  const scrollToContact = () => {
    closeModal();

    // Wait for modal to close before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 350); // Slightly longer than modal close animation
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  return (
    <>
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-content">
            <h2 className="services-title">Services</h2>
            <p className="services-subtitle">
              Helping startups and individuals grow through clean web
              development
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
                    <button
                      className="service-button"
                      onClick={() => openModal(service)}
                    >
                      Learn More →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedService && (
        <div
          className={`service-modal-overlay ${
            isModalOpen ? "modal-open" : "modal-closing"
          }`}
          onClick={closeModal}
        >
          <div
            className="service-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-container">
                {React.createElement(selectedService.icon, {
                  className: "modal-icon",
                })}
              </div>
              <div>
                <h2 className="modal-title">{selectedService.title}</h2>
                <p className="modal-subtitle">{selectedService.description}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="section-title">Overview</h3>
                <p className="modal-description">
                  {selectedService.detailedDescription}
                </p>
              </div>

              <div className="modal-section">
                <h3 className="section-title">What I Offer</h3>
                <div className="features-grid">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-dot"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="section-title">Technologies & Tools</h3>
                <div className="technologies-list">
                  {selectedService.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={closeModal}>
                Got It
              </button>
              <button className="btn-secondary" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
