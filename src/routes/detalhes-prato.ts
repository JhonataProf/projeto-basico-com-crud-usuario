import { Router } from "express";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";
import adaptRoute from "../adapters/express-route-adapter";
import DetalhesPratoController from "../controllers/prato/detalhes-prato";

export default (router: Router): void => {
    router.get(
      "/pratos/:id",
      authMiddleware,
      authorizeRoles(['Cliente' ]),
      adaptRoute(new DetalhesPratoController())
    );
  };
  