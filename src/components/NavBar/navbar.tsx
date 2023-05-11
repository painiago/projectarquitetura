
import { Link } from 'react-router-dom';
import  './navbar.scss';


function NavBar (){
  return (
    <nav className="navbar">
      <ul className="navlist">
        <img src="../../img/logo.png" alt="" className='imglogo'/>
        <li>
          <a href="#sobre" id='texto'>Sobre</a>
        </li>
        <li>
        <a href="#projects" id='texto'>Projetos</a>
        </li>
        <li>
          <a href="#itemcontato" id='texto'>Contato</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;


