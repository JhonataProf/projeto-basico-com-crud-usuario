import { Router } from "express";
import { CriarPratoController } from "../controllers/prato/criar-prato";
import adaptRoute from "../adapters/express-route-adapter";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.post("/pratos", 
    authMiddleware,
    authorizeRoles(['Gerente']),
    adaptRoute(new CriarPratoController()));
};
