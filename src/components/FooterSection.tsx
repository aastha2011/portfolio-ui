export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer'>
        <div className='footer-text'>
          <p>Copyright &copy; {currentYear} by Aastha | All rights Reserved</p>
        </div>
        <div className='footer-iconTop'>
          <a href='#home'><i className='bx bx-up-arrow-alt' ></i></a>
        </div>
       </footer>
    )
}