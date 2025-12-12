import React from "react";

function Services() {
  const servicesImages = [
    {
      id: 1,
      src: "/assets/images/services-first-col.png",
      alt: "Opis usługi 1",
    },
    {
      id: 2,
      src: "/assets/images/services-second-col.png",
      alt: "Opis usługi 2",
    },
    {
      id: 3,
      src: "/assets/images/services-third-col.png",
      alt: "Opis usługi 3",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h1>Crafting Your Vision</h1>
        <p>
          From initial concept to final spaces that inspire. Bringing your
          dreams to life with meticulous care.
        </p>
        <div className="services-grid-container">
          {servicesImages.map((image) => (
            <div key={image.id} className="services-grid-column">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
