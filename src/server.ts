import express from 'express'
import { consumers } from 'stream';

const app = express()

const port = 3000

app.get('/', (request, response ) => {
  response.json({msg:"Fim da Aula!!!"})
});

app.listen(port, () => {
  console.log('Server Running!! 🚀');
});