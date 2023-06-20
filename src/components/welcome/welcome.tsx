import { faInstagram, faTiktok, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './welcome.scss';

// importação das imagens
import capavista from '/public/img/capavista.jpg';

function Welcome() {
  return (
    <section id="welcome-section" className="welcomesection" style={{backgroundImage: `url(${capavista})`}}>
      <div className="text" id='text'>
        <div className='containerSociais'>
          <span>
            <h1>Ana Souza Silva da Cruz</h1>
          </span>
          <p className="web"> Arquiteta</p>
          <p className="subtitle">Construir, criar e ser capaz de traduzir
            um desejo é uma arte!</p>
        </div>
        <div className='social-iconss'>
            <FontAwesomeIcon icon={faInstagram} className='iconIns'/>
            <FontAwesomeIcon icon={faTiktok}  className='iconTik'/>
            <FontAwesomeIcon icon={faFacebookSquare}  className='iconFace'/>
         </div>
      </div>
    </section>
  );
}
export default Welcome;