import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import EditarPratoController from "../controllers/prato/editar-prato";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
     router.put("/pratos/:id", 
          authMiddleware,
          authorizeRoles(['Gerente', 'Funcionario']),
          adaptRoute(new EditarPratoController()));
};