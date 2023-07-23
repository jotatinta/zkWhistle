import './Header.styles.scss'
import TiLogo from '../../assets/images/TI-LOGO.png'
import SiiLogo from '../../assets/images/SII-LOGO.png'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='ssi-logo'><img src={SiiLogo} alt='Trasnparency Internacional'/></div>
      <div className='header-center-text'><h2>Internal Information System</h2>
      <span>Complaint platform against fraud and corruption</span></div>
      <div className='ti-logo'><img src={TiLogo} alt='Trasnparency Internacional'/></div>

    </div>)
}

export default Header