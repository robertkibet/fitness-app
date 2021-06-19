import 'module-alias/register';
import express from 'express';
import * as doteEnv from 'dotenv'
import mysql from 'mysql';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import { routes } from '@app/routes';

const app = express();

doteEnv.config();

const port = process.env.PORT || 5000;

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.AUTH0_JWKS_URI
}),
audience: process.env.AUTH0_AUDIENCE,
issuer: process.env.AUTH0_ISSUER,
algorithms: ['RS256']
});

app.use(jwtCheck);

const databaseCon = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

databaseCon.connect((err:Error)=> {
  if (err) throw err;
  console.log("Database Connected OK!");
});


app.use('/', routes);
app.listen(port, ()=>{
  console.log(`App is Live:::::::PORT ${port}`)
})