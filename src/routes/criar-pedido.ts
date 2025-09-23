import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { CriarPedidoController } from "../controllers/pedido/criar-pedido";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
    router.post("/pedidos/", 
        authMiddleware,
        authorizeRoles(['Gerente']),
        adaptRoute(new CriarPedidoController()));
};