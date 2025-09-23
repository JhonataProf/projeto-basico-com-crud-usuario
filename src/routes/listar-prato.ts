import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import ListarPratoController from "../controllers/prato/listar-prato";
import authorizeRoles from "../middlewares/authorize-roles";
import { authMiddleware } from "../middlewares";

export default (router: Router): void => {
  router.get("/pratos",
    authMiddleware,
    authorizeRoles(['Gerente', 'Funcionario', 'Cliente']),
    adaptRoute(new ListarPratoController()));
};
