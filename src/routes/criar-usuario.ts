import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import CriarUsuarioController from "../controllers/usuario/criar-usuario";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.post("/users", 
    authMiddleware,
    authorizeRoles(['Gerente']),
    adaptRoute(new CriarUsuarioController()));
};
