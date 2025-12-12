import React from "react";
const aboutImages = [
  { id: 1, src: "/assets/images/featured1.png", alt: "Living room" },
  { id: 2, src: "/assets/images/featured2.png", alt: "Office room" },
  { id: 3, src: "/assets/images/featured3.png", alt: "Bedroom" },
];
function About() {
  return (
    <section className="about-section">
      <div className="about-content-container">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          repellat, laudantium, asperiores aspernatur nesciunt inventore non
          aperiam officia doloribus dicta quia necessitatibus tempora voluptates
          optio a autem nemo laborum minima.
        </p>
        <h4>Featured Projects</h4>
        <div className="grid-column-container">
          {aboutImages.map((image) => (
            <div key={image.id} className="grid-box">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
