import { Router } from "express";
const routes = Router();

routes.get('/', (req, res)=>{
  res.sendStatus(200).send({ok:true})
})

export {routes};
