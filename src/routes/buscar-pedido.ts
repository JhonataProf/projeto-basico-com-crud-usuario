import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { BuscarPedidoController } from "../controllers/pedido/buscar-pedido";
import authorizeRoles from "../middlewares/authorize-roles";
import { authMiddleware } from "../middlewares";

export default (router: Router): void => {
    router.get("/pedidos/{id}", 
        authMiddleware,
        authorizeRoles(['Gerente']),
        adaptRoute(new BuscarPedidoController()));
};