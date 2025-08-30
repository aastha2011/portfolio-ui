const services = [
  {
    icon: 'bx bx-palette',
    title: 'Web Design',
    description:
      'Creative and responsive web designs tailored to your brand, ensuring visual appeal and a seamless user experience across all devices.',
  },
  {
    icon: 'bx bx-code-alt',
    title: 'Web Development',
    description:
      'Robust and scalable web development solutions built with modern technologies to bring your digital ideas to life.',
  },
  {
    icon: 'bx bxs-brush',
    title: 'Logo Design',
    description:
      'Unique and memorable logos that capture your brand identity and leave a lasting impression on your audience.',
  },
];

export const ServiceSection = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        My <span>Services</span>
      </h2>

      <div className="services-container">
        {services.map(({ icon, title, description }) => (
          <div className="services-box" key={title}>
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
