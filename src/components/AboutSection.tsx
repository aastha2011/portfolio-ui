import aboutImage from '../images/about.png';

export const AboutSection = () => {
    return (
      <section className='about' id='about'>
      <div className='about-image'>
        <img src={aboutImage} alt='' />
      </div>
      <div className='about-content'>
        <h2 className='heading'>About <span>Me</span></h2>
        <h3>Hi, I'm Here to Help In Your Next Project!</h3>
        <p>
          With a passion for user-centric design and a knack for creating
          seamless web experiences, I am a UI designer and web developer. I
          strive to combine aesthetic appeal with functionality, crafting
          intuitive interfaces that captivate users. Welcome to my portfolio,
          where innovation meets user satisfaction.
        </p>
        <a href='#' className='btn'>Read More</a>
      </div>
    </section>
    )
}