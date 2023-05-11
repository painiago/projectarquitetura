import './projeto.scss'

function Projeto() {
  return (
    <div className='containerProjeto'  id="projects">
      <h1>PROJETOS</h1>
      <div className="containerSobre">
        <div className="grid">
          <div className="item">
            <img src="../../img/img1.jpg" alt="" className="img-fluid" />
            <h2>Personalização Interna</h2>
            <p>é uma das vantagens que a arquitetura pode oferecer. Com soluções criativas e inovadoras, é possível transformar espaços em ambientes únicos e personalizados, que atendam às necessidades e preferências dos clientes.</p>
          </div>
          <div className="item">
            <img src="../../img/img2.jpg" alt="" className="img-fluid" />
            <h2>Personalização Externa</h2>
            <p>é uma tendência crescente na arquitetura contemporânea, que busca criar edifícios e espaços exteriores que reflitam a identidade e o estilo de vida dos clientes. A personalização externa pode transformar espaços externos monótonos e pouco inspiradores em ambientes atraentes e acolhedores.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projeto;