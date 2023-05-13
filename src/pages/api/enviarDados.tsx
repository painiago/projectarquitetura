import { Client, query as q } from 'faunadb';
import { fauna } from '../../services/fauna';

export function enviarDados(nome: string, email: string, data: string, horario: string) {
  fauna.query(
    q.Create(
      q.Collection('agendamento'),
      { data: { nome, email, data, horario } }
    )
  )
  
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));
}

