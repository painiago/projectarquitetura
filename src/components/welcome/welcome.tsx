import './welcome.scss';

// importação das imagens
import capavista from '/public/img/capavista.jpg';

function Welcome() {
  return (
    <section id="welcome-section" className="welcomesection" style={{backgroundImage: `url(${capavista})`}}>
      <div className="container text" id='text'>
        <span>
          <h1>Ana Souza Silva da Cruz</h1>
        </span>
        <p className="web"> Arquiteta</p>
        <p className="subtitle">Construir, criar e ser capaz de traduzir
          um desejo é uma arte!</p>
      </div>
    </section>
  );
}
export default Welcome;