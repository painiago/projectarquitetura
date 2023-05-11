import { Client, query as q } from 'faunadb';
import { client } from '../../services/fauna';

export function enviarDadosParaFaunaDB(nome: string, email: string, data: string, horario: string) {
  client.query(
    q.Create(
      q.Collection('Agendamentos'),
      { data: { nome, email, data, horario } }
    )
  )
    .then((ret) => console.log(ret))
    .catch((err) => console.log(err));
}
