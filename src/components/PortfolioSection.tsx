import FurnifyImg from '../images/Furnify.jpg';
import FoodonationImg from '../images/Foodonation.jpg';
import SettleSpaceImg from '../images/SettleSpace.jpg';
import TravelEaseImg from '../images/TravelEase.jpg';
import DashBoardImg from '../images/DashBoard.jpg';
import NFCDashboardImg from '../images/NFC-Dashboard.jpg';

const projects = [
  {
    img: FurnifyImg,
    title: 'Web Design',
    description: 'I created a stunning website for a furniture store.',
    link: 'https://www.behance.net/gallery/182718551/Furnify',
  },
  {
    img: FoodonationImg,
    title: 'Web Design',
    description: 'I created a stunning website for donating food.',
    link: 'https://www.behance.net/gallery/182275907/Foodonation-food-donating-application',
  },
  {
    img: SettleSpaceImg,
    title: 'Web Design',
    description: 'I created a stunning website for rental houses.',
    link: 'https://www.behance.net/gallery/178171245/Settle-Space-UIUX-Case-Study',
  },
  {
    img: TravelEaseImg,
    title: 'Web Design',
    description: 'I created a stunning website for travellers.',
    link: 'https://www.behance.net/gallery/175539645/Travel-Ease(Travelling-Application-UI-design)',
  },
  {
    img: DashBoardImg,
    title: 'Web Design',
    description: 'I created a stunning dashboard for student performance tracker.',
    link: 'https://www.behance.net/gallery/171311281/User-Dashborad',
  },
  {
    img: NFCDashboardImg,
    title: 'Web Design',
    description: 'I created a dashboard for tracking the security.',
    link: 'https://www.behance.net/gallery/171305461/NFC-tracker-management',
  },
];

export const PortfolioSection = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='heading'>
        Latest <span>Projects</span>
      </h2>
      <div className='portfolio-container'>
        {projects.map(({ img, title, description, link }, index) => (
          <div className='portfolio-box' key={index}>
            <img src={img} alt={title} />
            <div className='portfolio-layer'>
              <h4>{title}</h4>
              <p>{description}</p>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <i className='bx bx-link-external'></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
