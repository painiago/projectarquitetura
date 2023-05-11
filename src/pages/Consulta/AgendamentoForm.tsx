import React, { useState } from 'react';
import './AgendamentoForms.scss';

import axios from 'axios';


function AgendamentoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    axios.post('/api/faunadb', { nome, email, data, horario })
      .then(() => {
        console.log('Dados enviados para o FaunaDB com sucesso!');
        setNome('');
        setEmail('');
        setData('');
        setHorario('');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados para o FaunaDB:', error);
      });
  }

  return (
    <div className='agendamento-form'>
      <h2>Agendamento</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' name='nome' value={nome} onChange={(event) => setNome(event.target.value)} />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor='data'>Data</label>
        <input type='date' id='data' name='data' value={data} onChange={(event) => setData(event.target.value)} />

        <label htmlFor='horario'>Horário</label>
        <input type='time' id='horario' name='horario' value={horario} onChange={(event) => setHorario(event.target.value)} />

        <button type='submit'>Agendar</button>
      </form>
    </div>
  );
}

export default AgendamentoForm;
