import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import fs from 'fs';
import path from 'path';

const file = fs.readFileSync(path.join(__dirname, './swagger.yaml'), 'utf8');
const swaggerDocument = YAML.parse(file);

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5010, () => {
  console.log('Server running on port 5010');
});
