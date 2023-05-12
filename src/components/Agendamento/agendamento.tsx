import React, { useState } from 'react';
import './agendamento.scss';
import axios from 'axios';

// importação das imagens
import imgfrontal from '/public/img/imgfrontal.jpg';

function Agendamento() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dataError, setDataError] = useState('');
  const [horarioError, setHorarioError] = useState('');

  function handleSubmit(event: { preventDefault: () => void; }) {

    event.preventDefault();
    let formIsValid = true;

      // validar nome
      if(nome.trim() === ''){
        setNomeError('O campo nome é obrigatorio');
        formIsValid = false;
      }else{
        setNomeError(''); 
         }

      // validar email
      if(email.trim() === ''){
        setEmailError('O campo email é obrigatorio');
      }else if (!/\S+@\S+\.\S+/.test(email)){
        formIsValid = false;
      } else {
        setEmailError('');
      }

      // validar data

      if(data.trim() === ''){
        setDataError('O campo data é obrigatorio');
        formIsValid = false;
      } else{
        setDataError('');
      }

      // validar horario

      if(horario.trim() === ''){
        setHorarioError('O campo horário é obrigatório');
      }else{
        setHorario('');
      }


      if (formIsValid) {
    axios.post('/api/enviarDadosParaFaunaDB', { nome, email, data, horario })
      .then(() => {
        // console.log('Dados enviados para o FaunaDB com sucesso!');
        setNome('');
        setEmail('');
        setData('');
        setHorario('');
      })
      .catch((error) => {
        // console.error('Erro ao enviar dados para o FaunaDB:', error);
      });
  }
  }


  return (
    <div className='containeragendamento' id="itemcontato">
      <div className='contentagentamento'>
        <div className='item-agendamento'>
          <img src={imgfrontal} alt="" />
        </div>
        <div className='item-agendamento' >
        <div className='agendamento-form'>
          <h1>ACREDITAMOS</h1>
          <p>que cada projeto tem alma, e por isso merece ser tratado com vigor e entusiasmo. Meu trabalho é trazer brilho aos olhos das pessoas através do melhor que a arquitetura pode oferecer. Poucas coisas nos traduzem tanto como nosso jeito de morar.</p>
           {showForm ? (
             <form onSubmit={handleSubmit}>
              <h2> Agendamento </h2>
             <label htmlFor='nome'>Nome</label>
             <input type='text' id='nome' name='nome' value={nome} onChange={(event) => setNome(event.target.value)} />
             {nomeError && <div className='error'>{nomeError}</div>}
             
             <label htmlFor='email'>Email</label>
             <input type='email' id='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />
             {emailError && <div className='error'>{emailError}</div>}
            
             <label htmlFor='data'>Data</label>
             <input type='date' id='data' name='data' value={data} onChange={(event) => setData(event.target.value)} />
             {dataError && <div className='error'>{dataError}</div>}
            
             <label htmlFor='horario'>Horário</label>
             <input type='time' id='horario' name='horario' value={horario} onChange={(event) => setHorario(event.target.value)} />
              {horarioError && <div className='error'>{horarioError}</div>}
             <button type='submit'>Agendar</button>
           </form>
           ) : (
             <button className='btn' onClick={toggleForm}>Agende uma consulta</button>
           )}
        </div>
      </div>
      </div>
    </div> 
  );
}

export default Agendamento;

