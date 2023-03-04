import express, { response } from 'express';
import { Database } from './database';

const server = express()

const port = 3333

server.use(express.json());

//const dados: string[] = [];

const database = new Database();

server.get('/', (request, response) => {
const user = database.select('user')
response.json(user)
//response.json(dados);
// response.send("Hello World!")
});

//Parâmetro vindo do CLIENTE - REQUEST
//Parâmetro indo ao CLIENTE - RESPONSE



server.post('/', (request, response) => {
  const { name, email } = request.body;

const user = {
  id: '1',
  name: name,
  email,
}

database.insert('user', user);

  response.status(201).send();

  //response.json({msg: "SERVIDOR OK!"})
});




server.listen(port, () => {
  console.log(`Server Running - end: http://localhost:${port}`)
});