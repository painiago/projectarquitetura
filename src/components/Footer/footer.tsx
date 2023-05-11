import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import './footer.scss'

function Footer (){
  return(
    <div className='containerfooter'>
      <div className='contentfooter'>
      <img src="../../img/logo.png" alt="" className='imglogo'/>
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