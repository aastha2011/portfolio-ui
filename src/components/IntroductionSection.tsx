import React from 'react';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/aastha-dubey-2340281bb/', icon: 'bxl-linkedin' },
  { href: 'https://www.behance.net/aasthaadubeyy', icon: 'bxl-behance' },
  { href: 'https://dribbble.com/aasthaadubeyy', icon: 'bxl-dribbble' },
  { href: 'https://github.com/aastha2011', icon: 'bxl-github' },
];

const professions = [
  { icon: 'bx-palette', title: 'UI Designer' },
  { icon: 'bx-code-alt', title: 'Developer' },
  { icon: 'bx-camera', title: 'Photographer' },
  { icon: 'bx-pencil', title: 'Logo Designer' },
];

export const IntroductionSection = () => {
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h3>Hello, I am</h3>
        <h1>Aastha Dubey</h1>
        <p>
          UI Designer and Developer specialized in crafting captivating user
          experiences through seamless design and intuitive interfaces. Let's
          bring your digital vision to life!
        </p>

        <div className='social-media'>
          {socialLinks.map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>

        <a
          href='https://drive.google.com/file/d/1e9vH0PsZC_FlqvhZh4OFOB9NxbD2Ed00/view?usp=drivesdk'
          className='btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          Download CV
        </a>
      </div>

      <div className='profession-container'>
        <div className='profession-box'>
          {professions.map(({ icon, title }, index) => (
            <div
              key={title}
              className='profession'
              style={{ '--i': index } as React.CSSProperties}
            >
              <i className={`bx ${icon}`}></i>
              <h3>{title}</h3>
            </div>
          ))}
          <div className='circle'></div>
        </div>
        <div className='overlay'></div>
      </div>
    </section>
  );
};
