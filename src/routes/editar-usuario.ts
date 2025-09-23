import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import authMiddleware from "../middlewares/auth-middleware";
import EditarUsuarioController from "../controllers/usuario/editar-usuario";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
  router.put(
    "/users/:id",
    authMiddleware,
    authorizeRoles(['Gerente']),
    adaptRoute(new EditarUsuarioController())
  );
};
