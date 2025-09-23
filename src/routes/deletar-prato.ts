import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import DeletarPratoController from "../controllers/prato/deletar-prato";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.delete("/pratos/:id", 
    authMiddleware,
    authorizeRoles(['Gerente']),
    adaptRoute(new DeletarPratoController()));
};
