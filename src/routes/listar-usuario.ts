import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import ListarUsuarioController from "../controllers/usuario/listar-usuario";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.get(
    "/users{/:id}",
    authMiddleware,
    authorizeRoles(['Gerente', 'Funcionario']),
    adaptRoute(new ListarUsuarioController())
  );
};
