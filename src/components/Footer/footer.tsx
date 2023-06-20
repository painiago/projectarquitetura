import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import './footer.scss'

// importação das imagens
import logo from '/public/img/logo.png';
import ScrollToTopButton from '../ScrollBtn/ScrollToTopButton';

function Footer (){
  return(
    <div className='containerfooter'>
      <ScrollToTopButton/>
      <div className='contentfooter'>
      <img src={logo} alt="" className='imglogo'/>
      <div className='containeremail'>
      <h2>EMAIL - CONTATO</h2>
      <p>anasouzasilvacruz@gmail.com.br</p>
      </div>
      <div>
      <div className='item-footer'>
        <h2>REDES SOCIAIS</h2>
      </div>
      <div className='social-icons'>
        <FontAwesomeIcon icon={faInstagram} className='iconIns'/>
        <FontAwesomeIcon icon={faTiktok}  className='iconTik'/>
        <FontAwesomeIcon icon={faFacebookSquare}  className='iconFace'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;